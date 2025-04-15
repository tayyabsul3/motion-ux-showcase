
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-10">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">John Doe</h3>
            <p className="text-gray-400 mb-4">
              A passionate full-stack developer focused on building exceptional digital experiences.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="mailto:email@example.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Me</h3>
            <p className="text-gray-400 mb-2">San Francisco, CA</p>
            <p className="text-gray-400 mb-2">
              <a href="mailto:johndoe@example.com" className="hover:text-white transition-colors">
                johndoe@example.com
              </a>
            </p>
            <p className="text-gray-400">
              <a href="tel:+11234567890" className="hover:text-white transition-colors">
                +1 (123) 456-7890
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
          <p>© {currentYear} John Doe. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
