import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Taha Karim",
    role: "Innovation Manager",
    company: "Siber Koza International",
    testimony: "He has been a standout full-stack developer on our team, handling both web and mobile work with equal ease. What I value most is how quickly he turns complex requirements into clean, scalable solutions without sacrificing quality, even when deadlines are tight. He doesn’t only work on the code rather he takes ownership of the problem, communicates clearly, and delivers production-ready work on time. He is calm under pressure and consistently reliable."
  },
  {
    id: 2,
    name: "Ehtisham Ejaz",
    role: "CEO",
    company: "Dassoft",
    testimony: "Reliability and technical competence are tough to find, but Tayyab Sultan has brought both to our company for the last two years. He has been instrumental in launching key web architectures and scaling our platforms. His dedication makes him a standout developer."
  },
  {
    id: 3,
    name: "Hesham",
    role: "CTO",
    company: "Dassoft",
    testimony: "Tayyab is a skilled professional who pairs deep technical expertise with strategic, creative problem-solving. Rather than simply executing our project requirements, he actively elevated our vision, delivering high-performance results that drove tangible business impact."
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1: left, 1: right

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0
    })
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="relative py-20 bg-[#050508] text-white border-t border-white/5 overflow-hidden">
      
      {/* Blurred background orbs */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse" />

      <div className="section-container">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            <MessageSquare size={12} /> Recommendations
          </div>
          <h2 className="section-title">Client Testimonials</h2>
          <p className="section-subtitle">
            Read what industry leaders and international clients say about my technical deliveries and execution
          </p>
        </motion.div>

        {/* Swipeable Carousel Container */}
        <div className="relative max-w-3xl mx-auto px-4 sm:px-12 flex flex-col items-center">
          
          <div className="relative w-full overflow-hidden flex items-center justify-center py-4 min-h-[300px]">
            
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.4}
                onDragEnd={(_, info) => {
                  if (info.offset.x > 80) {
                    handlePrev();
                  } else if (info.offset.x < -80) {
                    handleNext();
                  }
                }}
                className="w-full px-1 cursor-grab active:cursor-grabbing"
              >
                <div className="rounded-3xl glass-card bg-slate-950/40 border border-white/5 p-6 sm:p-8 relative shadow-2xl overflow-hidden flex flex-col justify-between min-h-[260px] w-full">
                  
                  {/* Glowing quote symbol */}
                  <div className="absolute top-4 right-6 text-primary/10 -z-10">
                    <Quote size={120} className="stroke-[1]" />
                  </div>

                  {/* Testimonial Quote */}
                  <p className="text-sm sm:text-base md:text-lg text-slate-300 italic leading-relaxed font-medium mb-6">
                    "{current.testimony}"
                  </p>

                  {/* Profile Signature Details */}
                  <div className="border-t border-white/5 pt-4">
                    <h4 className="font-bold text-white leading-tight text-sm sm:text-base">
                      {current.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 font-semibold uppercase tracking-wider mt-1">
                      {current.role} <span className="text-primary font-bold">•</span> {current.company}
                    </p>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>

          </div>

          {/* Left / Right Arrow buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 sm:left-0 -right-4 sm:right-0 justify-between flex pointer-events-none z-30">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-slate-950/80 border border-white/10 text-slate-400 hover:text-white pointer-events-auto hover:bg-primary shadow-lg hover:scale-105 transition-transform"
            >
              <ChevronLeft size={20} />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-slate-950/80 border border-white/10 text-slate-400 hover:text-white pointer-events-auto hover:bg-primary shadow-lg hover:scale-105 transition-transform"
            >
              <ChevronRight size={20} />
            </Button>
          </div>

          {/* Carousel dots indicator navigation */}
          <div className="flex gap-2.5 mt-8 justify-center z-10 relative">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "bg-primary w-6 shadow-[0_0_10px_rgba(99,102,241,0.6)]"
                    : "bg-slate-700 hover:bg-slate-500"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
