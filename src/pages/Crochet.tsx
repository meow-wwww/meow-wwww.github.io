import SidePageLayout from "@/components/SidePageLayout";
import { SectionTitle } from "@/components/Publications";

type CrochetProject = {
  src: string;
  alt: string;
  /** Plain text or JSX (so phrases can be links). */
  caption: React.ReactNode;
  /** Optional link to the original pattern / tutorial (e.g. Xiaohongshu). */
  originUrl?: string;
};

const captionLinkClass =
  "font-semibold underline decoration-primary-foreground/50 underline-offset-2 hover:decoration-primary-foreground";

const projects: CrochetProject[] = [
  {
    src: "/files/crochets/202601_pingu_cake.webp",
    alt: "Festive penguin amigurumi with a white hat and green sweater",
    caption: "Pingu",
    originUrl: "https://www.xiaohongshu.com/explore/6723991a000000001b02dd2a?source=webshare&xhsshare=pc_web&xsec_token=ABk82EZ52AufXMBfHMfuBNjdUFBU9QlRwBndgxNJi93kM=&xsec_source=pc_share",
  },
  {
    src: "/files/crochets/202603_lahm.webp",
    alt: "Orange sprout amigurumi with yellow leaf ears",
    caption: (
      <>
        Lahm, the pet in the game{" "}
        <a
          href="https://en.wikipedia.org/wiki/Mole_Manor"
          target="_blank"
          rel="noreferrer"
          className={captionLinkClass}
        >
          Mole Manor
        </a>
      </>
    ),
  },
  {
    src: "/files/crochets/202604_sushi.webp",
    alt: "Crochet shrimp tempura and salmon nigiri sushi",
    caption: (
      <>
        Shrimp tempura (
        <a
          href="https://www.xiaohongshu.com/explore/66a4b056000000000d033e2b?xsec_token=ABzIoaJEXOz5bI6fntnhzONZ-V1x-vGUDe7Rbcy287HSQ=&xsec_source=pc_note"
          target="_blank"
          rel="noreferrer"
          className={captionLinkClass}
        >
          Original ↗
        </a>
        ) & salmon nigiri (
        <a
          href="https://www.xiaohongshu.com/explore/64f824ba000000001d0168e7?xsec_token=ABJpSnWpBzGqU0O7PthLz7xSyraFZCXxt0Q3KvpCt2KB8=&xsec_source=pc_note"
          target="_blank"
          rel="noreferrer"
          className={captionLinkClass}
        >
          Original ↗
        </a>
        )
      </>
    ),
  },
  {
    src: "/files/crochets/202604_pineapple.webp",
    alt: "Textured yellow crochet pineapple with green leaves",
    caption: "A tiny crochet pineapple drawstring pouch",
    originUrl: "https://www.xiaohongshu.com/explore/60112cbd0000000001002200?xsec_token=AB4AaTB5JVTq5AZQUP82vBfFFI55wcJzxRGhBN1kv-IAA=&xsec_source=pc_note",
  },
  {
    src: "/files/crochets/202602_luoxiaohei.webp",
    alt: "The Legend of Luo Xiaohei",
    caption: (
      <>
        <a
          href="https://en.wikipedia.org/wiki/The_Legend_of_Luo_Xiaohei"
          target="_blank"
          rel="noreferrer"
          className={captionLinkClass}
        >
          The Legend of Luo Xiaohei
        </a>
      </>
    ),
    originUrl: "https://www.xiaohongshu.com/explore/6891d3340000000022023b6a?xsec_token=ABFGIaAR8taA6Z1M38RxlmMfSOvw0QeARVoH1lh-kxbA0=&xsec_source=pc_search&source=web_explore_feed",
  },
  {
    src: "/files/crochets/202602_duoduo.webp",
    alt: "Brown and white puppy amigurumi with floppy black ears",
    caption: (
      <>
        <a
          href="https://www.youtube.com/watch?v=t_b1Kanh7XM"
          target="_blank"
          rel="noreferrer"
          className={captionLinkClass}
        >
          Duoduo
        </a>
        , a floppy-eared puppy amigurumi
      </>
    ),
    originUrl: "https://www.xiaohongshu.com/explore/696ec04f000000001a03530f?xsec_token=ABdkOETa26DwyUSB1GmEW_-cfMtIl50LaKFK3LTDFPOBk=&xsec_source=pc_search&source=web_search_result_notes",
  },
  {
    src: "/files/crochets/202603_globe.webp",
    alt: "Handmade crochet globe of Earth",
    caption: (
      <>
        A tiny crochet globe, after watching{" "}
        <a
          href="https://en.wikipedia.org/wiki/Project_Hail_Mary_(film)"
          target="_blank"
          rel="noreferrer"
          className={captionLinkClass}
        >
          Project Hail Mary
        </a>
      </>
    ),
    originUrl: "https://www.xiaohongshu.com/explore/69c6284800000000230110f0?xsec_token=AB0tkuFbLyamtXiltJZCmMyOC0POtSNcyC1VbNF9CNamk=&xsec_source=pc_search&source=web_user_page",
  },
  {
    src: "/files/crochets/202605_chimo.webp",
    alt: "Amigurumi donkey in a black sweater and red fez",
    caption: "Handmade CHImo based on the preview image at CHI'26 (before I could get a real one in next year's CHI...)",
  },
];

const Crochet = () => {
  return (
    <SidePageLayout>
      <section className="mx-auto max-w-3xl px-5 py-10">
        <SectionTitle emoji="🧶">Crochet</SectionTitle>

        <p className="mt-6 text-base sm:text-lg leading-relaxed text-foreground/85">
          Soft things I have made with yarn.
          Some include a link to the original tutorial.
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
                  {project.caption}
                  {project.originUrl && (
                    <>
                      {" · "}
                      <a
                        href={project.originUrl}
                        target="_blank"
                        rel="noreferrer"
                        className={captionLinkClass}
                      >
                        Original ↗
                      </a>
                    </>
                  )}
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
