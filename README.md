# Victor López Portfolio

Bilingual portfolio for a software developer specializing in AI engineering, built with Astro, React, and Tailwind CSS. The English and Spanish pages present professional experience, skills, certifications, education, and selected project work.

## Content

- Conversational agents, RAG systems, LLM workflows, and backend development at Vórtice Coaching, described without proprietary implementation details.
- TourlyAI, an academic NLP desktop application using fine-tuned BERT models, topic modeling, and LLM summaries.
- Skills grouped by area, with independently studied topics labeled separately.
- AWS Certified Developer - Associate and AWS Certified AI Practitioner, linked to their public credentials.
- English and Spanish CV downloads in PDF and Word formats.

## Development

Install dependencies and start the local server:

```sh
npm ci
npm run dev -- --host 127.0.0.1 --port 4321
```

Open `http://127.0.0.1:4321/en/` or `http://127.0.0.1:4321/es/`.

```sh
npm run build
npm run preview -- --host 127.0.0.1 --port 4321
```

The build runs Astro's checks and generates the static site in `dist/`. These commands run locally and do not deploy the site. Publishing remains a separate step.

## Content sources

- `src/i18n/en.json` and `src/i18n/es.json`: profile, experience, project, education, and interface text.
- `src/data/skills.js`: bilingual skill groups.
- `src/data/certifications.js`: credential names, issue dates, verification links, and badge image sources.
- `src/components/`: portfolio sections and interactions.

The AWS badge images in `public/certifications/` are the original transparent artwork provided through Credly, used without alteration. A white presentation container is used in light mode. Dark mode preserves the images' transparency. Each badge opens its owner's public verification page:

- [AWS Certified Developer - Associate](https://www.credly.com/badges/6288e6d3-9f06-4ff0-a192-1ab24f74d3bb/public_url), issued October 26, 2026.
- [AWS Certified AI Practitioner](https://www.credly.com/badges/2faf6a4b-b03b-4f3d-9c34-39d5b7bcffc4/public_url), issued November 2, 2026.

## CV downloads

The published downloads are `public/CV_Victor_Lopez_EN.pdf`, `public/CV_Victor_Lopez_EN.docx`, `public/CV_Victor_Lopez_ES.pdf`, and `public/CV_Victor_Lopez_ES.docx`. They include both AWS credentials and distinguish implemented skills from technical familiarity. Review content and layout before replacing these files.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the static site and publishes it to [GitHub Pages](https://victorwkey.github.io/). Confirm that both workflow jobs complete successfully and check the published English and Spanish pages after deployment.
