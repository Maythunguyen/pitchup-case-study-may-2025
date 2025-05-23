# PitchUp – FAQ & Case-Studies Prototype

## 1  Project Overview

This front-end prototype reproduces two marketing pages for PitchUp:

**FAQ**: Answer pre-sale questions and let visitors submit new ones.
**Case Studies**: Showcase success stories via Case Studies and capture leads via a prospectus download.

### Assumptions / Trade-offs

**Static mock data**:  for FAQs & case studies - No backend was required; JSON arrays live in `/data/`.
**Next .js 15, App Router**:  Gives file-system routing, image optimization, and smooth deployments to Vercel
**MUI, Acertinity (+ Tailwind utilities)**:  Rapidly delivers accessible components (accordion, masonry, modal) while Tailwind handles layout tweaks

## 2  Implemented Features

- **FAQ page**
  - Category chips, full-text search, accordion answers
  - New-question form with thank-you banner
- **Case Studies page**
  - Responsive masonry grid (MUI `<Masonry>`)
  - Card “read more / show less” toggle
  - Prospectus hero + modal form -> instant PDF download
- Global navbar with Next `<Link>` (desktop + mobile)


## 3  Tech Stack

| Layer | Choice | Why |
|-------|--------|-----|
| Framework | **Next .js 15** (React 18) | File-system routing, fast refresh, easy Vercel deploy. |
| Styling | **Tailwind CSS** + **@mui/material** + **AceternitUI**  | Utility speed plus production-ready components. |
| Animations | **motion** (framer-motion lite) | Small API, works with React Server Components. |
| 3-D Globe | **cobe** | Lightweight WebGL for the hero flair. |


### If I had more time

* Design & UX first – I’d start with a proper user-flow workshop and a small Figma style-guide to lock in PitchUp’s visual language before writing any code.
* Persistent navbar-state – keep the active link highlighted across pages (and on scroll) so users always know where they are.
* FQAs Page: 
    - Add real-time form validation (name, email, question required).
    - Save new questions to a lightweight backend (Supabase/Firebase) and re-hydrate on load.
    - Disable category chips when the user is actively searching to reduce cognitive load.
    - Refine spacing, animation timing, and colour tokens to align fully with PitchUp’s brand.
* Case Studies Page:
    - Replace the quick MUI masonry with a fully custom grid that matches the my intended design exactly.
    - Turn the prospectus CTA into a richer hero (hero copy + micro-interactions) and send the PDF via email rather than direct download.
    - Continue visual polish: consistent spacing scale, motion guidelines, and brand imagery.
* Snapshot tests with Jest + React Testing Library.
* Lighthouse and Web-Vitals pass (compress images, lazy import cobe).
* Swap to PitchUp’s brand font and bespoke imagery once final assets are available.
In short: given more runway I’d shift from “functionally complete” to “brand-perfect and production-ready,” starting with user-flow and design patterns, then layering in data persistence, testing, and performance.

## 4  Setup & Local Run

First, run the development server:

```bash
git clone https://github.com/Maythunguyen/pitchup-case-study-may-2025.git

cd pitchup-case-study-may-2025

npm install          # or pnpm / yarn

```

# 2  Start the dev serve
```bash
npm run dev              # http://localhost:3000
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.


*** Production build
npm run build 
npm start

```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
