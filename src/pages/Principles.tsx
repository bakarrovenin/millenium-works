import Layout from "@/components/Layout";

const principles = [
  {
    id: "00",
    title: "Play at the frontier",
  },
  {
    id: "01",
    title: "Speed is a feature",
  },
  {
    id: "02",
    title: "Build for the end user",
  },
  {
    id: "03",
    title: "Small teams, big outcomes",
  },
  {
    id: "04",
    title: "Prioritize the audacious",
  },
  {
    id: "05",
    title: "Default to action",
  },
  {
    id: "06",
    title: "AI as a force multiplier",
  },
  {
    id: "07",
    title: "Distribution over product",
  },
  {
    id: "08",
    title: "Own the customer relationship",
  },
  {
    id: "09",
    title: "Iterate publicly",
  },
  {
    id: "10",
    title: "Simple beats clever",
  },
];

const Principles = () => {
  return (
    <Layout>
      <div className="px-8 md:px-12 py-12 md:py-20">
        <h1 className="text-2xl md:text-3xl font-medium mb-12 md:mb-16">Principles</h1>
        
        <div className="space-y-4 md:space-y-5">
          {principles.map((principle) => (
            <div 
              key={principle.id}
            >
              <div className="flex items-baseline gap-4 md:gap-6">
                <span className="text-muted-foreground text-sm font-medium w-6">
                  {principle.id}.
                </span>
                <h2 className="text-lg md:text-2xl font-medium">
                  {principle.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Principles;
