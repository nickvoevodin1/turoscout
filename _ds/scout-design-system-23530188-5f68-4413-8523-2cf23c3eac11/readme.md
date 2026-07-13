# Scout — Design System

Scout (**«Scout · Аналитика стартапов»**) is a Russian-language editorial
publication that publishes long-form *разборы* (deep-dive analyses) of startups
— how a business is built, and whether it could be repeated in Russia. This
design system captures Scout's look so that **every future article renders
identically**: the same colors, serif type, oldstyle numerals, reading layout,
components and footer.

## Sources
- **Live site:** https://decagonscout.vercel.app/ — a client-rendered SPA. It
  could not be read as code (JavaScript-rendered), so this system was rebuilt
  from **16 full-page screenshots** the user provided of the "Decagon AI" разбор
  (intro, «60 секунд», company, founders, growth, problem, solution, how-it-works,
  value, ROI calculator, growth reasons, MVP, launch plan, verdict).
- No source code, Figma, or brand kit was provided. Values below are measured
  from the screenshots; **fonts are a substitution** (see Visual Foundations).

---

## Content fundamentals
- **Language:** Russian (Cyrillic), with brand/company names kept in Latin
  ("Decagon", "Jesse Zhang", "CRM", "AI"). Numbers use Russian formatting
  (spaces as thousands separators: `$4 800 000`; comma decimals: `9,5`).
- **Voice:** analytical, calm, plain-spoken. Explains business mechanics, not
  hype. The recurring thesis pattern: *"продают не X, а Y"* ("they sell not the
  AI, but lower costs").
- **Address:** formal "вы"; occasional direct instruction ("Нажмите на год…",
  "Подвигайте ползунки").
- **Casing:** section eyebrows are UPPERCASE + letter-spaced ("01  БИЗНЕС ЗА
  60 СЕКУНД"); titles are sentence case in serif.
- **Emphasis:** bold inline runs inside body/callouts to mark the punchline.
- **No emoji.** Ever. Markers are typographic (✓ ◇ · —).
- **Meta:** byline + cream date badge + reading estimate ("≈ 12 мин чтения").
- **Verdicts:** articles end with a scorecard ("9,5/10").

## Visual foundations
- **Palette:** a warm-gray "paper" background (`#edebe6`), warm near-black ink,
  and a **single amber/ochre gold accent** (`#b57d2a`) used sparingly — active
  nav, section numbers, links, checkmarks, callout bars, the wordmark's period.
  Cream (`#f4e8d3`) fills pills, date badges and the active selector box.
- **Type:** one serif carries everything — headings, body, nav, labels and
  numerals. **Numerals are oldstyle** (text figures), a defining trait (see
  "2023", "01", "9,5"). *Substitution:* the original webfont was not provided,
  so **Lora** (Google Fonts) is used as the closest match — a bracketed serif
  with moderate contrast, oldstyle figures by default, and full Cyrillic.
  → **If you have Scout's real font files, drop them in and update
  `tokens/fonts.css`.**
- **Layout:** a fixed left **table-of-contents** column (sticky, with an active
  gold marker) beside a constrained text measure (~720px). Sections are
  separated by generous whitespace and thin hairline rules.
- **Backgrounds:** flat warm paper. No gradients, no textures, no imagery bleed.
- **Cards:** white fill, 1px warm-gray hairline border, **near-square corners
  (3px)**, **no shadow**. Structure comes from borders, not elevation.
- **Callouts:** warm-gray box with a thick (3px) gold **left bar** — the
  key-takeaway treatment.
- **Pills / badges:** cream fill, deep-gold text; pills fully rounded, badges
  squarer.
- **Selectors / sliders:** bordered selector boxes go gold-border + cream-fill
  when active; sliders use a black track, gold fill and a gold round thumb.
- **Motion:** understated. A brief loading splash; a soft header blur; smooth
  scroll; simple active-state transitions. No bounce, no decorative loops.
- **Hover:** outline buttons fill gold; links deepen to `--gold-1`; nav items
  darken to ink.
- **Radii:** 2–5px on surfaces; 999px on pills / slider thumb.

## Iconography
Scout is **near-icon-free**. It relies on **typographic marks** instead of an
icon set:
- gold **✓** (U+2713) for benefit / step lists,
- gold outline **◇** (U+25C7) for problem lists,
- **·** and **—** as separators in eyebrows and bylines,
- oldstyle **numerals** ("01", "2023") as the section/step indicators.

No icon font, SVG sprite, or emoji were observed. If a future need arises, add a
minimal thin-stroke set and document it here — but the default is *no icons*.

## Logo
There is **no Scout logo image** — the brand is always the **wordmark "Scout."**
set in the serif with an amber period (`components/brand/ScoutMark`). Do not
draw a mark. (The screenshots also show the *Decagon* logo, but that is article
subject matter, not Scout's brand — never reproduce a subject company's mark;
use placeholders.)

---

## Index / manifest

**Root**
- `styles.css` — the entry stylesheet consumers link (imports only).
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `effects.css`,
  `fonts.css`, `base.css`.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `components/` — reusable primitives (below).
- `ui_kits/scout/` — full interactive article recreation.
- `templates/article/` — the **Scout Article** starting point (`.dc.html`).
- `SKILL.md` — Agent-Skill wrapper.

**Components** (`window.ScoutDesignSystem_235301`)
- `components/brand/` — **ScoutMark**
- `components/typography/` — **Eyebrow**, **SectionHeader**, **Stat**
- `components/content/` — **Card**, **Callout**, **CheckList**, **Pill**,
  **Badge**, **SpecRow**, **Divider**
- `components/controls/` — **Button**, **SegmentedControl**, **Slider**

**UI kit** — `ui_kits/scout/index.html`: loading splash → header → TOC sidebar
(scroll-spy) → the full Decagon разбор → footer.

**Template** — `templates/article/Article.dc.html`: copy-and-edit scaffold for a
new разбор.
