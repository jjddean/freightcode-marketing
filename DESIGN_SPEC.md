# Design Spec

Source of truth: implemented styles in this repository, primarily `src/app/globals.css` and components under `src/components` and `src/app/tools`.

## Typography

- Primary body font: `Inter, system-ui, sans-serif` (`src/app/globals.css`).
- OpenType features enabled globally: `rlig`, `calt`.
- Tailwind theme font aliases:
  - `--font-sans: var(--font-geist-sans)`
  - `--font-mono: var(--font-geist-mono)`
- Weight usage (observed):
  - Body copy: `font-medium` or default
  - Section titles: `font-semibold` / `font-bold`
  - KPI/value numerics: `font-bold` / `font-extrabold`

## Core Theme Tokens

Defined in `src/app/globals.css`.

### Light Mode

- `--background: #ffffff`
- `--foreground: #020817`
- `--card: #ffffff`
- `--card-foreground: #020817`
- `--popover: #ffffff`
- `--popover-foreground: #020817`
- `--primary: #0f172a`
- `--primary-foreground: #f8fafc`
- `--secondary: #f1f5f9`
- `--secondary-foreground: #0f172a`
- `--muted: #f1f5f9`
- `--muted-foreground: #64748b`
- `--accent: #f1f5f9`
- `--accent-foreground: #0f172a`
- `--destructive: #ef4444`
- `--destructive-foreground: #f8fafc`
- `--border: #e2e8f0`
- `--input: #e2e8f0`
- `--ring: #020817`
- `--radius: 0.5rem`

### Dark Mode

- `--background: #020817`
- `--foreground: #f8fafc`
- `--card: #020817`
- `--card-foreground: #f8fafc`
- `--popover: #020817`
- `--popover-foreground: #f8fafc`
- `--primary: #f8fafc`
- `--primary-foreground: #0f172a`
- `--secondary: #1e293b`
- `--secondary-foreground: #f8fafc`
- `--muted: #1e293b`
- `--muted-foreground: #94a3b8`
- `--accent: #1e293b`
- `--accent-foreground: #f8fafc`
- `--destructive: #7f1d1d`
- `--destructive-foreground: #f8fafc`
- `--border: #1e293b`
- `--input: #1e293b`
- `--ring: #cbd5e1`

## Brand and UI Palette (Observed Usage)

### Brand Neutrals and Navies

- Deep hero/background navy: `#0a1628`
- Surface navy: `#0d1f35`
- Elevated navy panel: `#1e3a5f`
- Brand blue (light sections, links, headings): `#003057`

### Accent Colors

- Primary action accent: cyan (`cyan-500`, hover `cyan-600`, highlight `cyan-400`)
- Positive/success signal: emerald (`emerald-400`, `emerald-500/10`)
- Warning/risk signal: amber (`amber-400`, `amber-700`)
- Alert/risk signal: red (`red-400`, `red-500/20`)

### Neutral Scale Patterns

- Dark sections: `slate-900`, `slate-800`, `slate-700`, `slate-500`, `slate-400`
- Light sections: `gray-50`, `gray-200`, `gray-600`, `gray-500`, `gray-400`

## Layout System

- App uses Tailwind utility classes for spacing and typography.
- Container widths:
  - Marketing sections commonly use `max-w-6xl`/`max-w-7xl` + `mx-auto`.
- Spacing rhythm (observed):
  - Section vertical padding: `py-12`, `py-16`, `pt-12 pb-24`
  - Card padding: `p-5`, `p-6`, `p-8`
  - Consistent gap scale: `gap-3`, `gap-4`, `gap-6`, `gap-12`

## Shape, Borders, and Elevation

- Global radius token: `0.5rem`.
- Common radii:
  - `rounded-lg`, `rounded-xl`, `rounded-2xl`, occasional `rounded-3xl`.
- Border treatment:
  - Light UI: `border-gray-200` / `border-slate-200`
  - Dark UI: `border-slate-700` / `border-slate-800`
- Shadow style:
  - Soft depth on cards and media previews, often custom shadow utilities.

## Component Design Conventions

### Marketing Home (Light + Dark Mix)

- Top hero and tools sections use dark navy backgrounds with cyan accents.
- Mid-page product/pricing/feature blocks use white or `gray-50` backgrounds with brand blue text.
- CTA buttons:
  - Dark sections: cyan-filled CTAs with white text.
  - Light sections: brand-blue CTAs with white text.

### Tools Experience

- Tools pages continue the dark navy + cyan identity.
- Calculator/simulator cards:
  - Outer shell: `#0d1f35`
  - Header strip: translucent `#0a1628`
  - Input fields: dark backgrounds with `slate` borders
  - Primary actions: cyan buttons
- Status/result states use emerald/blue accents for confidence and verification messaging.

## Accessibility and Readability Notes

- High contrast text is used in both modes (white on navy, dark text on white).
- Interactive elements generally include hover color transitions and visible focus ring utilities.
- Body copy is mostly `text-sm` to `text-base` with relaxed line-height for dense trade/compliance content.

## Quote Form Spec

Reference: `src/components/QuoteWidget.tsx`.

- Field 1:
  - Label: `Origin (City)`
  - Type: `text`
  - Placeholder: `e.g. Shanghai`
  - Required: `true`
- Field 2:
  - Label: `Destination (City)`
  - Type: `text`
  - Placeholder: `e.g. Los Angeles`
  - Required: `true`
- Field 3:
  - Label: `Weight (kg)`
  - Type: `number`
  - Placeholder: `e.g. 500`
  - Required: `true`
- Submit:
  - Button: `See Prices ->`
  - Helper copy: `No sign-up required for estimates.`

## Tools Spec Addendum

Reference: `src/app/tools/page.tsx`, `src/components/tools/HSCodeLookup.tsx`, `src/components/tools/CurrencyConverter.tsx`.

- HS Code and Currency Converter should share the same container width in the tools tabs.
- Both should keep the same card shell style:
  - `bg-white p-6 rounded-xl shadow-lg border border-slate-200/60 ring-1 ring-black/5`
- Currency converter adjustments are limited to sizing/shape alignment with HS Code lookup.
- Do not alter the HS card structure/content for this alignment pass.

## File References

- Theme tokens: `src/app/globals.css`
- Landing composition: `src/app/page.tsx`
- Hero: `src/components/Hero.tsx`
- Header/Footer branding: `src/components/Header.tsx`, `src/components/Footer.tsx`, `src/components/BrandLogo.tsx`
- Pricing/Features/GeoRisk sections: `src/components/Pricing.tsx`, `src/components/Features.tsx`, `src/components/GeoRiskSection.tsx`
- Tools shell/pages: `src/app/tools/page.tsx`, `src/app/tools/currency-converter/page.tsx`, `src/app/tools/hscode-lookup/page.tsx`
- Tool components: `src/components/tools/TariffCalculator.tsx`, `src/components/tools/FullModeSimulator.tsx`, `src/components/tools/TariffUnifiedTool.tsx`, `src/components/tools/HSCodeLookup.tsx`, `src/components/tools/CurrencyConverter.tsx`

## UI Foundation Rule (Required for All New Pages)

This design spec is the implementation contract for all future pages and components.

- Use the existing UI system first: shared components in `src/components/ui/*`.
- Use Radix-based primitives via wrappers, not ad-hoc page-level controls.
- Keep styling aligned to theme tokens in `src/app/globals.css` (`--background`, `--foreground`, `--card`, `--border`, `--input`, `--ring`, `--radius`).
- Preserve existing spacing, radius, border, and shadow patterns documented in this spec.
- Do not introduce a second design language (new control styles, mismatched spacing scale, or conflicting colors).

### Radix Baseline (Current)

- `@radix-ui/react-dialog`
- `@radix-ui/react-popover`
- `@radix-ui/react-scroll-area`

### Required Component Usage Pattern

- Prefer wrappers from `src/components/ui/*`:
  - `Button`, `Input`, `Select`, `Popover`, `Dialog`, `Command`, `ScrollArea`, `Tabs`, `Card`
- If a needed control does not exist:
  - Add it once in `src/components/ui/*` with token-based styling.
  - Reuse it across pages.

### Quote-Style Form/Card Baseline (Main App Pattern)

Use this as the default pattern for new form-heavy pages.

- Outer card shell:
  - `bg-white rounded-2xl shadow-xl border border-gray-100 p-8`
- Form structure:
  - Root `space-y-6`
  - Responsive grid layout (`grid grid-cols-1 md:grid-cols-2/3 gap-*`)
- Inputs/controls:
  - Shared `Input`, `Select`, `Popover`, `Command`, `Calendar`, `Button`
- Progress/section treatment:
  - Subtle bordered sections, tokenized focus ring, consistent label/error typography

### New Page Acceptance Checklist

- Uses shared UI wrappers (not raw one-off controls).
- Uses theme tokens and documented palette.
- Matches documented spacing rhythm and elevation.
- Matches existing card/form interaction behavior.
- Introduces no conflicting visual patterns.
