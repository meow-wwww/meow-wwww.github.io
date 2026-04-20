import { Award, ExternalLink as ExternalLinkIcon } from "lucide-react";

type Publication = {
  title: string;
  url: string;
  venue: string;
  highlight?: string;
  authors: React.ReactNode;
};

const publications: Publication[] = [
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
              <span className="pixel-tag bg-primary-soft text-primary-ink font-display">
                {pub.venue}
              </span>
              {pub.highlight && (
                <span className="pixel-tag bg-highlight text-highlight-foreground font-display">
                  <Award className="h-3 w-3" />
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
          </li>
        ))}
      </ul>
    </section>
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
