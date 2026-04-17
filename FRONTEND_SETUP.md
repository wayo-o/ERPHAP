# HomeAir Plus — Frontend Build Setup

TailAdmin-inspired brand UI, rebuilt on **Tailwind v3 + Vite + Alpine.js + ApexCharts**.
Compatible with Filament 3 (which also uses Tailwind v3).

---

## 1. Install Node.js

Download LTS from https://nodejs.org/ (pick **v20.x LTS** or newer).
On Windows: run the `.msi` installer, accept defaults, reboot the terminal.

Verify:

```bash
node --version    # v20.x.x
npm --version     # 10.x.x
```

## 2. Install npm dependencies

From the project root (`C:\xampp\htdocs\homeairplus-erp-code`):

```bash
npm install
```

This installs everything declared in `package.json`:

- **tailwindcss 3.4** — utility-first CSS (matches Filament)
- **vite 5** + **laravel-vite-plugin** — build tool
- **alpinejs 3** — tiny reactive framework
- **apexcharts 3** — dashboard charts
- **@tailwindcss/forms**, **@tailwindcss/typography**
- **autoprefixer**, **postcss**, **axios**

## 3. Build assets

**Development (hot reload):**

```bash
npm run dev
```

Keep this terminal open — Vite serves assets from `http://127.0.0.1:5173`
and hot-reloads Blade + PHP file changes.

**Production build:**

```bash
npm run build
```

Outputs compiled assets to `public/build/` (referenced by Laravel's
`@vite(...)` directive).

**Watch mode (build on change, no dev server):**

```bash
npm run watch
```

## 4. Project structure

```
resources/
├── css/
│   └── app.css                 ← Tailwind entry + brand components
├── js/
│   └── app.js                  ← Alpine + ApexCharts bootstrap
└── views/
    ├── components/brand/       ← <x-brand.*> Blade components
    │   ├── app.blade.php       ← master layout (sidebar+topbar+content)
    │   ├── sidebar.blade.php
    │   ├── topbar.blade.php
    │   ├── card.blade.php
    │   ├── stat.blade.php
    │   ├── button.blade.php
    │   └── input.blade.php
    ├── auth/login.blade.php    ← TailAdmin-style split login
    └── dashboard/preview.blade.php  ← dashboard preview

tailwind.config.js              ← brand colors, Kanit font, dark mode
vite.config.js
postcss.config.js
package.json
```

## 5. Using the brand components

**Master layout:**

```blade
<x-brand.app title="Quotations" active="quotation">
    <x-slot:header>
        <h1 class="text-2xl font-bold">Quotations</h1>
    </x-slot:header>

    <x-brand.card title="Card title" subtitle="Subtitle">
        <x-slot:actions>
            <x-brand.button>+ New</x-brand.button>
        </x-slot:actions>

        ...content...
    </x-brand.card>
</x-brand.app>
```

**Stat tile:**

```blade
<x-brand.stat
    label="Total sales"
    value="฿1,234,567"
    trend="up"
    trend-value="+12.5%"
    icon='<svg>...</svg>'
/>
```

**Button variants:** `primary` (default), `secondary`, `ghost`, `danger`.

```blade
<x-brand.button>Save</x-brand.button>
<x-brand.button variant="secondary">Cancel</x-brand.button>
<x-brand.button variant="danger" href="/delete">Delete</x-brand.button>
```

## 6. Preview the dashboard

After `npm run build`, log in and visit:

```
http://localhost/haperp/login       ← (optional new login — see below)
http://localhost/dashboard-preview  ← dashboard with real ERP data
```

## 7. Switching the login page (optional)

The new `resources/views/auth/login.blade.php` is **not yet wired** to the
login route — the existing `landing-login.blade.php` is still active.

To switch, edit `app/Http/Controllers/Auth/LandingLoginController.php` and
change `view('auth.landing-login')` → `view('auth.login')` in the `show()`
method.

## 8. Brand colors

Defined in `tailwind.config.js` under `theme.extend.colors`:

| Token        | Value     | Use                             |
|--------------|-----------|---------------------------------|
| `brand-500`  | `#3b82f6` | primary accent (buttons, links) |
| `brand-600`  | `#2563eb` | hover                           |
| `brand-700`  | `#1d4ed8` | active                          |
| `ink`        | `#0f172a` | primary text                    |
| `ink-muted`  | `#475569` | secondary text                  |
| `ink-soft`   | `#64748b` | captions                        |
| `surface`    | `#ffffff` | card background                 |
| `surface-alt`| `#f8fafc` | page background                 |

Dark mode is toggled via `.dark` class on `<html>` — handled automatically
by `resources/js/app.js` (localStorage + system preference).

## 9. Troubleshooting

**"vite: not found" when running `npm run dev`**
→ Run `npm install` first.

**Blade page looks unstyled**
→ You haven't built assets yet. Run `npm run build` or `npm run dev`.

**Vite HMR not working**
→ Check that `http://127.0.0.1:5173` is reachable and not blocked by firewall.

**Tailwind classes not applied to new files**
→ Add the file path to `content: [...]` in `tailwind.config.js`, then rebuild.

**Conflict with Filament styles**
→ The brand components live in separate Blade views — they do NOT affect
  Filament pages. Filament continues to use its own theme pipeline.
