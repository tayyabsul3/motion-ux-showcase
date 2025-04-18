import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-50 dark:from-slate-900 dark:to-slate-800 -z-10"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl -z-10"></div>

      <div className="section-container grid md:grid-cols-2 gap-8 items-center">
        {/* Text content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="order-2 md:order-1"
        >
          <motion.div variants={itemVariants} className="mb-2">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
              Full Stack Developer
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Hi, I'm <span className="text-primary">Tayyab</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-md"
          >
            I build exceptional and accessible digital experiences for the web.
            Specialized in creating modern, responsive web applications.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 mb-8"
          >
            <Button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-primary hover:bg-primary/90"
            >
              Contact Me
            </Button>

            <Button
              variant="outline"
              onClick={() =>
                window.open(
                  "https://plrhlsmmhmuutumibwez.supabase.co/storage/v1/object/public/pictures//tayyab_resume.docx",
                  "_blank"
                )
              }
              className="border-primary text-primary hover:bg-primary/5"
            >
              Download CV <ArrowDown size={16} className="ml-2" />
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-4">
            <a
              href="https://github.com/tayyabsul3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
            >
              <Github size={24} />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-tayyab-bb27a4250/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
            >
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=tayyabsultan621@gmail.com"
              className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
            >
              <Mail size={24} />
              <span className="sr-only">Email</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative">
            <div className="absolute  inset-0 bg-primary rounded-full blur-3xl opacity-20 -z-10 scale-75"></div>
            <img
              src="/images/profile-pic.png"
              alt="John Doe"
              className="rounded-3xl hidden md:block  max-w-md w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
