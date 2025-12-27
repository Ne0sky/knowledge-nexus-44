import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Loader2, Sparkles, Zap, Shield } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const Hero = () => {
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient opacity-80" />
      
      {/* Animated blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-blob" style={{ animationDelay: "-4s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl animate-pulse-soft" />

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Floating badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card border border-border/50 shadow-soft mb-10 animate-fade-in">
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
            </div>
            <span className="text-sm font-medium text-foreground">The Complete Knowledge Layer for Modern Teams</span>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 animate-slide-up leading-[0.95] tracking-tight">
            Your codebase,
            <br />
            <span className="gradient-text">finally understood.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-slide-up stagger-2 text-balance leading-relaxed">
            Connect your entire dev ecosystem—GitHub, Slack, Jira, docs—and let AI 
            understand the full context. Query from any IDE, zero vendor lock-in.
          </p>

          {/* Email capture form - LARGER */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto animate-slide-up stagger-3">
            <Input
              type="email"
              placeholder="Enter your work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              size="xl"
              className="flex-1 shadow-soft"
              disabled={isLoading}
            />
            <Button type="submit" variant="hero" size="xl" disabled={isLoading} className="min-w-[180px]">
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  Get Early Access
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </Button>
          </form>

          {/* Trust indicators */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8 animate-slide-up stagger-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Zap className="w-4 h-4 text-primary" />
              <span>Instant setup</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="w-4 h-4 text-primary" />
              <span>SOC 2 compliant</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>500+ on waitlist</span>
            </div>
          </div>

          {/* Tool logos */}
          <div className="mt-20 animate-slide-up stagger-5">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8 font-medium">
              Works with your favorite tools
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
              {["GitHub", "Slack", "Jira", "Cursor", "VS Code", "Bitbucket"].map((tool, index) => (
                <div 
                  key={tool} 
                  className="px-4 py-2 rounded-xl bg-card border border-border/30 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-border transition-all duration-300 hover:shadow-soft cursor-default"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
