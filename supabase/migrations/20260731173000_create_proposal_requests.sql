CREATE TABLE public.proposal_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  organisation TEXT NOT NULL,
  service TEXT NOT NULL,
  budget TEXT,
  event_date DATE,
  location TEXT,
  details TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'new',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.proposal_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a proposal request"
ON public.proposal_requests FOR INSERT TO anon, authenticated
WITH CHECK (true);
