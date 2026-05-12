# @tadker/sais

React component library for the Saudi Supreme Authority for Industrial Security (SAIS) government portal.
Implements the SAIS Design System — bilingual (Arabic / English), RTL-first, WCAG 2.1 AA compliant.

---

## Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
  - [Badge](#badge)
  - [Button](#button)
  - [Field](#field)
  - [Footer](#footer)
  - [Hero](#hero)
  - [Icon](#icon)
  - [ServiceCard](#servicecard)
  - [StepIndicator](#stepindicator)
  - [TopNav](#topnav)
- [Design tokens](#design-tokens)
- [RTL & bilingual support](#rtl--bilingual-support)
- [Accessibility](#accessibility)
- [Development](#development)

---

## Requirements

- React 18+
- A bundler that handles CSS Modules (Vite, Next.js, webpack 5+)

---

## Installation

```bash
npm install @tadker/sais
# or
yarn add @tadker/sais
```

Import the design token stylesheet once at your application root:

```ts
import '@tadker/sais/styles';
```

---

## Usage

```tsx
import { Button, Badge, Field } from '@tadker/sais';
import '@tadker/sais/styles';

export function Example() {
  return (
    <>
      <Badge tone="active">Active</Badge>
      <Button variant="primary" size="md">Submit Application</Button>
      <Field id="license" label="License Number" labelAr="رقم الترخيص" required />
    </>
  );
}
```

---

## Components

### Badge

Status indicator for application and permit states.

```tsx
<Badge tone="active">Active</Badge>
<Badge tone="review" dot={false}>Under Review</Badge>
```

| Prop        | Type                                                | Default |
|-------------|-----------------------------------------------------|---------|
| `tone`      | `'active' \| 'review' \| 'expired' \| 'rejected' \| 'new'` | `'new'` |
| `dot`       | `boolean`                                           | `true`  |
| `children`  | `ReactNode`                                         | —       |
| `className` | `string`                                            | —       |

---

### Button

Primary interactive control. Supports five variants, three sizes, optional leading/trailing icons, and full-width layout.

```tsx
<Button variant="primary" size="md">Apply Now</Button>
<Button variant="secondary" size="sm" iconLeft={<Icon name="search" size={16} />}>Search</Button>
<Button variant="destructive" full>Delete Record</Button>
```

| Prop        | Type                                                              | Default     |
|-------------|-------------------------------------------------------------------|-------------|
| `variant`   | `'primary' \| 'secondary' \| 'gold' \| 'destructive' \| 'ghost'` | `'primary'` |
| `size`      | `'sm' \| 'md' \| 'lg'`                                           | `'md'`      |
| `iconLeft`  | `ReactNode`                                                       | —           |
| `iconRight` | `ReactNode`                                                       | —           |
| `full`      | `boolean`                                                         | `false`     |
| `disabled`  | `boolean`                                                         | —           |
| `className` | `string`                                                          | —           |

All native `<button>` attributes are forwarded.

---

### Field

Accessible form control wrapper. Renders a text input, select, or custom children. Includes bilingual labels, help text, and error messaging.

```tsx
<Field
  id="facility-type"
  label="Facility Type"
  labelAr="نوع المنشأة"
  required
  options={['Refinery', 'Pipeline', 'Storage', 'Distribution']}
  help="Select the primary classification"
  helpAr="اختر التصنيف الرئيسي"
/>

<Field
  id="national-id"
  label="National ID"
  labelAr="رقم الهوية الوطنية"
  dir="ltr"
  error="Must be 10 digits"
  errorAr="يجب أن يكون 10 أرقام"
/>
```

| Prop           | Type                                     | Default  |
|----------------|------------------------------------------|----------|
| `label`        | `string`                                 | required |
| `labelAr`      | `string`                                 | —        |
| `id`           | `string`                                 | —        |
| `name`         | `string`                                 | —        |
| `type`         | `React.HTMLInputTypeAttribute`           | `'text'` |
| `options`      | `SelectOption[] \| string[]`             | —        |
| `required`     | `boolean`                                | —        |
| `disabled`     | `boolean`                                | —        |
| `value`        | `string`                                 | —        |
| `defaultValue` | `string`                                 | —        |
| `onChange`     | `ChangeEventHandler`                     | —        |
| `placeholder`  | `string`                                 | —        |
| `dir`          | `'ltr' \| 'rtl'`                         | —        |
| `help`         | `string`                                 | —        |
| `helpAr`       | `string`                                 | —        |
| `error`        | `string`                                 | —        |
| `errorAr`      | `string`                                 | —        |
| `children`     | `ReactNode`                              | —        |
| `className`    | `string`                                 | —        |

Pass `children` to render a completely custom control inside the label/error wrapper.

---

### Footer

Site-wide footer with brand block, configurable link sections, and DGA registration badge.

```tsx
<Footer
  dgaRegistration="123-4567890"
  sections={[
    { heading: 'Services', items: ['Industrial Licensing', 'Facility Inspection'] },
    { heading: 'Contact',  items: ['Help Center', 'contact@sais.gov.sa'] },
  ]}
/>
```

| Prop              | Type              | Default                   |
|-------------------|-------------------|---------------------------|
| `dgaRegistration` | `string`          | `'nnn-nnnnnnn'`           |
| `sections`        | `FooterSection[]` | Three default sections    |
| `className`       | `string`          | —                         |

`FooterSection` shape: `{ heading: string; items: string[] }`.

The DGA registration number is required by Saudi DGA compliance rules and must be supplied before going to production.

---

### Hero

Full-width page header section with Deep Navy gradient background, bilingual title/subtitle, badge label, and an actions slot for CTAs.

```tsx
<Hero
  size="lg"
  badge="Industrial Security Portal"
  title="Apply for Industrial Licenses"
  titleAr="تقديم طلب ترخيص صناعي"
  subtitle="Submit, track, and manage all licensing requests in one place."
  subtitleAr="قدّم طلبك وتتبّعه وأدِر جميع طلبات الترخيص في مكان واحد."
  actions={
    <Button variant="gold" size="lg">Start Application</Button>
  }
/>
```

| Prop         | Type                      | Default |
|--------------|---------------------------|---------|
| `title`      | `string`                  | required |
| `titleAr`    | `string`                  | —        |
| `subtitle`   | `string`                  | —        |
| `subtitleAr` | `string`                  | —        |
| `badge`      | `string`                  | —        |
| `actions`    | `ReactNode`               | —        |
| `size`       | `'sm' \| 'md' \| 'lg'`   | `'md'`   |
| `className`  | `string`                  | —        |

---

### Icon

Inline SVG icons drawn from the SAIS-curated Tabler Icons subset. Always rendered outline at 24px by default; never filled or duotone per design system rules.

```tsx
<Icon name="shield-check" />
<Icon name="arrow-right" size={16} stroke={2} flip />
<Icon name="globe" aria-label="Switch language" />
```

| Prop        | Type         | Default |
|-------------|--------------|---------|
| `name`      | `IconName`   | required |
| `size`      | `number`     | `24`     |
| `stroke`    | `number`     | `1.5`    |
| `flip`      | `boolean`    | —        |
| `aria-label`| `string`     | —        |
| `className` | `string`     | —        |
| `style`     | `CSSProperties` | —     |

Use `flip` on directional icons (arrows, chevrons) when rendering in RTL layouts. Omit `aria-label` for decorative icons (sets `aria-hidden`); supply it for icons that convey information without surrounding text.

**Available icon names:**

`alert-triangle` · `arrow-left` · `arrow-right` · `bell` · `building-factory` · `calendar` · `check` · `chevron-down` · `chevron-left` · `chevron-right` · `circle-check` · `clipboard-list` · `file-certificate` · `globe` · `info-circle` · `lock` · `logout` · `mail` · `map-pin` · `menu-2` · `phone` · `search` · `shield-check` · `user-check` · `x`

---

### ServiceCard

Card for presenting a government service offering. Shows an icon, bilingual title, description, processing time, fee, and a call-to-action link.

```tsx
<ServiceCard
  icon="file-certificate"
  title="Industrial License"
  titleAr="ترخيص صناعي"
  description="Apply for a new industrial operating license for your facility."
  days={10}
  fee="SAR 500"
  featured
  actionLabel="Apply / View details"
  actionLabelAr="تقديم / عرض التفاصيل"
  onClick={() => router.push('/services/industrial-license')}
/>
```

| Prop            | Type         | Default                   |
|-----------------|--------------|---------------------------|
| `icon`          | `IconName`   | required                  |
| `title`         | `string`     | required                  |
| `titleAr`       | `string`     | —                         |
| `description`   | `string`     | required                  |
| `days`          | `number \| string` | required            |
| `fee`           | `string`     | required                  |
| `featured`      | `boolean`    | `false`                   |
| `actionLabel`   | `string`     | `'Apply / View details'`  |
| `actionLabelAr` | `string`     | —                         |
| `onClick`       | `() => void` | —                         |
| `className`     | `string`     | —                         |

When `onClick` is provided the card becomes keyboard-focusable and receives `role="button"`.

---

### StepIndicator

Progress tracker for multi-step application flows. Marks completed steps with a checkmark, highlights the current step, and greys out future steps.

```tsx
<StepIndicator
  current={1}
  steps={[
    { label: 'Eligibility Check',   labelAr: 'التحقق من الأهلية' },
    { label: 'Document Upload',     labelAr: 'رفع المستندات' },
    { label: 'Payment',             labelAr: 'الدفع' },
    { label: 'Review & Submit',     labelAr: 'المراجعة والإرسال' },
  ]}
/>
```

| Prop        | Type     | Default |
|-------------|----------|---------|
| `steps`     | `Step[]` | required |
| `current`   | `number` | `0`      |
| `className` | `string` | —        |

`Step` shape: `{ label: string; labelAr?: string }`. The `current` index is zero-based; steps before it render as done, steps after as todo.

---

### TopNav

Primary navigation bar with logo, bilingual nav links, language toggle, and NafaZ authentication button or authenticated user block.

```tsx
<TopNav
  lang="ar"
  active="services"
  onLangSwitch={() => setLang(lang === 'ar' ? 'en' : 'ar')}
  user={{ name: 'محمد العمري', idMasked: '•••• 4521' }}
  onLogout={handleLogout}
  onNavigate={(id) => router.push(`/${id}`)}
/>
```

| Prop           | Type                       | Default      |
|----------------|----------------------------|--------------|
| `active`       | `NavLinkId`                | `'services'` |
| `lang`         | `'en' \| 'ar'`             | `'en'`       |
| `onLangSwitch` | `() => void`               | —            |
| `user`         | `NavUser`                  | —            |
| `onLogin`      | `() => void`               | —            |
| `onLogout`     | `() => void`               | —            |
| `onNavigate`   | `(id: NavLinkId) => void`  | —            |
| `className`    | `string`                   | —            |

`NavLinkId`: `'home' | 'services' | 'facilities' | 'news' | 'contact'`

`NavUser` shape: `{ name: string; idMasked: string }`

When `user` is provided the nav renders the user's name, masked ID, and a logout button. When absent it renders the NafaZ login button.

---

## Design tokens

All tokens are CSS custom properties declared in `tokens.css` and imported via `@tadker/sais/styles`.

### Colors

| Token                  | Value     | Use                              |
|------------------------|-----------|----------------------------------|
| `--sais-navy`          | `#0A3161` | Structural anchor — nav, footer, hero |
| `--sais-royal-blue`    | `#1A4A82` | Hero gradient end, hover states  |
| `--sais-gold`          | `#C6A026` | Accent — ≤ 15% of screen area    |
| `--sais-white`         | `#FFFFFF` | Card backgrounds                 |
| `--sais-surface`       | `#F5F6F8` | Page ground                      |
| `--sais-success`       | `#1E7E34` | Success states                   |
| `--sais-alert`         | `#C0392B` | Error / destructive states       |
| `--border-focus`       | `#C6A026` | 2px focus ring (WCAG 2.1 AA)     |

### Typography

| Token           | Value | Role          |
|-----------------|-------|---------------|
| `--fs-h1`       | 36px  | Page title    |
| `--fs-h2`       | 26px  | Section title |
| `--fs-h3`       | 18px  | Card title    |
| `--fs-body`     | 15px  | Body copy     |
| `--fs-small`    | 13px  | Caption       |
| `--fs-label`    | 12px  | Form labels   |
| `--font-arabic` | IBM Plex Sans Arabic + Noto Kufi Arabic | Arabic text |
| `--font-latin`  | IBM Plex Sans | Latin text  |

### Spacing

`--space-1`: 4px · `--space-2`: 8px · `--space-3`: 16px · `--space-4`: 24px · `--space-5`: 48px · `--space-6`: 80px

### Layout

| Token             | Value  |
|-------------------|--------|
| `--container-max` | 1280px |
| `--nav-height`    | 64px   |
| `--gutter`        | 24px   |

---

## RTL & bilingual support

- Set `lang="ar"` and `dir="rtl"` on the `<html>` element for Arabic pages. The token stylesheet applies `var(--font-arabic)` automatically.
- Components with bilingual props (`titleAr`, `labelAr`, etc.) render Arabic text with `dir="rtl"` applied inline, so Arabic and English can coexist on the same page regardless of the root direction.
- Wrap identifiers, dates, and numeric codes in `<span dir="ltr">` to prevent bidirectional rendering issues.
- Use `<Icon flip />` on directional icons (arrows, chevrons) when the page direction is RTL.

---

## Accessibility

- Focus ring: 2px solid `#C6A026` (`--sais-gold`) with 2px offset on all interactive elements.
- All icon-only interactions require an `aria-label`. Decorative icons omit it and receive `aria-hidden`.
- `Field` wires `aria-invalid`, `aria-required`, and `aria-describedby` automatically.
- `StepIndicator` uses `<ol>` with `aria-current="step"` on the active item.
- `TopNav` uses a landmark `<nav>` with `aria-label="Main navigation"` and `aria-current="page"` on the active link.
- Minimum touch target: 44 × 44px (enforced via component CSS on buttons and nav links).
- Contrast ratio minimum: 4.5:1 for all text (WCAG 2.1 AA).

---

## Development

```bash
# Install dependencies
npm install

# Start Storybook component explorer
npm run dev          # http://localhost:6006

# Run unit tests
npm test

# Watch mode
npm run test:watch

# Type check
npm run typecheck

# Build distributable (ESM + CJS + type declarations)
npm run build

# Build static Storybook
npm run build-storybook
```

### Project structure

```
src/
  components/
    Badge/           Badge.tsx · Badge.module.css · Badge.stories.tsx · Badge.test.tsx
    Button/          Button.tsx · Button.module.css · Button.stories.tsx · Button.test.tsx
    Field/           Field.tsx · Field.module.css · Field.stories.tsx · Field.test.tsx
    Footer/          Footer.tsx · Footer.module.css · Footer.stories.tsx
    Hero/            Hero.tsx · Hero.module.css · Hero.stories.tsx
    Icon/            Icon.tsx · Icon.stories.tsx
    ServiceCard/     ServiceCard.tsx · ServiceCard.module.css · ServiceCard.stories.tsx
    StepIndicator/   StepIndicator.tsx · StepIndicator.module.css · StepIndicator.stories.tsx
    TopNav/          TopNav.tsx · TopNav.module.css · TopNav.stories.tsx
  styles/
    tokens.css       All CSS custom properties — import once at app root
  index.ts           Public API — all component and type exports
  test/
    setup.ts         Vitest + @testing-library/jest-dom configuration
```

The build target is dual ESM + CJS via `tsup`. CSS Modules are bundled with each component. `tokens.css` is published separately as `@tadker/sais/styles` and must be imported independently.

### Adding an icon

Open `src/components/Icon/Icon.tsx` and add an entry to the `ICONS` map. The value is one or more SVG `d` attributes separated by `|` (each becomes its own `<path>`). Use Tabler Icons outline paths — 24px viewBox, 1.5px stroke, no fill.

### Assets pending from SAIS

The following official assets have not yet been received and must not be fabricated:

- Official SAIS logo (Arabic + English lockup, white-on-navy and navy-on-white, SVG + PNG)
- Licensed IBM Plex Sans Arabic TTF files (Google Fonts CDN is used as a stand-in)

Logo slots currently render the typographic placeholder `nnnnnn nnnnnn nnnnn nnnnnnn` and the Arabic glyph `هـ` as a logomark.
