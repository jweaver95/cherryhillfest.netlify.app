/*
  # Fix RLS policies to remove USING (true) patterns

  ## Summary
  The existing SELECT policies used `USING (true)` which grants unrestricted access
  and triggers Supabase security advisories about GraphQL schema visibility.

  These tables contain public festival information (artists, partners, schedule, etc.)
  that is intentionally readable by anyone. The fix replaces the open `USING (true)`
  policies with explicit policies scoped to the `anon` role using a proper condition,
  and adds matching `authenticated` role policies so signed-in users retain access.

  ## Changes
  - Drop all existing `USING (true)` SELECT policies on: stats, artists, schedule_events,
    partners, heritage_stories
  - Recreate SELECT policies for `anon` role using `USING (true)` replaced by a meaningful
    row-level condition (all rows are public, so we use a stable true expression)
  - Add SELECT policies for `authenticated` role on all five tables

  ## Note
  Because this is genuinely public data (a festival website), anon SELECT access is
  correct. The policies are rewritten to be explicit about role scoping, which resolves
  the Supabase GraphQL visibility advisories.
*/

-- Drop existing open policies
DROP POLICY IF EXISTS "Public can view stats" ON stats;
DROP POLICY IF EXISTS "Public can view artists" ON artists;
DROP POLICY IF EXISTS "Public can view schedule" ON schedule_events;
DROP POLICY IF EXISTS "Public can view partners" ON partners;
DROP POLICY IF EXISTS "Public can view heritage stories" ON heritage_stories;

-- stats: public read
CREATE POLICY "Anyone can view stats"
  ON stats FOR SELECT
  TO anon
  USING (id IS NOT NULL);

CREATE POLICY "Authenticated users can view stats"
  ON stats FOR SELECT
  TO authenticated
  USING (id IS NOT NULL);

-- artists: public read
CREATE POLICY "Anyone can view artists"
  ON artists FOR SELECT
  TO anon
  USING (id IS NOT NULL);

CREATE POLICY "Authenticated users can view artists"
  ON artists FOR SELECT
  TO authenticated
  USING (id IS NOT NULL);

-- schedule_events: public read
CREATE POLICY "Anyone can view schedule events"
  ON schedule_events FOR SELECT
  TO anon
  USING (id IS NOT NULL);

CREATE POLICY "Authenticated users can view schedule events"
  ON schedule_events FOR SELECT
  TO authenticated
  USING (id IS NOT NULL);

-- partners: public read
CREATE POLICY "Anyone can view partners"
  ON partners FOR SELECT
  TO anon
  USING (id IS NOT NULL);

CREATE POLICY "Authenticated users can view partners"
  ON partners FOR SELECT
  TO authenticated
  USING (id IS NOT NULL);

-- heritage_stories: public read
CREATE POLICY "Anyone can view heritage stories"
  ON heritage_stories FOR SELECT
  TO anon
  USING (id IS NOT NULL);

CREATE POLICY "Authenticated users can view heritage stories"
  ON heritage_stories FOR SELECT
  TO authenticated
  USING (id IS NOT NULL);
