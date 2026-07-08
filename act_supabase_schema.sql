-- ============================================================================
-- EduQuest Universal Super Admin & Practice Portal — Supabase SQL Schema
-- ============================================================================
-- Run this entire script in your Supabase SQL Editor (SQL -> New Query -> Run)
-- It creates all required columns in the `profiles` table for multi-exam access
-- permissions and sets up the report tables (including ACT, SSAT, TMUA, etc.).
-- ============================================================================

-- 1. EXTEND PROFILES TABLE WITH ALL EXAM ACCESS & REQUEST FLAGS
-- (Using IF NOT EXISTS so it won't error if columns already exist)

ALTER TABLE IF EXISTS public.profiles
  ADD COLUMN IF NOT EXISTS organization TEXT,
  -- SAT Mock
  ADD COLUMN IF NOT EXISTS has_access BOOLEAN DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS sat_access_requested BOOLEAN DEFAULT FALSE,
  -- ACT (Diagnostic & Topic)
  ADD COLUMN IF NOT EXISTS has_act_access BOOLEAN DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS has_act_diag_access BOOLEAN DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS has_act_topic_access BOOLEAN DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS act_access_requested BOOLEAN DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS act_diag_access_requested BOOLEAN DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS act_topic_access_requested BOOLEAN DEFAULT FALSE,
  -- SSAT
  ADD COLUMN IF NOT EXISTS has_ssat_upper_access BOOLEAN DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS has_ssat_middle_access BOOLEAN DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS has_ssat_low_access BOOLEAN DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS ssat_upper_access_requested BOOLEAN DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS ssat_middle_access_requested BOOLEAN DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS ssat_low_access_requested BOOLEAN DEFAULT FALSE,
  -- SAT Topic & Class Tests
  ADD COLUMN IF NOT EXISTS has_topic_reading_access BOOLEAN DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS has_topic_math_access BOOLEAN DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS has_topic_class_test_access BOOLEAN DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS topic_access_requested BOOLEAN DEFAULT FALSE,
  -- TMUA
  ADD COLUMN IF NOT EXISTS has_tmua_diag_access BOOLEAN DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS has_tmua_topic_access BOOLEAN DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS tmua_access_requested BOOLEAN DEFAULT FALSE,
  -- UCAT
  ADD COLUMN IF NOT EXISTS has_ucat_access BOOLEAN DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS ucat_access_requested BOOLEAN DEFAULT FALSE,
  -- AP
  ADD COLUMN IF NOT EXISTS has_ap_access BOOLEAN DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS ap_access_requested BOOLEAN DEFAULT FALSE;

-- Ensure admin has all access by default
UPDATE public.profiles
SET 
  has_access = TRUE,
  has_act_access = TRUE,
  has_act_diag_access = TRUE,
  has_act_topic_access = TRUE,
  has_ssat_upper_access = TRUE,
  has_ssat_middle_access = TRUE,
  has_ssat_low_access = TRUE,
  has_topic_reading_access = TRUE,
  has_topic_math_access = TRUE,
  has_topic_class_test_access = TRUE,
  has_tmua_diag_access = TRUE,
  has_tmua_topic_access = TRUE,
  has_ucat_access = TRUE,
  has_ap_access = TRUE
WHERE email = 'rupali.eduquest@gmail.com';


-- ============================================================================
-- 2. CREATE AND EXTEND ACT RESULTS TABLE
-- ============================================================================
CREATE TABLE IF NOT EXISTS public.act_results (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    student_email TEXT NOT NULL,
    student_name TEXT,
    student_phone TEXT,
    exam_name TEXT DEFAULT 'ACT Practice Test',
    level TEXT DEFAULT 'Diagnostic',
    test_type TEXT DEFAULT 'Diagnostic',
    composite_score INTEGER,
    english_score INTEGER,
    math_score INTEGER,
    reading_score INTEGER,
    science_score INTEGER,
    correct INTEGER DEFAULT 0,
    wrong INTEGER DEFAULT 0,
    unattempted INTEGER DEFAULT 0,
    skipped INTEGER DEFAULT 0,
    total INTEGER DEFAULT 0,
    percentage INTEGER DEFAULT 0,
    grade TEXT DEFAULT 'B',
    section_scores JSONB,
    topic_scores JSONB,
    weak_topics TEXT,
    details JSONB,
    student_answers JSONB,
    submitted_at TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Ensure all columns exist if table was previously created with a different schema
ALTER TABLE IF EXISTS public.act_results
    ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    ADD COLUMN IF NOT EXISTS student_email TEXT,
    ADD COLUMN IF NOT EXISTS student_name TEXT,
    ADD COLUMN IF NOT EXISTS student_phone TEXT,
    ADD COLUMN IF NOT EXISTS exam_name TEXT DEFAULT 'ACT Practice Test',
    ADD COLUMN IF NOT EXISTS level TEXT DEFAULT 'Diagnostic',
    ADD COLUMN IF NOT EXISTS test_type TEXT DEFAULT 'Diagnostic',
    ADD COLUMN IF NOT EXISTS composite_score INTEGER,
    ADD COLUMN IF NOT EXISTS english_score INTEGER,
    ADD COLUMN IF NOT EXISTS math_score INTEGER,
    ADD COLUMN IF NOT EXISTS reading_score INTEGER,
    ADD COLUMN IF NOT EXISTS science_score INTEGER,
    ADD COLUMN IF NOT EXISTS correct INTEGER DEFAULT 0,
    ADD COLUMN IF NOT EXISTS wrong INTEGER DEFAULT 0,
    ADD COLUMN IF NOT EXISTS unattempted INTEGER DEFAULT 0,
    ADD COLUMN IF NOT EXISTS skipped INTEGER DEFAULT 0,
    ADD COLUMN IF NOT EXISTS total INTEGER DEFAULT 0,
    ADD COLUMN IF NOT EXISTS percentage INTEGER DEFAULT 0,
    ADD COLUMN IF NOT EXISTS grade TEXT DEFAULT 'B',
    ADD COLUMN IF NOT EXISTS section_scores JSONB,
    ADD COLUMN IF NOT EXISTS topic_scores JSONB,
    ADD COLUMN IF NOT EXISTS weak_topics TEXT,
    ADD COLUMN IF NOT EXISTS details JSONB,
    ADD COLUMN IF NOT EXISTS student_answers JSONB,
    ADD COLUMN IF NOT EXISTS submitted_at TIMESTAMPTZ DEFAULT NOW(),
    ADD COLUMN IF NOT EXISTS created_at TIMESTAMPTZ DEFAULT NOW();

ALTER TABLE public.act_results ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view their own ACT results" ON public.act_results;
DROP POLICY IF EXISTS "Users can insert their own ACT results" ON public.act_results;
DROP POLICY IF EXISTS "Admin can update ACT results" ON public.act_results;

CREATE POLICY "Users can view their own ACT results" ON public.act_results
    FOR SELECT USING (auth.uid() = user_id OR student_email = auth.jwt() ->> 'email' OR auth.jwt() ->> 'email' = 'rupali.eduquest@gmail.com');

CREATE POLICY "Users can insert their own ACT results" ON public.act_results
    FOR INSERT WITH CHECK (auth.uid() = user_id OR student_email = auth.jwt() ->> 'email' OR auth.jwt() ->> 'email' = 'rupali.eduquest@gmail.com');

CREATE POLICY "Admin can update ACT results" ON public.act_results
    FOR UPDATE USING (auth.jwt() ->> 'email' = 'rupali.eduquest@gmail.com');


-- ============================================================================
-- 3. CREATE SAT RESULTS TABLE (Mock SAT)
-- ============================================================================
CREATE TABLE IF NOT EXISTS public.sat_results (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    student_email TEXT NOT NULL,
    student_name TEXT,
    exam_name TEXT DEFAULT 'Digital SAT Practice',
    sat_score INTEGER,
    rw_score INTEGER,
    math_score INTEGER,
    correct INTEGER DEFAULT 0,
    wrong INTEGER DEFAULT 0,
    unattempted INTEGER DEFAULT 0,
    total INTEGER DEFAULT 0,
    percentage INTEGER DEFAULT 0,
    grade TEXT DEFAULT 'B',
    details JSONB,
    submitted_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE IF EXISTS public.sat_results
    ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    ADD COLUMN IF NOT EXISTS student_email TEXT,
    ADD COLUMN IF NOT EXISTS student_name TEXT,
    ADD COLUMN IF NOT EXISTS exam_name TEXT DEFAULT 'Digital SAT Practice',
    ADD COLUMN IF NOT EXISTS sat_score INTEGER,
    ADD COLUMN IF NOT EXISTS rw_score INTEGER,
    ADD COLUMN IF NOT EXISTS math_score INTEGER,
    ADD COLUMN IF NOT EXISTS correct INTEGER DEFAULT 0,
    ADD COLUMN IF NOT EXISTS wrong INTEGER DEFAULT 0,
    ADD COLUMN IF NOT EXISTS unattempted INTEGER DEFAULT 0,
    ADD COLUMN IF NOT EXISTS total INTEGER DEFAULT 0,
    ADD COLUMN IF NOT EXISTS percentage INTEGER DEFAULT 0,
    ADD COLUMN IF NOT EXISTS grade TEXT DEFAULT 'B',
    ADD COLUMN IF NOT EXISTS details JSONB,
    ADD COLUMN IF NOT EXISTS submitted_at TIMESTAMPTZ DEFAULT NOW();

ALTER TABLE public.sat_results ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view own SAT results" ON public.sat_results;
DROP POLICY IF EXISTS "Users can insert own SAT results" ON public.sat_results;

CREATE POLICY "Users can view own SAT results" ON public.sat_results
    FOR SELECT USING (auth.uid() = user_id OR student_email = auth.jwt() ->> 'email' OR auth.jwt() ->> 'email' = 'rupali.eduquest@gmail.com');

CREATE POLICY "Users can insert own SAT results" ON public.sat_results
    FOR INSERT WITH CHECK (auth.uid() = user_id OR student_email = auth.jwt() ->> 'email' OR auth.jwt() ->> 'email' = 'rupali.eduquest@gmail.com');


-- ============================================================================
-- 4. CREATE SSAT REPORT TABLE
-- ============================================================================
CREATE TABLE IF NOT EXISTS public.ssat_report (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    student_email TEXT,
    student_name TEXT,
    exam_title TEXT DEFAULT 'SSAT Practice Test',
    level TEXT DEFAULT 'Upper Level',
    scaled_score INTEGER,
    correct_count INTEGER DEFAULT 0,
    wrong INTEGER DEFAULT 0,
    unattempted INTEGER DEFAULT 0,
    total_questions INTEGER DEFAULT 0,
    percentage INTEGER DEFAULT 0,
    grade TEXT DEFAULT 'B',
    details_json JSONB,
    submit_time TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE IF EXISTS public.ssat_report
    ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    ADD COLUMN IF NOT EXISTS student_email TEXT,
    ADD COLUMN IF NOT EXISTS student_name TEXT,
    ADD COLUMN IF NOT EXISTS exam_title TEXT DEFAULT 'SSAT Practice Test',
    ADD COLUMN IF NOT EXISTS level TEXT DEFAULT 'Upper Level',
    ADD COLUMN IF NOT EXISTS scaled_score INTEGER,
    ADD COLUMN IF NOT EXISTS correct_count INTEGER DEFAULT 0,
    ADD COLUMN IF NOT EXISTS wrong INTEGER DEFAULT 0,
    ADD COLUMN IF NOT EXISTS unattempted INTEGER DEFAULT 0,
    ADD COLUMN IF NOT EXISTS total_questions INTEGER DEFAULT 0,
    ADD COLUMN IF NOT EXISTS percentage INTEGER DEFAULT 0,
    ADD COLUMN IF NOT EXISTS grade TEXT DEFAULT 'B',
    ADD COLUMN IF NOT EXISTS details_json JSONB,
    ADD COLUMN IF NOT EXISTS submit_time TIMESTAMPTZ DEFAULT NOW();

ALTER TABLE public.ssat_report ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view own SSAT report" ON public.ssat_report;
DROP POLICY IF EXISTS "Users can insert own SSAT report" ON public.ssat_report;

CREATE POLICY "Users can view own SSAT report" ON public.ssat_report
    FOR SELECT USING (auth.uid() = user_id OR student_email = auth.jwt() ->> 'email' OR auth.jwt() ->> 'email' = 'rupali.eduquest@gmail.com');

CREATE POLICY "Users can insert own SSAT report" ON public.ssat_report
    FOR INSERT WITH CHECK (auth.uid() = user_id OR student_email = auth.jwt() ->> 'email' OR auth.jwt() ->> 'email' = 'rupali.eduquest@gmail.com');


-- ============================================================================
-- 5. CREATE SAT TOPIC REPORT TABLE
-- ============================================================================
CREATE TABLE IF NOT EXISTS public.sat_topic_report (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    student_email TEXT,
    student_name TEXT,
    topic TEXT DEFAULT 'SAT Topic Practice',
    level TEXT DEFAULT 'Topic Test',
    scaled_score INTEGER,
    correct_count INTEGER DEFAULT 0,
    total_questions INTEGER DEFAULT 0,
    percentage INTEGER DEFAULT 0,
    details_json JSONB,
    submit_time TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE IF EXISTS public.sat_topic_report
    ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    ADD COLUMN IF NOT EXISTS student_email TEXT,
    ADD COLUMN IF NOT EXISTS student_name TEXT,
    ADD COLUMN IF NOT EXISTS topic TEXT DEFAULT 'SAT Topic Practice',
    ADD COLUMN IF NOT EXISTS level TEXT DEFAULT 'Topic Test',
    ADD COLUMN IF NOT EXISTS scaled_score INTEGER,
    ADD COLUMN IF NOT EXISTS correct_count INTEGER DEFAULT 0,
    ADD COLUMN IF NOT EXISTS total_questions INTEGER DEFAULT 0,
    ADD COLUMN IF NOT EXISTS percentage INTEGER DEFAULT 0,
    ADD COLUMN IF NOT EXISTS details_json JSONB,
    ADD COLUMN IF NOT EXISTS submit_time TIMESTAMPTZ DEFAULT NOW();

ALTER TABLE public.sat_topic_report ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view own SAT Topic report" ON public.sat_topic_report;
DROP POLICY IF EXISTS "Users can insert own SAT Topic report" ON public.sat_topic_report;

CREATE POLICY "Users can view own SAT Topic report" ON public.sat_topic_report
    FOR SELECT USING (auth.uid() = user_id OR student_email = auth.jwt() ->> 'email' OR auth.jwt() ->> 'email' = 'rupali.eduquest@gmail.com');

CREATE POLICY "Users can insert own SAT Topic report" ON public.sat_topic_report
    FOR INSERT WITH CHECK (auth.uid() = user_id OR student_email = auth.jwt() ->> 'email' OR auth.jwt() ->> 'email' = 'rupali.eduquest@gmail.com');


-- ============================================================================
-- 6. CREATE TMUA REPORT TABLE
-- ============================================================================
CREATE TABLE IF NOT EXISTS public.tmua_report (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    student_email TEXT,
    student_name TEXT,
    exam_title TEXT DEFAULT 'TMUA Practice Test',
    level TEXT DEFAULT 'Diagnostic',
    scaled_score TEXT,
    correct_count INTEGER DEFAULT 0,
    total_questions INTEGER DEFAULT 0,
    percentage INTEGER DEFAULT 0,
    details_json JSONB,
    submit_time TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE IF EXISTS public.tmua_report
    ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    ADD COLUMN IF NOT EXISTS student_email TEXT,
    ADD COLUMN IF NOT EXISTS student_name TEXT,
    ADD COLUMN IF NOT EXISTS exam_title TEXT DEFAULT 'TMUA Practice Test',
    ADD COLUMN IF NOT EXISTS level TEXT DEFAULT 'Diagnostic',
    ADD COLUMN IF NOT EXISTS scaled_score TEXT,
    ADD COLUMN IF NOT EXISTS correct_count INTEGER DEFAULT 0,
    ADD COLUMN IF NOT EXISTS total_questions INTEGER DEFAULT 0,
    ADD COLUMN IF NOT EXISTS percentage INTEGER DEFAULT 0,
    ADD COLUMN IF NOT EXISTS details_json JSONB,
    ADD COLUMN IF NOT EXISTS submit_time TIMESTAMPTZ DEFAULT NOW();

ALTER TABLE public.tmua_report ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view own TMUA report" ON public.tmua_report;
DROP POLICY IF EXISTS "Users can insert own TMUA report" ON public.tmua_report;

CREATE POLICY "Users can view own TMUA report" ON public.tmua_report
    FOR SELECT USING (auth.uid() = user_id OR student_email = auth.jwt() ->> 'email' OR auth.jwt() ->> 'email' = 'rupali.eduquest@gmail.com');

CREATE POLICY "Users can insert own TMUA report" ON public.tmua_report
    FOR INSERT WITH CHECK (auth.uid() = user_id OR student_email = auth.jwt() ->> 'email' OR auth.jwt() ->> 'email' = 'rupali.eduquest@gmail.com');


-- ============================================================================
-- 7. CREATE UCAT DIAGNOSIS TABLE
-- ============================================================================
CREATE TABLE IF NOT EXISTS public."Ucat_diagnosis" (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    student_email TEXT,
    student_name TEXT,
    exam_title TEXT DEFAULT 'UCAT Diagnostic',
    level TEXT DEFAULT 'Diagnostic',
    scaled_score INTEGER,
    correct_count INTEGER DEFAULT 0,
    total_questions INTEGER DEFAULT 0,
    percentage INTEGER DEFAULT 0,
    details_json JSONB,
    submit_time TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE IF EXISTS public."Ucat_diagnosis"
    ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    ADD COLUMN IF NOT EXISTS student_email TEXT,
    ADD COLUMN IF NOT EXISTS student_name TEXT,
    ADD COLUMN IF NOT EXISTS exam_title TEXT DEFAULT 'UCAT Diagnostic',
    ADD COLUMN IF NOT EXISTS level TEXT DEFAULT 'Diagnostic',
    ADD COLUMN IF NOT EXISTS scaled_score INTEGER,
    ADD COLUMN IF NOT EXISTS correct_count INTEGER DEFAULT 0,
    ADD COLUMN IF NOT EXISTS total_questions INTEGER DEFAULT 0,
    ADD COLUMN IF NOT EXISTS percentage INTEGER DEFAULT 0,
    ADD COLUMN IF NOT EXISTS details_json JSONB,
    ADD COLUMN IF NOT EXISTS submit_time TIMESTAMPTZ DEFAULT NOW();

ALTER TABLE public."Ucat_diagnosis" ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view own UCAT report" ON public."Ucat_diagnosis";
DROP POLICY IF EXISTS "Users can insert own UCAT report" ON public."Ucat_diagnosis";

CREATE POLICY "Users can view own UCAT report" ON public."Ucat_diagnosis"
    FOR SELECT USING (auth.uid() = user_id OR student_email = auth.jwt() ->> 'email' OR auth.jwt() ->> 'email' = 'rupali.eduquest@gmail.com');

CREATE POLICY "Users can insert own UCAT report" ON public."Ucat_diagnosis"
    FOR INSERT WITH CHECK (auth.uid() = user_id OR student_email = auth.jwt() ->> 'email' OR auth.jwt() ->> 'email' = 'rupali.eduquest@gmail.com');


-- ============================================================================
-- 8. CREATE AP REPORT TABLE
-- ============================================================================
CREATE TABLE IF NOT EXISTS public.ap_report (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    student_email TEXT,
    student_name TEXT,
    exam_title TEXT DEFAULT 'AP Practice Exam',
    level TEXT DEFAULT 'Standard',
    scaled_score INTEGER,
    correct_count INTEGER DEFAULT 0,
    total_questions INTEGER DEFAULT 0,
    percentage INTEGER DEFAULT 0,
    details_json JSONB,
    submit_time TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE IF EXISTS public.ap_report
    ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    ADD COLUMN IF NOT EXISTS student_email TEXT,
    ADD COLUMN IF NOT EXISTS student_name TEXT,
    ADD COLUMN IF NOT EXISTS exam_title TEXT DEFAULT 'AP Practice Exam',
    ADD COLUMN IF NOT EXISTS level TEXT DEFAULT 'Standard',
    ADD COLUMN IF NOT EXISTS scaled_score INTEGER,
    ADD COLUMN IF NOT EXISTS correct_count INTEGER DEFAULT 0,
    ADD COLUMN IF NOT EXISTS total_questions INTEGER DEFAULT 0,
    ADD COLUMN IF NOT EXISTS percentage INTEGER DEFAULT 0,
    ADD COLUMN IF NOT EXISTS details_json JSONB,
    ADD COLUMN IF NOT EXISTS submit_time TIMESTAMPTZ DEFAULT NOW();

ALTER TABLE public.ap_report ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view own AP report" ON public.ap_report;
DROP POLICY IF EXISTS "Users can insert own AP report" ON public.ap_report;

CREATE POLICY "Users can view own AP report" ON public.ap_report
    FOR SELECT USING (auth.uid() = user_id OR student_email = auth.jwt() ->> 'email' OR auth.jwt() ->> 'email' = 'rupali.eduquest@gmail.com');

CREATE POLICY "Users can insert own AP report" ON public.ap_report
    FOR INSERT WITH CHECK (auth.uid() = user_id OR student_email = auth.jwt() ->> 'email' OR auth.jwt() ->> 'email' = 'rupali.eduquest@gmail.com');

-- Done! All tables and columns are ready for the Universal Portal.

