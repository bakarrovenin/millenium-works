import { Link, useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const navItems = [
  { to: "/case-studies", label: "Case Studies" },
  { to: "/principles", label: "Principles" },
  { to: "/what-we-do", label: "What We Do" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className={`min-h-screen bg-background flex flex-col ${isHome ? 'h-screen overflow-hidden' : ''}`}>
      <header className="px-8 md:px-12 pt-8 md:pt-10 flex items-baseline justify-between">
        <Link
          to="/"
          className="font-display text-2xl md:text-3xl text-foreground hover:opacity-70 transition-opacity"
        >
          Millennium Works
        </Link>
      </header>

      <main className="flex-1 relative min-h-0 flex flex-col">
        {children}
      </main>

      <footer className="px-8 md:px-12 pb-8 md:pb-10 mt-12">
        <div className="border-t border-border pt-6">
          <nav className="flex flex-wrap justify-between items-center gap-4">
            {navItems.map((item) => {
              const active = location.pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`tracked-label transition-opacity ${
                    active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
