

## Blog with Contentful CMS Integration

### Overview
Add a blog section powered by Contentful CMS, so you can create and manage blog posts from the Contentful dashboard and have them appear on your site automatically.

### Steps

1. **Connect Contentful** -- Link your Contentful account to this project using the Lovable connector. This provides the API credentials needed to fetch content.

2. **Enable Lovable Cloud** -- Required for the Contentful connector secrets to be available in Supabase Edge Functions.

3. **Create Contentful content model** -- In your Contentful dashboard, create a "Blog Post" content type with fields like title, slug, body (rich text), featured image, published date, and author.

4. **Create Edge Function** -- Build a `contentful-blog` Supabase Edge Function that fetches blog posts from the Contentful API via the connector gateway and returns them to the frontend.

5. **Build Blog listing page** (`src/pages/Blog.tsx`) -- A page showing all blog posts in a list, matching your site's minimal aesthetic (Orbitron font, clean layout). Each post shows title, date, and excerpt.

6. **Build Blog post page** (`src/pages/BlogPost.tsx`) -- Individual post page fetched by slug, rendering Contentful rich text content.

7. **Add routing** -- Add `/blog` and `/blog/:slug` routes to `App.tsx`.

8. **Add Blog to navigation** -- Add a "Blog" link to the footer nav in `Layout.tsx`.

### Technical Details

- **Data flow**: Frontend -> Supabase Edge Function -> Contentful Gateway -> Contentful API
- **Packages**: `@contentful/rich-text-react-renderer` and `@contentful/rich-text-types` for rendering rich text
- **Gateway pattern**: Edge function uses `https://connector-gateway.lovable.dev/contentful/spaces/{spaceId}/entries` with `LOVABLE_API_KEY` and `CONTENTFUL_API_KEY` headers
- **Content fetching**: Uses `@tanstack/react-query` (already installed) for client-side caching and loading states
- All configuration lives in the codebase -- no manual env setup needed beyond the initial Contentful connection

