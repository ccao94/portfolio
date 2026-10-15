# Portfolio, Cao Cuong Cao

Personal portfolio of a Software Engineering student at EFREI Paris (M2 from November 2026), looking for a 12-month apprenticeship starting November 2026.

Live site: https://cao-cuong-cao.vercel.app/

## Stack

- React 19 + Vite
- Tailwind CSS v4
- Framer Motion for animations
- Self-hosted fonts with Fontsource (Playfair Display, IBM Plex Sans, IBM Plex Mono)
- Bilingual FR / EN, without an i18n library

## Run locally

```bash
npm install
npm run dev
```

The site runs on http://localhost:5173.

```bash
npm run build     # production build in dist/
npm run preview   # serve the build locally
npm run lint
```

## Project structure

```
public/
  images/photo.jpg          profile photo (hero + badge)
  images/og-image.jpg       preview image when the link is shared
  cv/CV_Cao_Cuong_Cao.pdf   downloadable resume
src/
  data/content.js           all the site content, in French and English
  data/icons.js             tech logos
  i18n/                     language context (FR / EN)
  components/               one component per section
```

## Editing the content

Everything is in `src/data/content.js`. A text is either a plain string (same in both languages) or a `{ fr, en }` object.

- Add a project: add an object to `projects.list`. The `image` field is optional (screenshot in `public/images/`).
- Link a skill to a project: edit the `used` array in `skills.groups`. Available ids are listed in `places`.
- Timeline: bars are expressed in months since September 2020 (`path.rows`).
- Hero video: put a video in `public/images/` and set `profile.heroVideo`.

## Contact form

Messages are sent with [FormSubmit](https://formsubmit.co), free and without an account. On the first submission, FormSubmit sends a confirmation email to `profile.email`: click the link to activate the form.

## Deployment

Deployed on [Vercel](https://vercel.com): import the GitHub repo, Vercel detects Vite automatically (build command `npm run build`, output folder `dist`).

## Credits

- Tech logos: [devicon](https://devicon.dev) (MIT)
- Layout inspired by [Lohitha Damisetti's portfolio](https://github.com/lohithadamisetti123/Lohitha_Damisetti_Portfolio)