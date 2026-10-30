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

## Visual direction

The full website extends the original Which Way identity: the official W mark,
Anton display headings, DM Sans body text, JetBrains Mono details, charcoal and
warm white with restrained ember accents. Fonts are self-hosted in `app/fonts`.
The visual layer lives in `app/redesign.css`; shared service content is in
`lib/services.ts`. It includes all eight services published on the original site
and retains the earlier proposal categories for compatibility.

Local browser review captures and verification results are saved in `artifacts/`
(ignored by Git). Proposal success and failure states can be tested with mocked
API responses without creating real client enquiries. Actual database delivery
requires the Supabase configuration described above.
