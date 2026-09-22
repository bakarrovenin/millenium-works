/**
 * Line-art covers for the case studies that have no photographic cover.
 * Shapes are taken verbatim from the approved new-covers.html; the gold is
 * wired to the site's --accent token via currentColor instead of a hard-coded
 * hex so it stays in step with the rest of the palette.
 */

export type CoverArtKey =
  | "assay"
  | "garnet"
  | "neuromonics"
  | "adam-smith"
  | "alt-ventures"
  | "vitalis"
  | "psx"
  | "transcend";

const shapes: Record<CoverArtKey, JSX.Element> = {
  assay: (
    <>
      <path d="M150 34 L150 166" stroke="currentColor" strokeWidth="1" opacity="0.9" />
      <path d="M142 34 L158 34" stroke="currentColor" strokeWidth="0.7" opacity="0.4" />
      <path d="M142 166 L158 166" stroke="currentColor" strokeWidth="0.7" opacity="0.4" />
      <path d="M80 68 L146 68" stroke="currentColor" strokeWidth="0.7" opacity="0.5" />
      <path d="M80 100 L144 100" stroke="currentColor" strokeWidth="0.7" opacity="0.5" />
      <path d="M80 132 L146 132" stroke="currentColor" strokeWidth="0.7" opacity="0.5" />
      <circle cx="76" cy="68" r="4" stroke="currentColor" strokeWidth="1" />
      <circle cx="76" cy="100" r="4" stroke="currentColor" strokeWidth="1" />
      <circle cx="76" cy="132" r="4" stroke="currentColor" strokeWidth="1" />
      <path d="M154 68 L220 68" stroke="currentColor" strokeWidth="0.7" opacity="0.5" />
      <path d="M154 132 L220 132" stroke="currentColor" strokeWidth="0.7" opacity="0.5" />
      <circle cx="224" cy="68" r="4" fill="currentColor" opacity="0.9" />
      <circle cx="224" cy="132" r="4" fill="currentColor" opacity="0.9" />
      <path d="M144 94 L156 106" stroke="currentColor" strokeWidth="1" opacity="0.9" />
      <path d="M156 94 L144 106" stroke="currentColor" strokeWidth="1" opacity="0.9" />
    </>
  ),
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
  psx: (
    <>
      <path d="M72 160 L228 160" stroke="currentColor" strokeWidth="0.7" opacity="0.4" />
      <path d="M96 114 L96 150" stroke="currentColor" strokeWidth="0.7" opacity="0.5" />
      <path d="M90 124 L102 124 L102 142 L90 142 Z" stroke="currentColor" strokeWidth="1" opacity="0.85" />
      <path d="M126 100 L126 140" stroke="currentColor" strokeWidth="0.7" opacity="0.5" />
      <path d="M120 108 L132 108 L132 130 L120 130 Z" stroke="currentColor" strokeWidth="1" opacity="0.85" />
      <path d="M156 92 L156 128" stroke="currentColor" strokeWidth="0.7" opacity="0.5" />
      <path d="M150 104 L162 104 L162 120 L150 120 Z" stroke="currentColor" strokeWidth="1" opacity="0.85" />
      <path d="M186 70 L186 114" stroke="currentColor" strokeWidth="0.7" opacity="0.5" />
      <path d="M180 80 L192 80 L192 104 L180 104 Z" stroke="currentColor" strokeWidth="1" opacity="0.85" />
      <path d="M96 124 L126 108 L156 104 L186 80 L220 58" stroke="currentColor" strokeWidth="0.7" opacity="0.45" />
      <circle cx="224" cy="56" r="4" fill="currentColor" opacity="0.9" />
      <circle cx="224" cy="56" r="10" stroke="currentColor" strokeWidth="0.7" opacity="0.4" />
    </>
  ),
  transcend: (
    <>
      <path d="M66 52 L234 52 L234 148 L66 148 Z" stroke="currentColor" strokeWidth="0.7" opacity="0.5" />
      <path d="M78 44 L86 44 M100 44 L108 44 M122 44 L130 44 M144 44 L152 44 M166 44 L174 44 M188 44 L196 44 M210 44 L218 44" stroke="currentColor" strokeWidth="0.7" opacity="0.4" />
      <path d="M78 156 L86 156 M100 156 L108 156 M122 156 L130 156 M144 156 L152 156 M166 156 L174 156 M188 156 L196 156 M210 156 L218 156" stroke="currentColor" strokeWidth="0.7" opacity="0.4" />
      <path d="M66 132 L234 132" stroke="currentColor" strokeWidth="0.7" opacity="0.45" />
      <path d="M118 132 L118 96 A32 32 0 0 1 182 96 L182 132" stroke="currentColor" strokeWidth="1" opacity="0.9" />
      <path d="M130 132 L130 98 A20 20 0 0 1 170 98 L170 132" stroke="currentColor" strokeWidth="0.7" opacity="0.5" />
      <circle cx="150" cy="112" r="3.5" fill="currentColor" opacity="0.9" />
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
