import { Sparkles, Mail, Github, GraduationCap } from "lucide-react";
import avatar from "@/assets/avatar.jpg";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const Hero = () => {
  return (
    <header className="relative overflow-hidden pt-12 pb-10 sm:pt-20 sm:pb-14">
      {/* Decorative pixel clouds */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <PixelCloud className="absolute left-[6%] top-10 h-10 w-16 text-white/90 animate-float" />
        <PixelCloud
          className="absolute right-[8%] top-24 h-12 w-20 text-white animate-float"
          style={{ animationDelay: "1.2s" }}
        />
        <PixelCloud
          className="absolute left-[20%] bottom-2 h-8 w-14 text-white/80 animate-float"
          style={{ animationDelay: "2s" }}
        />
        <PixelStar className="absolute right-[18%] top-8 h-5 w-5 text-highlight animate-blink" />
        <PixelStar
          className="absolute left-[40%] top-4 h-4 w-4 text-highlight animate-blink"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="mx-auto max-w-3xl px-5">
        <span className="pixel-tag bg-highlight text-highlight-foreground font-pixel text-[10px]">
          <Sparkles className="h-3 w-3" /> &nbsp;Red Panda :)
        </span>

        <div className="mt-5 flex items-center gap-5 sm:gap-7">
          <h1 className="font-display flex-1 text-4xl sm:text-5xl font-bold leading-tight text-primary-ink">
            Hi <span className="inline-block animate-float">🥳</span> This is{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Xiaoyu</span>
              <span className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-primary/35 rounded-sm" />
            </span>
            .
          </h1>

          {/* Avatar — red panda */}
          <HoverCard openDelay={120} closeDelay={120}>
            <HoverCardTrigger asChild>
              <div className="pixel-card !p-2 !rounded-2xl bg-primary-soft shrink-0 cursor-pointer">
                <div className="h-24 w-24 sm:h-28 sm:w-28 overflow-hidden rounded-xl bg-gradient-to-br from-primary/30 to-highlight/40">
                  <img
                    src={avatar}
                    alt="Xiaoyu Wang's avatar — a cute red panda"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </HoverCardTrigger>
            <HoverCardContent
              side="bottom"
              align="end"
              sideOffset={-24}
              className="w-64 pixel-card !p-3 !rounded-2xl bg-card border-2 text-sm text-foreground/90 animate-fade-in"
            >
              <div className="flex items-start gap-2">
                <Sparkles className="h-4 w-4 text-highlight shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  This avatar is made by{" "}
                  <a
                    href="https://weibo.com/u/5347613156"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-primary underline decoration-primary/40 decoration-2 underline-offset-2 hover:text-primary-ink hover:decoration-primary"
                  >
                    阿闷aman
                  </a>
                  , a Chinese cartoonist.
                </p>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>

        <p className="mt-6 text-base sm:text-lg leading-relaxed text-foreground/85">
          I'm now working as a research assistant at the{" "}
          <ExternalLink href="https://hci.cse.ust.hk/">HCI Initiative</ExternalLink> of{" "}
          <ExternalLink href="https://www.ust.hk/">
            The Hong Kong University of Science and Technology
          </ExternalLink>
          , supervised by{" "}
          <ExternalLink href="https://home.cse.ust.hk/~mxj/">Prof. Xiaojuan Ma</ExternalLink>.
          Previously I was a research intern at{" "}
          <ExternalLink href="https://english.ict.cas.cn/">
            Institute of Computing Technology, Chinese Academy of Sciences
          </ExternalLink>
          , supervised by{" "}
          <ExternalLink href="https://saintnever.github.io/">Prof. Tengxiang Zhang</ExternalLink>.
        </p>

        <p className="mt-4 text-base sm:text-lg leading-relaxed text-foreground/85">
          I received my MSc degree in Big Data Technology from{" "}
          <ExternalLink href="https://www.ust.hk/">HKUST</ExternalLink> and my BSc degree in Data
          Science at <ExternalLink href="https://yuanpei.pku.edu.cn/en/">Yuanpei College</ExternalLink>,{" "}
          <ExternalLink href="https://english.pku.edu.cn/">Peking University</ExternalLink>.
        </p>

        <p className="mt-4 text-base sm:text-lg leading-relaxed text-foreground/85">
          My research focuses on Human-Computer Interaction, encompassing both
          technique-driven approaches (e.g., designing novel{" "}
          <PaperLink targetId="gesturegpt">input</PaperLink>/
          <PaperLink targetId="webjump">output</PaperLink> techniques) and
          problem-driven approaches (e.g.{" "}
          <PaperLink targetId="signaling-human-intentions">understanding users' choices of non-verbal cues to
          express their intents</PaperLink>). While they may have different paradigms, they are deeply
          complementary. Thus, I would like to define my research interest as iteratively{" "}
          <strong className="text-primary-ink">designing novel interactive systems</strong> and{" "}
          <strong className="text-primary-ink">
            understanding users through a careful examination of their interaction with the
            system
          </strong>
          , where insights from one inform and inspire the other.
        </p>

        <p className="mt-4 text-base sm:text-lg leading-relaxed text-foreground/85">
          If you are interested in my work, feel free to chat with me 🥹.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          <SocialLink
            href="mailto:xwangij@connect.ust.hk"
            icon={Mail}
            label="Email"
            external={false}
          />
          <SocialLink
            href="https://scholar.google.com/citations?user=wZ9D8YIAAAAJ&hl=en"
            icon={GraduationCap}
            label="Google Scholar"
          />
          <SocialLink
            href="https://github.com/meow-wwww"
            icon={Github}
            label="GitHub"
          />
        </div>

      </div>
    </header>
  );
};

const SocialLink = ({
  href,
  icon: Icon,
  label,
  external = true,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  external?: boolean;
}) => (
  <a
    href={href}
    {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    className="pixel-tag bg-secondary text-secondary-foreground font-display hover:bg-accent hover:text-accent-foreground transition-colors"
  >
    <Icon className="h-3.5 w-3.5" />
    {label}
  </a>
);

const ExternalLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="font-semibold text-primary underline decoration-primary/40 decoration-2 underline-offset-2 transition-colors hover:text-primary-ink hover:decoration-primary"
  >
    {children}
  </a>
);

const PaperLink = ({
  targetId,
  children,
}: {
  targetId: string;
  children: React.ReactNode;
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", `#${targetId}`);
    }
  };
  return (
    <a
      href={`#${targetId}`}
      onClick={handleClick}
      className="underline decoration-dotted decoration-foreground/50 decoration-2 underline-offset-2 transition-colors hover:text-primary-ink hover:decoration-primary/70"
    >
      {children}
    </a>
  );
};


const PixelCloud = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    viewBox="0 0 20 12"
    className={className}
    style={style}
    fill="currentColor"
    shapeRendering="crispEdges"
    aria-hidden="true"
  >
    <rect x="4" y="4" width="12" height="6" />
    <rect x="2" y="6" width="16" height="2" />
    <rect x="6" y="2" width="6" height="2" />
    <rect x="10" y="3" width="6" height="2" />
  </svg>
);

const PixelStar = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    viewBox="0 0 7 7"
    className={className}
    style={style}
    fill="currentColor"
    shapeRendering="crispEdges"
    aria-hidden="true"
  >
    <rect x="3" y="0" width="1" height="7" />
    <rect x="0" y="3" width="7" height="1" />
    <rect x="2" y="1" width="3" height="5" />
    <rect x="1" y="2" width="5" height="3" />
  </svg>
);

export default Hero;
