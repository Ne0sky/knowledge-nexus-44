import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Loader2, Check } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const CTA = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase
        .from("waitlist" as never)
        .insert([{ email }] as never);

      if (error) {
        if (error.code === "23505") {
          toast.info("You're already on the waitlist!");
        } else {
          throw error;
        }
      } else {
        toast.success("Welcome aboard! We'll be in touch soon.");
        setEmail("");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient opacity-60" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-[2.5rem] bg-card border border-border/50 p-10 md:p-16 shadow-medium overflow-hidden relative">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
                Ready to unlock your team's
                <br />
                <span className="gradient-text">collective knowledge?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
                Join the waitlist and be the first to experience the future of code understanding.
                Early adopters get priority access.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  size="xl"
                  className="flex-1"
                  disabled={isLoading}
                />
                <Button type="submit" variant="hero" size="xl" disabled={isLoading} className="min-w-[180px]">
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      Join Waitlist
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm">
                <span className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Check className="w-3 h-3 text-emerald-600" />
                  </div>
                  No credit card required
                </span>
                <span className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Check className="w-3 h-3 text-emerald-600" />
                  </div>
                  Cancel anytime
                </span>
                <span className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Check className="w-3 h-3 text-emerald-600" />
                  </div>
                  SOC 2 compliant
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
