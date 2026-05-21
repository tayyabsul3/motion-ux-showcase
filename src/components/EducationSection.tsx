import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award, BookOpen, ChevronDown, ChevronUp, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const courses = [
  "Data Structures & Algorithms",
  "Object-Oriented Programming",
  "Web Engineering",
  "Mobile Application Development",
  "Database Management Systems",
  "Cloud Computing",
  "Software Architecture & Design",
  "Operating Systems",
  "Computer Networks",
  "Cybersecurity Fundamentals",
  "Agile & DevOps Practices",
  "Human-Computer Interaction",
  "Artificial Intelligence",
  "API Design & Microservices"
];

const EducationSection = () => {
  const [showCourses, setShowCourses] = useState(false);
  const [hoveredCourse, setHoveredCourse] = useState<string | null>(null);

  return (
    <section id="education" className="relative py-0 bg-[#07070a] text-white border-t border-white/5 overflow-hidden">
      
      {/* Soft ambient background spots */}
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-[130px] pointer-events-none -z-10" />

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
            <GraduationCap size={12} /> Education & Training
          </div>
          <h2 className="section-title">My Academic Foundation</h2>
          <p className="section-subtitle">
            Formal training in software engineering, advanced systems design, and outcome-based engineering systems
          </p>
        </motion.div>

        {/* Education Main Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <Card className="backdrop-blur-xl bg-slate-950/40 border border-white/5 hover:border-primary/15 transition-all duration-300 shadow-2xl relative overflow-hidden group">
            
            {/* Glowing top line highlight */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/45 to-indigo-500/45" />

            <CardContent className="p-6 sm:p-10">
              
              {/* Header Title info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-6 mb-6">
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-2xl bg-primary/10 border border-primary/20 text-primary mt-1">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-none mb-2">
                      Bachelor's of Software Engineering
                    </h3>
                    <p className="text-sm font-semibold text-slate-300">
                      PMAS-Arid University Rawalpindi
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 text-xs font-bold text-slate-400 items-start sm:items-end">
                  <span className="flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                    <Calendar size={12} className="text-primary" /> 2022 - 2026
                  </span>
                  <span className="flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                    <MapPin size={12} className="text-primary" /> Rawalpindi, Pakistan
                  </span>
                </div>
              </div>

              {/* OBE360 Final Year Project Spotlight */}
              <div className="mb-6 bg-primary/5 border border-primary/10 rounded-2xl p-5 sm:p-6 relative group/fy">
                <div className="absolute top-4 right-4 text-primary/20">
                  <Sparkles size={20} className="animate-pulse" />
                </div>
                <span className="text-[10px] uppercase font-black tracking-widest text-primary mb-1 inline-block">
                  Final Year Project Spotlight
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white mb-2 leading-tight">
                  OBE360 — Smart Outcome Based Education System
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Architected and engineered a comprehensive academic auditing and performance tracking platform designed to digitize accreditation workflows, program mapping, and administrative outcome reports. Deployed as a live production system currently in active use.
                </p>
              </div>

              {/* Coursework Expandable Accordion */}
              <div className="border-t border-white/5 pt-6">
                <div className="flex justify-between items-center">
                  <span className="text-xs uppercase font-extrabold tracking-widest text-slate-400 flex items-center gap-2">
                    <BookOpen size={14} className="text-primary" /> Advanced Coursework
                  </span>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowCourses(!showCourses)}
                    className="text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-white hover:bg-white/5 gap-1.5"
                  >
                    {showCourses ? (
                      <>Hide List <ChevronUp size={14} /></>
                    ) : (
                      <>Show List <ChevronDown size={14} /></>
                    )}
                  </Button>
                </div>

                <AnimatePresence>
                  {showCourses && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden mt-4"
                    >
                      <div className="flex flex-wrap gap-2 pt-2">
                        {courses.map((course) => {
                          const isHovered = hoveredCourse === course;
                          return (
                            <motion.span
                              key={course}
                              onMouseEnter={() => setHoveredCourse(course)}
                              onMouseLeave={() => setHoveredCourse(null)}
                              whileHover={{ scale: 1.03 }}
                              className={`px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wide border cursor-default select-none transition-all duration-300 ${
                                isHovered
                                  ? "bg-primary border-white/20 text-white shadow-[0_4px_12px_-2px_rgba(99,102,241,0.4)]"
                                  : "bg-slate-900/60 border-white/5 text-slate-300"
                              }`}
                            >
                              {course}
                            </motion.span>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </CardContent>
          </Card>
        </motion.div>

      </div>
    </section>
  );
};

export default EducationSection;
