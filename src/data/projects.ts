export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  category: "web" | "mobile";
  tags: string[];
  demoUrl: string;
  repoUrl: string;
  features: string[];
  metrics: { label: string; value: string }[];
  challenges: string;
  solution: string;
  gallery?: string[]; // Dynamic screenshots list
}

export const projects: Project[] = [
  {
    id: 1,
    title: "OBE360",
    subtitle: "Smart Outcomes Education Platform",
    description: "Full-scale education management system built as a Final Year Project to digitize outcome-based academic accreditation workflows, student tracking, and analytics. Currently in active production use.",
    longDescription: "OBE360 is a state-of-the-art outcome-based education (OBE) management system designed to automate, track, and optimize student learning outcomes and curriculum mapping. Built as an ambitious Final Year Project and subsequently deployed to production, it handles the complex process of mapping course learning outcomes (CLOs) to program learning outcomes (PLOs), generating accreditation analytics in real-time.",
    image: "/images/Obe/Cover.png",
    category: "web",
    tags: ["React.js", "Express.js", "Supabase", "PostgreSQL", "Tailwind CSS"],
    demoUrl: "https://obe360-smart-outcome-based-educatio.vercel.app/",
    repoUrl: "https://github.com/tayyabsul3/Obe360-Smart-Outcome-Based-EducationSystem-",
    features: [
      "Dynamic accreditation mapping engine connecting Course and Program Learning Outcomes.",
      "Comprehensive student profile dashboards with real-time academic growth radar charts.",
      "Administrative tools for bulk student management, grading structures, and curriculum adjustments.",
      "Supabase real-time database subscription for instant synchronization of grades and analytics."
    ],
    metrics: [
      { label: "Deployment", value: "Production" },
      { label: "Data Sync", value: "<100ms" },
      { label: "User Satisfaction", value: "98%" }
    ],
    challenges: "Accreditation analytics required mapping hundreds of dynamic data points across student activities, requiring deep database performance optimization and complex calculation pipelines.",
    solution: "Leveraged Supabase and raw SQL views in PostgreSQL to execute calculations at the database level, decreasing mapping latency by over 80% and ensuring instant dashboard updates.",
    gallery: [
      "/images/Obe/Cover.png",
      "/images/Obe/1.png",
      "/images/Obe/2.png",
      "/images/Obe/3.png",
      "/images/Obe/4.png",
      "/images/Obe/5.png"
    ]
  },
  {
    id: 2,
    title: "Siber Koza Platform",
    subtitle: "JV Corporate Innovation Hub",
    description: "The official digital showcase and innovation platform for Siber Koza, a prestigious joint venture company operating inside the National Aerospace Science & Technology Park (NASTP).",
    longDescription: "Siber Koza serves as the official digital showcase and portal for the Siber Koza Joint Venture company operating inside the National Aerospace Science & Technology Park (NASTP). Built with a core innovation aim, the platform communicates high-tech software labs, specialized cybersecurity training tracks, interactive incubation workspaces, and professional developer courses to students and aerospace professionals globally.",
    image: "/images/SK/Cover.png",
    category: "web",
    tags: ["React.js", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
    demoUrl: "https://siberkozainternational.com",
    repoUrl: "",
    features: [
      "Aerospace ecosystem overview highlighting Siber Koza's active corporate divisions inside NASTP.",
      "Interactive workspace portals detailing high-end computer labs, private desks, and training centers.",
      "Optimized courses registry showcasing professional cyber security and full-stack software tracks.",
      "Fluid glassmorphic styling that aligns with NASTP's advanced scientific aerospace visual guidelines."
    ],
    metrics: [
      { label: "HQ Location", value: "NASTP Islamabad" },
      { label: "Vibe", value: "Modern / Innovation" },
      { label: "Core Focus", value: "JV Academic Ecosystem" }
    ],
    challenges: "Consolidating corporate JV identities, incubation physical spaces, and technical course curriculums inside a single responsive, fast, and high-fidelity interface.",
    solution: "Designed a clean, component-driven React framework with optimized local asset bundles, utilizing responsive HSL visual grids and exit transition states to partition information beautifully without page lags.",
    gallery: [
      "/images/SK/Cover.png",
      "/images/SK/1.png",
      "/images/SK/2.png",
      "/images/SK/3.png",
      "/images/SK/4.png",
      "/images/SK/5.png"
    ]
  },
  {
    id: 3,
    title: "Siber Koza Mobile App",
    subtitle: "Community & AI Chatbot Portal",
    description: "A premium cross-platform iOS & Android mobile application that provides a LinkedIn-style professional networking community for members, coupled with an AI chatbot guide and personalization controls.",
    longDescription: "Engineered using React Native and Expo, the Siber Koza Mobile App serves as the secure, unified mobile workspace for the community. It connects members through LinkedIn-style social feeds, updates, and profile directories, while integrating a dedicated virtual AI chatbot assistant to guide users through courses, events, and NASTP joint venture assets.",
    image: "/images/SK/2.png",
    category: "mobile",
    tags: ["React Native", "Expo", "Redux Toolkit", "Node.js", "Express.js", "MongoDB"],
    demoUrl: "",
    repoUrl: "",
    features: [
      "Cross-platform professional social networking feed resembling LinkedIn for members.",
      "Dedicated interactive virtual AI chatbot assistant to guide users through lab resources and curriculum.",
      "Custom profile personalizations, custom color themes, and notification preferences.",
      "Ultra-fast native rendering on iOS and Android with modular state management."
    ],
    metrics: [
      { label: "Platforms", value: "iOS & Android" },
      { label: "State Core", value: "Redux Toolkit" },
      { label: "AI Assistant", value: "Integrated Chatbot" }
    ],
    challenges: "Building a high-performance community feed and chat engine on mobile devices under strict memory consumption limits.",
    solution: "Designed lightweight rendering schemas with React Native virtualized lists and cached network state via Redux, keeping the application's memory footprints under 60MB."
  },
  {
    id: 4,
    title: "Pop-It Teams",
    subtitle: "Enterprise E-Business Cards",
    description: "A highly complex, multi-year enterprise SaaS web application featuring a sophisticated layout customization UI, real-time mobile preview synchronization, Stripe billing, and strict multi-tier role-based controls.",
    longDescription: "Pop-It Teams is an enterprise-grade SaaS platform engineered for an international client based in the Netherlands. Developed over several years, this massive, highly complex system features a state-of-the-art layout builder UI that empowers global organizations to create, customize, and manage electronic business cards for thousands of employees simultaneously under strict security guidelines.",
    image: "/images/Popit/Cover.png",
    category: "web",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe API", "Tailwind CSS", "QR Engine"],
    demoUrl: "https://popitnl.nl/",
    repoUrl: "",
    features: [
      "Highly complex layout customization UI supporting visual drag-and-drop elements, HSL themes, and custom social links.",
      "Real-time interactive mobile preview panel synchronizing layout and theme modifications instantly.",
      "Strict multi-tier Role-Based Access Control (RBAC) supporting corporate Admins, Sub-admins, and Members.",
      "Integrated Stripe payment architecture supporting multi-tiered corporate subscriptions and invoicing.",
      "Enterprise department partitioning enabling isolated management of team sub-workspaces.",
      "High-resolution vector PDF & SVG QR code rendering pipelines for card print integrations."
    ],
    metrics: [
      { label: "Scale", value: "Multi-Year Enterprise" },
      { label: "Billing Gateway", value: "Stripe Subscriptions" },
      { label: "UI System", value: "Highly Complex Layouts" }
    ],
    challenges: "Building a highly interactive dynamic rendering preview that mirrors real-time design customisations in a mobile view pane, while seamlessly managing multi-tier permission rights (Admin, Sub-Admin, and Member roles) across a massive enterprise workspace structure.",
    solution: "Engineered a reactive shared state synchronization architecture to push content customizations instantly onto a virtualized canvas mobile phone viewport. Implemented a secure hierarchical RBAC middleware flow on the server side, ensuring precise route and data authorization checks across all user tiers.",
    gallery: [
      "/images/Popit/Cover.png",
      "/images/Popit/1.png",
      "/images/Popit/2.png",
      "/images/Popit/3.png",
      "/images/Popit/4.png",
      "/images/Popit/5.png",
      "/images/Popit/6.png",
      "/images/Popit/7.png",
      "/images/Popit/8.png",
      "/images/Popit/9.png",
      "/images/Popit/10.png",
      "/images/Popit/11.png",
      "/images/Popit/12.png",
      "/images/Popit/13.png",
      "/images/Popit/14.png",
      "/images/Popit/15.png"
    ]
  },
  {
    id: 5,
    title: "Darc Logs",
    subtitle: "Log Monitoring Dashboard",
    description: "Streamlined log monitoring dashboard with third-party integrations, search filters, and interactive data visualization charts. Awarded Most Valuable Contributor for this work.",
    longDescription: "Darc Logs is an advanced system monitoring console built to aggregate and parse logs across multi-service server networks. Designed with speed and clear visibility in mind, the platform visualizes error rates, memory levels, and traffic logs in high-fidelity charts.",
    image: "/images/Darc/Cover.png",
    category: "web",
    tags: ["React.js", "Python", "Shadcn UI", "Tailwind CSS", "REST API", "Recharts"],
    demoUrl: "https://logs-dashboard.vercel.app/",
    repoUrl: "",
    features: [
      "Advanced filtering engine supporting search queries, level groupings (info, warn, error), and time intervals.",
      "High-performance chart visualizers with Recharts, rendering thousands of log entries without FPS drops.",
      "Offering one-click log export channels in CSV and raw JSON formats for offline debugging.",
      "Recognized with the Most Valuable Contributor Award at Siber Koza for outstanding UI engineering."
    ],
    metrics: [
      { label: "Performance", value: "60 FPS" },
      { label: "Log Handling", value: "10,000+ entries/sec" },
      { label: "Accolade", value: "Most Valuable" }
    ],
    challenges: "Rendering thousands of dynamic real-time log records consecutively in the DOM without causing heavy memory leaks or lagging the tab.",
    solution: "Utilized windowing lists (virtualized scrolling) to keep only the visible slice of logs rendered in the DOM, reducing rendering cycles by over 95%.",
    gallery: [
      "/images/Darc/Cover.png",
      "/images/Darc/1.png",
      "/images/Darc/2.png",
      "/images/Darc/3.png",
      "/images/Darc/4.png",
      "/images/Darc/5.png",
      "/images/Darc/6.png",
      "/images/Darc/7.png"
    ]
  },
  {
    id: 6,
    title: "Query Fuel",
    subtitle: "AI SEO Generation Platform",
    description: "AI-powered SEO platform with article generation, helper rating tools, and AI overview optimization tools. Developed Python backend with serverless deployment.",
    longDescription: "Query Fuel is a cutting-edge artificial intelligence content and search engine optimization platform. Harnessing advanced LLM processing APIs, the dashboard evaluates keywords, rates content outlines, and automatically drafts high-ranking SEO articles with detailed meta configurations.",
    image: "/images/Query/Cover.png",
    category: "web",
    tags: ["Next.js", "Python", "Firebase Functions", "Tailwind CSS", "OpenAI API"],
    demoUrl: "https://queryfuel.io/",
    repoUrl: "",
    features: [
      "Automated article structure generations utilizing keyword rankings and OpenAI API routes.",
      "Detailed SEO audit engine validating keyword density, meta structures, and readability ratings.",
      "Fully serverless Python API middleware deployed to Firebase Cloud Functions.",
      "Polished dashboard featuring copy-to-clipboard blocks and export channels."
    ],
    metrics: [
      { label: "AI Model", value: "GPT-4 / Custom Outline" },
      { label: "API Latency", value: "Serverless Node/Python" },
      { label: "Content Quality", value: "High (SEO Optimized)" }
    ],
    challenges: "Managing serverless cold starts on Python Firebase Functions when processing heavy AI article generation loads.",
    solution: "Optimized function dependencies and structured asynchronous task polling, letting users close the tab while their article builds in the background.",
    gallery: [
      "/images/Query/Cover.png",
      "/images/Query/1.png",
      "/images/Query/2.png",
      "/images/Query/3.png",
      "/images/Query/4.png",
      "/images/Query/5.png"
    ]
  },
  {
    id: 7,
    title: "D-Go RMS",
    subtitle: "Restaurant POS & Ordering",
    description: "Built a full-featured restaurant management suite including customer-facing online ordering, administrative portal, and integrated POS system with real-time tracking.",
    longDescription: "D-Go RMS is an enterprise-grade MERN stack restaurant management suite built from scratch. It connects customers, waiters, kitchen staff, and restaurant managers in one unified real-time loop, processing dynamic ordering, table bookings, menu customizations, and automated kitchen workflows.",
    image: "/images/RMS1.png",
    category: "web",
    tags: ["Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    demoUrl: "https://foodpleasure-restaurant.web.app/",
    repoUrl: "",
    features: [
      "Customer-facing online store with interactive dish search, reviews, and dynamic card checkouts.",
      "Real-time kitchen order ticket (KOT) terminal with socket-based update alerts for chefs.",
      "Comprehensive administration control board to manage inventory, staff roles, and visual analytics.",
      "Integrated POS (Point of Sale) cashier module supporting quick orders and invoice printing."
    ],
    metrics: [
      { label: "Order Processing", value: "Real-time" },
      { label: "Client Base", value: "SaaS Multi-tenant" },
      { label: "Invoice Generation", value: "<1s" }
    ],
    challenges: "Connecting the front-of-house customer app with the back-of-house kitchen terminals smoothly without losing orders in peak restaurant traffic.",
    solution: "Implemented robust event queues and WebSockets in Node.js, combined with MongoDB database transactions to ensure order persistence and immediate KOT terminal flashing."
  },
  {
    id: 8,
    title: "Hyper Solar Solution",
    subtitle: "Solar Company Portal & Cost Calculator",
    description: "An aesthetic solar company website featuring an interactive cost calculator and tailored pricing models for Domestic, Commercial, and Industrial sectors.",
    longDescription: "Hyper Solar Solution is a premium, aesthetic corporate website designed for a modern solar energy provider. The platform delivers a high-fidelity visual experience while educating visitors on renewable energy options. It features comprehensive pricing models across various sectors including Domestic, Commercial, and Industrial properties, supported by an interactive solar cost calculator that dynamically estimates setup costs and potential savings.",
    image: "/images/HyperSol.png",
    category: "web",
    tags: ["React.js", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
    demoUrl: "https://solar-website-kappa-brown.vercel.app/",
    repoUrl: "",
    features: [
      "Interactive installation cost calculator for customized solar setup estimations.",
      "Sector-specific pricing pages tailored for Domestic, Commercial, and Industrial properties.",
      "Aesthetic, premium dark-theme layout using sleek glassmorphic UI elements and grids.",
      "Responsive navigation and fluid micro-animations enhancing the user journey."
    ],
    metrics: [
      { label: "Domestic Sector", value: "Residential Tiers" },
      { label: "Commercial Sector", value: "Scale Solutions" },
      { label: "Industrial Sector", value: "Custom Capacity" }
    ],
    challenges: "",
    solution: ""
  }
];
