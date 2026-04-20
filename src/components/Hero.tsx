import { Sparkles } from "lucide-react";
import avatar from "@/assets/avatar.jpg";

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
          <Sparkles className="h-3 w-3" /> hello world
        </span>

        <div className="mt-5 flex items-center gap-5 sm:gap-7">
          <h1 className="font-display flex-1 text-4xl sm:text-5xl font-bold leading-tight text-primary-ink">
            Hi <span className="inline-block animate-float">😆</span> I'm{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Xiaoyu</span>
              <span className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-primary/35 rounded-sm" />
            </span>
            .
          </h1>

          {/* Avatar — red panda */}
          <div className="pixel-card !p-2 !rounded-2xl bg-primary-soft shrink-0">
            <div className="h-24 w-24 sm:h-28 sm:w-28 overflow-hidden rounded-xl bg-gradient-to-br from-primary/30 to-highlight/40">
              <img
                src={avatar}
                alt="Xiaoyu Wang's avatar — a cute red panda"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <p className="mt-6 text-base sm:text-lg leading-relaxed text-foreground/85">
          I'm now working as a research intern at the{" "}
          <ExternalLink href="https://hci.cse.ust.hk/">HCI Initiative</ExternalLink> of{" "}
          <ExternalLink href="https://www.ust.hk/">
            The Hong Kong University of Science and Technology
          </ExternalLink>
          , under the supervision of{" "}
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
          technique-driven approaches (e.g., designing novel input/output techniques) and
          problem-driven approaches (e.g. understanding users' choices of non-verbal cues to
          express their intents). While they may have different paradigms, they are deeply
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
      </div>
    </header>
  );
};

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
