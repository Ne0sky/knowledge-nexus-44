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
      const { error } = await supabase.from("waitlist" as never).insert([{ email }] as never);

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
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-blob"
        style={{ animationDelay: "-4s" }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl animate-pulse-soft" />

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Floating badge */}

          {/* Main headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 animate-slide-up leading-[0.95] tracking-tight">
            Your context,
            <br />
            <span className="gradient-text">finally understood.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-slide-up stagger-2 text-balance leading-relaxed">
            Connect your entire dev ecosystem using GitHub, Slack, Jira, docs, etc., and let AI understand the full
            context. Query from any IDE with zero vendor lock-in.
          </p>

          {/* Email capture form - LARGER */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto animate-slide-up stagger-3"
          >
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
                  Join Waitlist
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </Button>
          </form>

          {/* Trust indicators */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8 animate-slide-up stagger-4">
            <span className="text-sm text-muted-foreground">Instant setup</span>
            <span className="text-sm text-muted-foreground">•</span>
            <span className="text-sm text-muted-foreground">SOC 2 compliant</span>
            <span className="text-sm text-muted-foreground">•</span>
            <span className="text-sm text-muted-foreground">500+ on waitlist</span>
          </div>

          {/* Tool logos */}
          <div className="mt-20 animate-slide-up stagger-5">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8 font-medium">
              Works with your favorite tools
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
              {[
                {
                  name: "GitHub",
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-foreground">
                      <title>GitHub</title>
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  ),
                  color: "text-foreground",
                  bg: "hover:bg-foreground/10",
                },
                {
                  name: "Slack",
                  icon: (
                    <svg viewBox="0 0 256 256" className="w-6 h-6">
                      <title>Slack</title>
                      <path
                        d="M53.8412698,161.320635 C53.8412698,176.152381 41.8539683,188.139683 27.0222222,188.139683 C12.1904762,188.139683 0.203174603,176.152381 0.203174603,161.320635 C0.203174603,146.488889 12.1904762,134.501587 27.0222222,134.501587 L53.8412698,134.501587 L53.8412698,161.320635 Z M67.2507937,161.320635 C67.2507937,146.488889 79.2380952,134.501587 94.0698413,134.501587 C108.901587,134.501587 120.888889,146.488889 120.888889,161.320635 L120.888889,228.368254 C120.888889,243.2 108.901587,255.187302 94.0698413,255.187302 C79.2380952,255.187302 67.2507937,243.2 67.2507937,228.368254 L67.2507937,161.320635 Z"
                        fill="#E01E5A"
                      ></path>
                      <path
                        d="M94.0698413,53.6380952 C79.2380952,53.6380952 67.2507937,41.6507937 67.2507937,26.8190476 C67.2507937,11.9873016 79.2380952,-7.10542736e-15 94.0698413,-7.10542736e-15 C108.901587,-7.10542736e-15 120.888889,11.9873016 120.888889,26.8190476 L120.888889,53.6380952 L94.0698413,53.6380952 Z M94.0698413,67.2507937 C108.901587,67.2507937 120.888889,79.2380952 120.888889,94.0698413 C120.888889,108.901587 108.901587,120.888889 94.0698413,120.888889 L26.8190476,120.888889 C11.9873016,120.888889 0,108.901587 0,94.0698413 C0,79.2380952 11.9873016,67.2507937 26.8190476,67.2507937 L94.0698413,67.2507937 Z"
                        fill="#36C5F0"
                      ></path>
                      <path
                        d="M201.549206,94.0698413 C201.549206,79.2380952 213.536508,67.2507937 228.368254,67.2507937 C243.2,67.2507937 255.187302,79.2380952 255.187302,94.0698413 C255.187302,108.901587 243.2,120.888889 228.368254,120.888889 L201.549206,120.888889 L201.549206,94.0698413 Z M188.139683,94.0698413 C188.139683,108.901587 176.152381,120.888889 161.320635,120.888889 C146.488889,120.888889 134.501587,108.901587 134.501587,94.0698413 L134.501587,26.8190476 C134.501587,11.9873016 146.488889,-1.42108547e-14 161.320635,-1.42108547e-14 C176.152381,-1.42108547e-14 188.139683,11.9873016 188.139683,26.8190476 L188.139683,94.0698413 Z"
                        fill="#2EB67D"
                      ></path>
                      <path
                        d="M161.320635,201.549206 C176.152381,201.549206 188.139683,213.536508 188.139683,228.368254 C188.139683,243.2 176.152381,255.187302 161.320635,255.187302 C146.488889,255.187302 134.501587,243.2 134.501587,228.368254 L134.501587,201.549206 L161.320635,201.549206 Z M161.320635,188.139683 C146.488889,188.139683 134.501587,176.152381 134.501587,161.320635 C134.501587,146.488889 146.488889,134.501587 161.320635,134.501587 L228.571429,134.501587 C243.403175,134.501587 255.390476,146.488889 255.390476,161.320635 C255.390476,176.152381 243.403175,188.139683 228.571429,188.139683 L161.320635,188.139683 Z"
                        fill="#ECB22E"
                      ></path>
                    </svg>
                  ),
                  color: "text-foreground",
                  bg: "hover:bg-[#E01E5A]/10",
                },
                {
                  name: "Jira",
                  icon: (
                    <svg viewBox="0 0 256 256" className="w-6 h-6">
                      <title>Jira</title>
                      <defs>
                        <linearGradient
                          x1="98.0308675%"
                          y1="0.160599572%"
                          x2="58.8877062%"
                          y2="40.7655246%"
                          id="jira-grad-1"
                        >
                          <stop stopColor="#0052CC" offset="18%"></stop>
                          <stop stopColor="#2684FF" offset="100%"></stop>
                        </linearGradient>
                        <linearGradient
                          x1="100.665247%"
                          y1="0.45503212%"
                          x2="55.4018095%"
                          y2="44.7269807%"
                          id="jira-grad-2"
                        >
                          <stop stopColor="#0052CC" offset="18%"></stop>
                          <stop stopColor="#2684FF" offset="100%"></stop>
                        </linearGradient>
                      </defs>
                      <g>
                        <path
                          d="M244.657778,0 L121.706667,0 C121.706667,14.7201046 127.554205,28.837312 137.962891,39.2459977 C148.371577,49.6546835 162.488784,55.5022222 177.208889,55.5022222 L199.857778,55.5022222 L199.857778,77.3688889 C199.877391,107.994155 224.699178,132.815943 255.324444,132.835556 L255.324444,10.6666667 C255.324444,4.77562934 250.548815,3.60722001e-16 244.657778,0 Z"
                          fill="#2684FF"
                        ></path>
                        <path
                          d="M183.822222,61.2622222 L60.8711111,61.2622222 C60.8907238,91.8874888 85.7125112,116.709276 116.337778,116.728889 L138.986667,116.728889 L138.986667,138.666667 C139.025905,169.291923 163.863607,194.097803 194.488889,194.097778 L194.488889,71.9288889 C194.488889,66.0378516 189.71326,61.2622222 183.822222,61.2622222 Z"
                          fill="url(#jira-grad-1)"
                        ></path>
                        <path
                          d="M122.951111,122.488889 L0,122.488889 C3.75391362e-15,153.14192 24.8491913,177.991111 55.5022222,177.991111 L78.2222222,177.991111 L78.2222222,199.857778 C78.241767,230.45532 103.020285,255.265647 133.617778,255.324444 L133.617778,133.155556 C133.617778,127.264518 128.842148,122.488889 122.951111,122.488889 Z"
                          fill="url(#jira-grad-2)"
                        ></path>
                      </g>
                    </svg>
                  ),
                  color: "text-foreground",
                  bg: "hover:bg-[#0052CC]/10",
                },
                {
                  name: "Cursor",
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-foreground">
                      <title>Cursor</title>
                      <path d="M11.503.131 1.891 5.678a.84.84 0 0 0-.42.726v11.188c0 .3.162.575.42.724l9.609 5.55a1 1 0 0 0 .998 0l9.61-5.55a.84.84 0 0 0 .42-.724V6.404a.84.84 0 0 0-.42-.726L12.497.131a1.01 1.01 0 0 0-.996 0M2.657 6.338h18.55c.263 0 .43.287.297.515L12.23 22.918c-.062.107-.229.064-.229-.06V12.335a.59.59 0 0 0-.295-.51l-9.11-5.257c-.109-.063-.064-.23.061-.23" />
                    </svg>
                  ),
                  color: "text-foreground",
                  bg: "hover:bg-foreground/10",
                },
                {
                  name: "VS Code",
                  icon: (
                    <svg viewBox="0 0 256 254" className="w-6 h-6">
                      <title>VS Code</title>
                      <defs>
                        <linearGradient
                          x1="50.0000484%"
                          y1="-3.91645412e-07%"
                          x2="50.0000484%"
                          y2="99.999921%"
                          id="vscode-grad-1"
                        >
                          <stop stopColor="#FFFFFF" offset="0%"></stop>
                          <stop stopColor="#FFFFFF" stopOpacity="0" offset="100%"></stop>
                        </linearGradient>
                      </defs>
                      <mask id="vscode-mask-2" fill="white">
                        <path d="M180.82764,252.605272 C184.843951,254.170159 189.42406,254.069552 193.478224,252.11917 L245.979142,226.856851 C251.495593,224.202221 255.003889,218.618034 255.003889,212.49296 L255.003889,41.1971845 C255.003889,35.0719113 251.495593,29.4886211 245.979142,26.8339907 L193.478224,1.57068551 C188.158006,-0.989256713 181.931329,-0.362230036 177.262566,3.0323459 C176.595173,3.51727166 175.959655,4.05869672 175.363982,4.65536598 L74.8565893,96.3498444 L31.0778002,63.1181557 C27.0024197,60.0246398 21.3020866,60.2780499 17.5170718,63.7211005 L3.47578059,76.4937075 C-1.15402423,80.7052561 -1.15933349,87.9889043 3.46431538,92.2072265 L41.430759,126.844525 L3.46431538,161.482221 C-1.15933349,165.700742 -1.15402423,172.984291 3.47578059,177.19584 L17.5170718,189.967949 C21.3020866,193.411497 27.0024197,193.664509 31.0778002,190.571591 L74.8565893,157.339404 L175.363982,249.034221 C176.953772,250.625007 178.82048,251.823326 180.82764,252.605272 Z M191.291764,68.9559518 L115.029663,126.844525 L191.291764,184.733396 L191.291764,68.9559518 Z"></path>
                      </mask>
                      <g>
                        <path
                          d="M246.134784,26.873337 L193.593025,1.57523773 C187.51178,-1.35300582 180.243173,-0.117807811 175.469819,4.65514684 L3.46641717,161.482221 C-1.16004072,165.700742 -1.1547215,172.984291 3.47789235,177.19584 L17.5276804,189.967949 C21.3150858,193.411497 27.0189053,193.664509 31.0966765,190.571591 L238.228667,33.4363005 C245.177523,28.1646927 255.158535,33.1209324 255.158535,41.8432608 L255.158535,41.2332436 C255.158535,35.11066 251.651235,29.5293619 246.134784,26.873337 Z"
                          fill="#0065A9"
                          fillRule="nonzero"
                          mask="url(#vscode-mask-2)"
                        ></path>
                        <path
                          d="M246.134784,226.816011 L193.593025,252.11419 C187.51178,255.041754 180.243173,253.806579 175.469819,249.034221 L3.46641717,92.2070273 C-1.16004072,87.9888047 -1.1547215,80.7049573 3.47789235,76.4935082 L17.5276804,63.7209012 C21.3150858,60.2778506 27.0189053,60.0243409 31.0966765,63.1179565 L238.228667,220.252649 C245.177523,225.524058 255.158535,220.568416 255.158535,211.84549 L255.158535,212.456104 C255.158535,218.57819 251.651235,224.159388 246.134784,226.816011 Z"
                          fill="#007ACC"
                          fillRule="nonzero"
                          mask="url(#vscode-mask-2)"
                        ></path>
                        <path
                          d="M193.428324,252.134497 C187.345086,255.060069 180.076479,253.823898 175.303125,249.050544 C181.184153,254.931571 191.240868,250.765843 191.240868,242.448334 L191.240868,11.2729623 C191.240868,2.95542269 181.184153,-1.21005093 175.303125,4.67135981 C180.076479,-0.102038107 187.345086,-1.3389793 193.428324,1.58667934 L245.961117,26.8500144 C251.481553,29.5046448 254.991841,35.0879351 254.991841,41.2132082 L254.991841,212.509283 C254.991841,218.634357 251.481553,224.217548 245.961117,226.872178 L193.428324,252.134497 Z"
                          fill="#1F9CF0"
                          fillRule="nonzero"
                          mask="url(#vscode-mask-2)"
                        ></path>
                      </g>
                    </svg>
                  ),
                  color: "text-foreground",
                  bg: "hover:bg-[#007ACC]/10",
                },
                {
                  name: "Bitbucket",
                  icon: (
                    <svg viewBox="0 0 256 231" className="w-6 h-6">
                      <title>Bitbucket</title>
                      <defs>
                        <linearGradient
                          x1="108.63338%"
                          y1="13.818022%"
                          x2="46.9265964%"
                          y2="78.7761408%"
                          id="bitbucket-grad-1"
                        >
                          <stop stopColor="#0052CC" offset="18%"></stop>
                          <stop stopColor="#2684FF" offset="100%"></stop>
                        </linearGradient>
                      </defs>
                      <g fill="none">
                        <path
                          d="M8.30813067,0.000683498206 C5.88502974,-0.0305685468 3.57212663,1.01125669 1.98985644,2.84669011 C0.407586248,4.68212353 -0.282086001,7.12328571 0.105843921,9.51533612 L34.9245512,220.888266 C35.8200362,226.227525 40.4199456,230.153012 45.8335925,230.197861 L212.873162,230.197861 C216.936516,230.250159 220.425595,227.319332 221.075449,223.30794 L255.894156,9.55634756 C256.282086,7.16429714 255.592414,4.72313497 254.010144,2.88770154 C252.427873,1.05226812 250.11497,0.0104428869 247.691869,0.0416949319 L8.30813067,0.000683498206 Z M154.924006,152.768274 L101.609142,152.768274 L87.1731177,77.3482475 L167.842608,77.3482475 L154.924006,152.768274 Z"
                          fill="#2684FF"
                        ></path>
                        <path
                          d="M244.610824,77.2417255 L167.693776,77.2417255 L154.78548,152.601582 L101.513151,152.601582 L38.6108235,227.264801 C40.6045494,228.988786 43.1464609,229.94745 45.7820986,229.969396 L212.729383,229.969396 C216.789495,230.021652 220.275791,227.093164 220.925126,223.084972 L244.610824,77.2417255 Z"
                          fill="url(#bitbucket-grad-1)"
                        ></path>
                      </g>
                    </svg>
                  ),
                  color: "text-foreground",
                  bg: "hover:bg-[#0052CC]/10",
                },
              ].map((tool, index) => (
                <div
                  key={tool.name}
                  className={`flex items-center justify-center w-12 h-12 rounded-xl bg-card border border-border/30 transition-all duration-300 hover:shadow-soft cursor-default ${tool.color} hover:border-current hover:scale-110`}
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                  title={tool.name}
                >
                  {tool.icon}
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
