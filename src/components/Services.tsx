import { SectionTitle } from "./Publications";

const reviewerByYear = [
  {
    year: 2026,
    services: [
      "CHI Papers",
      "CHI Posters",
      "ISS Papers",
      "IUI Posters",
      "DIS Papers",
      "IMWUT Papers",
    ],
  },
  {
    year: 2025,
    services: ["CHI Late-Breaking Work"],
  },
];

const Services = () => {
  return (
    <section id="services" className="mx-auto max-w-3xl px-5 py-10">
      <SectionTitle emoji="📋">Services</SectionTitle>

      <div className="pixel-card mt-6">
        <p className="font-semibold text-foreground/90">Reviewer for:</p>
        <ul className="mt-3 space-y-2">
          {reviewerByYear.map(({ year, services }) => (
            <li key={year} className="text-sm leading-snug text-foreground/85">
              <span className="font-medium text-foreground/90">{year}:</span>{" "}
              {services.join(", ")}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
