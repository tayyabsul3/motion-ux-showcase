import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Server, Smartphone, Wrench, Sparkles } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code2,
    color: "from-sky-500/20 to-blue-600/20 text-sky-400",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Shadcn UI", "Redux", "Redux Toolkit", "HTML5/CSS3"],
  },
  {
    title: "Backend & Database",
    icon: Server,
    color: "from-emerald-500/20 to-teal-600/20 text-emerald-400",
    skills: ["Node.js", "Express.js", "REST API Design", "JWT Authentication", "MongoDB", "MySQL", "PostgreSQL", "Supabase", "Firebase"],
  },
  {
    title: "Mobile & DevOps",
    icon: Smartphone,
    color: "from-purple-500/20 to-indigo-600/20 text-purple-400",
    skills: ["React Native", "Expo", "Docker", "CI/CD Pipelines", "Vercel", "Render", "Netlify"],
  },
  {
    title: "Languages & Tools",
    icon: Wrench,
    color: "from-amber-500/20 to-orange-600/20 text-amber-400",
    skills: ["TypeScript", "JavaScript (ES6+)", "Python", "SQL", "C++", "Java", "Git / GitHub", "Postman", "Figma", "npm / yarn"],
  },
];

const SkillsSection = () => {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="relative py-0 bg-[#07070a] text-white border-t border-white/5 overflow-hidden">
      
      {/* Dynamic blurred orbs in background */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse" />

      <div className="section-container">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles size={12} /> Tech Stack & Tools
          </div>
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle">
            A comprehensive overview of technologies I use to build scalable, full-stack digital solutions
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, idx) => {
            const isCategoryHovered = hoveredCategory === idx;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onMouseEnter={() => setHoveredCategory(idx)}
                onMouseLeave={() => setHoveredCategory(null)}
                className="relative"
              >
                <Card 
                  className={`backdrop-blur-xl border transition-all duration-500 overflow-hidden h-full ${
                    isCategoryHovered 
                      ? "bg-slate-900/60 border-primary/30 shadow-[0_15px_40px_-15px_rgba(99,102,241,0.25)] scale-[1.01]" 
                      : "bg-slate-950/40 border-white/5 shadow-xl shadow-black/30"
                  }`}
                >
                  <CardContent className="p-8">
                    
                    {/* Floating neon category blur orb */}
                    <div 
                      className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${cat.color} rounded-full blur-2xl pointer-events-none opacity-40 transition-all duration-700 ${
                        isCategoryHovered ? "scale-150 opacity-60" : ""
                      }`}
                    />

                    {/* Category Title Header */}
                    <div className="flex items-center gap-4 mb-6 relative z-10">
                      <div className={`p-3 rounded-xl border border-white/5 bg-slate-900/80 text-white ${
                        isCategoryHovered ? "text-primary border-primary/20 bg-primary/10 shadow-[0_0_15px_-3px_rgba(99,102,241,0.3)]" : ""
                      } transition-all duration-300`}>
                        <cat.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {cat.title}
                      </h3>
                    </div>

                    {/* Badges Matrix */}
                    <div className="flex flex-wrap gap-3 relative z-10">
                      {cat.skills.map((skill) => {
                        const isSkillHovered = hoveredSkill === skill;
                        return (
                          <motion.span
                            key={skill}
                            onMouseEnter={() => setHoveredSkill(skill)}
                            onMouseLeave={() => setHoveredSkill(null)}
                            whileHover={{ scale: 1.05, y: -2 }}
                            transition={{ type: "spring", stiffness: 300, damping: 15 }}
                            className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold tracking-wide border cursor-default select-none transition-all duration-300 flex items-center gap-1.5 ${
                              isSkillHovered
                                ? "bg-primary border-white/20 text-white shadow-[0_5px_15px_-2px_rgba(99,102,241,0.5)]"
                                : isCategoryHovered
                                  ? "bg-slate-900/60 border-white/10 text-slate-200"
                                  : "bg-slate-950/60 border-white/5 text-slate-400"
                            }`}
                          >
                            <span className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                              isSkillHovered ? "bg-white" : "bg-primary"
                            }`} />
                            {skill}
                          </motion.span>
                        );
                      })}
                    </div>

                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Soft interactive footer badge prompt */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center text-xs text-slate-500 font-bold uppercase tracking-widest flex items-center justify-center gap-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Always expanding and learning new technologies
        </motion.div>

      </div>
    </section>
  );
};

export default SkillsSection;
