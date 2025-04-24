import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Sarah Tayyabson",
    title: "Product Manager at TechCorp",
    content:
      "Tayyab is an exceptional developer who consistently delivers high-quality code. His attention to detail and problem-solving abilities made our project a success. I would highly recommend him for any web development project.",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "CTO at StartupX",
    content:
      "Working with Tayyab was a pleasure. He not only understood our technical requirements but also provided valuable insights that improved our product. His work is clean, well-documented, and delivered on time.",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    title: "Frontend Lead at DesignStudio",
    content:
      "Tayyab has a rare combination of technical expertise and creative problem solving. He took our vague concept and turned it into a beautiful, functional application that exceeded our expectations.",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 4,
    name: "David Kim",
    title: "Project Manager at EnterpriseY",
    content:
      "I was impressed by Tayyab's ability to quickly understand our complex requirements and deliver a solution that was both elegant and efficient. He's a skilled developer who communicates effectively throughout the project.",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Auto-advancing carousel
  useEffect(() => {
    const startTimer = () => {
      timeoutRef.current = window.setTimeout(() => {
        nextSlide();
      }, 5000);
    };

    startTimer();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section
      id="testimonials"
      className="py-20 bg-gray-50 dark:bg-slate-900/60"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="section-title mb-4">Client Testimonials</h2>
          <p className="section-subtitle">
            Here's what clients and colleagues have to say about working with
            me.
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <div className="relative h-96 md:h-80">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute w-full"
            >
              <div className="max-w-3xl mx-auto bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
                <div className="text-primary mb-4">
                  <Quote size={40} className="opacity-20" />
                </div>
                <p className="text-lg mb-6 text-gray-700 dark:text-gray-300 italic">
                  "{testimonials[currentIndex].content}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="w-14 h-14 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonials[currentIndex].title}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              className="bg-white/80 dark:bg-slate-800/80 text-primary hover:bg-white dark:hover:bg-slate-800 rounded-full shadow-md"
            >
              <ChevronLeft size={24} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              className="bg-white/80 dark:bg-slate-800/80 text-primary hover:bg-white dark:hover:bg-slate-800 rounded-full shadow-md"
            >
              <ChevronRight size={24} />
            </Button>
          </div>

          {/* Indicator Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex
                    ? "bg-primary"
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
