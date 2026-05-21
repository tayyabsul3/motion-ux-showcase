import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Award, Briefcase, Globe, Star, Shield, ArrowDownRight } from "lucide-react";

interface StatCardProps {
  number: string;
  label: string;
  icon: React.ElementType;
  description: string;
}

// 3D Parallax Tilt Card Component
const TiltCard: React.FC<StatCardProps> = ({ number, label, icon: Icon, description }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  // Mouse positions inside card
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs
  const springX = useSpring(x, { stiffness: 150, damping: 20 });
  const springY = useSpring(y, { stiffness: 150, damping: 20 });

  // Transforms for 3D card tilt
  const rotateX = useTransform(springY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-10, 10]);

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
      style={{
        rotateX: hovered ? rotateX : 0,
        rotateY: hovered ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      className="relative p-6 rounded-2xl glass-card cursor-pointer border border-white/5 bg-slate-900/40 hover:bg-slate-900/60 transition-colors shadow-lg shadow-black/20 overflow-hidden group perspective-1000"
    >
      {/* Background glow orb that follows hover */}
      <div 
        className="absolute w-36 h-36 bg-primary/20 rounded-full blur-2xl pointer-events-none -z-10 group-hover:scale-125 transition-transform duration-500"
        style={{
          top: "10%",
          left: "10%"
        }}
      />

      <div style={{ transform: "translateZ(30px)" }} className="flex flex-col items-start preserve-3d">
        <div className="p-3 bg-primary/10 rounded-xl mb-4 group-hover:bg-primary/25 transition-colors border border-white/5">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h4 className="text-3xl font-black text-white tracking-tight mb-1 group-hover:text-primary transition-colors">
          {number}
        </h4>
        <span className="text-xs uppercase font-extrabold tracking-widest text-slate-400 mb-2">
          {label}
        </span>
        <p className="text-xs text-slate-500 leading-normal">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const AboutSection = () => {
  const bio = "Full Stack Developer with 2+ years of experience delivering end-to-end web and mobile solutions for international clients across the Netherlands, Turkey, and Pakistan. Specialized in the MERN stack, React Native, DevOps, and system integrations. Built production-grade mobile apps and contributed to a Digital Twin project in collaboration with NASTP. Known for clean, scalable code and recognized with a Most Valuable Contributor award early in my career.";

  const stats = [
    {
      number: "2+ Years",
      label: "Experience",
      icon: Briefcase,
      description: "Delivering end-to-end products across diverse global tech ecosystems.",
    },
    {
      number: "7+ Projects",
      label: "Completed",
      icon: Star,
      description: "Including large platforms, digital twins, and mobile applications.",
    },
    {
      number: "3 Countries",
      label: "Global Reach",
      icon: Globe,
      description: "Collaborated with clients in the Netherlands, Turkey, and Pakistan.",
    },
    {
      number: "1 Award",
      label: "Valued Contributor",
      icon: Award,
      description: "Recognized as Most Valuable Contributor early in my career.",
    },
  ];

  return (
    <section id="about" className="relative py-0 bg-[#050508] overflow-hidden text-white border-t border-white/5">
      {/* Decorative blurred backdrops */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="section-container">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            A developer passionate about building high-fidelity web & mobile platforms
          </p>
        </motion.div>

        {/* Bio Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Side: Photo/Tech Graphic */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-sm aspect-square rounded-2xl overflow-hidden glass-card border border-white/10 p-6 flex flex-col justify-between bg-slate-950/50 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-indigo-500/10 opacity-30 -z-10" />
              
              <div className="flex justify-between items-start">
                <Shield className="w-8 h-8 text-primary opacity-60" />
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 px-2.5 py-1 rounded-md bg-white/5 border border-white/5">
                  Full Stack Dev
                </span>
              </div>

              {/* Central graphic code simulation */}
              <div className="my-6 font-mono text-xs text-slate-400 space-y-2 select-none">
                <p className="text-primary font-bold">const developer = {"{"}</p>
                <p className="pl-4">name: <span className="text-emerald-400">"Muhammad Tayyab"</span>,</p>
                <p className="pl-4">experience: <span className="text-amber-400">"2+ Years"</span>,</p>
                <p className="pl-4">specialties: [<span className="text-sky-400">"MERN"</span>, <span className="text-purple-400">"Expo"</span>, <span className="text-teal-400">"AI"</span>],</p>
                <p className="pl-4">ambition: <span className="text-indigo-400">"Build scalable, clean architectures"</span></p>
                <p className="text-primary font-bold">{"}"};</p>
              </div>

              <div className="flex items-center justify-between border-t border-white/5 pt-4 text-xs font-semibold text-slate-400">
                <span>Rawalpindi, Pakistan</span>
                <span className="flex items-center text-primary gap-1">
                  Active Developer <ArrowDownRight size={14} />
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Side: CV Summary bio & Quick Summary bullets */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-6 text-white tracking-tight leading-tight">
              Crafting production-grade <br />
              <span className="text-primary">systems that bridge front & back ends.</span>
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6 text-base sm:text-lg">
              {bio}
            </p>

            {/* Quick highlight checklist */}
            <div className="grid sm:grid-cols-2 gap-4 border-t border-white/5 pt-6 text-slate-400 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Next.js & MERN Expert</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>React Native Mobile Developer</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Digital Twin Joint Venture experience</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>CI/CD & DevOps Containerization</span>
              </div>
            </div>

          </motion.div>
        </div>

        {/* 3D Tilt Stats Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, i) => (
            <TiltCard
              key={i}
              number={stat.number}
              label={stat.label}
              icon={stat.icon}
              description={stat.description}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;
