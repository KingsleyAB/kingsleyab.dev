# Kingsley Agyenim-Boateng — Portfolio

Personal portfolio site for **Kingsley Agyenim-Boateng**, Firmware Engineer
on the Memory Subsystem team at AMD.

Built with **Next.js 14 (App Router)**, **React**, **TypeScript**, **Tailwind
CSS**, **Framer Motion**, and **Lucide React** icons. Dark theme, mobile
responsive, SEO-optimized, deployable on Vercel with zero config.

---

## ✨ Features

- Clean, minimal, resume-like layout — heavy on typography, light on flash
- Concentric arc decorative background radiating from the top-right corner
- Fixed vertical social sidebar with rotated labels (desktop only)
- Typewriter animation in the hero, cycling through related roles
- Two-column About section (photo + bio)
- Resume-style Experience and Education timelines
- Clickable project list that opens a detail modal (no card-overload)
- Two-column Contact section with simulated message form
- Smooth scrolling, scroll progress indicator, subtle hover effects
- Loading animation on first visit (session-scoped)
- Fully responsive, accessible, and SEO-ready

---

## 🚀 Running locally

```bash
# 1. Install dependencies
npm install
# or pnpm install / yarn

# 2. Start the dev server
npm run dev

# 3. Open http://localhost:3000
```

You need **Node.js 18.17+** (Next.js 14 requirement).

Production build:

```bash
npm run build
npm run start
```

---

## 📁 Project structure

```
portfolio/
├── public/
│   └── images/
│       ├── README.md            ← where to put profile.jpg, og-image, etc.
│       └── (your assets here)
│
├── src/
│   ├── app/
│   │   ├── layout.tsx           ← root layout, fonts, SEO metadata
│   │   ├── page.tsx             ← home page; composes all sections
│   │   └── globals.css          ← Tailwind + custom CSS
│   │
│   ├── components/
│   │   ├── BackgroundArcs.tsx        ← top-right concentric rings
│   │   ├── ScrollProgress.tsx        ← gold/amber top progress bar
│   │   ├── SocialSidebar.tsx         ← fixed right-edge vertical labels
│   │   ├── Loader.tsx                ← page-load animation
│   │   ├── Navbar.tsx                ← top navigation
│   │   ├── Footer.tsx                ← bottom footer
│   │   ├── ArticleModal.tsx          ← article reading modal
│   │   └── sections/
│   │       ├── Hero.tsx              ← intro + typewriter + CTA buttons
│   │       ├── About.tsx             ← photo + bio + expertise
│   │       ├── Experience.tsx        ← work timeline
│   │       ├── Education.tsx         ← education timeline
│   │       ├── EngineeringInsights.tsx ← technical writing list
│   │       └── Contact.tsx           ← contact info + form
│   │
│   └── lib/
│       └── data.ts              ← ⭐ ALL CONTENT LIVES HERE ⭐
│
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
├── next.config.mjs
├── .eslintrc.json
├── .gitignore
└── README.md
```

---

## ✏️ What to edit first

**The one file you actually need to change:** `src/lib/data.ts`

It's the single source of truth for everything on the site — name, title,
links, bio paragraphs, expertise list, job entries, education entries,
projects (title, description, tech stack, challenge, impact, link), and SEO
metadata. Components only render this data, never hardcode it.

In order:

1. **`src/lib/data.ts`** — update the `personal`, `about`, `experience`,
   `education`, `writing`, and `seo` objects with your real content.
2. **`public/images/profile.jpg`** — add your portrait. The About section
   will automatically swap from placeholder → real photo. If you skip this,
   the placeholder stays and the site still builds fine.
3. **`src/app/layout.tsx`** — adjust SEO keywords if needed (already
   reads from `seo` in data.ts; you usually don't need to touch this).
4. **`tailwind.config.ts`** — adjust colors (especially `accent`) if you
   want a different highlight color than the default warm gold.

---

## 🎨 Theme customization

All colors are defined in `tailwind.config.ts` under `theme.extend.colors`:

| Token | Value | Used for |
|-------|-------|---------|
| `bg` | `#0b0b0d` | page background |
| `bg.soft` | `#111114` | placeholder card backgrounds |
| `bg.card` | `#16161a` | project modal background |
| `ink` | `#e8e6e1` | primary text |
| `ink.soft` | `#b6b3ac` | body paragraphs |
| `ink.muted` | `#8a877f` | small meta text |
| `ink.faint` | `#5a5851` | placeholder text |
| `accent` | `#d4af6a` | warm gold — highlights, links, progress bar |
| `line` | `rgba(232,230,225,0.08)` | borders & dividers |

Fonts live in `src/app/layout.tsx`. The site uses:
- **Fraunces** (serif) — headings and the name
- **DM Sans** — body text
- **JetBrains Mono** — eyebrows, pill buttons, timestamps

Swap any of them for a different `next/font/google` import if you want a
different feel.

---

## 📬 Wiring up the contact form

The form is currently **simulated** — it validates input and shows a
success state after a delay, but doesn't actually send anything. To wire
it up for real:

### Option A: Formspree (easiest)

1. Sign up at [formspree.io](https://formspree.io) and create a new form.
2. Grab the endpoint URL — looks like `https://formspree.io/f/xxxxxxx`.
3. Open `src/components/sections/Contact.tsx`, find the `handleSubmit`
   function, and replace the `// SIMULATED SEND` block with:

   ```ts
   const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
     body: JSON.stringify({ name, email, message }),
   });
   if (!res.ok) throw new Error('Send failed');
   ```

4. Remove the "this form is currently simulated" note at the bottom of the
   form if you want.

### Option B: Resend / SendGrid / your own API route

Create a Next.js API route at `src/app/api/contact/route.ts` and `POST`
the form data to it. Same pattern as above, just swap the URL.

---

## 🌐 Deploying to Vercel

Vercel is the fastest path — Next.js is made by the same team.

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repo. Vercel auto-detects Next.js — accept defaults.
4. Click **Deploy**. You'll have a live URL in about a minute.

To use a custom domain:
- In the Vercel project → **Settings → Domains** → add your domain.
- Update DNS at your registrar (Vercel shows you exactly what records to add).
- Update `seo.url` in `src/lib/data.ts` to your custom domain.

Every git push to your main branch redeploys automatically.

---

## 🛠️ Suggested future improvements

Quality-of-life upgrades you might want once the site is live:

- **Real contact form** — wire up Formspree per the instructions above so
  you can stop sending people to your inbox manually.
- **Active section highlighting** in the navbar — use IntersectionObserver
  to highlight the currently-visible section in the top nav.
- **MDX-powered blog** — drop in `next-mdx-remote` and add a `/writing`
  route for technical posts. Memory subsystem engineering write-ups
  basically don't exist on the open web; you'd own that niche.
- **OG image generation** — use `next/og` to auto-generate per-page social
  preview images instead of a static `og-image.png`.
- **Analytics** — Vercel Analytics or Plausible, dropped into `layout.tsx`.
- **Light mode toggle** — only if you actually want one. A serious engineer
  portfolio in dark mode is a strong default.
- **i18n / accessibility audit** — run Lighthouse and fix anything below 95.
- **Project detail pages** — when a project gets big enough to need its
  own page (writeup, screenshots, etc.), graduate it from the modal to a
  full `/works/[slug]` route.
- **CMS-backed content** — if you find yourself editing `data.ts` on your
  phone, move it to Contentlayer/Sanity/Notion. Probably overkill until
  you're updating monthly.

---

## 📝 License

Personal portfolio. Code structure is yours to keep / fork / share.
Content (bio, projects, etc.) is © Kingsley Agyenim-Boateng.

Design inspiration credit: the layout pattern (concentric arcs, vertical
sidebar, two-column About) is inspired by the styleshout "Luther" template
and its many adaptations. The implementation here is original code,
written from scratch in Next.js + Tailwind.
