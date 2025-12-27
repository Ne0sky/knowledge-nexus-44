import { ArrowDown } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Connect Your Sources",
    description: "Link GitHub, Bitbucket, Slack, Jira, and more. Upload docs, PDFs, and any knowledge base. One-click integrations.",
    gradient: "from-primary to-primary/50"
  },
  {
    number: "02", 
    title: "Intelligent Embedding",
    description: "Our RAG system processes and embeds everything—code, conversations, issues, docs—into a unified vector database.",
    gradient: "from-primary/50 to-accent/50"
  },
  {
    number: "03",
    title: "Query From Anywhere",
    description: "Connect via MCP server to Cursor, Windsurf, Copilot, or any AI IDE. Ask questions in natural language, get precise answers.",
    gradient: "from-accent/50 to-accent"
  }
];

const HowItWorks = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container relative z-10 px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            From Chaos to{" "}
            <span className="gradient-text">Clarity</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to transform how your team accesses knowledge.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="flex gap-6 md:gap-8 items-start">
                {/* Number */}
                <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center`}>
                  <span className="text-xl font-bold text-primary-foreground">{step.number}</span>
                </div>

                {/* Content */}
                <div className="flex-1 pb-12">
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-16 w-px h-12 bg-gradient-to-b from-border to-transparent flex items-center justify-center">
                  <ArrowDown className="w-4 h-4 text-muted-foreground absolute -bottom-2" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Code preview mockup */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="rounded-2xl bg-card border border-border overflow-hidden shadow-2xl shadow-background/50">
            {/* Window header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <span className="text-xs text-muted-foreground font-mono ml-4">cursor-ai</span>
            </div>

            {/* Code content */}
            <div className="p-6 font-mono text-sm">
              <div className="flex items-start gap-4">
                <div className="text-muted-foreground">{">"}</div>
                <div>
                  <span className="text-primary">@knowledge</span>{" "}
                  <span className="text-foreground">Why does the payment service fail for EU customers?</span>
                </div>
              </div>
              
              <div className="mt-6 pl-8 border-l-2 border-primary/30">
                <p className="text-muted-foreground mb-3">Found 3 relevant sources:</p>
                <ul className="space-y-2 text-sm">
                  <li className="text-foreground/80">📝 Slack #eng-payments: "EU VAT calculation issue discussed by @alex"</li>
                  <li className="text-foreground/80">🔧 Jira PAYMENT-342: "Fix currency conversion for EUR"</li>
                  <li className="text-foreground/80">💻 src/payments/vat.ts: Line 45-67 - VAT calculation logic</li>
                </ul>
                <p className="mt-4 text-foreground">
                  The EU payment failure is caused by an incorrect VAT calculation in <code className="px-1.5 py-0.5 rounded bg-secondary text-primary">vat.ts</code>. 
                  The fix was merged in PR #892 but not yet deployed...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
