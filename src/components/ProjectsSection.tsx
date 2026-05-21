import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github, Sparkles, Layout, Smartphone, Briefcase, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects, Project } from "@/data/projects";

const categories = [
  { id: "all", label: "All Projects", icon: Briefcase },
  { id: "web", label: "Web", icon: Layout },
  { id: "mobile", label: "Mobile", icon: Smartphone },
];

// Interactive 3D tilt project card
const ProjectCard = ({ project }: { project: Project }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);
  
  // High-fidelity dynamic image fallback system
  const placeholderImage = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop";
  const [imgSrc, setImgSrc] = useState(project.image || placeholderImage);

  // Sync state whenever the project image path updates
  useEffect(() => {
    setImgSrc(project.image || placeholderImage);
  }, [project.image]);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 20 });
  const springY = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-6, 6]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={() => navigate(`/project/${project.id}`)}
      style={{
        rotateX: hovered ? rotateX : 0,
        rotateY: hovered ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      className="rounded-2xl overflow-hidden glass-card border border-white/5 bg-slate-950/40 hover:bg-slate-900/40 hover:border-primary/20 shadow-2xl transition-colors duration-300 group perspective-1000 cursor-pointer"
    >
      {/* Visual Image container with NO image zoom on hover */}
      <div className="relative h-52 overflow-hidden">
        
        {/* Subtle blur screen when hovered */}
        <div className="absolute inset-0 bg-slate-950/50 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-all duration-300 z-10" />

        {/* Center detailed view buttons on Hover */}
        <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/project/${project.id}`);
            }}
            className="px-4 py-2 rounded-full bg-primary hover:bg-primary/95 text-white text-xs font-bold uppercase tracking-widest flex items-center gap-1.5 shadow-lg scale-95 group-hover:scale-100 transition-all duration-300"
          >
            <Eye size={12} /> View Details
          </button>

          <div className="flex gap-2">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="bg-slate-900/90 border border-white/10 text-white p-2 rounded-full hover:bg-slate-800 transition-all shadow-md hover:scale-105"
                title="Live Demo"
              >
                <ExternalLink size={14} />
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="bg-slate-900/90 border border-white/10 text-white p-2 rounded-full hover:bg-slate-800 transition-all shadow-md hover:scale-105"
                title="GitHub Code"
              >
                <Github size={14} />
              </a>
            )}
          </div>
        </div>

        {/* Stable image render (NO scaling zoom effects) */}
        <img
          src={imgSrc}
          alt={project.title}
          onError={() => setImgSrc(placeholderImage)}
          className="w-full h-full object-cover select-none transition-all duration-300"
        />

        {/* Floating Category badge */}
        <span className="absolute top-4 left-4 z-10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-slate-950/80 border border-white/10 text-slate-300 rounded-md backdrop-blur-md">
          {project.category}
        </span>
      </div>

      {/* Content description */}
      <div className="p-6 flex flex-col justify-between h-72 preserve-3d" style={{ transform: "translateZ(20px)" }}>
        <div>
          <span className="text-[10px] uppercase font-extrabold tracking-widest text-primary mb-1 inline-block">
            {project.subtitle}
          </span>
          <h3 className="text-xl font-bold text-white tracking-tight mb-2 group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium mb-4 line-clamp-3">
            {project.description}
          </p>
        </div>

        <div>
          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-[10px] font-bold bg-white/5 border border-white/5 text-slate-300 rounded animate-pulse"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="px-2 py-0.5 text-[9px] font-bold bg-primary/10 border border-primary/20 text-primary rounded">
                +{project.tags.length - 3} More
              </span>
            )}
          </div>

          {/* Action CTAs */}
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/project/${project.id}`);
              }}
              className="border-primary/20 bg-primary/5 hover:bg-primary hover:text-white text-primary text-xs rounded-full"
            >
              Details <Eye size={12} className="ml-1" />
            </Button>
            
            {project.demoUrl ? (
              <Button
                variant="outline"
                size="sm"
                asChild
                onClick={(e) => e.stopPropagation()}
                className="border-white/10 hover:bg-white/5 text-slate-300 hover:text-white text-xs rounded-full"
              >
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  Live <ExternalLink size={12} className="ml-1" />
                </a>
              </Button>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-[9px] px-3 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/30 text-amber-400 font-extrabold uppercase tracking-widest shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                Proprietary
              </span>
            )}
          </div>
        </div>

      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-0 bg-[#07070a] text-white border-t border-white/5 overflow-hidden">
      
      {/* Blurred decorations */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="section-container">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles size={12} /> Portfolio Showcase
          </div>
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">
            Here's a curated selection of my core engineering projects, featuring outcome-based software, digital twins, restaurant SaaS, and mobile apps.
          </p>
        </motion.div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 border transition-all duration-300 ${
                  isActive
                    ? "text-white border-primary"
                    : "text-slate-400 border-white/5 hover:text-white bg-slate-950/20"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilterBg"
                    className="absolute inset-0 bg-primary rounded-full border border-white/10 -z-10 shadow-[0_0_15px_-3px_rgba(99,102,241,0.5)]"
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  />
                )}
                <cat.icon size={14} className={isActive ? "text-white" : "text-primary"} />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Projects Cards Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 col-span-full"
            >
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
