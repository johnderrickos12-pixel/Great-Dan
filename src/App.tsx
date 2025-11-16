import React from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className="text-brand-text hover:text-white transition-colors duration-300">
    {children}
  </a>
);

const App: React.FC = () => {
  return (
    <div className="bg-brand-black min-h-screen text-white font-sans">
      <div className="max-w-7xl mx-auto p-8">
        
        {/* Header */}
        <header className="flex justify-between items-center py-4">
          <div className="text-xl font-bold">lovable</div>
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
          
          {/* Large Item */}
          <div className="md:col-span-2 md:row-span-2 bg-brand-gray rounded-3xl p-8 h-96 flex flex-col justify-end">
            <h3 className="text-2xl font-bold">Project Spotlight</h3>
            <p className="text-brand-text">A deep dive into our latest work.</p>
          </div>

          {/* Small Item 1 */}
          <div className="bg-brand-gray rounded-3xl p-8 h-48 flex flex-col justify-end">
             <h3 className="text-2xl font-bold">Our Ethos</h3>
          </div>
          
          {/* Small Item 2 */}
          <div className="bg-brand-gray rounded-3xl p-8 h-48 flex flex-col justify-end">
            <h3 className="text-2xl font-bold">Services</h3>
          </div>

          {/* Wide Item */}
           <div className="md:col-span-3 bg-brand-gray rounded-3xl p-8 h-48 flex items-center justify-between">
            <div>
              <h3 className="text-3xl font-bold">Have a project in mind?</h3>
              <p className="text-brand-text">Let's build something amazing together.</p>
            </div>
            <a href="#" className="bg-brand-purple text-black font-semibold py-4 px-8 rounded-full flex items-center space-x-2 hover:bg-white transition-colors duration-300">
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