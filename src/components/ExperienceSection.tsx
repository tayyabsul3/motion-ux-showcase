
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BriefcaseIcon } from 'lucide-react';

const experiences = [
  {
    company: "DASSOFT",
    position: "Junior Developer (Full-time)",
    location: "Rawalpindi, Pakistan",
    period: "Aug 2024 – Present",
    responsibilities: [
      "Developed Websites and WebApps using Node.js, Express.js, and MongoDB",
      "Created dynamic and user-friendly interfaces with React.js, Next.js, TypeScript, and Tailwind CSS",
      "Implemented secure and scalable application architecture with Redux Toolkit and JWT authentication",
      "Built 10+ web projects using React.js, Next.js, Firebase, Node.js, Express.js, Tailwind CSS, and GSAP",
      "Worked in a team to develop interactive dashboards using React.js",
      "Contributed to web application development and optimization",
      "Enhanced user experience and responsiveness across devices",
      "Collaborated on RESTful APIs integration and debugging",
      "Used Git for collaborative development"
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-slate-900/60">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">My professional journey and achievements</p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="backdrop-blur-card">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <BriefcaseIcon className="w-6 h-6 text-primary" />
                    <div>
                      <CardTitle className="text-xl font-semibold">{exp.position}</CardTitle>
                      <p className="text-muted-foreground">
                        {exp.company} • {exp.location} • {exp.period}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
