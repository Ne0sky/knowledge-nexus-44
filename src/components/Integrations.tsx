import { IntegrationIcons } from "./IntegrationIcons";

const integrations = [
  { name: "GitHub", category: "Code" },
  { name: "Bitbucket", category: "Code" },
  { name: "GitLab", category: "Code" },
  { name: "Slack", category: "Chat" },
  { name: "Discord", category: "Chat" },
  { name: "Teams", category: "Chat" },
  { name: "Jira", category: "Issues" },
  { name: "Linear", category: "Issues" },
  { name: "Notion", category: "Docs" },
  { name: "Confluence", category: "Docs" },
  { name: "Google Docs", category: "Docs" },
  { name: "Dropbox", category: "Docs" },
  { name: "OneDrive", category: "Docs" },
  { name: "Cursor", category: "IDE" },
  { name: "Windsurf", category: "IDE" },
  { name: "Copilot", category: "IDE" },
  { name: "VS Code", category: "IDE" },
  { name: "...", category: "IDE" },
];

const categories = ["Code", "Chat", "Issues", "Docs", "IDE"];

const Integrations = () => {
  return (
    <section id="integrations" className="relative py-32 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.02] to-background" />

      <div className="container relative z-10 px-4">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Integrations
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Connect your
            <br />
            <span className="gradient-text">entire ecosystem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Seamless integrations with the tools your team already uses. More added every week.
          </p>
        </div>

        {/* Category-based layout */}
        <div className="max-w-5xl mx-auto space-y-8">
          {categories.map((category) => (
            <div key={category} className="flex flex-wrap items-center gap-4">
              <span className="w-20 text-sm font-medium text-muted-foreground">{category}</span>
              <div className="flex-1 flex flex-wrap gap-3">
                {integrations
                  .filter((i) => i.category === category)
                  .map((integration) => (
                    <div
                      key={integration.name}
                      className="group flex items-center gap-3 px-5 py-3 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-soft transition-all duration-300 cursor-default"
                    >
                      <span className="w-5 h-5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {IntegrationIcons[integration.name]}
                      </span>
                      <span className="font-medium text-foreground">{integration.name}</span>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* MCP highlight */}
        <div className="mt-20 max-w-3xl mx-auto">
          <div className="relative rounded-3xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 p-8 md:p-12 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0 w-20 h-20 rounded-3xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-primary">
                <span className="text-2xl font-bold text-primary-foreground">MCP</span>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-foreground mb-2">Model Context Protocol Native</h3>
                <p className="text-muted-foreground text-lg">
                  Connect any MCP-compatible AI IDE instantly. Cursor, Windsurf, Copilot, and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
