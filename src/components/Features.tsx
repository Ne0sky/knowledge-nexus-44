import { Database, GitBranch, MessageSquare, FileText, Cpu, Lock, Zap, Globe } from "lucide-react";

const features = [
  {
    icon: GitBranch,
    title: "Code Context Embedding",
    description: "Every commit, every branch, every line of code—embedded in our vector database for instant retrieval and understanding."
  },
  {
    icon: MessageSquare,
    title: "Conversation Intelligence",
    description: "Connect Slack, Teams, and Discord. Capture the 'why' behind decisions, not just the code changes."
  },
  {
    icon: Database,
    title: "Issue Tracking Sync",
    description: "Jira, Linear, GitHub Issues—all connected. Link bugs to fixes, features to implementations automatically."
  },
  {
    icon: FileText,
    title: "Document Everything",
    description: "PDFs, Docs, Excel, Markdown—train your knowledge layer with all your documentation and specs."
  },
  {
    icon: Cpu,
    title: "MCP Server Native",
    description: "Connect via Model Context Protocol. Use Cursor, Windsurf, Copilot—or any AI-powered IDE of your choice."
  },
  {
    icon: Zap,
    title: "Real-time Embedding",
    description: "Push code? It's indexed. New Slack message? Already embedded. Your knowledge layer stays current, always."
  },
  {
    icon: Globe,
    title: "Scale Without Limits",
    description: "From solo developer to enterprise teams. Our architecture scales with your organization, not against it."
  },
  {
    icon: Lock,
    title: "Zero Vendor Lock-in",
    description: "Your data, your choice. Switch IDEs, change providers—your knowledge layer travels with you."
  }
];

const Features = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />
      
      <div className="container relative z-10 px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Everything Your Team Needs to{" "}
            <span className="gradient-text">Know</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            One unified knowledge layer that understands your entire software development lifecycle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
