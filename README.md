# Movira Help Center

Public support documentation for the Movira360 park operations platform. The site is built with Next.js App Router and statically renders its documentation routes for fast delivery and search indexing.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Environment files are separated by runtime:

- `.env.development` — shared development defaults
- `.env.production` — public production URLs
- `.env.example` — deployment variable reference

## Production

Copy `.env.example` to the environment used by your deployment platform and set the public URLs. Then run:

```bash
npm run build
```

The production build is a static export written to `out/` for private S3 and CloudFront hosting. AWS infrastructure is defined in `infra/aws-static-site.yml`.

Production is configured for `https://help.movira360.com`. Every push to the `main` branch builds and deploys through `.github/workflows/deploy-help-center.yml`; the workflow can also be started manually from GitHub Actions.

Documentation content lives in `lib/docs.ts`. Add a category or article there and its route, search entry, sidebar link, sitemap entry, and related-article links are generated automatically.
