import { useState } from "react";
import SidePageLayout from "@/components/SidePageLayout";
import { SectionTitle } from "@/components/Publications";

type ShelfStatus = "reading" | "want";

type ShelfBook = {
  title: string;
  author: string;
  status: ShelfStatus;
  /** Optional short note. */
  note?: string;
  /** Optional link (Goodreads, publisher, etc.). */
  url?: string;
};

type FinishedBook = {
  title: string;
  author: string;
  /** Year finished. */
  year: number;
  note?: string;
  url?: string;
};

/** Currently reading + want to read. Edit this list freely. */
const shelf: ShelfBook[] = [
  { 
    title: "The Crisis of the Meritocracy", 
    author: "Peter Mandler", 
    status: "want" 
  },
  { 
    title: "The Design of Everyday Things", 
    author: "Don Norman", 
    status: "reading",
   },
  { 
    title: "Language and Tool Support for 3D Crochet Patterns: Virtual Crochet with a Graph Structure", 
    author: "Klara Seitz, Jens Lincke, Patrick Rein, Robert Hirschfeld", 
    status: "want", 
  },
  { 
    title: "Bayesian Cognitive Modeling: A Practical Course", 
    author: "Eric-Jan Wagenmakers & Michael D. Lee", 
    status: "reading",
   },
  {
    title: "Brave NUI World",
    author: "Daniel Wigdor & Dennis Wixon",
    status: "want",
  },
  {
    title: "Human-Computer Interaction: An Empirical Research Perspective",
    author: "I. Scott MacKenzie",
    status: "reading",
  },
  {
    title: "The Craft of Research",
    author: "Gregory G. Colomb, Joseph M. Williams, and Wayne C. Booth",
    status: "want",
  },
];

/** Finished books — grouped on the page by `year`. */
const finished: FinishedBook[] = [
  { 
    title: "The Structure of Scientific Revolutions", author: "Thomas S. Kuhn", year: 2026 },
  {
    title: "Casebook in Abnormal Psychology", author: "Timothy A. Brown & David H. Barlow", year: 2025,
  },
  {
    title: "How to Be a Cat", author: "Lisa Swerling & Ralph Lazar", year: 2024,
  },
  { title: "Science as a Vocation", author: "Max Weber", year: 2023 },
  {
    title: "Forty Studies that Changed Psychology", author: "Roger R. Hock", year: 2023,
  },
];

const statusLabel: Record<ShelfStatus, string> = {
  reading: "Reading",
  want: "Want to read",
};

const statusClass: Record<ShelfStatus, string> = {
  reading: "bg-highlight text-highlight-foreground",
  want: "bg-primary-soft text-primary-ink",
};

function BookTitle({
  title,
  url,
}: {
  title: string;
  url?: string;
}) {
  if (!url) {
    return <span className="text-primary">{title}</span>;
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="text-primary underline decoration-dotted decoration-foreground/50 decoration-2 underline-offset-2 transition-colors hover:text-primary-ink hover:decoration-primary/70"
    >
      {title}
    </a>
  );
}

function BookRow({
  title,
  author,
  note,
  url,
  badge,
}: {
  title: string;
  author: string;
  note?: string;
  url?: string;
  badge?: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const hasNote = Boolean(note);

  const titleLine = (
    <>
      <BookTitle title={title} url={hasNote ? undefined : url} />
      <span className="text-foreground/55"> · </span>
      <span className="text-foreground/75">{author}</span>
    </>
  );

  return (
    <li className="py-2">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        {badge}
        {hasNote ? (
          <button
            type="button"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex min-w-0 flex-1 items-baseline gap-1.5 text-left text-base leading-snug"
          >
            <span
              aria-hidden
              className={`inline-block shrink-0 self-center text-[0.65em] text-primary-ink/70 transition-transform duration-200 ${
                open ? "rotate-90" : ""
              }`}
            >
              ▶
            </span>
            <span className="min-w-0">{titleLine}</span>
          </button>
        ) : (
          <p className="min-w-0 flex-1 text-base leading-snug">{titleLine}</p>
        )}
      </div>
      {hasNote && (
        <div
          className={`grid transition-[grid-template-rows] duration-200 ease-out ${
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <p className="mt-2 pl-5 text-sm leading-relaxed text-muted-foreground">
              {note}
            </p>
          </div>
        </div>
      )}
    </li>
  );
}

const Reading = () => {
  const reading = shelf.filter((b) => b.status === "reading");
  const want = shelf.filter((b) => b.status === "want");
  const shelfOrdered = [...reading, ...want];

  const years = [...new Set(finished.map((b) => b.year))].sort((a, b) => b - a);
  const byYear = (year: number) => finished.filter((b) => b.year === year);

  return (
    <SidePageLayout>
      <section className="mx-auto max-w-3xl px-5 py-10">
        <SectionTitle emoji="📚">Reading</SectionTitle>

        <p className="mt-6 text-base sm:text-lg leading-relaxed text-foreground/85">
          What I am reading, what I want to read, and what I have finished — listed by year.
        </p>

        <div className="mt-10">
          <h3 className="font-display text-xl font-semibold text-primary-ink">
            On the shelf ...
          </h3>

          {shelfOrdered.length === 0 ? (
            <p className="mt-4 text-sm text-muted-foreground">Nothing here yet.</p>
          ) : (
            <ul className="mt-2" aria-label="Currently reading and want to read">
              {shelfOrdered.map((book) => (
                <BookRow
                  key={`${book.status}-${book.title}-${book.author}`}
                  title={book.title}
                  author={book.author}
                  note={book.note}
                  url={book.url}
                  badge={
                    <span
                      className={`pixel-tag font-display shrink-0 text-[10px] ${statusClass[book.status]}`}
                    >
                      {statusLabel[book.status]}
                    </span>
                  }
                />
              ))}
            </ul>
          )}
        </div>

        <div className="mt-12">
          <h3 className="font-display text-xl font-semibold text-primary-ink">
            I have read ...
          </h3>

          {years.length === 0 ? (
            <p className="mt-4 text-sm text-muted-foreground">Nothing here yet.</p>
          ) : (
            <div className="mt-4 space-y-8">
              {years.map((year) => (
                <div key={year}>
                  <h4 className="font-pixel text-[11px] tracking-wide text-primary-ink/80">
                    {year}
                  </h4>
                  <ul className="mt-1" aria-label={`Books finished in ${year}`}>
                    {byYear(year).map((book) => (
                      <BookRow
                        key={`${book.year}-${book.title}-${book.author}`}
                        title={book.title}
                        author={book.author}
                        note={book.note}
                        url={book.url}
                      />
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </SidePageLayout>
  );
};

export default Reading;
