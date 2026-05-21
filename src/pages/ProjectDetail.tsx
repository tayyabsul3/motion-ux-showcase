import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { 
  ArrowLeft, ExternalLink, Github, Sparkles, CheckCircle2, 
  Settings, Award, HelpCircle, Lightbulb, Compass, MessageSquare
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [scrollProgress, setScrollProgress] = useState(0);

  // Find target project
  const project = projects.find((p) => p.id === Number(id));

  // High-fidelity image fallback system
  const placeholderImage = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop";
  const [imgSrc, setImgSrc] = useState("");

  // Update image source once project is resolved
  useEffect(() => {
    if (project) {
      setImgSrc(project.image || placeholderImage);
    }
  }, [project, project?.image]);

  // Scroll spy for progress indicator
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(window.scrollY / totalScroll);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Force scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#050508] text-white flex flex-col items-center justify-center p-6">
        <Navbar />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-md"
        >
          <HelpCircle size={64} className="text-rose-500 mx-auto mb-6 animate-pulse" />
          <h1 className="text-3xl font-extrabold mb-4">Project Not Found</h1>
          <p className="text-slate-400 mb-8">
            The project profile you are trying to access does not exist or has been archived.
          </p>
          <Button onClick={() => navigate("/")} className="bg-primary hover:bg-primary/90 rounded-full px-8 py-5">
            <ArrowLeft className="mr-2" size={16} /> Return to Portfolio
          </Button>
        </motion.div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050508] text-white overflow-x-hidden relative">
      
      {/* Top Scroll Indicator */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-white/10 z-50">
        <motion.div 
          style={{ scaleX: scrollProgress, transformOrigin: "left" }}
          className="h-full bg-gradient-to-r from-primary via-indigo-500 to-violet-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]" 
        />
      </div>

      <Navbar />

      {/* Background ambient orbs */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-[30%] right-[-10%] w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse" />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-24 relative z-10">
        
        {/* Floating Back Navigation Bar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <button
            onClick={() => navigate(-1)}
            className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/5 text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/15 transition-all duration-300 text-xs font-bold uppercase tracking-wider shadow-lg"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back to Showcase
          </button>
        </motion.div>

        {/* Project Header block */}
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-12">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-8"
          >
            {/* Category Pill */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">
              <Sparkles size={12} /> {project.category} Core Production
            </div>
            
            {/* Project Title & Subtitle */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-4 tracking-tight leading-none">
              {project.title}
            </h1>
            <p className="text-lg sm:text-xl font-bold text-slate-400 max-w-2xl leading-relaxed">
              {project.subtitle}
            </p>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 flex flex-wrap gap-4 lg:justify-end"
          >
            {project.demoUrl && (
              <Button
                asChild
                className="bg-primary/90 hover:bg-primary border border-white/10 glass-glow-hover rounded-full px-8 py-6 text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.2)]"
              >
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  Launch Live Demo <ExternalLink size={14} className="ml-2" />
                </a>
              </Button>
            )}

            {project.repoUrl && (
              <Button
                variant="outline"
                asChild
                className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-8 py-6 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300"
              >
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                  Source Code <Github size={14} className="ml-2" />
                </a>
              </Button>
            )}
          </motion.div>
        </div>

        {/* Massive visual hero banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative h-[250px] sm:h-[400px] lg:h-[520px] rounded-3xl overflow-hidden border border-white/10 backdrop-blur-xl shadow-2xl mb-16"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80 z-10" />
          <img
            src={imgSrc || placeholderImage}
            alt={project.title}
            onError={() => setImgSrc(placeholderImage)}
            className="w-full h-full object-cover select-none"
          />
          
          {/* Floating badge inside picture */}
          <div className="absolute bottom-6 left-6 z-20 flex items-center gap-1.5 px-4 py-2 bg-slate-950/80 border border-white/10 rounded-xl backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] uppercase font-bold tracking-widest text-slate-300">Active Deployment</span>
          </div>
        </motion.div>

        {/* Gallery Thumbnails Selector */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="flex flex-wrap gap-3 justify-center mb-16 -mt-10 relative z-20">
            {project.gallery.map((img, idx) => {
              const isActive = imgSrc === img;
              return (
                <button
                  key={idx}
                  onClick={() => setImgSrc(img)}
                  className={`w-16 h-12 sm:w-24 sm:h-16 rounded-xl overflow-hidden border-2 bg-slate-950 transition-all duration-300 relative group ${
                    isActive 
                      ? "border-primary shadow-[0_0_15px_rgba(99,102,241,0.5)] scale-105" 
                      : "border-white/10 hover:border-white/20 opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Screenshot ${idx + 1}`}
                    onError={(e) => {
                      e.currentTarget.src = placeholderImage;
                    }}
                    className="w-full h-full object-cover select-none"
                  />
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              );
            })}
          </div>
        )}

        {/* 2-Column Details Dashboard */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Core Descriptions & Challenges */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Overview Card */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="p-8 sm:p-10 rounded-2xl glass-card relative overflow-hidden"
            >
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Compass size={20} className="text-primary" /> Project Overview
              </h2>
              <p className="text-slate-300 leading-relaxed font-medium text-base sm:text-lg">
                {project.longDescription}
              </p>
            </motion.section>

            {/* Features section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="p-8 sm:p-10 rounded-2xl glass-card"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Settings size={20} className="text-primary animate-spin-slow" /> Key Deliverables & Features
              </h2>
              <ul className="space-y-4">
                {project.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-4 group">
                    <CheckCircle2 size={20} className="text-primary mt-0.5 shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-[0_0_10px_rgba(99,102,241,0.2)]" />
                    <span className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium">{feat}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Challenge & Solution Callout Card */}
            {project.challenges && project.solution && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="grid md:grid-cols-2 gap-6"
              >
                <div className="p-8 rounded-2xl border border-rose-500/10 bg-rose-500/5 hover:bg-rose-500/10 transition-colors duration-300 relative group overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                    <HelpCircle size={120} />
                  </div>
                  <h3 className="text-xl font-bold text-rose-400 mb-3 flex items-center gap-2">
                    <HelpCircle size={18} /> The Challenge
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed font-medium">
                    {project.challenges}
                  </p>
                </div>

                <div className="p-8 rounded-2xl border border-emerald-500/10 bg-emerald-500/5 hover:bg-emerald-500/10 transition-colors duration-300 relative group overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                    <Lightbulb size={120} />
                  </div>
                  <h3 className="text-xl font-bold text-emerald-400 mb-3 flex items-center gap-2">
                    <Lightbulb size={18} /> The Solution
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed font-medium">
                    {project.solution}
                  </p>
                </div>
              </motion.section>
            )}

          </div>

          {/* Right Column: Sidebar Stats, Stack & Contact */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Quick Metrics stats card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 rounded-2xl glass-card border border-primary/10 shadow-glow shadow-primary/5"
            >
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-white border-b border-white/5 pb-4">
                <Award size={16} className="text-primary" /> Project Milestones
              </h3>
              
              <div className="space-y-6">
                {project.metrics.map((met, idx) => (
                  <div key={idx} className="flex justify-between items-center group">
                    <span className="text-xs uppercase font-extrabold tracking-widest text-slate-500 group-hover:text-slate-400 transition-colors">{met.label}</span>
                    <span className="text-sm font-bold text-white bg-white/5 border border-white/5 px-3 py-1 rounded-md">{met.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Core Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 rounded-2xl glass-card"
            >
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-white border-b border-white/5 pb-4">
                <Settings size={16} className="text-primary" /> Integrated Tech Stack
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3.5 py-1.5 text-xs font-bold bg-white/5 border border-white/5 text-slate-200 rounded-lg select-none hover:bg-primary/20 hover:border-primary/30 transition-all duration-300 cursor-default animate-pulse"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Reach out CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-8 rounded-2xl bg-gradient-to-tr from-primary/10 to-indigo-500/10 border border-primary/20 flex flex-col gap-6 shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                <MessageSquare size={140} className="text-white" />
              </div>

              <div>
                <h4 className="text-xl font-bold text-white mb-2">Like this system architecture?</h4>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-semibold">
                  I can engineer custom web, mobile, SaaS, or digital twin products to fit your exact operational guidelines.
                </p>
              </div>

              <Button
                onClick={() => {
                  window.open("https://wa.me/923096766023?text=Hi%20Tayyab,%20I%20viewed%20your%20interactive%20details%20for%20" + encodeURIComponent(project.title) + "%20and%20would%20love%20to%20collaborate!", "_blank");
                }}
                className="bg-primary hover:bg-primary/95 border border-white/10 w-full rounded-full py-6 text-xs uppercase font-extrabold tracking-wider transition-all duration-300 active:scale-95 shadow-[0_0_15px_rgba(99,102,241,0.25)]"
              >
                Inquire on WhatsApp <MessageSquare size={14} className="ml-2" />
              </Button>
            </motion.div>

          </div>

        </div>

      </main>

      <Footer />

    </div>
  );
};

export default ProjectDetail;
