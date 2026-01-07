import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Integrations from "@/components/Integrations";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>ConFuse</title>
        <meta name="description" content="Connect GitHub, Slack, Jira, and more. Let AI understand your entire software development lifecycle. Query your code, docs, and conversations from any IDE." />
        <meta name="keywords" content="RAG, knowledge base, code intelligence, AI, SDLC, developer tools, MCP" />
        <link rel="canonical" href="https://knowledgelayer.dev" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <section id="features">
            <Features />
          </section>
          <section id="how-it-works">
            <HowItWorks />
          </section>
          <section id="integrations">
            <Integrations />
          </section>
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
