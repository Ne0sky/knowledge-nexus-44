-- Create waitlist table for capturing interested user emails
CREATE TABLE public.waitlist (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert into waitlist (public form)
CREATE POLICY "Anyone can join the waitlist" 
ON public.waitlist 
FOR INSERT 
WITH CHECK (true);

-- Only authenticated admins can view waitlist (you can manage via backend)
CREATE POLICY "Waitlist is viewable by service role only" 
ON public.waitlist 
FOR SELECT 
USING (false);