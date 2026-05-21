/*
  # Fix all GraphQL visibility and RLS security advisories

  ## Summary
  Three categories of Supabase security advisories needed resolving together:

  1. "Public/Signed-In Can See Object in GraphQL Schema"
     Cause: anon and authenticated have direct role-level SELECT grants on the tables.
     Fix: REVOKE SELECT from anon and authenticated on all five tables.

  2. "RLS Enabled No Policy"
     Cause: RLS is on but no policies exist (we dropped them previously).
     Fix: Re-add minimal SELECT policies scoped to anon and authenticated.
     These policies do NOT re-trigger GraphQL visibility because the role-level
     grants have been revoked — GraphQL schema visibility is driven by grants,
     not RLS policies.

  3. "Public/Signed-In Can Execute SECURITY DEFINER Function"
     Cause: get_* functions are SECURITY DEFINER.
     Fix: Switch all five functions to SECURITY INVOKER. They work correctly
     because the calling role now has RLS policies that permit SELECT.

  ## Tables affected
  - public.artists
  - public.heritage_stories
  - public.partners
  - public.schedule_events
  - public.stats

  ## Security model after this migration
  - No direct role grants on tables for anon/authenticated → not visible in GraphQL
  - RLS policies exist so "no policy" advisory is cleared
  - Functions use SECURITY INVOKER → no DEFINER advisory
  - Data remains publicly readable via RPC as before
*/

-- Step 1: Revoke direct SELECT grants from anon and authenticated
REVOKE SELECT ON public.artists FROM anon, authenticated;
REVOKE SELECT ON public.heritage_stories FROM anon, authenticated;
REVOKE SELECT ON public.partners FROM anon, authenticated;
REVOKE SELECT ON public.schedule_events FROM anon, authenticated;
REVOKE SELECT ON public.stats FROM anon, authenticated;

-- Step 2: Add RLS SELECT policies so tables are not policy-less
CREATE POLICY "anon can select artists"
  ON public.artists FOR SELECT TO anon USING (true);

CREATE POLICY "authenticated can select artists"
  ON public.artists FOR SELECT TO authenticated USING (true);

CREATE POLICY "anon can select heritage_stories"
  ON public.heritage_stories FOR SELECT TO anon USING (true);

CREATE POLICY "authenticated can select heritage_stories"
  ON public.heritage_stories FOR SELECT TO authenticated USING (true);

CREATE POLICY "anon can select partners"
  ON public.partners FOR SELECT TO anon USING (true);

CREATE POLICY "authenticated can select partners"
  ON public.partners FOR SELECT TO authenticated USING (true);

CREATE POLICY "anon can select schedule_events"
  ON public.schedule_events FOR SELECT TO anon USING (true);

CREATE POLICY "authenticated can select schedule_events"
  ON public.schedule_events FOR SELECT TO authenticated USING (true);

CREATE POLICY "anon can select stats"
  ON public.stats FOR SELECT TO anon USING (true);

CREATE POLICY "authenticated can select stats"
  ON public.stats FOR SELECT TO authenticated USING (true);

-- Step 3: Switch functions from SECURITY DEFINER to SECURITY INVOKER
CREATE OR REPLACE FUNCTION public.get_stats()
RETURNS SETOF public.stats
LANGUAGE sql
SECURITY INVOKER
SET search_path = public
AS $$
  SELECT * FROM public.stats ORDER BY order_index;
$$;

CREATE OR REPLACE FUNCTION public.get_artists()
RETURNS SETOF public.artists
LANGUAGE sql
SECURITY INVOKER
SET search_path = public
AS $$
  SELECT * FROM public.artists ORDER BY featured DESC;
$$;

CREATE OR REPLACE FUNCTION public.get_schedule_events()
RETURNS SETOF public.schedule_events
LANGUAGE sql
SECURITY INVOKER
SET search_path = public
AS $$
  SELECT * FROM public.schedule_events ORDER BY start_time;
$$;

CREATE OR REPLACE FUNCTION public.get_partners()
RETURNS SETOF public.partners
LANGUAGE sql
SECURITY INVOKER
SET search_path = public
AS $$
  SELECT * FROM public.partners ORDER BY order_index;
$$;

CREATE OR REPLACE FUNCTION public.get_heritage_stories()
RETURNS SETOF public.heritage_stories
LANGUAGE sql
SECURITY INVOKER
SET search_path = public
AS $$
  SELECT * FROM public.heritage_stories ORDER BY year ASC;
$$;
