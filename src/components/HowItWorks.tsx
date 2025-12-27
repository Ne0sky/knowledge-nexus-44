import { Check } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Connect everything",
    description: "GitHub, Bitbucket, Slack, Jira—one-click integrations. Upload docs, PDFs, and any knowledge base.",
    highlights: ["One-click setup", "50+ integrations", "Secure OAuth"],
  },
  {
    number: "02", 
    title: "AI processes & learns",
    description: "Our RAG system processes and embeds everything into a unified vector database. Code, conversations, issues, docs—all connected.",
    highlights: ["Semantic understanding", "Real-time indexing", "Smart chunking"],
  },
  {
    number: "03",
    title: "Query from anywhere",
    description: "Connect via MCP server to your favorite IDE. Ask questions in natural language, get precise answers with full context.",
    highlights: ["Works in any IDE", "Natural language", "Instant answers"],
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="relative py-32 overflow-hidden">
      <div className="container relative z-10 px-4">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
            How it works
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            From chaos to
            <br />
            <span className="gradient-text">clarity in minutes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to transform how your team accesses knowledge.
          </p>
        </div>

        {/* Steps - horizontal layout on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-border via-primary/30 to-border z-0" style={{ width: "calc(100% - 2rem)" }} />
              )}
              
              <div className="relative bg-card rounded-3xl border border-border/50 p-8 hover:border-border hover:shadow-medium transition-all duration-500">
                {/* Step number */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground text-2xl font-bold mb-6 shadow-lg">
                  {step.number}
                </div>
                
                <h3 className="text-2xl font-semibold mb-4 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{step.description}</p>
                
                {/* Highlights */}
                <div className="space-y-3">
                  {step.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/10">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive demo mockup */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl bg-foreground/[0.03] border border-border overflow-hidden shadow-medium">
            {/* Window header */}
            <div className="flex items-center gap-3 px-5 py-4 bg-secondary/50 border-b border-border">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-amber-400/60" />
                <div className="w-3 h-3 rounded-full bg-emerald-400/60" />
              </div>
              <div className="flex-1 flex items-center justify-center">
                <span className="text-xs text-muted-foreground font-mono px-3 py-1 rounded-full bg-muted/50">cursor — knowledge-layer</span>
              </div>
            </div>

            {/* Code content */}
            <div className="p-8 font-mono text-sm bg-card">
              <div className="flex items-start gap-4 text-foreground">
                <span className="text-primary font-bold">❯</span>
                <div>
                  <span className="text-primary font-semibold">@knowledge</span>
                  <span className="text-muted-foreground ml-2">Why does the payment service fail for EU customers?</span>
                </div>
              </div>
              
              <div className="mt-8 pl-6 border-l-2 border-primary/30">
                <p className="text-muted-foreground text-xs uppercase tracking-wider mb-4">Found 3 relevant sources:</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
                    <span>💬</span>
                    <span className="text-foreground">Slack #eng-payments: "EU VAT calculation issue" — @alex, 2 days ago</span>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
                    <span>🎫</span>
                    <span className="text-foreground">Jira PAYMENT-342: "Fix currency conversion for EUR" — In Progress</span>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
                    <span>📄</span>
                    <span className="text-foreground">src/payments/vat.ts: Line 45-67 — VAT calculation logic</span>
                  </div>
                </div>
                <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <p className="text-foreground leading-relaxed">
                    <span className="text-primary font-semibold">Answer:</span> The EU payment failure is caused by an incorrect VAT calculation in <code className="px-2 py-0.5 rounded-md bg-muted text-primary font-mono text-xs">vat.ts</code>. 
                    The fix was merged in PR #892 but not yet deployed to production.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
