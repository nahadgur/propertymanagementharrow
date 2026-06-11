// components/SpokeHero.tsx
// Inline-SVG hero for blog spokes + guide hubs. No <img>, no file, no external
// host. Motif: rooftop / building silhouette (matches the property vertical).
// The gradient hue is seeded by the hub slug, so every spoke under a hub shares
// a colour and different hubs differ. The SVG is decorative (aria-hidden); the
// page keeps the real <h1> (rendered sr-only by the caller).

const SITE_NAME = 'Property Management Harrow';

// Green brand palette pulled from tailwind.config. Each pair is a [dark, mid]
// gradient; the hub hash picks one so hubs differ but stay on-brand.
const PAIRS: [string, string][] = [
  ['#1a4730', '#2d7a4f'],
  ['#143826', '#2d7a4f'],
  ['#1a4730', '#236340'],
];
const SUBTLE = '#e8f3ed';
const ACCENT = '#95d5b2';

function hashIndex(s: string, mod: number): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h % mod;
}

// Balance a title across two lines by word count.
function twoLines(t: string): [string, string] {
  const w = t.trim().split(/\s+/);
  if (w.length < 3) return [t, ''];
  const cut = Math.ceil(w.length / 2);
  return [w.slice(0, cut).join(' '), w.slice(cut).join(' ')];
}

export function SpokeHero({
  title,
  hubName,
  hubSlug,
  readMins,
}: {
  title: string;
  hubName: string | null;
  hubSlug: string;
  readMins: number;
}) {
  const seed = hubSlug || title;
  const [d0, d1] = PAIRS[hashIndex(seed, PAIRS.length)];
  const [l1, l2] = twoLines(title);
  const eyebrow = `${SITE_NAME}${hubName ? ' · ' + hubName : ''}`;
  const gid = `sh-${hashIndex(seed, 99999)}`;
  // Smaller type for long single lines so they don't overflow.
  const fs = Math.max(l1.length, l2.length) > 40 ? 28 : 34;

  return (
    <svg
      viewBox="0 0 1100 340"
      className="w-full h-auto block rounded-2xl"
      role="img"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <title>{title}</title>
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={d0} />
          <stop offset="1" stopColor={d1} />
        </linearGradient>
      </defs>
      <rect width="1100" height="340" fill={`url(#${gid})`} />
      <circle cx="930" cy="120" r="38" fill="#95d5b2" fillOpacity="0.18"/><g fill="#95d5b2" fillOpacity="0.16"><path d="M700 290 V 230 L 745 198 L 790 230 V 290 Z"/><path d="M800 290 V 210 L 850 176 L 900 210 V 290 Z"/><path d="M910 290 V 240 L 950 212 L 990 240 V 290 Z"/><path d="M1000 290 V 200 L 1050 166 L 1100 200 V 290 Z"/></g>
      <text x="60" y="150" fill={SUBTLE} fontSize="16" fontWeight="600">{eyebrow}</text>
      <text x="60" y="202" fill="#ffffff" fontSize={fs} fontWeight="800">{l1}</text>
      {l2 ? <text x="60" y={202 + fs + 8} fill="#ffffff" fontSize={fs} fontWeight="800">{l2}</text> : null}
      <text x="60" y={l2 ? 202 + (fs + 8) * 2 - 4 : 248} fill={ACCENT} fontSize="15">{readMins} min read</text>
    </svg>
  );
}
