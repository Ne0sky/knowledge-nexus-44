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
  { name: "Cursor", category: "IDE" },
  { name: "Windsurf", category: "IDE" },
  { name: "Copilot", category: "IDE" },
  { name: "VS Code", category: "IDE" },
];

const Integrations = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container relative z-10 px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Connect{" "}
            <span className="gradient-text">Everything</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Seamless integrations with the tools your team already uses. More added every week.
          </p>
        </div>

        {/* Integration grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
            {integrations.map((integration, index) => (
              <div
                key={integration.name}
                className="group relative p-4 rounded-xl bg-card/30 border border-border/30 hover:border-primary/50 hover:bg-card/50 transition-all duration-300 text-center"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-10 h-10 rounded-lg bg-secondary/50 mx-auto mb-2 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <span className="text-lg font-semibold text-primary">{integration.name.charAt(0)}</span>
                </div>
                <span className="text-xs font-medium text-foreground">{integration.name}</span>
                <span className="block text-xs text-muted-foreground mt-0.5">{integration.category}</span>
              </div>
            ))}
          </div>
        </div>

        {/* MCP highlight */}
        <div className="mt-16 max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-sm font-bold text-primary-foreground">MCP</span>
            </div>
            <div className="text-left">
              <p className="font-semibold text-foreground">Model Context Protocol Native</p>
              <p className="text-sm text-muted-foreground">Connect any MCP-compatible AI IDE instantly</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
