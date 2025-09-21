-- Create feedback table for portfolio feedback
CREATE TABLE IF NOT EXISTS public.feedback (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  message TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.feedback ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (since this is portfolio feedback)
-- Allow anyone to read feedback
CREATE POLICY "feedback_select_all" 
  ON public.feedback FOR SELECT 
  USING (true);

-- Allow anyone to insert feedback
CREATE POLICY "feedback_insert_all" 
  ON public.feedback FOR INSERT 
  WITH CHECK (true);

-- Create index for better performance on created_at ordering
CREATE INDEX IF NOT EXISTS feedback_created_at_idx ON public.feedback(created_at DESC);
