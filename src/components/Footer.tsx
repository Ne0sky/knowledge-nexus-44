import confuseLogo from "@/assets/confuse-logo.jpeg";

const Footer = () => {
  return (
    <footer className="relative py-16 bg-secondary/30 border-t border-border/30">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-3">
              <img src={confuseLogo} alt="ConFuse logo" className="w-10 h-10 rounded-xl object-cover" />
              <span className="text-xl font-semibold text-foreground">ConFuse</span>
            </div>

            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} ConFuse. All rights reserved.</p>

            {/* <div className="flex items-center gap-8">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
