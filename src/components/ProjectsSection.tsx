import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A scalable e-commerce solution with seamless product browsing, cart management, Stripe-based payments, and a clean user experience, built for performance and growth.",
    image: "/images/Ecomm1.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "Redux", "Stripe API"],
    demoUrl: "https://next-store-ruddy-three.vercel.app/",
    repoUrl: "https://github.com/tayyabsul3/next_Store",
  },
  {
    id: 2,
    title: "Resturaunt Management System",
    description:
      "A complete restaurant suite with a website, POS, and dashboard that supports both online ordering and on-premise dining operations.",
    image: "/images/RMS1.png",
    tags: [
      "Next.js",
      "React.js",
      "Firebase",
      "Tailwind CSS",
      "Node Js",
      "Express",
    ],
    demoUrl: "",
    repoUrl: "",
  },
  {
    id: 3,
    title: "Social Media App",
    description:
      "A mobile-first social networking app with user authentication, real-time messaging, media posting, and smooth user interaction using React Native.",
    image: "/images/Sociableapp.png",
    tags: ["React Native", "Supabase", "PostgreSQL"],
    demoUrl: "",
    repoUrl: "https://github.com/tayyabsul3/Sociableapp",
  },
  {
    id: 4,
    title: "PopIt Teams",
    description:
      "An enterprise-level admin dashboard to manage mobile app data with features like lead tracking, card handling, email signature tools, and team collaboration modules.",
    image: "/images/PopIt1.png",
    tags: ["React", "Supabase", "Tailwind CSS", "PostgreSQL"],
    demoUrl: "https://teams.popitnl.nl/auth/1",
    repoUrl: "",
  },
  {
    id: 5,
    title: "Logs Management Dashboard",
    description:
      "A streamlined dashboard for viewing, filtering, and analyzing logs in real-time with intuitive UI elements and smooth performance.",
    image: "/images/LogDas1.png",
    tags: ["React", "Tailwind Css"],
    demoUrl: "https://logs-dashboard.vercel.app/",
    repoUrl: "",
  },
  {
    id: 6,
    title: "Hyper Solar Solution Website",
    description:
      "A clean and modern website built for a solar energy company to showcase their products, pricing, billing calculator, and installation services.",
    image: "/images/HyperSol.png",
    tags: ["React", "Tailwind Css"],
    demoUrl: "https://solar-website-kappa-brown.vercel.app/",
    repoUrl: "",
  },
  {
    id: 7,
    title: "HTML and CSS UI Clones",
    description:
      "Responsive UI clones of popular platforms like YouTube, Netflix, and Amazon to demonstrate pixel-perfect design replication skills.",
    image: "/images/HtmlCss.png",
    tags: ["HTML", "CSS"],
    demoUrl: "https://html-and-css-projects-five.vercel.app/",
    repoUrl: "",
  },
  {
    id: 8,
    title: "JavaScript Projects",
    description:
      "A curated set of beginner-friendly JavaScript mini-projects like a Todo App, Calculator, Stopwatch, and classic games like Tic Tac Toe and Rock Paper Scissors.",
    image: "/images/JSprojects.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "http://javascript-projects-psi-ten.vercel.app/",
    repoUrl: "",
  },
];

const ProjectsSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="section-title mb-4">My Projects</h2>
          <p className="section-subtitle">
            Here's a selection of my recent work. Each project presented unique
            challenges and opportunities to grow as a developer.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md group"
            >
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-primary/30 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-primary p-2 rounded-full hover:bg-primary hover:text-white transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-primary p-2 rounded-full hover:bg-primary hover:text-white transition-colors"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-gray-100 dark:bg-slate-700 rounded-full text-gray-700 dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.demoUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="border-primary text-primary hover:bg-primary/5"
                    >
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo <ExternalLink size={14} className="ml-1" />
                      </a>
                    </Button>
                  )}
                  {project.repoUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="border-primary text-primary hover:bg-primary/5"
                    >
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Source <Github size={14} className="ml-1" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
