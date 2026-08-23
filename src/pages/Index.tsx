import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import wingedVictory from "@/assets/winged-victory.webp";

const Index = () => {
  return (
    <Layout>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 px-8 md:px-12 py-8 min-h-0">
        {/* Left column */}
        <div className="flex flex-col justify-between">
          <div />


          <div className="max-w-xl">
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-foreground">
              Building at the
              <br />
              <span className="font-display-italic">frontier.</span>
            </h1>
            <p className="mt-8 text-muted-foreground text-base md:text-lg leading-relaxed max-w-md">
              We partner with audacious founders to build, grow, and scale the
              next generation of consumer products, vertical SaaS, and applied AI.
            </p>

            <div className="mt-10 flex items-center gap-6">
              <Link
                to="/what-we-do"
                className="tracked-label text-foreground border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors"
              >
                What we do →
              </Link>
              <Link
                to="/case-studies"
                className="tracked-label text-muted-foreground hover:text-foreground transition-colors"
              >
                Case studies
              </Link>
            </div>
          </div>

        </div>

        {/* Right column */}
        <div className="relative flex items-center justify-center">
          <img
            src={wingedVictory}
            alt="Winged Victory of Samothrace"
            className="object-contain max-h-[70vh] mx-auto opacity-95"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
