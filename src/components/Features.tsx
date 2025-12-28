import { GitBranch, MessageSquare, FileText, Cpu, Zap, Globe, Database, Lock } from "lucide-react";

const features = [
  {
    icon: GitBranch,
    title: "Code Intelligence",
    description: "Every commit, branch, and line embedded in our vector DB for instant retrieval.",
    color: "from-violet-500 to-purple-500",
    size: "col-span-1 md:col-span-2 row-span-1",
  },
  {
    icon: MessageSquare,
    title: "Conversation Context",
    description: "Slack, Teams, Discord capture the 'why' behind decisions.",
    color: "from-rose-400 to-pink-500",
    size: "col-span-1 row-span-1",
  },
  {
    icon: Cpu,
    title: "MCP Native",
    description: "Use Cursor, Windsurf, Copilot or any MCP-compatible  IDE.",
    color: "from-amber-400 to-orange-500",
    size: "col-span-1 row-span-1",
  },
  {
    icon: Database,
    title: "Issue Tracking",
    description: "Jira, Linear, GitHub Issues - all connected. Link bugs to fixes automatically.",
    color: "from-emerald-400 to-teal-500",
    size: "col-span-1 row-span-1",
  },
  {
    icon: FileText,
    title: "Document Everything",
    description: "PDFs, Docs, Excel, Markdown - train with all your documentation.",
    color: "from-sky-400 to-blue-500",
    size: "col-span-1 row-span-1",
  },
  {
    icon: Zap,
    title: "Real-time Sync",
    description: "Push code? Indexed. New message? Embedded. Always current.",
    color: "from-yellow-400 to-amber-500",
    size: "col-span-1 md:col-span-2 row-span-1",
  },
  {
    icon: Globe,
    title: "Scale Without Limits",
    description: "Solo dev to enterprise. Architecture that grows with you.",
    color: "from-indigo-400 to-violet-500",
    size: "col-span-1 row-span-1",
  },
  {
    icon: Lock,
    title: "Zero Lock-in",
    description: "Your data, your choice. Switch anytime.",
    color: "from-slate-400 to-zinc-500",
    size: "col-span-1 row-span-1",
  },
];

const Features = () => {
  return (
    <section id="features" className="relative py-32 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container relative z-10 px-4">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Built for how
            <br />
            <span className="gradient-text">teams actually work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            One unified knowledge layer that understands your entire software development lifecycle.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`${feature.size} group relative rounded-3xl bg-card border border-border/50 p-8 hover:border-border transition-all duration-500 hover:shadow-medium overflow-hidden`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Gradient hover effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
