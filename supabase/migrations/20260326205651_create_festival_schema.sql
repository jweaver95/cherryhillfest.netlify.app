/*
  # Cherry Hill Festival Database Schema

  1. New Tables
    - `stats`
      - `id` (uuid, primary key)
      - `label` (text) - e.g., "Years of History"
      - `value` (integer) - e.g., 250
      - `order_index` (integer) - for display ordering
      - `created_at` (timestamp)
    
    - `artists`
      - `id` (uuid, primary key)
      - `name` (text)
      - `bio` (text)
      - `role` (text) - e.g., "Tradition-Keeper", "Historian", "Performer"
      - `image_url` (text)
      - `performance_time` (text)
      - `stage` (text)
      - `featured` (boolean)
      - `created_at` (timestamp)
    
    - `schedule_events`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `start_time` (time)
      - `end_time` (time)
      - `location` (text)
      - `category` (text) - e.g., "Performance", "Activity", "Food"
      - `created_at` (timestamp)
    
    - `partners`
      - `id` (uuid, primary key)
      - `name` (text)
      - `tier` (text) - e.g., "Title", "Platinum", "Gold", "Silver", "Bronze", "Cowrie"
      - `logo_url` (text)
      - `website` (text)
      - `description` (text)
      - `order_index` (integer)
      - `created_at` (timestamp)
    
    - `heritage_stories`
      - `id` (uuid, primary key)
      - `title` (text)
      - `content` (text)
      - `year` (integer)
      - `image_url` (text)
      - `featured` (boolean)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add public read access policies (festival is public information)
*/

CREATE TABLE IF NOT EXISTS stats (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  label text NOT NULL,
  value integer NOT NULL,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS artists (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  bio text DEFAULT '',
  role text DEFAULT 'Performer',
  image_url text DEFAULT '',
  performance_time text DEFAULT '',
  stage text DEFAULT '',
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS schedule_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text DEFAULT '',
  start_time time NOT NULL,
  end_time time NOT NULL,
  location text DEFAULT '',
  category text DEFAULT 'Performance',
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS partners (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  tier text NOT NULL,
  logo_url text DEFAULT '',
  website text DEFAULT '',
  description text DEFAULT '',
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS heritage_stories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  year integer DEFAULT 1944,
  image_url text DEFAULT '',
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE artists ENABLE ROW LEVEL SECURITY;
ALTER TABLE schedule_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE partners ENABLE ROW LEVEL SECURITY;
ALTER TABLE heritage_stories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view stats"
  ON stats FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Public can view artists"
  ON artists FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Public can view schedule"
  ON schedule_events FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Public can view partners"
  ON partners FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Public can view heritage stories"
  ON heritage_stories FOR SELECT
  TO anon
  USING (true);