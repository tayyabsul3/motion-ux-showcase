
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Award, Code, Users, Briefcase } from 'lucide-react';

const stats = [
  { id: 1, number: 50, suffix: '+', title: 'Projects Completed', icon: Briefcase },
  { id: 2, number: 5, suffix: '+', title: 'Years of Experience', icon: Award },
  { id: 3, number: 20, suffix: 'K+', title: 'Lines of Code', icon: Code },
  { id: 4, number: 30, suffix: '+', title: 'Happy Clients', icon: Users },
];

const NumbersSection = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <CountUp 
              key={stat.id} 
              targetNumber={stat.number} 
              suffix={stat.suffix} 
              title={stat.title} 
              icon={stat.icon} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface CountUpProps {
  targetNumber: number;
  suffix?: string;
  title: string;
  icon: React.ElementType;
}

const CountUp: React.FC<CountUpProps> = ({ targetNumber, suffix = '', title, icon: Icon }) => {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = targetNumber;
    const duration = 2000;
    const startTime = Date.now();

    const timer = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      // Easing function for smoother animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(easeOutQuart * end);
      
      setCount(current);

      if (progress === 1) {
        clearInterval(timer);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, targetNumber]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="text-center p-6"
    >
      <div className="flex justify-center mb-4">
        <div className="p-3 bg-white/20 rounded-full">
          <Icon className="w-8 h-8" />
        </div>
      </div>
      <h3 className="text-4xl font-bold mb-2">
        {count}
        {suffix}
      </h3>
      <p className="text-white/80">{title}</p>
    </motion.div>
  );
};

export default NumbersSection;
