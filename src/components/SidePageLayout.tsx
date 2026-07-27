import { Link } from "react-router-dom";
import ForestBackground from "@/components/ForestBackground";

const SidePageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative min-h-screen pb-20">
      <ForestBackground />

      <div className="mx-auto max-w-3xl px-5 pt-10 sm:pt-14">
        <Link
          to="/"
          className="font-display inline-flex items-center gap-1 text-base sm:text-lg font-semibold text-primary underline decoration-primary/40 decoration-2 underline-offset-2 transition-colors hover:text-primary-ink hover:decoration-primary"
        >
          ← Home
        </Link>
      </div>

      {children}

      <footer className="mx-auto mt-10 max-w-3xl px-5 text-center">
        <p className="font-pixel text-[10px] text-muted-foreground">
          ✦ Built with Lovable · © {new Date().getFullYear()} Xiaoyu Wang ✦
        </p>
      </footer>
    </main>
  );
};

export default SidePageLayout;
