import { SectionTitle } from "./Publications";

const Misc = () => {
  return (
    <section id="misc" className="mx-auto max-w-3xl px-5 py-10">
      <SectionTitle emoji="👻">Miscellaneous</SectionTitle>

      <div className="pixel-card mt-6">
        <p className="leading-relaxed text-foreground/85">
          During my undergraduate years at Yuanpei College, I was a member of{" "}
          <strong className="text-primary-ink">Yuanpei Profile</strong> ({" "}
          <Link href="https://yppf.yuanpei.pku.edu.cn/">Website</Link> |{" "}
          <Link href="https://github.com/Yuanpei-Intelligence/YPPF">Github</Link> |{" "}
          <Link href="https://mp.weixin.qq.com/s/CIwcsfu4i1YbVrT8MVNv6A">WeChat</Link> ), a
          student-run organization dedicated to building an intelligent campus for our college.
          We developed systems to support student affairs like room booking, interest group
          organization, and information sharing. We even created some fun projects like "Your
          Annual Usage Report of Function Rooms" (a latest version developed by current members
          is{" "}
          <Link href="https://mp.weixin.qq.com/s/VZMfehGtSf67btI1y61PNA">here</Link>). 🫶🏻
        </p>
      </div>
    </section>
  );
};

const Link = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="font-semibold text-primary underline decoration-primary/40 decoration-2 underline-offset-2 hover:text-primary-ink"
  >
    {children}
  </a>
);

export default Misc;
