import Layout from "@/components/Layout";

const Contact = () => {
  return (
    <Layout>
      <div className="px-8 md:px-12 py-12 md:py-20">
        <h1 className="text-2xl md:text-3xl font-medium mb-12 md:mb-16">Contact</h1>
        
        <div className="space-y-8 max-w-md">
          <div>
            <p className="text-muted-foreground text-sm mb-2">Email</p>
            <a 
href="mailto:bakar@millenium.works" 
              className="text-foreground text-lg md:text-xl font-medium hover:opacity-70 transition-opacity"
            >
              bakar@millenium.works
            </a>
          </div>
          
          <div className="pt-8 border-t border-border">
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              We partner with founders building at the AI frontier. 
              If you're working on something ambitious, we'd love to hear from you.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
