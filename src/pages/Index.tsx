import Layout from "@/components/Layout";
import wingedVictory from "@/assets/winged-victory.webp";

const Index = () => {
  return (
    <Layout>
      <div className="flex-1 flex items-center justify-center min-h-0">
        <div className="text-center">
          <img 
            src={wingedVictory} 
            alt="Winged Victory of Samothrace" 
            className="object-contain max-h-[75vh] mx-auto"
          />
          <p className="text-foreground text-[10px] font-light tracking-widest mt-2">building at the frontier.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
