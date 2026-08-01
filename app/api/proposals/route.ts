import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import { z } from "zod";

const proposalSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().max(50).optional().default(""),
  organisation: z.string().trim().min(2).max(150),
  service: z.string().trim().min(2).max(100),
  budget: z.string().trim().max(100).optional().default(""),
  eventDate: z.string().trim().max(30).optional().default(""),
  location: z.string().trim().max(150).optional().default(""),
  details: z.string().trim().min(20).max(5000),
  website: z.string().trim().max(0).optional().default(""),
});

export async function POST(request: Request) {
  try {
    const payload = proposalSchema.safeParse(await request.json());

    if (!payload.success) {
      return NextResponse.json(
        { message: "Please check the required fields and try again." },
        { status: 400 },
      );
    }

    const supabaseUrl = process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_PUBLISHABLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json(
        { message: "Online submission is being configured." },
        { status: 503 },
      );
    }

    const supabase = createClient(supabaseUrl, supabaseKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
    const proposal = payload.data;
    const { error } = await supabase.from("proposal_requests").insert({
      name: proposal.name,
      email: proposal.email.toLowerCase(),
      phone: proposal.phone || null,
      organisation: proposal.organisation,
      service: proposal.service,
      budget: proposal.budget || null,
      event_date: proposal.eventDate || null,
      location: proposal.location || null,
      details: proposal.details,
    });

    if (error) {
      console.error("Proposal submission failed", error.code);
      return NextResponse.json(
        { message: "Online submission is temporarily unavailable." },
        { status: 503 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { message: "Please check the form and try again." },
      { status: 400 },
    );
  }
}
