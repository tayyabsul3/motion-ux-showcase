import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  ArrowDown, Github, Linkedin, Mail, Download, MessageSquare, 
  Terminal as TermIcon, Cpu, Smartphone, Layers, Globe, Coffee, Sparkles,
  ChevronRight, Play, RefreshCw, Command, User, Check, Code, HardDrive
} from "lucide-react";

const roles = [
  "Full Stack Developer",
  "React Native Developer",
  "AI Integration Specialist",
];

const floatingTechs = [
  { name: "React", icon: Layers, color: "text-sky-400", x: -145, y: -95 },
  { name: "Node.js", icon: TermIcon, color: "text-emerald-400", x: 145, y: -95 },
  { name: "Supabase", icon: Cpu, color: "text-emerald-500", x: -145, y: 95 },
  { name: "React Native", icon: Smartphone, color: "text-purple-400", x: 145, y: 95 },
  { name: "TypeScript", icon: Code, color: "text-blue-400", x: -175, y: 0 },
  { name: "Next.js", icon: Globe, color: "text-slate-200", x: 175, y: 0 },
  { name: "Docker", icon: HardDrive, color: "text-sky-500", x: -60, y: -150 },
  { name: "Tailwind", icon: Sparkles, color: "text-teal-400", x: 60, y: 150 },
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeTab, setActiveTab] = useState<"visual" | "terminal">("visual");

  // Terminal state
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalLogs, setTerminalLogs] = useState<Array<{ text: string; type: "input" | "system" | "success" | "info" }>>([
    { text: "TayyabOS v2.4.0 (type 'help' for available commands)", type: "system" },
    { text: "System connection established securely...", type: "success" },
  ]);
  const [coffeeLevel, setCoffeeLevel] = useState(85);
  const terminalContainerRef = useRef<HTMLDivElement>(null);
  const terminalInputRef = useRef<HTMLInputElement>(null);

  // Typewriter effect for roles
  useEffect(() => {
    let timer: number;
    const currentFullRole = roles[roleIndex];

    if (isDeleting) {
      timer = window.setTimeout(() => {
        setDisplayedRole((prev) => prev.slice(0, -1));
      }, 40);
    } else {
      timer = window.setTimeout(() => {
        setDisplayedRole((prev) => currentFullRole.slice(0, prev.length + 1));
      }, 70);
    }

    if (!isDeleting && displayedRole === currentFullRole) {
      timer = window.setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && displayedRole === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayedRole, isDeleting, roleIndex]);

  // Mouse coordinate tracking for interactive parallax background
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  // Transforms for parallax elements
  const orb1X = useTransform(springX, (val) => val * 0.05);
  const orb1Y = useTransform(springY, (val) => val * 0.05);
  const orb2X = useTransform(springX, (val) => -val * 0.07);
  const orb2Y = useTransform(springY, (val) => -val * 0.07);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    mouseX.set(clientX - centerX);
    mouseY.set(clientY - centerY);
  };

  // Auto scroll terminal container to bottom
  useEffect(() => {
    const container = terminalContainerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [terminalLogs]);

  // Terminal commands interpreter
  const runTerminalCommand = (rawCommand: string) => {
    const cmd = rawCommand.trim().toLowerCase();
    if (!cmd) return;

    const newLogs = [...terminalLogs, { text: `tayyab@portfolio:~$ ${rawCommand}`, type: "input" as const }];

    switch (cmd) {
      case "help":
        newLogs.push(
          { text: "Available commands:", type: "info" },
          { text: "  skills    - View interactive tech stack core matrix", type: "system" },
          { text: "  projects  - List highlighted international productions", type: "system" },
          { text: "  contact   - Display secure developer communication paths", type: "system" },
          { text: "  coffee    - Drink coffee to increase development energy", type: "system" },
          { text: "  clear     - Flush terminal console log screen", type: "system" },
          { text: "  email     - Direct launch mailto compose channel", type: "system" },
          { text: "  whatsapp  - Instant contact via direct secure WhatsApp API", type: "system" }
        );
        break;
      case "skills":
        newLogs.push(
          { text: "⚡ TECHNICAL CORE MATRIX (Self-Assessment):", type: "info" },
          { text: "  Frontend Dev  [██████████] 95% (React, TS, Tailwind, Next)", type: "success" },
          { text: "  Backend & DB  [█████████░] 90% (Node, Express, Supabase, SQL)", type: "success" },
          { text: "  Mobile Apps   [█████████░] 90% (React Native, Expo, Redux)", type: "success" },
          { text: "  DevOps & CI   [████████░░] 80% (Docker, GitHub Actions, AWS)", type: "success" }
        );
        break;
      case "projects":
        newLogs.push(
          { text: "💼 LATEST DEPLOYED PRODUCTIONS:", type: "info" },
          { text: "  • POS Multi-tenant SaaS (MERN Stack, Retail & Analytics)", type: "success" },
          { text: "  • NL Card-Sharing Platform (Supabase, Real-time APIs)", type: "success" },
          { text: "  • Siber Koza Twin Platform (Award-winning twin hub)", type: "success" },
          { text: "👉 Scroll down to 'Projects' section to filter & explore details!", type: "info" }
        );
        break;
      case "contact":
        newLogs.push(
          { text: "📞 COMMUNICATION PATHS:", type: "info" },
          { text: "  • Email:  tayyabsultan621@gmail.com", type: "success" },
          { text: "  • Phone:  +92 309 6766023", type: "success" },
          { text: "  • GitHub: github.com/tayyabsul3", type: "success" },
          { text: "Type 'email' or 'whatsapp' to launch action instantly!", type: "info" }
        );
        break;
      case "coffee":
        setCoffeeLevel((prev) => Math.min(100, prev + 15));
        newLogs.push(
          { text: "☕ Slurp! Fresh coffee brewed.", type: "success" },
          { text: `Caffeine levels surged! Current system power: ${Math.min(100, coffeeLevel + 15)}%`, type: "info" }
        );
        break;
      case "clear":
        setTerminalLogs([]);
        setTerminalInput("");
        return;
      case "email":
        newLogs.push({ text: "Opening secure default mail agent client...", type: "info" });
        window.open("https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=tayyabsultan621@gmail.com", "_blank");
        break;
      case "whatsapp":
        newLogs.push({ text: "Redirecting to direct secure WhatsApp Chat API...", type: "info" });
        window.open("https://wa.me/923096766023?text=Hi%20Tayyab,%20I%20viewed%20your%20interactive%20portfolio%20and%20would%20love%20to%20connect!", "_blank");
        break;
      default:
        newLogs.push(
          { text: `Command not found: '${rawCommand}'.`, type: "system" },
          { text: "Type 'help' to view the roster of available commands.", type: "info" }
        );
    }

    setTerminalLogs(newLogs);
    setTerminalInput("");
  };

  // Interactive Particle Grid Canvas Background
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
    }> = [];

    // Initialize particles
    const particleCount = Math.min(40, Math.floor(width / 30));
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 3 + 1.5,
        color: i % 2 === 0 ? "rgba(99, 102, 241, 0.45)" : "rgba(16, 185, 129, 0.35)",
      });
    }

    let mouse = { x: -1000, y: -1000, radius: 180 };

    const handleGlobalMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleGlobalMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("mousemove", handleGlobalMouseMove);
    document.body.addEventListener("mouseleave", handleGlobalMouseLeave);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw and update particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce walls
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        // Mouse attraction/repulsion micro-physics
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          p.x -= dx * force * 0.02;
          p.y -= dy * force * 0.02;
        }
      });

      // Draw connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.20;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleGlobalMouseMove);
      document.body.removeEventListener("mouseleave", handleGlobalMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const resumeUrl = "https://drive.google.com/file/d/11WWXD4orEvWtykC3UTzFU7_as-fX8DJk/view?usp=drive_link";

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-[#07070a] text-white"
    >
      {/* High-Performance Canvas Particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none opacity-80"
      />

      {/* Moving ambient mesh orbs */}
      <motion.div
        style={{ x: orb1X, y: orb1Y }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/25 rounded-full blur-[120px] -z-10 mix-blend-screen pointer-events-none animate-pulse"
      />
      <motion.div
        style={{ x: orb2X, y: orb2Y }}
        className="absolute bottom-1/4 right-1/4 w-[550px] h-[550px] bg-indigo-500/30 rounded-full blur-[140px] -z-10 mix-blend-screen pointer-events-none animate-pulse"
      />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:4rem_4rem] -z-20 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* FIXED CONTAINER: Replaced section-container padding class to prevent bottom cut-off */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full py-4 lg:py-8 grid lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left: Content Block */}
        <div className="lg:col-span-7 flex flex-col items-start text-left order-2 lg:order-1">
          
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="group flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6 shadow-[0_0_15px_-3px_rgba(16,185,129,0.15)] cursor-pointer hover:bg-emerald-500/15 hover:border-emerald-500/30 transition-all duration-300 animate-pulse"
            onClick={() => {
              setTerminalLogs(prev => [...prev, { text: "Triggering availability confirmation check...", type: "system" }, { text: "✓ Fully available for projects. Let's build something!", type: "success" }]);
              setActiveTab("terminal");
            }}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 absolute" />
            Available for Hire & Freelance
            <Sparkles size={12} className="ml-1 opacity-60 group-hover:opacity-100 transition-opacity animate-pulse text-emerald-300" />
          </motion.div>

          {/* Name & Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-black mb-4 tracking-tight leading-none"
          >
            Hi, I'm <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-primary to-indigo-300 drop-shadow-[0_2px_10px_rgba(99,102,241,0.15)] hover:brightness-110 transition-all duration-300 cursor-default">
              Muhammad Tayyab
            </span>
          </motion.h1>

          {/* Animated Typewriter Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-10 sm:h-12 flex items-center mb-6"
          >
            <span className="text-xl sm:text-2xl font-bold text-slate-300 mr-2">I am a</span>
            <span className="text-xl sm:text-2xl font-extrabold text-primary border-r-2 border-primary animate-pulse pr-1">
              {displayedRole}
            </span>
          </motion.div>

          {/* Value Prop */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-slate-400 mb-8 max-w-lg leading-relaxed"
          >
            I build fast, scalable web & mobile apps for global clients. Specialized in the MERN Stack, React Native development, system integrations, and containerized deployments.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            <Button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-primary/95 hover:bg-primary border border-white/10 glass-glow-hover rounded-full px-8 py-6 text-sm font-bold uppercase tracking-wider transition-all duration-300 active:scale-95 shadow-[0_0_20px_rgba(99,102,241,0.2)]"
            >
              View My Work
            </Button>

            <Button
              variant="outline"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-8 py-6 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 active:scale-95"
            >
              Hire Me <MessageSquare size={16} className="ml-2" />
            </Button>
          </motion.div>

          {/* Quick Wins Indicators: International Clients + CV Download */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-6 items-center border-t border-white/5 pt-8 w-full"
          >
            <div className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-widest text-slate-500 font-bold">Global Presence</span>
              <div className="flex gap-3 items-center">
                <span className="text-sm font-semibold text-slate-300 flex items-center gap-1.5">
                  🇳🇱 NL <span className="text-xs text-slate-500">•</span> 🇹🇷 TR <span className="text-xs text-slate-500">•</span> 🇵🇰 PK
                </span>
                <span className="text-xs px-2 py-1 rounded bg-white/5 text-slate-400 border border-white/5 cursor-default hover:bg-white/10 transition-colors">
                  International Deliveries
                </span>
              </div>
            </div>

            <div className="h-8 w-px bg-white/5 hidden sm:block" />

            <Button
              variant="link"
              onClick={() => window.open(resumeUrl, "_blank")}
              className="text-slate-400 hover:text-white p-0 h-auto font-bold text-xs uppercase tracking-wider flex items-center gap-2 group"
            >
              Download CV <Download size={14} className="group-hover:translate-y-0.5 transition-transform" />
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-4 mt-6"
          >
            {[
              { icon: Github, href: "https://github.com/tayyabsul3", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-tayyab-bb27a4250/", label: "LinkedIn" },
              { icon: Mail, href: "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=tayyabsultan621@gmail.com", label: "Email" },
            ].map((soc, i) => (
              <a
                key={i}
                href={soc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/5 hover:border-white/20 hover:scale-110 active:scale-95 transition-all duration-300"
                title={soc.label}
              >
                <soc.icon size={18} />
              </a>
            ))}
          </motion.div>

        </div>

        {/* Right: Premium Interactive Visual & Terminal Slide-Deck */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative order-1 lg:order-2 py-4 lg:py-0 w-full max-w-lg mx-auto lg:-mt-24">
          
          {/* Segment Toggle Switch */}
          <div className="flex p-1 rounded-full bg-slate-950/70 border border-white/5 backdrop-blur-md mb-6 w-56 relative z-20 shadow-2xl">
            <button
              onClick={() => setActiveTab("visual")}
              className={`flex-1 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all duration-300 relative z-10 ${
                activeTab === "visual" ? "text-white" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <User size={12} /> Visual
            </button>
            <button
              onClick={() => setActiveTab("terminal")}
              className={`flex-1 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all duration-300 relative z-10 ${
                activeTab === "terminal" ? "text-white" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Command size={12} /> Terminal
            </button>
            
            {/* Background pill */}
            <motion.div
              layout
              className="absolute top-1 bottom-1 left-1 rounded-full bg-primary/90 -z-0"
              style={{
                width: "calc(50% - 4px)",
                x: activeTab === "visual" ? "0%" : "100%"
              }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
            />
          </div>

          <div className="relative w-full h-[400px] flex items-center justify-center">
            
            <AnimatePresence mode="wait">
              {activeTab === "visual" ? (
                /* Tab 1: Interactive Profile Photo Block */
                <motion.div
                  key="visual-tab"
                  initial={{ opacity: 0, scale: 0.95, rotateY: -15 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.95, rotateY: 15 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-72 h-72 sm:w-[340px] sm:h-[340px] flex items-center justify-center z-10"
                >
                  {/* Pulsing halo ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-indigo-500 animate-[spin_10s_linear_infinite] opacity-20 blur-xl -z-10 pointer-events-none" />
                  
                  {/* Glowing borders */}
                  <div className="absolute inset-2 rounded-full border border-white/10 dark:border-white/5 -z-10 scale-95 pointer-events-none" />
                  <div className="absolute inset-4 rounded-full border-2 border-primary/20 -z-10 scale-90 animate-pulse pointer-events-none" />

                  {/* Main picture container (slightly resized to prevent clipping) */}
                  <div className="w-56 h-56 sm:w-[260px] sm:h-[260px] rounded-full overflow-hidden border-2 border-white/10 backdrop-blur-md shadow-2xl relative bg-slate-900/40 hover:scale-102 hover:border-primary/30 transition-all duration-500 group cursor-pointer">
                    <img
                      src="/images/profile-pic.png"
                      alt="Muhammad Tayyab Profile"
                      className="w-full h-full object-cover select-none group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-white bg-slate-950/80 px-3 py-1.5 rounded-full border border-white/10">Interactive Mode</span>
                    </div>
                  </div>

                  {/* Floating tech elements floating in background (Circular orbit arrangement prevents clipping) */}
                  {floatingTechs.map((tech) => (
                    <motion.div
                      key={tech.name}
                      whileHover={{ scale: 1.08 }}
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: 1,
                        y: [tech.y - 6, tech.y + 6, tech.y - 6]
                      }}
                      transition={{ 
                        opacity: { duration: 0.5, delay: 0.2 },
                        y: {
                          repeat: Infinity,
                          duration: 3.5 + Math.abs(tech.x) % 3,
                          ease: "easeInOut"
                        }
                      }}
                      className="absolute p-2.5 rounded-2xl glass-card text-[10px] font-bold flex items-center gap-1.5 cursor-default shadow-lg select-none z-20 hover:border-primary/40"
                      style={{
                        x: tech.x,
                        boxShadow: "0 8px 20px -5px rgba(0,0,0,0.4)"
                      }}
                    >
                      <tech.icon className={`w-3.5 h-3.5 ${tech.color}`} />
                      <span className="text-slate-200">{tech.name}</span>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                /* Tab 2: Fully Interactive simulated Terminal Cockpit */
                <motion.div
                  key="terminal-tab"
                  initial={{ opacity: 0, scale: 0.95, rotateY: 15 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.95, rotateY: -15 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full rounded-2xl bg-slate-950/85 border border-white/10 backdrop-blur-lg shadow-2xl flex flex-col overflow-hidden text-left relative z-10"
                >
                  {/* Terminal Header */}
                  <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-slate-950/90 relative pointer-events-none">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase flex items-center gap-1.5">
                      <TermIcon size={10} className="text-primary animate-pulse" /> bash-tayyab
                    </span>
                    <div className="flex items-center gap-1 text-[10px] text-slate-500 font-mono">
                      <span>Caffeine:</span>
                      <span className={`font-bold ${coffeeLevel > 80 ? "text-emerald-400" : "text-amber-400"}`}>{coffeeLevel}%</span>
                    </div>
                  </div>

                  {/* Terminal Log Output Buffer */}
                  <div 
                    ref={terminalContainerRef}
                    className="flex-1 p-4 font-mono text-[11px] overflow-y-auto space-y-2 select-text"
                    onClick={() => terminalInputRef.current?.focus()}
                  >
                    {terminalLogs.map((log, idx) => (
                      <div 
                        key={idx} 
                        className={`leading-relaxed whitespace-pre-wrap ${
                          log.type === "input" ? "text-white font-bold" :
                          log.type === "success" ? "text-emerald-400" :
                          log.type === "info" ? "text-indigo-400" :
                          "text-slate-400"
                        }`}
                      >
                        {log.text}
                      </div>
                    ))}
                  </div>

                  {/* Terminal Quick Click Shortcuts */}
                  <div className="px-4 py-2 border-t border-white/5 bg-slate-950/80 flex flex-wrap gap-1.5 items-center">
                    <span className="text-[9px] font-mono uppercase tracking-wider text-slate-500 mr-1 flex items-center gap-1">
                      <Play size={8} /> Run:
                    </span>
                    {[
                      { cmd: "help", label: "Help" },
                      { cmd: "skills", label: "Skills" },
                      { cmd: "projects", label: "Projects" },
                      { cmd: "coffee", label: "☕ Coffee" },
                      { cmd: "clear", label: "Clear" }
                    ].map((btn) => (
                      <button
                        key={btn.cmd}
                        onClick={() => runTerminalCommand(btn.cmd)}
                        className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-primary/20 hover:border-primary/30 transition-all duration-300 text-[10px] font-mono"
                      >
                        {btn.label}
                      </button>
                    ))}
                  </div>

                  {/* Terminal Prompt Input Block */}
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      runTerminalCommand(terminalInput);
                    }}
                    className="flex items-center px-4 py-3 bg-slate-950/90 border-t border-white/5"
                  >
                    <span className="text-emerald-400 font-mono text-xs mr-2 font-bold select-none">tayyab@portfolio:~$</span>
                    <input
                      ref={terminalInputRef}
                      type="text"
                      value={terminalInput}
                      onChange={(e) => setTerminalInput(e.target.value)}
                      placeholder="Type a command (e.g. 'help', 'skills')..."
                      className="flex-1 bg-transparent border-none outline-none font-mono text-xs text-white placeholder-slate-600 focus:ring-0 focus:outline-none p-0"
                    />
                    <button
                      type="submit"
                      className="text-slate-500 hover:text-primary transition-colors cursor-pointer ml-2 p-1"
                    >
                      <ChevronRight size={14} />
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

      </div>
      
      {/* Interactive indicator at bottom */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10" onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>
        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Scroll Details</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown size={14} className="text-primary" />
        </motion.div>
      </div>

    </section>
  );
};

export default HeroSection;
