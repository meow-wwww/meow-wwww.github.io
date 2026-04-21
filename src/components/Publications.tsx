import { useState } from "react";
import { 
  Award, 
  ChevronDown, 
  Code2, 
  ExternalLink as ExternalLinkIcon, 
  FileText,
  Sparkles,
  Video,
 } from "lucide-react";

type Publication = {
  title: string;
  url: string;
  venue: string;
  highlight?: string;
  authors: React.ReactNode;
  tldr?: React.ReactNode;
  paper?: string;
  video?: string;
  code?: string;
};

const publications: Publication[] = [
  {
    title:
      "\"Shall We Dig Deeper?\": Designing and Evaluating Strategies for LLM Agents to Advance Knowledge Co-Construction in Asynchronous Online Discussions",
    url: "https://dl.acm.org/doi/10.1145/3772318.3790551",
    venue: "CHI '26",
    authors: (
      <>
         Yuanhao Zhang, Wenbo Li, <Me />, Kangyu Yuan, Shuai Ma, Xiaojuan Ma
      </>
    ),
    tldr: (
      <>
        <p>
          We studied how an LLM-powered agent with different intervention styles (telling, selling, participating, delegating) could advance knowledge co-construction in asynchronous online discussions.
        <br />
          Each style has distinct effects on both content and experience.
        </p>
      </>
    ),
    paper: "/files/Zhang et al. - 2026 - Shall We Dig Deeper Designing and Evaluating Strategies for LLM Agents to Advance Knowledge Co-C.pdf",
    code: "https://github.com/Yuanky123/Knowledgebot-backend",
  },
  {
    title:
      "Signaling Human Intentions to Service Robots: Understanding the Use of Social Cues during In-Person Conversations",
    url: "https://dl.acm.org/doi/full/10.1145/3706598.3714235",
    venue: "CHI '25",
    highlight: "Honorable Mention",
    authors: (
      <>
        Hanfang Lyu, <Me />, Nandi Zhang, Shuai Ma, Qian Zhu, Yuhan Luo, Fugee Tsung, Xiaojuan Ma
      </>
    ),
    tldr: (
      <>
        <p>
          We got some empirical insights on how robot morphologies and conversation roles will affect users' choices of social cues to signal their intentions.
        <br />
          Some findings are quite counterintuitive🧐. For example, guess whether the speaker or the listener will use more verbal cues? 
          At the beginning we all thought that the listener will use more verbal cues since their verbal channel is less occupied. 
          But it turned out that they will use less verbal cues for politeness concerns ... :)
        </p>
      </>
    ),
    paper: "/files/Lyu et al. - 2025 - Signaling Human Intentions to Service Robots Understanding the Use of Social Cues during In-Person Conversations.pdf",
    code: "https://github.com/meow-wwww/QuestPro_HRI_Detection",
    video: "https://www.youtube.com/watch?v=iUH8Oag2Dso",
  },
  {
    title:
      "GestureGPT: Toward Zero-Shot Free-Form Hand Gesture Understanding with Large Language Model Agents",
    url: "https://dl.acm.org/doi/10.1145/3698145",
    venue: "ISS '24",
    highlight: "Best Paper",
    authors: (
      <>
        Xin Zeng*, <Me />*, Tengxiang Zhang, Chun Yu, Shengdong Zhao, Yiqiang Chen
      </>
    ),
    tldr: (
      <>
        <p>
          Existing gesture interfaces only works with a fixed set of gestures (no matter they are built-in or user-defined), 
          which introduces learning or demonstration efforts for users. 
        <br />
          We built an LLM-based framework to understand the intentions behind <strong>free-form</strong> hand gestures, with the help of contextual information. 
        </p>
      </>
    ),
    paper: "/files/Zeng et al. - 2024 - GestureGPT Toward Zero-Shot Free-Form Hand Gesture Understanding with Large Language Model Agents.pdf",
  },
  {
    title: "WebJump: AR-facilitated Distributed Display of Web Pages",
    url: "https://dl.acm.org/doi/10.1145/3544549.3585669",
    venue: "CHI EA '23",
    authors: (
      <>
        Xin Zeng, <Me />, Zhengtai Gou, Yiqiang Chen, Tengxiang Zhang
      </>
    ),
    tldr: (
      <>
        <p>
          PC has high-quality displays but is limited in input modalities. 
        <br />
          Head-mounted displays (HMDs) enable more diverse and immersive input/output modalities but has relatively low quality displays. 
        <br />
          We built WebJump to combine the advantages of both :D
        </p>
      </>
    ),
    paper: "/files/Zeng et al. - 2023 - WebJump AR-facilitated Distributed Display of Web Pages.pdf",
    code: "https://github.com/meow-wwww/WebJump",
    video: "https://www.youtube.com/watch?v=RPzv-_atlig",
  },
];

function Me() {
  return <strong className="text-primary-ink">Xiaoyu Wang</strong>;
}

const Publications = () => {
  return (
    <section id="publications" className="mx-auto max-w-3xl px-5 py-10">
      <SectionTitle emoji="📝">Selected Publications</SectionTitle>

      <ul className="mt-6 space-y-5">
        {publications.map((pub) => (
          <li key={pub.title} className="pixel-card">
            <div className="flex flex-wrap items-center gap-2">
              <span className="pixel-tag bg-primary-soft text-primary-ink font-display text-base font-semibold">
                {pub.venue}
              </span>
              {pub.highlight && (
                <span className="pixel-tag bg-highlight text-highlight-foreground font-display text-base font-semibold">
                  <Award className="h-4 w-4" />
                  {pub.highlight}
                </span>
              )}
            </div>

            <a
              href={pub.url}
              target="_blank"
              rel="noreferrer"
              className="group mt-3 flex items-start gap-2 font-display text-lg font-semibold text-primary-ink hover:text-primary"
            >
              <span className="leading-snug">{pub.title}</span>
              <ExternalLinkIcon className="mt-1 h-4 w-4 flex-shrink-0 opacity-50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
            </a>

            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pub.authors}</p>
            <TldrToggle paper={pub.paper} code={pub.code} video={pub.video}>
              {pub.tldr ?? (
                <span className="italic text-muted-foreground">
                  TL;DR coming soon ... I'm still thinking about how to write it ...
                </span>
              )}
            </TldrToggle>
          </li>
        ))}
      </ul>
    </section>
  );
};

const TldrToggle = ({ children, paper, code, video }: 
  { 
    children: React.ReactNode,
    paper: string,
    code: string,
    video: string,
  }) => {
  const [isOpen, setIsOpen] = useState(false);
  const extraLinks = [
    paper && { label: "Paper", url: paper, icon: FileText },
    code && { label: "Code", url: code, icon: Code2 },
    video && { label: "Video", url: video, icon: Video },
  ].filter(Boolean) as { label: string; url: string; icon: typeof Code2 }[];

  return (
    <div className="mt-3">
      <div className="flex flex-wrap items-center gap-2">
        <button 
          type="button" 
          onClick={() => setIsOpen((v) => !v)} 
          aria-expanded={isOpen} 
          className="pixel-tag bg-secondary text-secondary-foreground font-display hover:bg-accent hover:text-accent-foreground transition-colors">
          <Sparkles className="h-3 w-3" />
          TL;DR
          <ChevronDown
            className={`h-3 w-3 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            />
        </button>

        {extraLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="pixel-tag bg-secondary text-secondary-foreground font-display hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <Icon className="h-3 w-3" />
              {link.label}
            </a>
          );
        })}
      </div>

      <div
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="rounded-x1 border-2 border-dashed border-primary-ink/40 bg-primary-soft/60 p-3 text-sm leading-relaxed text-primary-ink">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export const SectionTitle = ({
  children,
  emoji,
}: {
  children: React.ReactNode;
  emoji: string;
}) => (
  <h2 className="font-display flex items-center gap-3 text-2xl sm:text-3xl font-bold text-primary-ink">
    <span className="text-3xl" aria-hidden>
      {emoji}
    </span>
    <span>{children}</span>
    <span className="ml-2 h-[3px] flex-1 rounded-full bg-primary/30" />
  </h2>
);

export default Publications;
