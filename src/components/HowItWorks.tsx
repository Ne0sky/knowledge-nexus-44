import { useState } from "react";
import { Check } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Connect everything",
    description: "GitHub, Bitbucket, Slack, Jira - one-click integrations. Upload docs, PDFs, and any knowledge base.",
    highlights: ["One-click setup", "Multiple integrations", "Secure OAuth"],
  },
  {
    number: "02",
    title: "AI processes & learns",
    description:
      "Our RAG system processes and embeds everything into a unified database. Code, conversations, issues, docs - all connected.",
    highlights: ["Semantic understanding", "Real-time indexing", "Smart chunking"],
  },
  {
    number: "03",
    title: "Query from anywhere",
    description:
      "Connect via MCP server to your favorite IDE. Ask questions in natural language, get precise answers with full context.",
    highlights: ["Works in any IDE", "Natural language", "Instant answers"],
  },
];

type ExampleType = {
  id: string;
  label: string;
  role: string;
  query: string;
  isCode: boolean;
  fileName?: string;
  code?: React.ReactNode;
  contextItems?: Array<{ icon: string; text: string }>;
  answer?: string;
  reasons: Array<{ icon: string; text: string; highlight: string }>;
};

const examples: ExampleType[] = [
  {
    id: "rate-limiter",
    label: "For Developers",
    role: "Developer",
    query: "How should I implement a rate limiter for our API?",
    isCode: true,
    fileName: "src/middleware/rateLimiter.ts",
    code: (
      <>
        <span className="text-violet-400">import</span>
        <span className="text-slate-300">{" { Redis } "}</span>
        <span className="text-violet-400">from</span>
        <span className="text-amber-300"> &apos;@upstash/redis&apos;</span>
        <span className="text-slate-300">;</span>
        {"\n"}
        <span className="text-violet-400">import</span>
        <span className="text-slate-300">{" { Ratelimit } "}</span>
        <span className="text-violet-400">from</span>
        <span className="text-amber-300"> &apos;@upstash/ratelimit&apos;</span>
        <span className="text-slate-300">;</span>
        {"\n\n"}
        <span className="text-slate-500">{"// Following your team's singleton pattern from auth.ts"}</span>
        {"\n"}
        <span className="text-violet-400">const</span>
        <span className="text-slate-300"> ratelimit = </span>
        <span className="text-violet-400">new</span>
        <span className="text-cyan-400"> Ratelimit</span>
        <span className="text-slate-300">({"{"}</span>
        {"\n"}
        <span className="text-slate-300"> redis: </span>
        <span className="text-cyan-400">Redis</span>
        <span className="text-slate-300">.fromEnv(),</span>
        {"\n"}
        <span className="text-slate-300"> limiter: </span>
        <span className="text-cyan-400">Ratelimit</span>
        <span className="text-slate-300">.slidingWindow(</span>
        <span className="text-amber-300">10</span>
        <span className="text-slate-300">, </span>
        <span className="text-amber-300">&quot;10 s&quot;</span>
        <span className="text-slate-300">),</span>
        {"\n"}
        <span className="text-slate-300"> analytics: </span>
        <span className="text-amber-300">true</span>
        <span className="text-slate-300">,</span>
        {"\n"}
        <span className="text-slate-300">{"});"}</span>
        {"\n\n"}
        <span className="text-violet-400">export async function</span>
        <span className="text-cyan-400"> checkRateLimit</span>
        <span className="text-slate-300">(userId: </span>
        <span className="text-cyan-400">string</span>
        <span className="text-slate-300">) {"{"}</span>
        {"\n"}
        <span className="text-slate-300">{"  "}</span>
        <span className="text-violet-400">const</span>
        <span className="text-slate-300">{" { success, limit, remaining } = "}</span>
        <span className="text-violet-400">await</span>
        <span className="text-slate-300"> ratelimit.limit(userId);</span>
        {"\n"}
        <span className="text-slate-300">{"  "}</span>
        <span className="text-violet-400">return</span>
        <span className="text-slate-300">{" { success, limit, remaining }"};</span>
        {"\n"}
        <span className="text-slate-300">{"}"}</span>
      </>
    ),
    reasons: [
      // { icon: "📁", text: "Matches your singleton pattern used in auth.ts, db.ts", highlight: "singleton pattern" },
      // { icon: "✓", text: "Uses @upstash/redis - already in your package.json", highlight: "@upstash/redis" },
      // { icon: "📋", text: "Follows your team error handling from CONTRIBUTING.md", highlight: "CONTRIBUTING.md" },
    ],
  },
  {
    id: "eu-payments",
    label: "For Managers",
    role: "Manager",
    query: "Why are EU payments failing? What is the status?",
    isCode: false,
    contextItems: [
      { icon: "💬", text: 'Slack #eng-payments: "EU VAT calculation has a bug for Germany" - @alex, 2 days ago' },
      { icon: "🎫", text: 'Jira PAYMENT-342: "Fix currency conversion for EUR" - In Progress, assigned to Sarah' },
      { icon: "📄", text: "Confluence: EU Compliance Doc - Updated yesterday with new VAT rates" },
      { icon: "🔀", text: 'GitHub PR #892: "Fix VAT calculation" - Merged, awaiting deployment' },
    ],
    answer:
      "EU payments are failing due to incorrect VAT calculation for German customers. Sarah is working on it (PAYMENT-342). The fix was merged in PR #892 but hasn't been deployed yet. ETA for deployment is tomorrow according to the release schedule.",
    reasons: [
      { icon: "💬", text: "Found context from Slack conversations in #eng-payments", highlight: "#eng-payments" },
      { icon: "🎫", text: "Linked to active Jira ticket with assignee and status", highlight: "PAYMENT-342" },
      { icon: "🔀", text: "Tracked the fix through GitHub PR to deployment", highlight: "PR #892" },
    ],
  },
];
const HowItWorks = () => {
  const [activeExample, setActiveExample] = useState("rate-limiter");
  const currentExample = examples.find((e) => e.id === activeExample) || examples[0];

  return (
    <section id="how-it-works" className="relative py-32 overflow-hidden">
      <div className="container relative z-10 px-4">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
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
                <div
                  className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-border via-primary/30 to-border z-0"
                  style={{ width: "calc(100% - 2rem)" }}
                />
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

        {/* Interactive code demo with tabs */}
        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl bg-foreground/[0.03] border border-border overflow-hidden shadow-medium">
            {/* Window header with tabs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 px-5 py-4 bg-secondary/50 border-b border-border">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-amber-400/60" />
                <div className="w-3 h-3 rounded-full bg-emerald-400/60" />
              </div>

              {/* Tabs */}
              <div className="flex-1 flex items-center justify-center gap-3">
                {examples.map((example) => (
                  <button
                    key={example.id}
                    onClick={() => setActiveExample(example.id)}
                    className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                      activeExample === example.id
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    {example.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Code content */}
            <div className="p-6 md:p-8 font-mono text-sm bg-[#1a1a2e] overflow-x-auto">
              {/* Query */}
              <div className="flex items-start gap-4 text-slate-100">
                <span className="text-emerald-400 font-bold select-none">❯</span>
                <div>
                  <span className="text-violet-400 font-semibold">@knowledge</span>
                  <span className="text-slate-300 ml-2">{currentExample.query}</span>
                </div>
              </div>

              {/* Response */}
              <div className="mt-8 pl-6 border-l-2 border-violet-500/30">
                <p className="text-slate-500 text-xs uppercase tracking-wider mb-4">
                  {currentExample.isCode
                    ? "Based on your codebase patterns & best practices:"
                    : "Found relevant context from your knowledge base:"}
                </p>

                {currentExample.isCode ? (
                  /* Code example for developers */
                  <div className="rounded-xl bg-[#0d0d1a] border border-slate-700/50 overflow-hidden">
                    <div className="flex items-center justify-between px-4 py-2 bg-slate-800/50 border-b border-slate-700/50">
                      <span className="text-xs text-slate-400">{currentExample.fileName}</span>
                      <span className="text-xs text-emerald-400">Recommended pattern</span>
                    </div>
                    <pre className="p-4 text-xs md:text-sm overflow-x-auto">
                      <code>{currentExample.code}</code>
                    </pre>
                  </div>
                ) : (
                  /* Context items for managers */
                  <div className="space-y-3">
                    {currentExample.contextItems?.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/30 hover:bg-slate-800/50 transition-colors"
                      >
                        <span>{item.icon}</span>
                        <span className="text-slate-300 text-xs md:text-sm">{item.text}</span>
                      </div>
                    ))}

                    {/* Answer summary for managers */}
                    <div className="mt-4 p-4 rounded-xl bg-violet-500/10 border border-violet-500/20">
                      <p className="text-slate-200 leading-relaxed text-sm">
                        <span className="text-violet-400 font-semibold">Summary:</span> {currentExample.answer}
                      </p>
                    </div>
                  </div>
                )}

                {/* Context sources / reasons */}
                <div className="mt-6 space-y-2">
                  <p className="text-slate-500 text-xs uppercase tracking-wider mb-3">
                    {currentExample.isCode ? "Why this approach:" : "Sources connected:"}
                  </p>
                  {currentExample.reasons.map((reason, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/30 hover:bg-slate-800/50 transition-colors"
                    >
                      <span
                        className={
                          reason.icon === "✓"
                            ? "text-emerald-400"
                            : reason.icon === "💳" || reason.icon === "🔀"
                              ? "text-amber-400"
                              : "text-violet-400"
                        }
                      >
                        {reason.icon}
                      </span>
                      <span className="text-slate-300 text-xs md:text-sm">
                        {reason.text.split(reason.highlight).map((part, i, arr) => (
                          <span key={i}>
                            {part}
                            {i < arr.length - 1 && (
                              <code className="px-1.5 py-0.5 rounded bg-slate-700 text-violet-300">
                                {reason.highlight}
                              </code>
                            )}
                          </span>
                        ))}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom indicator */}
                <div className="mt-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                  <p className="text-slate-200 leading-relaxed text-sm">
                    <span className="text-emerald-400 font-semibold">
                      {currentExample.isCode ? "Ready to ship:" : "Full context:"}
                    </span>{" "}
                    {currentExample.isCode
                      ? "This code follows your existing patterns, uses your installed deps, and matches your team's style guide."
                      : "All relevant information from Slack, Jira, GitHub, and docs - connected and summarized instantly."}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom caption */}
          <p className="text-center text-muted-foreground text-sm mt-6">
            Get production-ready code that matches your team&apos;s patterns and best practices
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
