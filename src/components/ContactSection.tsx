import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, CheckCircle, Github, Linkedin, MessageCircle, Copy, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

const ContactSection = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    toast({
      title: "Copied!",
      description: `${type} copied to clipboard successfully.`,
    });
    setTimeout(() => setCopiedText(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formRef.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EmailJs_Service_ID!,
        import.meta.env.VITE_EmailJs_Template_ID!,
        formRef.current,
        import.meta.env.VITE_EmailJs_Public_Key!
      )
      .then(
        () => {
          setIsSubmitting(false);
          setIsSubmitted(true);
          toast({
            title: "Message sent!",
            description: "Thank you for reaching out. I'll get back to you soon.",
          });
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
          setTimeout(() => {
            setIsSubmitted(false);
          }, 3000);
        },
        (error) => {
          setIsSubmitting(false);
          console.error("EmailJS Error:", error.text);
          toast({
            title: "Failed to send message!",
            description: "Please try again or use another contact method.",
            variant: "destructive",
          });
        }
      );
  };

  const emailVal = "tayyabsultan621@gmail.com";
  const phoneVal = "+923145116290";
  const whatsappUrl = `https://wa.me/923145116290?text=Hi%20Tayyab,%20I'd%20love%20to%20discuss%20a%20project%20with%20you!`;

  return (
    <section id="contact" className="relative py-0 bg-[#050508] text-white border-t border-white/5 overflow-hidden">
      
      {/* Blurred decorative ambient spots */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse" />

      <div className="section-container">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            <Send size={12} /> Contact & Inquiry
          </div>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Let's construct something outstanding! Drop me a message directly or connect via social networks.
          </p>
        </motion.div>

        {/* Responsive Grid layout */}
        <div className="grid md:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Left Block: Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 flex flex-col text-left gap-6"
          >
            <h3 className="text-2xl font-black text-white tracking-tight leading-none mb-2">
              Contact Information
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              I am currently available for both **freelance engagements** and **full-time employment roles**. If you have an exciting mobile app, digital twin, or web product, I'd love to join forces!
            </p>

            <div className="flex flex-col gap-4">
              
              {/* Email Block */}
              <div className="flex items-center justify-between p-4 rounded-2xl glass-card border border-white/5 bg-slate-950/20 group hover:border-primary/20 transition-all duration-300">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 text-primary">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 block">
                      Email Address
                    </span>
                    <a href={`mailto:${emailVal}`} className="text-sm font-semibold text-slate-200 hover:text-primary transition-colors">
                      {emailVal}
                    </a>
                  </div>
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleCopy(emailVal, "Email")}
                  className="text-slate-500 hover:text-white rounded-xl hover:bg-white/5"
                >
                  {copiedText === "Email" ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </Button>
              </div>

              {/* Phone Block */}
              <div className="flex items-center justify-between p-4 rounded-2xl glass-card border border-white/5 bg-slate-950/20 group hover:border-primary/20 transition-all duration-300">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 text-primary">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 block">
                      Mobile Number
                    </span>
                    <a href={`tel:${phoneVal}`} className="text-sm font-semibold text-slate-200 hover:text-primary transition-colors">
                      +92 (314) 511-6290
                    </a>
                  </div>
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleCopy(phoneVal, "Phone")}
                  className="text-slate-500 hover:text-white rounded-xl hover:bg-white/5"
                >
                  {copiedText === "Phone" ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </Button>
              </div>

              {/* Location Block */}
              <div className="flex items-center gap-3.5 p-4 rounded-2xl glass-card border border-white/5 bg-slate-950/20">
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 text-primary">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 block">
                    Location
                  </span>
                  <span className="text-sm font-semibold text-slate-200">
                    Rawalpindi, Pakistan
                  </span>
                </div>
              </div>

            </div>

            {/* Quick Actions Shortcuts */}
            <div className="border-t border-white/5 pt-6 mt-2">
              <span className="text-xs uppercase font-extrabold tracking-widest text-slate-500 block mb-4">
                Connect Directly
              </span>
              <div className="flex gap-3">
                {[
                  { icon: Github, href: "https://github.com/tayyabsul3", label: "GitHub", color: "hover:text-white hover:bg-white/5 hover:border-white/20" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-tayyab-bb27a4250/", label: "LinkedIn", color: "hover:text-blue-400 hover:bg-blue-500/5 hover:border-blue-500/20" },
                  { icon: MessageCircle, href: whatsappUrl, label: "WhatsApp", color: "hover:text-emerald-400 hover:bg-emerald-500/5 hover:border-emerald-500/20 animate-bounce" }
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-2xl border border-white/5 bg-slate-950/30 flex items-center justify-center text-slate-400 transition-all duration-300 ${social.color}`}
                    title={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

          </motion.div>

          {/* Right Block: Glass Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 w-full"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-5 rounded-3xl glass-card bg-slate-950/30 border border-white/5 p-6 sm:p-8 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-indigo-500" />
              
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase font-extrabold tracking-widest text-slate-400 mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter name"
                    required
                    className="w-full glass-input rounded-xl border-white/5 text-slate-100 placeholder:text-slate-600 focus-visible:ring-primary focus-visible:ring-offset-0"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs uppercase font-extrabold tracking-widest text-slate-400 mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    required
                    className="w-full glass-input rounded-xl border-white/5 text-slate-100 placeholder:text-slate-600 focus-visible:ring-primary focus-visible:ring-offset-0"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs uppercase font-extrabold tracking-widest text-slate-400 mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this regarding?"
                  required
                  className="w-full glass-input rounded-xl border-white/5 text-slate-100 placeholder:text-slate-600 focus-visible:ring-primary focus-visible:ring-offset-0"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs uppercase font-extrabold tracking-widest text-slate-400 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share details about your project here..."
                  required
                  className="w-full glass-input rounded-xl border-white/5 text-slate-100 placeholder:text-slate-600 min-h-[140px] focus-visible:ring-primary focus-visible:ring-offset-0"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary/90 text-white hover:bg-primary border border-white/10 glass-glow-hover rounded-xl py-6 font-bold text-xs uppercase tracking-widest transition-all duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Submitting...
                  </span>
                ) : isSubmitted ? (
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle size={16} /> Successfully Sent
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5">
                    <Send size={14} /> Send Inquiry Message
                  </span>
                )}
              </Button>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
