import { useState } from "react";
import { 
  Award, 
  ChevronDown, 
  Code2, 
  ExternalLink as ExternalLinkIcon, 
  FileText,
  Presentation,
  PlayCircle,
  Sparkles,
 } from "lucide-react";
 import { Dialog, DialogContent } from "@/components/ui/dialog";
/**
 * Inline link inside a TL;DR that opens an image in a (nearly) full-screen
 * lightbox. Click outside the image card to close.
 *
 * Usage inside a `tldr` JSX block:
 *   <PaperImage src="/files/gesturegpt-teaser.png" alt="System overview">
 *     system overview
 *   </PaperImage>
 */
export function PaperImage({
  src,
  alt,
  children,
}: {
  src: string;
  alt?: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="underline decoration-dotted decoration-foreground/50 decoration-2 underline-offset-2 transition-colors hover:text-primary-ink hover:decoration-primary/70"
      >
        {children}
      </button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="max-w-[95vw] w-fit border-0 bg-transparent p-0 shadow-none sm:rounded-none [&>button]:hidden"
          onClick={() => setOpen(false)}
        >
          <div
            className="pixel-card bg-card !p-3 sm:!p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={src}
              alt={alt ?? ""}
              className="block max-h-[85vh] max-w-[90vw] w-auto h-auto rounded-lg object-contain"
            />
            {alt && (
              <p className="mt-2 text-center text-sm text-muted-foreground">{alt}</p>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

type Publication = {
  id: string;
  title: string;
  url: string;
  venue: string;
  highlight?: string;
  authors: React.ReactNode;
  tldr?: React.ReactNode;
  paper?: string;
  presentation?: string;
  demo?: string;
  code?: string;
};

const publications: Publication[] = [
  {
    id: "shall-we-dig-deeper",
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
          We studied how an LLM-powered agent with&nbsp;
          <PaperImage src="/files/paper_figures/shall-we-dig-deeper/intervention_styles.webp" alt="">different intervention styles</PaperImage>
          &nbsp; (telling, selling, participating, delegating) could advance knowledge co-construction in asynchronous online discussions.
        </p>
        <p>
          Each style has distinct&nbsp;
          <PaperImage src="/files/paper_figures/shall-we-dig-deeper/effects.webp" alt="">effects</PaperImage>
          &nbsp;on both content and experience.
        </p>
      </>
    ),
    paper: "/files/Zhang et al. - 2026 - Shall We Dig Deeper Designing and Evaluating Strategies for LLM Agents to Advance Knowledge Co-C.pdf",
    code: "https://github.com/Yuanky123/Knowledgebot-backend",
  },
  {
    id: "signaling-human-intentions",
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
          We got some empirical insights on how&nbsp;
          <PaperImage src="/files/paper_figures/signaling-human-intentions/robot_mophorlogy.webp" alt="">robot morphologies</PaperImage>
          &nbsp;and conversation roles will affect users' choices of&nbsp;
          <PaperImage src="/files/paper_figures/signaling-human-intentions/social_cues.webp" alt="">social cues</PaperImage>
          &nbsp;to signal their&nbsp;
          <PaperImage src="/files/paper_figures/signaling-human-intentions/intentions.webp" alt="">intentions</PaperImage>
          .
        </p>
        <p>
          Some findings are quite counterintuitive 🧐. For example, guess whether the speaker or the listener will use more verbal cues?
          At the beginning we all thought that the listener will use more verbal cues since their verbal channel is less occupied.
          But it turned out that they will use less verbal cues for politeness concerns ... :)
        </p>
      </>
    ),
    paper: "/files/Lyu et al. - 2025 - Signaling Human Intentions to Service Robots Understanding the Use of Social Cues during In-Person.pdf",
    code: "https://github.com/meow-wwww/QuestPro_HRI_Detection",
    presentation: "https://www.youtube.com/watch?v=iUH8Oag2Dso",
  },
  {
    id: "gesturegpt",
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
          <PaperImage src="/files/paper_figures/gesturegpt/existing_systems.webp" alt="">Existing gesture interfaces</PaperImage>
          &nbsp;only works with a fixed set of gestures (no matter they are built-in or user-defined), 
          which introduces learning or demonstration efforts for users. 
        </p>
        <p>
          We built a&nbsp;
          <PaperImage src="/files/paper_figures/gesturegpt/multi-agent.webp" alt="">multi-agent</PaperImage>, LLM-based&nbsp;
          <PaperImage src="/files/paper_figures/gesturegpt/framework.webp" alt="">framework</PaperImage>&nbsp;to understand the intentions behind <strong>free-form</strong> hand gestures, with the help of contextual information. 
        </p>
      </>
    ),
    paper: "/files/Zeng et al. - 2024 - GestureGPT Toward Zero-Shot Free-Form Hand Gesture Understanding with Large Language Model Agents.pdf",
  },
  {
    id: "webjump",
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
          Head-mounted displays (HMDs) enable richer and more immersive input/output modalities but has relatively low quality displays. 
        </p>
        <p>
          We built <PaperImage src="/files/paper_figures/webjump/framework.webp" alt="">WebJump</PaperImage> to combine the advantages of both :D
        </p>
      </>
    ),
    paper: "/files/Zeng et al_2023_WebJump.pdf",
    code: "https://github.com/meow-wwww/WebJump",
    presentation: "https://www.youtube.com/watch?v=RPzv-_atlig",
    demo: "https://youtu.be/pKC8qQUHPd4",
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
          <li key={pub.id} id={pub.id} className="pixel-card scroll-mt-8 target:ring-2 target:ring-primary target:ring-offset-2 target:ring-offset-background">
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
            <TldrToggle paper={pub.paper} code={pub.code} presentation={pub.presentation} demo={pub.demo}>
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

const TldrToggle = ({ children, paper, code, presentation, demo }: 
  { 
    children: React.ReactNode,
    paper: string,
    code: string,
    presentation: string,
    demo: string,
  }) => {
  const [isOpen, setIsOpen] = useState(false);
  const extraLinks = [
    paper && { label: "Paper", url: paper, icon: FileText },
    code && { label: "Code", url: code, icon: Code2 },
    presentation && { label: "Presentation", url: presentation, icon: Presentation },
    demo && { label: "Demo", url: demo, icon: PlayCircle },
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
          <div className="rounded-x1 border-2 border-dashed border-primary-ink/40 bg-primary-soft/60 space-y-3 p-3 text-sm leading-relaxed text-primary-ink [&_p]:my-0">
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
