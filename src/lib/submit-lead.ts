import { createClient } from "@supabase/supabase-js";

export type LeadPayload = Record<string, unknown>;

export type SubmitLeadResult = { ok: true } | { ok: false; error: string };

/**
 * Persists a lead to Bolt / Supabase (recommended) or a generic HTTPS webhook.
 *
 * Supabase: create a `leads` table with at least `payload jsonb not null` and an RLS policy
 * that allows `insert` for the `anon` role on that table (or use a server function URL instead).
 *
 * Webhook: set `VITE_LEADS_WEBHOOK_URL` to a Bolt server function, Zapier hook, etc.
 */
export async function submitLead(data: LeadPayload): Promise<SubmitLeadResult> {
  const body = {
    ...data,
    source: "vance-luxury-landing",
    submittedAt: new Date().toISOString(),
  };

  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
  const webhookUrl = import.meta.env.VITE_LEADS_WEBHOOK_URL;

  if (supabaseUrl && supabaseKey) {
    const supabase = createClient(supabaseUrl, supabaseKey);
    const { error } = await supabase.from("leads").insert({ payload: body });
    if (error) {
      return { ok: false, error: error.message };
    }
    return { ok: true };
  }

  if (webhookUrl) {
    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) {
        return { ok: false, error: `Request failed (${res.status})` };
      }
      return { ok: true };
    } catch (e) {
      const message = e instanceof Error ? e.message : "Network error";
      return { ok: false, error: message };
    }
  }

  console.warn(
    "[leads] Configure VITE_SUPABASE_URL + VITE_SUPABASE_ANON_KEY and a `leads` table, or VITE_LEADS_WEBHOOK_URL. Payload:",
    body,
  );
  return { ok: true };
}
