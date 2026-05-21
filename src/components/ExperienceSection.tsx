import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Briefcase, Calendar, MapPin, Award, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    company: "Siber Koza",
    role: "Full Stack Web Developer",
    period: "2026 - Present",
    location: "Rawalpindi, Pakistan",
    highlight: "Digital Twin & Mobile Solutions",
    color: "from-indigo-500/20 to-purple-500/20 text-indigo-400",
    bullets: [
      "Built a React Native mobile app for a Netherlands-based client (Pop-It), delivering an end-to-end e-business card platform with real-time sharing features.",
      "Developed a Digital Twin simulation for a NASTP Joint Venture, working directly in collaboration with Air Vice Marshal leadership to digitize operational assets.",
      "Managed application deployment pipelines and DevOps configurations including CI/CD, server setup, and containerized deployments."
    ]
  },
  {
    company: "Dassoft",
    role: "MERN Stack Developer",
    period: "2025 - 2026",
    location: "Rawalpindi, Pakistan",
    highlight: "Enterprise SaaS & MERN",
    color: "from-sky-500/20 to-blue-500/20 text-sky-400",
    bullets: [
      "Architected and deployed full stack web applications handling both frontend and backend responsibilities across multiple concurrent projects.",
      "Built D-Go RMS from scratch — a full-featured restaurant management system including customer-facing site, admin panel, and integrated POS system with real-time order/inventory handling.",
      "Developed Pop-It Teams — a web dashboard enabling teams to create, customize, and share digital business cards.",
      "Handled end-to-end development across React frontend, Node/Express backend, MongoDB, and REST API integrations."
    ]
  },
  {
    company: "Siber Koza",
    role: "Front-End Developer Intern",
    period: "2024 - 2025",
    location: "Rawalpindi, Pakistan",
    highlight: "Award-Winning Contributor",
    color: "from-emerald-500/20 to-teal-500/20 text-emerald-400",
    bullets: [
      "Built a Log Management Dashboard using React, Tailwind CSS, and Shadcn UI with full third-party API integration.",
      "Delivered clean, responsive UI components and interactive data visualization charts for real-time log monitoring.",
      "Recognized with the Most Valuable Contributor award at the end of the internship period and offered a full-time developer role."
    ]
  }
];

const ExperienceSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const firstDotRef = useRef<HTMLDivElement>(null);
  const lastDotRef = useRef<HTMLDivElement>(null);

  // Dynamic start and end calculations for the timeline center spine line
  const [lineRange, setLineRange] = useState({ top: 44, bottom: 200 });

  useEffect(() => {
    const updateLineRange = () => {
      if (firstDotRef.current && lastDotRef.current && timelineRef.current) {
        const timelineRect = timelineRef.current.getBoundingClientRect();
        const firstDotRect = firstDotRef.current.getBoundingClientRect();
        const lastDotRect = lastDotRef.current.getBoundingClientRect();

        // Calculate center vertical coordinates relative to the parent timeline container
        const top = firstDotRect.top - timelineRect.top + firstDotRect.height / 2;
        const bottom = timelineRect.bottom - lastDotRect.top - lastDotRect.height / 2;

        setLineRange({ top, bottom });
      }
    };

    // Run measurement immediately and after a short render delay
    updateLineRange();
    const timer = setTimeout(updateLineRange, 150);

    window.addEventListener("resize", updateLineRange);
    return () => {
      window.removeEventListener("resize", updateLineRange);
      clearTimeout(timer);
    };
  }, []);
  
  // Track scroll progress of the timeline section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end 72%"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" ref={containerRef} className="relative py-0 bg-[#050508] text-white border-t border-white/5 overflow-hidden">
      
      {/* Blurred glowing light spheres */}
      <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] bg-primary/5 rounded-full blur-[130px] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] bg-indigo-500/5 rounded-full blur-[130px] pointer-events-none -z-10 animate-pulse" />

      <div className="section-container">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            <Award size={12} /> Work Experience
          </div>
          <h2 className="section-title">My Professional Journey</h2>
          <p className="section-subtitle">
            A chronological timeline of my developer experience, working with government initiatives, international agencies, and full-stack environments
          </p>
        </motion.div>

        {/* Timeline Layout */}
        <div ref={timelineRef} className="relative max-w-4xl mx-auto">
          
          {/* Timeline center spine line (Desktop/Mobile - precisely starts at first dot center and ends at last dot center) */}
          <div 
            style={{ top: lineRange.top, bottom: lineRange.bottom }}
            className="absolute left-4 md:left-1/2 w-[2px] bg-white/10 -translate-x-1/2 z-0" 
          />

          {/* Active timeline spine line that glows/fills up as user scrolls (precisely bounded by first and last dot centers) */}
          <motion.div 
            style={{ 
              top: lineRange.top, 
              bottom: lineRange.bottom, 
              scaleY, 
              transformOrigin: "top" 
            }}
            className="absolute left-4 md:left-1/2 w-[2px] bg-gradient-to-b from-primary via-indigo-500 to-violet-500 -translate-x-1/2 z-0 origin-top shadow-[0_0_15px_rgba(99,102,241,0.5)]"
          />

          {/* Timeline milestones */}
          <div className="space-y-16">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              const isFirst = idx === 0;
              const isLast = idx === experiences.length - 1;

              return (
                <div 
                  key={idx} 
                  className={`flex flex-col md:flex-row relative ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  
                  {/* Glowing center indicator dot (assigned refs to first and last for dynamic spine measurements) */}
                  <div 
                    ref={isFirst ? firstDotRef : isLast ? lastDotRef : undefined}
                    className="absolute left-4 md:left-1/2 w-6 h-6 rounded-full bg-slate-950 border-4 border-slate-800 -translate-x-1/2 z-10 flex items-center justify-center top-2 md:top-8 shadow-md"
                  >
                    <motion.div 
                      whileInView={{ scale: [0.5, 1.2, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(99,102,241,0.8)] animate-pulse" 
                    />
                  </div>

                  {/* Left spacer for desktop formatting */}
                  <div className="w-full md:w-1/2 hidden md:block" />

                  {/* Card Container (configured precise directional padding variables to prevent card/line overlap) */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -55 : 55 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 80, damping: 15, delay: idx * 0.15 }}
                    className={`w-full md:w-1/2 pl-12 md:pl-0 relative ${
                      isEven ? "md:pr-12 md:pl-4" : "md:pl-12 md:pr-4"
                    }`}
                  >
                    <Card className="backdrop-blur-xl bg-slate-950/40 border border-white/5 hover:border-primary/20 hover:bg-slate-950/60 shadow-2xl transition-all duration-300 overflow-hidden group">
                      
                      {/* Sub-glowing hover line */}
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/50 to-indigo-500/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                      <CardContent className="p-6 sm:p-8">
                        
                        {/* Company Badge & Location */}
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                          <span className="text-2xl font-black text-white tracking-tight uppercase group-hover:text-primary transition-colors">
                            {exp.company}
                          </span>
                          
                          <div className="flex gap-2 items-center text-xs font-semibold text-slate-400">
                            <span className="flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                              <Calendar size={12} className="text-primary" /> {exp.period}
                            </span>
                            <span className="flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                              <MapPin size={12} className="text-primary" /> {exp.location}
                            </span>
                          </div>
                        </div>

                        {/* Title Role & Highlight Info */}
                        <div className="mb-6">
                          <h4 className="text-lg sm:text-xl font-bold text-slate-100 leading-tight">
                            {exp.role}
                          </h4>
                          <span className="text-xs uppercase font-extrabold tracking-widest text-primary mt-1 inline-block">
                            {exp.highlight}
                          </span>
                        </div>

                        {/* Bullets lists */}
                        <ul className="space-y-3.5 text-sm text-slate-400 leading-relaxed font-medium">
                          {exp.bullets.map((bullet, bidx) => (
                            <li key={bidx} className="flex items-start gap-3 group/bullet">
                              <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0 transition-transform duration-300 group-hover/bullet:scale-110 shadow-[0_0_10px_rgba(99,102,241,0.2)]" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>

                      </CardContent>
                    </Card>
                  </motion.div>
                  
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;
