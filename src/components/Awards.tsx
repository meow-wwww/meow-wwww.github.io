import { SectionTitle } from "./Publications";

const awards = [
  { year: "2025", text: "Best Paper Honorable Mention Award @ CHI '25", star: true },
  { year: "2024", text: "Best Paper Award @ ISS '24", star: true },
  { year: "2024", text: "Excellent Student Scholarship for MSc BDT Program @ HKUST" },
  { year: "2023", text: "Outstanding Graduate in Yuanpei College @ PKU" },
  { year: "2022", text: "Award for Scientific Research @ PKU" },
  { year: "2022", text: "3rd-class Scholarship @ PKU" },
];

const Awards = () => {
  return (
    <section id="awards" className="mx-auto max-w-3xl px-5 py-10">
      <SectionTitle emoji="🎖️">Selected Awards</SectionTitle>

      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {awards.map((a, i) => (
          <li
            key={i}
            className="group flex items-center gap-3 rounded-xl border-2 border-foreground/85 bg-card p-3 transition-all hover:-translate-y-0.5"
            style={{ boxShadow: "var(--shadow-pixel-sm)" }}
          >
            <span
              className={`font-pixel flex h-10 w-12 flex-shrink-0 items-center justify-center rounded-md text-[10px] ${
                a.star
                  ? "bg-highlight text-highlight-foreground"
                  : "bg-primary-soft text-primary-ink"
              }`}
            >
              {a.year}
            </span>
            <span className="text-sm leading-snug text-foreground/90">
              {a.star && "🌟 "}
              {a.text}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Awards;
