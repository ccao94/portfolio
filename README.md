# Portfolio, Cao Cuong Cao

Mon portfolio personnel : élève ingénieur M2 Software Engineering à l'EFREI Paris, en recherche d'alternance de 12 mois à partir de novembre 2026.

## Stack

- React 19 + Vite
- Tailwind CSS v4
- Framer Motion pour les animations
- Polices auto-hébergées avec Fontsource (Playfair Display, IBM Plex Sans, IBM Plex Mono)
- Site bilingue FR / EN, sans librairie i18n

## Lancer en local

```bash
npm install
npm run dev
```

Le site tourne sur http://localhost:5173.

```bash
npm run build     # build de production dans dist/
npm run preview   # tester le build
npm run lint
```

## Structure

```
public/
  images/photo.jpg          photo (hero + badge)
  images/og-image.jpg       image affichée quand on partage le lien
  cv/CV_Cao_Cuong_Cao.pdf   CV téléchargeable
src/
  data/content.js           tout le contenu du site, en FR et EN
  data/icons.js             logos des technos
  i18n/                     contexte de langue (FR / EN)
  components/               une section = un composant
```

## Modifier le contenu

Tout se passe dans `src/data/content.js`. Un texte est soit une chaîne simple (identique dans les deux langues), soit un objet `{ fr, en }`.

- Ajouter un projet : ajouter un objet dans `projects.list`. Le champ `image` est facultatif (capture d'écran dans `public/images/`).
- Lier une compétence à un projet : modifier le tableau `used` dans `skills.groups`. Les identifiants possibles sont dans `places`.
- Frise du parcours : les barres sont en mois depuis septembre 2020 (`path.rows`).
- Vidéo dans le hero : déposer une vidéo dans `public/images/` puis renseigner `profile.heroVideo`.

## Formulaire de contact

Les messages passent par [FormSubmit](https://formsubmit.co), gratuit et sans compte. Au premier envoi, FormSubmit envoie un mail de confirmation à l'adresse de `profile.email` : il faut cliquer sur le lien pour activer le formulaire.

## Déploiement

Sur [Vercel](https://vercel.com) : importer le repo GitHub, Vercel détecte Vite tout seul (build `npm run build`, dossier `dist`).

## Crédits

- Logos des technos : [devicon](https://devicon.dev) (MIT)
- Mise en page inspirée du portfolio de [Lohitha Damisetti](https://github.com/lohithadamisetti123/Lohitha_Damisetti_Portfolio)
