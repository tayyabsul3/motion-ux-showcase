import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050508] border-t border-white/5 py-12 text-white">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About Column */}
          <div className="flex flex-col items-start text-left">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-primary to-indigo-300 mb-4 uppercase tracking-wider">
              Muhammad Tayyab
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              A highly dedicated full-stack developer committed to crafting premium, high-interactivity digital solutions for web and mobile.
            </p>
            <div className="flex space-x-3">
              <a href="https://github.com/tayyabsul3" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl border border-white/5 bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors">
                <Github size={16} />
              </a>
              <a href="https://www.linkedin.com/in/muhammad-tayyab-bb27a4250/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl border border-white/5 bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="mailto:tayyabsultan621@gmail.com" className="w-9 h-9 rounded-xl border border-white/5 bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors">
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div className="flex flex-col items-start text-left">
            <h3 className="text-base uppercase tracking-widest font-black text-slate-400 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3.5 text-sm font-semibold">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-slate-400 hover:text-primary transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="flex flex-col items-start text-left">
            <h3 className="text-base uppercase tracking-widest font-black text-slate-400 mb-4">
              Get In Touch
            </h3>
            <p className="text-slate-400 text-sm mb-3">Rawalpindi, Pakistan</p>
            <p className="text-slate-400 text-sm mb-3">
              <a href="mailto:tayyabsultan621@gmail.com" className="text-slate-300 hover:text-primary transition-colors">
                tayyabsultan621@gmail.com
              </a>
            </p>
            <p className="text-slate-400 text-sm">
              <a href="tel:+923145116290" className="text-slate-300 hover:text-primary transition-colors">
                +92 (314) 511-6290
              </a>
            </p>
          </div>
        </div>

        {/* Copywrite Section */}
        <div className="border-t border-white/5 mt-12 pt-8 text-center text-slate-500 text-xs font-bold uppercase tracking-wider">
          <p>© {currentYear} Muhammad Tayyab. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
