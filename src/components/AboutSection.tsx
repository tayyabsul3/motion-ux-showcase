
import { motion } from 'framer-motion';
import { Code, Server, Database, Globe, Layout, Zap } from 'lucide-react';

const technologies = [
  { name: 'Frontend', icon: Layout, skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'] },
  { name: 'Backend', icon: Server, skills: ['Node.js', 'Express', 'NestJS', 'GraphQL'] },
  { name: 'Databases', icon: Database, skills: ['MongoDB', 'PostgreSQL', 'Redis', 'Firebase'] },
  { name: 'Other', icon: Globe, skills: ['Git', 'Docker', 'AWS', 'CI/CD'] },
];

const AboutSection = () => {
  // Scroll animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-slate-900/60">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="section-title mb-4">About Me</h2>
          <p className="section-subtitle">
            I'm a passionate full stack developer with 5+ years of experience in building web applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">My Background</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I'm a full stack developer with a passion for creating efficient, scalable, and user-friendly web applications. With over 5 years of experience in the field, I've worked on various projects ranging from small business websites to large enterprise applications.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              My journey in web development started when I built my first website in college. Since then, I've been continuously learning and keeping up with the latest technologies and best practices in the industry.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              I focus on writing clean, maintainable code and creating intuitive user experiences. My goal is to build applications that not only meet the requirements but exceed expectations.
            </p>
          </motion.div>

          {/* Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="grid grid-cols-2 gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  variants={itemVariants}
                  className="p-6 bg-white dark:bg-slate-800 rounded-lg shadow-md card-hover"
                >
                  <div className="flex items-center mb-4">
                    <tech.icon className="w-5 h-5 mr-2 text-primary" />
                    <h3 className="text-lg font-semibold">{tech.name}</h3>
                  </div>
                  <ul className="space-y-1">
                    {tech.skills.map((skill) => (
                      <li key={skill} className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                        <Code className="w-3 h-3 mr-2 text-primary" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
