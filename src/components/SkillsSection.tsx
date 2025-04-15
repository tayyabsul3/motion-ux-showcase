
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Terminal, Tools, Laptop } from 'lucide-react';

const skills = {
  languages: ['Java', 'C++', 'HTML/CSS', 'JavaScript', 'TypeScript', 'SQL', 'Node.js', 'Express.js', 'React'],
  technologies: ['React.js', 'Next.js', 'Tailwind CSS', 'Redux', 'Firebase'],
  tools: ['VS Code', 'Git', 'GitHub'],
  other: ['REST APIs', 'MongoDB', 'Redux Toolkit', 'JWT Authentication']
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="backdrop-blur-card h-full">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <Code2 className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold">Languages</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="backdrop-blur-card h-full">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <Laptop className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold">Technologies</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.technologies.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Card className="backdrop-blur-card h-full">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <Tools className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold">Tools</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Card className="backdrop-blur-card h-full">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <Terminal className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold">Other</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.other.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
