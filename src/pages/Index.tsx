import Hero from "@/components/Hero";
import Publications from "@/components/Publications";
import Awards from "@/components/Awards";
import Misc from "@/components/Misc";
import ForestBackground from "@/components/ForestBackground";

const Index = () => {
  return (
    <main className="relative min-h-screen pb-20">
      <ForestBackground />
      <Hero />
      <div className="cloud-divider mx-auto max-w-3xl" aria-hidden />
      <Publications />
      <div className="cloud-divider mx-auto max-w-3xl" aria-hidden />
      <Awards />
      <div className="cloud-divider mx-auto max-w-3xl" aria-hidden />
      <Misc />

      <footer className="mx-auto mt-10 max-w-3xl px-5 text-center">
        <p className="font-pixel text-[10px] text-muted-foreground">
          ✦ made with care · © {new Date().getFullYear()} Xiaoyu Wang ✦
        </p>
      </footer>
    </main>
  );
};

export default Index;
