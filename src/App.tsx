import React, { useRef, useEffect } from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className="text-brand-text hover:text-white transition-colors duration-300">
    {children}
  </a>
);

const GlowCard: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = '' }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    };

    card.addEventListener('mousemove', handleMouseMove);
    return () => card.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={cardRef} className={`glow-card bg-brand-gray rounded-3xl p-8 ${className}`}>
      {children}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="bg-brand-black min-h-screen text-white font-sans overflow-x-hidden">
      <div className="max-w-7xl mx-auto p-8 relative z-10">
        
        {/* Header */}
        <header className="flex justify-between items-center py-4">
          <div className="text-xl font-bold tracking-wider">lovable</div>
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="#">Work</NavLink>
            <NavLink href="#">Services</NavLink>
            <NavLink href="#">About</NavLink>
            <NavLink href="#">Contact</NavLink>
          </nav>
          <a href="#" className="bg-brand-purple text-black font-semibold py-2 px-5 rounded-full flex items-center space-x-2 hover:bg-white transition-colors duration-300">
            <span>Get in touch</span>
            <Mail size={18} />
          </a>
        </header>

        {/* Hero Section */}
        <main className="text-center py-20 md:py-32">
          <h1 className="text-5xl md:text-8xl font-bold leading-tight">
            We turn ideas<br />into <span className="text-brand-purple">reality</span>.
          </h1>
          <p className="text-brand-text max-w-2xl mx-auto mt-8 text-lg md:text-xl">
            We are a team of developers and designers creating beautiful, bespoke digital experiences that make an impact.
          </p>
        </main>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <GlowCard className="md:col-span-2 md:row-span-2 min-h-[24rem] flex flex-col justify-end">
            <h3 className="text-2xl font-bold">Project Spotlight</h3>
            <p className="text-brand-text">A deep dive into our latest work.</p>
          </GlowCard>

          <GlowCard className="min-h-[12rem] flex flex-col justify-end">
             <h3 className="text-2xl font-bold">Our Ethos</h3>
          </GlowCard>
          
          <GlowCard className="min-h-[12rem] flex flex-col justify-end">
            <h3 className="text-2xl font-bold">Services</h3>
          </GlowCard>

           <div className="md:col-span-3 bg-brand-light-gray rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h3 className="text-3xl font-bold">Have a project in mind?</h3>
              <p className="text-brand-text">Let's build something amazing together.</p>
            </div>
            <a href="#" className="bg-brand-purple text-black font-semibold py-4 px-8 rounded-full flex items-center space-x-2 hover:bg-white transition-colors duration-300 flex-shrink-0">
              <span>Let's Talk</span>
              <ArrowUpRight size={20} />
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};

export default App;
