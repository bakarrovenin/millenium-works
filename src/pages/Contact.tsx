import Layout from "@/components/Layout";

const Contact = () => {
  return (
    <Layout>
      <div className="px-8 md:px-12 py-12 md:py-20">
        <div className="flex items-baseline justify-between mb-12 md:mb-16">
          <h1 className="font-display text-5xl md:text-7xl text-foreground leading-[1] max-w-3xl">
            Building something{" "}
            <span className="font-display-italic">ambitious?</span>
          </h1>
          <span className="tracked-label text-muted-foreground hidden md:block">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mr-2 align-middle" />
            Contact
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl border-t border-border pt-10">
          <div>
            <p className="tracked-label text-muted-foreground mb-3">About</p>
            <p className="text-foreground text-base md:text-lg leading-relaxed">
              We partner with founders building at the AI frontier. If you're
              working on something audacious, we'd love to hear from you.
            </p>
          </div>

          <div>
            <p className="tracked-label text-muted-foreground mb-3">Get in touch</p>

            <p className="font-display text-2xl md:text-3xl text-foreground leading-snug">
              Send queries to{" "}
              <a
                href="mailto:connect.bakar@gmail.com"
                className="hover:text-accent transition-colors"
              >
                connect.bakar@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
