import { Link, useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className={`min-h-screen bg-background flex flex-col ${isHome ? 'h-screen overflow-hidden' : ''}`}>
      {/* Header */}
      <header className="px-8 md:px-12 pt-8 md:pt-10">
        <Link 
          to="/" 
          className="text-foreground text-lg md:text-xl font-medium tracking-tight hover:opacity-70 transition-opacity"
        >
          Millennium Works
        </Link>
      </header>

      {/* Main content */}
      <main className="flex-1 relative min-h-0 flex flex-col">
        {children}
      </main>

      {/* Footer navigation */}
      <footer className="px-8 md:px-12 pb-8 md:pb-10">
        <nav className="flex justify-between items-center">
          <Link 
            to="/case-studies" 
            className="text-foreground text-sm md:text-base font-medium hover:opacity-70 transition-opacity"
          >
            Case Studies
          </Link>
          <Link 
            to="/principles" 
            className="text-foreground text-sm md:text-base font-medium hover:opacity-70 transition-opacity"
          >
            Principles
          </Link>
          <Link 
            to="/contact" 
            className="text-foreground text-sm md:text-base font-medium hover:opacity-70 transition-opacity"
          >
            Contact
          </Link>
          <Link 
            to="/what-we-do" 
            className="text-foreground text-sm md:text-base font-medium hover:opacity-70 transition-opacity"
          >
            What We Do
          </Link>
          <Link 
            to="/blog" 
            className="text-foreground text-sm md:text-base font-medium hover:opacity-70 transition-opacity"
          >
            Blog
          </Link>
        </nav>
      </footer>
    </div>
  );
};

export default Layout;
