
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from 'lucide-react';

const education = {
  university: "PMAS-ARID",
  degree: "Bachelor of Software Engineering",
  location: "Rawalpindi, Pakistan",
  period: "Oct 2022 – Present"
};

const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-slate-900/60">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">My academic background</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Card className="backdrop-blur-card max-w-2xl mx-auto">
            <CardHeader>
              <div className="flex items-center gap-4">
                <GraduationCap className="w-6 h-6 text-primary" />
                <div>
                  <CardTitle className="text-xl font-semibold">{education.degree}</CardTitle>
                  <p className="text-muted-foreground">
                    {education.university} • {education.location} • {education.period}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Currently pursuing a bachelor's degree in Software Engineering, focusing on developing strong foundations in computer science and software development principles.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
