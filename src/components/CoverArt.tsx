/**
 * Line-art covers for the case studies that have no photographic cover.
 * Shapes are taken verbatim from the approved new-covers.html; the gold is
 * wired to the site's --accent token via currentColor instead of a hard-coded
 * hex so it stays in step with the rest of the palette.
 */

export type CoverArtKey =
  | "garnet"
  | "neuromonics"
  | "adam-smith"
  | "alt-ventures"
  | "vitalis";

const shapes: Record<CoverArtKey, JSX.Element> = {
  garnet: (
    <>
      <path d="M120 66 L180 66 L210 100 L150 156 L90 100 Z" stroke="currentColor" strokeWidth="1" opacity="0.9" />
      <path d="M90 100 L210 100" stroke="currentColor" strokeWidth="0.7" opacity="0.5" />
      <path d="M120 66 L150 156" stroke="currentColor" strokeWidth="0.7" opacity="0.5" />
      <path d="M180 66 L150 156" stroke="currentColor" strokeWidth="0.7" opacity="0.5" />
      <path d="M120 66 L150 100 L180 66" stroke="currentColor" strokeWidth="0.7" opacity="0.55" />
      <path d="M150 66 L150 100" stroke="currentColor" strokeWidth="0.7" opacity="0.4" />
    </>
  ),
  neuromonics: (
    <>
      <path d="M112 66 A34 34 0 0 1 112 134" stroke="currentColor" strokeWidth="1" opacity="0.85" />
      <path d="M112 42 A58 58 0 0 1 112 158" stroke="currentColor" strokeWidth="0.85" opacity="0.55" />
      <path d="M112 20 A80 80 0 0 1 112 180" stroke="currentColor" strokeWidth="0.75" opacity="0.35" />
      <circle cx="112" cy="100" r="3.5" fill="currentColor" />
      <path d="M168 100 L180 84 L191 116 L202 88 L213 112 L224 100" stroke="currentColor" strokeWidth="1" opacity="0.8" />
    </>
  ),
  "adam-smith": (
    <>
      <path d="M150 100 L150 48" stroke="currentColor" strokeWidth="0.7" opacity="0.5" />
      <path d="M150 100 L210 66" stroke="currentColor" strokeWidth="0.7" opacity="0.5" />
      <path d="M150 100 L210 134" stroke="currentColor" strokeWidth="0.7" opacity="0.5" />
      <path d="M150 100 L150 152" stroke="currentColor" strokeWidth="0.7" opacity="0.5" />
      <path d="M150 100 L90 134" stroke="currentColor" strokeWidth="0.7" opacity="0.5" />
      <path d="M150 100 L90 66" stroke="currentColor" strokeWidth="0.7" opacity="0.5" />
      <circle cx="150" cy="100" r="7" fill="currentColor" opacity="0.9" />
      <circle cx="150" cy="48" r="4" stroke="currentColor" strokeWidth="1" />
      <circle cx="210" cy="66" r="4" stroke="currentColor" strokeWidth="1" />
      <circle cx="210" cy="134" r="4" stroke="currentColor" strokeWidth="1" />
      <circle cx="150" cy="152" r="4" stroke="currentColor" strokeWidth="1" />
      <circle cx="90" cy="134" r="4" stroke="currentColor" strokeWidth="1" />
      <circle cx="90" cy="66" r="4" stroke="currentColor" strokeWidth="1" />
    </>
  ),
  "alt-ventures": (
    <>
      <path d="M78 100 L150 58" stroke="currentColor" strokeWidth="0.7" opacity="0.5" />
      <path d="M78 100 L162 92" stroke="currentColor" strokeWidth="0.7" opacity="0.5" />
      <path d="M78 100 L168 124" stroke="currentColor" strokeWidth="0.7" opacity="0.5" />
      <path d="M78 100 L150 150" stroke="currentColor" strokeWidth="0.7" opacity="0.5" />
      <path d="M162 92 L214 74" stroke="currentColor" strokeWidth="0.7" opacity="0.4" />
      <path d="M168 124 L220 132" stroke="currentColor" strokeWidth="0.7" opacity="0.4" />
      <circle cx="78" cy="100" r="7" fill="currentColor" opacity="0.9" />
      <circle cx="150" cy="58" r="4" stroke="currentColor" strokeWidth="1" />
      <circle cx="162" cy="92" r="4" stroke="currentColor" strokeWidth="1" />
      <circle cx="168" cy="124" r="4" stroke="currentColor" strokeWidth="1" />
      <circle cx="150" cy="150" r="4" stroke="currentColor" strokeWidth="1" />
      <circle cx="214" cy="74" r="3" stroke="currentColor" strokeWidth="0.9" />
      <circle cx="220" cy="132" r="3" stroke="currentColor" strokeWidth="0.9" />
    </>
  ),
  vitalis: (
    <>
      <path d="M150 176 C146 148 153 122 150 96 C148 72 150 56 150 38" stroke="currentColor" strokeWidth="1" opacity="0.9" />
      <path d="M149 146 Q120 120 98 128 Q118 152 149 146" stroke="currentColor" strokeWidth="1" opacity="0.85" />
      <path d="M149 146 Q124 138 98 128" stroke="currentColor" strokeWidth="0.7" opacity="0.45" />
      <path d="M151 128 Q182 102 204 110 Q182 134 151 128" stroke="currentColor" strokeWidth="1" opacity="0.85" />
      <path d="M151 128 Q178 120 204 110" stroke="currentColor" strokeWidth="0.7" opacity="0.45" />
      <path d="M149 102 Q126 80 110 86 Q128 106 149 102" stroke="currentColor" strokeWidth="0.85" opacity="0.7" />
      <path d="M149 102 Q128 95 110 86" stroke="currentColor" strokeWidth="0.7" opacity="0.4" />
      <path d="M151 84 Q174 62 190 68 Q172 88 151 84" stroke="currentColor" strokeWidth="0.85" opacity="0.7" />
      <path d="M151 84 Q172 77 190 68" stroke="currentColor" strokeWidth="0.7" opacity="0.4" />
      <path d="M150 58 Q138 44 142 32 Q152 40 150 58" stroke="currentColor" strokeWidth="0.75" opacity="0.5" />
      <path d="M150 58 Q162 44 158 32 Q148 40 150 58" stroke="currentColor" strokeWidth="0.75" opacity="0.5" />
      <circle cx="150" cy="28" r="3.5" fill="currentColor" opacity="0.9" />
    </>
  ),
};

const CoverArt = ({ shape, className = "" }: { shape: CoverArtKey; className?: string }) => (
  <svg
    viewBox="0 0 300 200"
    fill="none"
    role="presentation"
    preserveAspectRatio="xMidYMid meet"
    className={`w-full h-full text-accent ${className}`}
  >
    {shapes[shape]}
  </svg>
);

export default CoverArt;
