# Which Way Agency

The production Next.js website for Which Way Agency.

## Local development

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Production checks

```bash
npm run lint
npm run build
```

## Proposal submissions

The proposal API expects these Vercel environment variables:

- `SUPABASE_URL`
- `SUPABASE_PUBLISHABLE_KEY`

Apply the migration in `supabase/migrations` before enabling live submissions.

## Deployment

Import the repository into Vercel as a Next.js project. Vercel will use the
standard `next build` command automatically.
