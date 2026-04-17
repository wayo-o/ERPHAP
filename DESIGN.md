# HomeAir+ ERP — Design System (Linear-Inspired)

> AI agents: read this file before generating any UI. Follow these rules strictly.

## Philosophy

Inspired by **Linear** — minimal, fast, professional. Every element earns its place.
No decoration without purpose. Prioritize clarity, speed, and information density.

---

## Brand

- **Name**: HomeAir+ ERP
- **Industry**: HVAC (Heating, Ventilation, Air Conditioning)
- **Users**: Engineers, project managers, sales, accounting — internal team ~30-40 people
- **Language**: Thai (primary), English (technical terms)

---

## Colors

### Semantic Colors (Filament)

| Role      | Tailwind Color | Hex (500)   | Usage                              |
|-----------|---------------|-------------|-------------------------------------|
| Primary   | Blue          | `#3B82F6`   | Actions, links, active states       |
| Danger    | Rose          | `#F43F5E`   | Destructive actions, errors         |
| Success   | Emerald       | `#10B981`   | Confirmations, positive status      |
| Warning   | Amber         | `#F59E0B`   | Caution states, pending items       |
| Info      | Sky           | `#0EA5E9`   | Informational badges, tooltips      |
| Gray      | Slate         | `#64748B`   | Borders, muted text, backgrounds    |

### Background Palette

| Context               | Light Mode              | Dark Mode                |
|-----------------------|-------------------------|--------------------------|
| Page background       | `#F8FAFC` (slate-50)    | `#0F172A` (slate-900)    |
| Card / Section        | `#FFFFFF`               | `#1E293B` (slate-800)    |
| Sidebar               | `rgba(255,255,255,0.72)`| `rgba(18,18,22,0.88)`    |
| Topbar                | `rgba(255,255,255,0.78)`| `rgba(18,18,22,0.85)`    |
| Hover state           | `#F1F5F9` (slate-100)   | `#334155` (slate-700)    |
| Selected / Active     | `#EFF6FF` (blue-50)     | `#1E3A5F`                |

### Rules

- **No** `backdrop-filter: blur()` on always-visible elements (sidebar, topbar, cards, inputs, stats)
- `backdrop-filter` is ONLY allowed on overlays: modals, dropdowns, tooltips
- Use solid or semi-transparent backgrounds with higher opacity instead
- Borders: `1px solid` using `slate-200` (light) / `slate-700` (dark)

---

## Typography

### Font Stack

```css
font-family: 'Noto Sans Thai', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
```

- **Primary font**: Kanit (supports both Thai and Latin glyphs)
- **System fallback**: Native sans-serif stack
- Load fonts **non-blocking**: `media="print" onload="this.media='all'"`

### Scale

| Element            | Size    | Weight | Line Height | Letter Spacing |
|--------------------|---------|--------|-------------|----------------|
| Page title (h1)    | 24px    | 600    | 1.3         | -0.025em       |
| Section title (h2) | 18px    | 600    | 1.4         | -0.015em       |
| Subtitle (h3)      | 16px    | 500    | 1.4         | -0.01em        |
| Body text          | 14px    | 400    | 1.5         | 0              |
| Small / Caption    | 12px    | 400    | 1.4         | 0.01em         |
| Badge / Tag        | 11px    | 500    | 1.0         | 0.02em         |

### Rules

- Titles use **negative letter-spacing** (tighter) — Linear style
- Body text stays at normal spacing
- Max line length: **65–75 characters** for readability
- Thai text may need +1px line-height adjustment vs Latin

---

## Spacing & Layout

### Base Unit: 4px

| Token     | Value  | Usage                              |
|-----------|--------|------------------------------------|
| `space-1` | 4px    | Tight gaps (icon + label)          |
| `space-2` | 8px    | Inline padding, badge padding      |
| `space-3` | 12px   | Form field internal padding        |
| `space-4` | 16px   | Card padding, section gaps         |
| `space-6` | 24px   | Section separation                 |
| `space-8` | 32px   | Page section margins               |
| `space-12`| 48px   | Major section breaks               |

### Border Radius

| Element          | Radius   |
|------------------|----------|
| Buttons          | 6px      |
| Cards / Sections | 8px      |
| Inputs           | 6px      |
| Modals           | 12px     |
| Badges / Tags    | 9999px   |
| Avatars          | 50%      |

### Grid

- Sidebar: **256px** collapsed to **icon-only 64px**
- Content area: fluid, max-width **1280px**, centered
- Dashboard widgets: **CSS Grid**, `grid-cols-1 md:grid-cols-2 xl:grid-cols-3`
- Stats overview: equal-width cards in a row

---

## Components

### Buttons

| Variant     | Background          | Text         | Border          | Usage                    |
|-------------|---------------------|--------------|-----------------|--------------------------|
| Primary     | `blue-600`          | `white`      | none            | Main actions (Save, Create) |
| Secondary   | `transparent`       | `slate-700`  | `slate-300`     | Secondary actions        |
| Danger      | `rose-600`          | `white`      | none            | Delete, destructive      |
| Ghost       | `transparent`       | `slate-600`  | none            | Subtle actions           |

- Height: **36px** (default), **32px** (compact/table)
- Padding: `8px 16px`
- Font: 14px, weight 500
- Hover: darken 10% or add subtle background
- **No shadows** on buttons — Linear style is flat
- Transition: `150ms ease` on background and border

### Cards / Sections (`.fi-section`)

```
background: white (light) / slate-800 (dark)
border: 1px solid slate-200 / slate-700
border-radius: 8px
padding: 16px
box-shadow: none ← Linear style = flat, no shadows
```

- **No** `backdrop-filter`
- **No** `box-shadow` on cards — use borders only
- Hover on interactive cards: background shift to `slate-50` / `slate-750`

### Stats Cards (`.fi-wi-stats-overview-stat`)

```
background: white / slate-800
border: 1px solid slate-200 / slate-700
border-radius: 8px
padding: 16px
```

- Icon: 20px, colored by semantic role
- Value: 24px, weight 600
- Label: 12px, slate-500, weight 400
- Change indicator: 12px, green (up) / rose (down)

### Tables

- Header: `slate-50` background, 12px uppercase, weight 500, `slate-500` text
- Row height: **44px**
- Row hover: `slate-50` / `slate-800`
- Row border: `1px solid slate-100` / `slate-800`
- Striping: **off** (use hover highlight instead)
- Sticky header on scroll
- Action buttons: ghost style, compact (32px)

### Forms & Inputs

```
height: 36px
padding: 8px 12px
border: 1px solid slate-300 / slate-600
border-radius: 6px
font-size: 14px
background: white / slate-800
```

- Focus: `ring-2 ring-blue-500 ring-offset-1`
- Error: `border-rose-500` + error message below in 12px rose-600
- Disabled: `opacity-50`, `cursor-not-allowed`
- **No** `backdrop-filter` on inputs

### Sidebar Navigation

```
width: 256px (expanded) / 64px (collapsed)
background: rgba(255,255,255,0.72) / rgba(18,18,22,0.88)
border-right: 1px solid slate-200 / slate-700
```

- Nav item height: **36px**
- Active item: `blue-50` background + `blue-600` text (light) / `blue-900/30` bg + `blue-400` text (dark)
- Hover: `slate-100` / `slate-800`
- Icon: 18px, `slate-500` default, `blue-600` when active
- Group headers: 11px, uppercase, weight 600, `slate-400`, `space-6` top margin
- Collapsible on desktop with smooth 200ms transition

### Topbar

```
height: 48px
background: rgba(255,255,255,0.78) / rgba(18,18,22,0.85)
border-bottom: 1px solid slate-200 / slate-700
```

- Global search: `Cmd+K` / `Ctrl+K` trigger
- Search bar style: ghost input, slate-400 placeholder
- User avatar: 32px circle, right-aligned

### Modals (OK to use backdrop-filter)

```
overlay: rgba(0,0,0,0.5) + backdrop-filter: blur(4px)
window: white / slate-800
border-radius: 12px
padding: 24px
max-width: 480px (small) / 640px (medium) / 800px (large)
box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25)
```

### Badges & Status Tags

| Status       | Background      | Text           |
|-------------|-----------------|----------------|
| Active      | `emerald-100`   | `emerald-700`  |
| Pending     | `amber-100`     | `amber-700`    |
| Closed      | `slate-100`     | `slate-600`    |
| Overdue     | `rose-100`      | `rose-700`     |
| Draft       | `sky-100`       | `sky-700`      |

- Border-radius: `9999px` (pill)
- Padding: `2px 10px`
- Font: 11px, weight 500

### Dropdown Panels (OK to use backdrop-filter)

```
background: white / slate-800
border: 1px solid slate-200 / slate-700
border-radius: 8px
box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1)
backdrop-filter: blur(8px) ← allowed (shown one at a time)
```

---

## Iconography

- **Style**: Outline (not filled) — matches Linear aesthetic
- **Library**: Heroicons (Filament default) or Lucide
- **Size**: 18px (nav), 20px (section headers), 16px (inline)
- **Stroke width**: 1.5px
- **Color**: inherits from text color

---

## Motion & Animation

| Property         | Duration | Easing                  | Usage                    |
|------------------|----------|-------------------------|--------------------------|
| Hover states     | 150ms    | `ease`                  | Buttons, links, rows     |
| Sidebar toggle   | 200ms    | `ease-in-out`           | Collapse / expand        |
| Modal appear     | 200ms    | `ease-out`              | Fade + scale(0.95→1)    |
| Modal dismiss    | 150ms    | `ease-in`               | Fade + scale(1→0.95)   |
| Dropdown         | 150ms    | `ease-out`              | Fade + translateY(-4px→0) |
| Page transition  | 0ms      | none                    | No SPA transitions       |

### Rules

- **No** SPA mode (`->spa()` is disabled)
- Animations must be subtle — max 200ms
- Prefer opacity + transform over layout-triggering properties
- `prefers-reduced-motion`: respect OS setting, disable all animations

---

## Dark Mode

- Toggle via theme-toggle button in topbar
- Stored in `localStorage`
- Class-based: `<html class="dark">`
- All colors must have explicit dark variants
- Contrast ratio: minimum **4.5:1** for body text, **3:1** for large text

---

## Performance Rules

1. **No render-blocking resources**: fonts load async, CSS inlined or preloaded
2. **No `backdrop-filter`** on persistent elements (sidebar, topbar, cards, inputs)
3. **Lazy load** dashboard widgets (`$isLazy = true`)
4. **No polling** (`$pollingInterval = null`)
5. **Defer loading** on table data (`.deferLoading()`)
6. **Limit GPU compositing layers**: only modals/dropdowns create new layers
7. Target: **First Contentful Paint < 1.5s**, **Largest Contentful Paint < 2.5s**

---

## Navigation Groups (Thai)

```
งานขาย       → Sales (Leads, Quotations, Invoices)
ข้อมูลหลัก    → Master Data (Customers, Products, Vendors)
โปรเจกต์     → Projects (Project tracking, BOQ)
จัดซื้อ       → Procurement (PO, PR)
Service      → Service & Maintenance
บัญชี        → Accounting
ตั้งค่า       → Settings (Users, Roles, Config)
```

---

## File Structure Reference

```
resources/
├── css/
│   └── app.css              → Tailwind base (no @import for fonts)
├── views/
│   ├── auth/
│   │   └── landing-login.blade.php  → Custom login page
│   ├── attendance/
│   │   ├── checkin.blade.php
│   │   └── history.blade.php
│   └── filament/hooks/
│       └── liquid-glass-theme.blade.php → Theme overrides (this file)
app/
├── Providers/Filament/
│   ├── AdminPanelProvider.php  → Main panel config
│   └── PmPanelProvider.php     → PM panel config
```

---

## Do's and Don'ts

### Do
- Use borders instead of shadows for element separation
- Use solid/high-opacity backgrounds instead of blur effects
- Keep UI information-dense (Linear packs a lot without feeling cluttered)
- Use keyboard shortcuts prominently (Cmd+K search)
- Use Thai for labels, English for technical terms (e.g., "สถานะ: Active")
- Test with Thai text — longer strings may break layouts

### Don't
- Don't add `box-shadow` to cards or sections
- Don't use `backdrop-filter` on sidebar, topbar, cards, inputs, or stats
- Don't use decorative gradients
- Don't use rounded-full on cards or sections (only on badges/avatars)
- Don't add animations longer than 200ms
- Don't use `@import url()` for fonts in CSS files
- Don't enable `->spa()` mode in Filament panels
