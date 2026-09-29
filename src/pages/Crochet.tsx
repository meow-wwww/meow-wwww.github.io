import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import SidePageLayout from "@/components/SidePageLayout";
import { SectionTitle } from "@/components/Publications";
import { Dialog, DialogContent } from "@/components/ui/dialog";

/** Pattern credit. The label "Source ↗" is defined once, in SourceView. */
type SourceLink = { kind: "source"; href: string };

/** Self-made tutorial. The label "Tutorial ↗" is defined once, in TutorialView. */
type TutorialLink = { kind: "tutorial"; content: React.ReactNode };

/** A caption phrase with its own words, e.g. the name of a film. */
type PhraseLink = { kind: "phrase"; text: string; href: string };

type CaptionPart = string | SourceLink | TutorialLink | PhraseLink;

const source = (href: string): SourceLink => ({ kind: "source", href });
const tutorial = (content: React.ReactNode): TutorialLink => ({
  kind: "tutorial",
  content,
});
const link = (text: string, href: string): PhraseLink => ({
  kind: "phrase",
  text,
  href,
});

type CrochetProject = {
  src: string;
  alt: string;
  /**
   * Text mixed with links. Pattern credits are source(url); self-made
   * tutorials are tutorial(...). Both labels are defined once, below.
   */
  caption: CaptionPart[];
};

const captionLinkClass =
  "font-semibold underline decoration-primary-foreground/50 underline-offset-2 hover:decoration-primary-foreground";

function CaptionAnchor({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={captionLinkClass}
    >
      {children}
    </a>
  );
}

function SourceView({ href }: { href: string }) {
  return <CaptionAnchor href={href}>Source ↗</CaptionAnchor>;
}

/**
 * Markdown tutorial loaded from a `.md` file under `public/`.
 * Supports common Markdown (e.g. **bold**, *italic*, lists, links).
 * Single newlines are kept as line breaks (handy for crochet round lists).
 * Put each section in its own file, e.g.
 *   public/files/crochets/tutorials/chimo/01.md
 * then: <TutorialText src="/files/crochets/tutorials/chimo/01.md" />
 */
export function TutorialText({ src }: { src: string }) {
  const [text, setText] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setText(null);
    fetch(src)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to load ${src}`);
        return res.text();
      })
      .then((body) => {
        if (!cancelled) setText(body.trim());
      })
      .catch(() => {
        if (!cancelled) setText("");
      });
    return () => {
      cancelled = true;
    };
  }, [src]);

  if (text === null) {
    return <p className="text-muted-foreground">Loading…</p>;
  }
  if (!text) return null;
  return (
    <div className="prose prose-sm max-w-none prose-p:my-2 prose-headings:mb-1 prose-headings:mt-3 prose-headings:font-semibold first:prose-headings:mt-0 prose-strong:font-semibold prose-a:text-primary prose-ul:my-2 prose-ol:my-2">
      <ReactMarkdown remarkPlugins={[remarkBreaks]}>{text}</ReactMarkdown>
    </div>
  );
}

/**
 * Image inside a crochet tutorial lightbox.
 * Stack several of these for multi-step / multi-photo tutorials.
 */
export function TutorialImage({
  src,
  alt,
}: {
  src: string;
  alt?: string;
}) {
  return (
    <figure className="space-y-1.5">
      <img
        src={src}
        alt={alt ?? ""}
        loading="lazy"
        className="block h-auto w-full max-w-full rounded-lg object-contain"
      />
      {alt ? (
        <figcaption className="text-center text-xs text-muted-foreground">
          {alt}
        </figcaption>
      ) : null}
    </figure>
  );
}

/**
 * "Tutorial ↗" control that opens an in-page lightbox (same idea as
 * PaperImage in publication TL;DRs). The caption passes the lightbox
 * body via tutorial(...); this is the only place the label is written.
 */
function TutorialView({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setOpen(true);
        }}
        className={captionLinkClass}
      >
        Tutorial ↗
      </button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="flex w-max max-w-[95vw] flex-col border-0 bg-transparent p-0 shadow-none sm:rounded-none [&>button]:hidden"
          onClick={() => setOpen(false)}
        >
          <div
            className="pixel-card bg-card !p-4 sm:!p-5 w-[min(92vw,28rem)] max-h-[85vh] overflow-y-auto space-y-3 text-sm leading-relaxed text-foreground"
            onClick={(e) => e.stopPropagation()}
          >
            {open ? children : null}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

function Caption({ parts }: { parts: CaptionPart[] }) {
  return (
    <>
      {parts.map((part, i) => {
        if (typeof part === "string") return <span key={i}>{part}</span>;
        if (part.kind === "source") return <SourceView key={i} href={part.href} />;
        if (part.kind === "tutorial") {
          return <TutorialView key={i}>{part.content}</TutorialView>;
        }
        return (
          <CaptionAnchor key={i} href={part.href}>
            {part.text}
          </CaptionAnchor>
        );
      })}
    </>
  );
}

const projects: CrochetProject[] = [
  {
    src: "/files/crochets/202601_pingu_cake.webp",
    alt: "Festive penguin amigurumi with a white hat and green sweater",
    caption: [
      "Pingu · ",
      source("https://www.xiaohongshu.com/user/profile/5f0c31180000000001004e7d"),
    ],
  },
  {
    src: "/files/crochets/202603_lahm.webp",
    alt: "Orange sprout amigurumi with yellow leaf ears",
    caption: [
      "Lahm, the pet in the game ",
      link("Mole Manor", "https://en.wikipedia.org/wiki/Mole_Manor"),
      " · ",
      tutorial(<TutorialText src="/files/crochets/tutorials/lahm/tutorial.md" />),
    ],
  },
  {
    src: "/files/crochets/202604_sushi.webp",
    alt: "Crochet shrimp tempura and salmon nigiri sushi",
    caption: [
      "Shrimp tempura (",
      source("https://www.xiaohongshu.com/user/profile/5b607c7d4eacab050f6b7f70"),
      ") & salmon nigiri (",
      source("https://www.xiaohongshu.com/user/profile/5a09a7c24eacab55cf0dce82"),
      ")",
    ],
  },
  {
    src: "/files/crochets/202604_pineapple.webp",
    alt: "Textured yellow crochet pineapple with green leaves",
    caption: [
      "A tiny crochet pineapple drawstring pouch · ",
      source("https://www.xiaohongshu.com/user/profile/5a6c6afe11be10382205a921"),
    ],
  },
  {
    src: "/files/crochets/202602_luoxiaohei.webp",
    alt: "The Legend of Luo Xiaohei",
    caption: [
      link("The Legend of Luo Xiaohei", "https://en.wikipedia.org/wiki/The_Legend_of_Luo_Xiaohei"),
      " · ",
      source("https://www.xiaohongshu.com/user/profile/620b231d00000000100056cf"),
    ],
  },
  {
    src: "/files/crochets/202602_duoduo.webp",
    alt: "Brown and white puppy amigurumi with floppy black ears",
    caption: [
      link("Duoduo", "https://www.youtube.com/watch?v=t_b1Kanh7XM"),
      ", a floppy-eared puppy · ",
      source("https://www.xiaohongshu.com/user/profile/5f55068500000000010086a4"),
    ],
  },
  {
    src: "/files/crochets/202603_globe.webp",
    alt: "Handmade crochet globe of Earth",
    caption: [
      "A tiny crochet globe, after watching ",
      link("Project Hail Mary", "https://en.wikipedia.org/wiki/Project_Hail_Mary_(film)"),
      " · ",
      source("https://www.xiaohongshu.com/user/profile/54ad762ce7798934b60d945e"),
    ],
  },
  {
    src: "/files/crochets/202605_chimo.webp",
    alt: "Amigurumi donkey in a black sweater and red fez",
    caption: [
      "Handmade CHImo based on the preview image at CHI'26 (before I could get a real one in next year's CHI...)",
    ],
    // Markdown sections live as .md files under public/files/crochets/tutorials/<slug>/
    // " · ",
    // tutorial(
    //   <>
    //     <TutorialText src="/files/crochets/tutorials/chimo/01.md" />
    //     <TutorialImage src="/files/crochets/tutorials/chimo/01.webp" alt="Body" />
    //     <TutorialImage src="/files/crochets/tutorials/chimo/02.webp" alt="Sweater" />
    //   </>
    // ),
  },
  {
    src: "/files/crochets/202609_ginkgo_leaf.webp",
    alt: "Ginkgo leaf",
    caption: [
      "Ginkgo leaf",
      " · ",
      source("https://www.xiaohongshu.com/user/profile/60c62291000000002002dbf6"),
    ],
  },
];

const Crochet = () => {
  return (
    <SidePageLayout>
      <section className="mx-auto max-w-3xl px-5 py-10">
        <SectionTitle emoji="🧶">Crochet</SectionTitle>

        <p className="mt-6 text-base sm:text-lg leading-relaxed text-foreground/85">
          Soft things I have made with yarn.
          Some link to the original pattern; others include a self-made tutorial.
        </p>

        <ul
          className="mt-8 columns-3 gap-2.5 sm:gap-4"
          aria-label="Crochet projects"
        >
          {projects.map((project) => (
            <li key={project.src} className="mb-3 break-inside-avoid sm:mb-4">
              <figure className="group relative overflow-hidden rounded-xl border-2 border-foreground/85 bg-card">
                <img
                  src={project.src}
                  alt={project.alt}
                  loading="lazy"
                  className="block w-full h-auto"
                />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-1 bg-gradient-to-t from-primary-ink/85 via-primary-ink/55 to-transparent px-3 pb-3 pt-8 text-sm leading-snug text-primary-foreground opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
                  <Caption parts={project.caption} />
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </section>
    </SidePageLayout>
  );
};

export default Crochet;
