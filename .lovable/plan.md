## Goal

Replace the `bakar@millenium.works` mailto link on the Contact page with a small form (Email, Name, "What are we building?") and store submissions in the backend so you can review them as admin.

## 1. Frontend — Contact form

Update `src/pages/Contact.tsx`:
- Remove the email address.
- Add a minimal form matching the editorial style (hairline borders, serif headline, no fancy inputs):
  - **Name** — text, required, max 100
  - **Email** — email, required, max 255
  - **What are we building?** — textarea, required, max 2000
- Client-side validation with `zod` + react-hook-form (already common in shadcn projects).
- Submit button shows loading state; on success swaps form for a short serif "Thanks — we'll be in touch." confirmation. On error, shows inline error via `sonner` toast.
- No email field stored in localStorage / no analytics tracking of content.

## 2. Backend — store submissions

New table `public.contact_submissions`:
- `name` text
- `email` text
- `message` text
- `created_at` timestamptz default now()

RLS:
- **INSERT**: allowed for `anon` + `authenticated` (anyone can submit).
- **SELECT / UPDATE / DELETE**: blocked for everyone (no client read). You'll read via the admin route below using a service-role edge function, or directly in the backend dashboard.

The form writes directly via the Supabase client (`supabase.from('contact_submissions').insert(...)`) — no edge function needed for submission, since insert-only with RLS is safe and rate-limited by the platform.

## 3. Admin — how you'll see submissions

Two options, you pick:

**Option A — Backend dashboard only (simplest, recommended)**
You view submissions directly in the Lovable Cloud backend table viewer. Zero extra code. Newest first, exportable to CSV.

**Option B — In-app `/admin` page**
- Add `/admin` route showing a table of submissions (name, email, message, date), newest first.
- Protected by email/password auth. Only emails you whitelist (a `user_roles` table with `admin` role) can view.
- Requires: auth setup (sign-in page), `user_roles` table + `has_role()` function, an edge function `get-contact-submissions` that uses service role to read the table.
- Lets you check on mobile without opening the backend dashboard.

I'd default to **Option A** unless you want the in-app admin.

## Technical details

- Validation schema (zod) shared shape; server only relies on RLS + column types (text length capped at DB level via `check` constraints).
- `created_at` indexed for ordering.
- No PII logging in console.
- Form uses semantic tokens (`border-border`, `text-foreground`, `bg-background`) — no hardcoded colors.

## Out of scope (unless you ask)

- Email notification to you when a new submission comes in (would need Resend + an edge function — happy to add).
- Spam protection (Turnstile / honeypot) — can add if you start getting noise.
- Editing/deleting submissions from the admin UI.

## Open question

Option A (backend dashboard) or Option B (in-app `/admin` with login)? And do you want an email notification when someone submits?
