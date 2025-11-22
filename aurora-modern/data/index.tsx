export const NAVIGATION = {
  logo: {
    text: "AURORA",
    accent: ".CORE",
  },
  links: [
    { label: "VISION", href: "#vision" },
    { label: "TECHNOLOGY", href: "#tech" },
    { label: "METRICS", href: "#specs" },
  ],
  cta: {
    label: "JOIN BETA",
    href: "#contact",
  },
  mobileMenuId: "ID: 2561095",
};

export const HERO = {
  id: "Project Aurora • ID: 2561095",
  title: {
    line1: "BEYOND",
    line2: "COLD LOGIC",
  },
  description:
    "The rise of Human-Aware AGI. We are building systems that bridge the fundamental gap between computational power and genuine human understanding.",
  scrollText: "SCROLL TO INITIALIZE",
};

export const VISION = {
  heading: {
    line1: "THE LIMITS OF",
    line2: "COMPUTATION",
  },
  description:
    "Today's AI operates in a vacuum. It processes data but misses the nuance. It calculates but does not feel. This disconnect creates barriers in healthcare, education, and daily interaction.",
  quote: '"Aurora doesn\'t replace humanity—it amplifies it."',
  features: [
    { label: "EMPATHY ENGINE", color: "bg-accent" },
    { label: "CONTEXT AWARE", color: "bg-cyan" },
  ],
  mission: {
    label: "/// MISSION DIRECTIVE",
    text: '"To create a humanoid that not only thinks—but feels, understands, and collaborates."',
  },
  image:
    "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop",
};

export const TECH = {
  heading: {
    sub: "SYSTEM ARCHITECTURE",
    main: "NEURAL FRAMEWORK",
  },
  cards: [
    {
      id: "01",
      title: "PERCEPTION",
      subtitle: "Multi-Modal Sensing",
      description:
        "Captures sensory input through vision, audio, and haptic sensors operating at millisecond precision. Seeing the world as humans do.",
      colorClass: "text-accent",
      hoverClass: "group-hover:text-accent",
      iconPath: (
        <>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </>
      ),
    },
    {
      id: "02",
      title: "REASONING",
      subtitle: "Emotional Intelligence",
      description:
        "Transformer-based models processed on Jetson Orin Nano. Recognizing subtle contextual cues, cultural norms, and emotional states.",
      colorClass: "text-warm",
      hoverClass: "group-hover:text-warm",
      iconPath: (
        <>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </>
      ),
    },
    {
      id: "03",
      title: "ACTION",
      subtitle: "Human-Feeling Response",
      description:
        "Generates physical movements and verbal communication that balance efficiency with warmth.",
      colorClass: "text-cyan",
      hoverClass: "group-hover:text-cyan",
      iconPath: (
        <>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11"
          />
        </>
      ),
    },
  ],
};

export const SPECS = {
  heading: {
    main: "PERFORMANCE METRICS",
    hardware: "HARDWARE: JETSON ORIN NANO",
    status: "STATUS: OPTIMIZED",
  },
  metrics: [
    {
      value: "98",
      unit: "%",
      label: "Emotional Recognition",
      unitColor: "text-accent",
    },
    {
      value: "3",
      unit: "ms",
      label: "Response Latency",
      unitColor: "text-cyan",
    },
    {
      value: "24",
      unit: "/7",
      label: "Adaptive Learning",
      unitColor: "text-warm",
    },
    {
      value: "3",
      unit: "+",
      label: "Languages Supported",
      unitColor: "text-white/30",
    },
  ],
};

export const ROADMAP = {
  heading: "EXECUTION ROADMAP",
  subheading: "Phase: Next 6 Months",
  phases: [
    {
      id: "PHASE 01",
      title: "BIONIC HEAD",
      description:
        "Designing expressive bionic head capable of displaying authentic human-like emotional expressions.",
      tags: ["CAD", "MECHATRONICS"],
      colorClass: "text-accent/50",
      borderClass: "hover:border-accent/50",
    },
    {
      id: "PHASE 02",
      title: "CNS ARCHITECTURE",
      description:
        "Developing Central Nervous System and configuring Jetson Orin Nano Gen AI Supercomputer operations.",
      tags: ["NVIDIA JETSON", "PYTHON"],
      colorClass: "text-warm/50",
      borderClass: "hover:border-warm/50",
    },
    {
      id: "PHASE 03",
      title: "ENHANCED MANIPULATION",
      description:
        "Creating robotic arms with extensive suction support and enhanced grippers for delicate object manipulation.",
      tags: ["ROS", "KINEMATICS"],
      colorClass: "text-cyan/50",
      borderClass: "hover:border-cyan/50",
    },
    {
      id: "PHASE 04",
      title: "SPEECH & INTEGRATION",
      description:
        "Finalizing Speech-to-Text and Text-to-Speech setup with complete system confinement and ROS integration.",
      tags: ["NLP", "OLLAMA"],
      colorClass: "text-purple-500/50",
      borderClass: "hover:border-purple-500/50",
    },
  ],
};

export const FOOTER = {
  heading: {
    line1: "READY TO",
    line2: "EVOLVE?",
  },
  description:
    "Join us in building the future of compassionate technology. The era of Aurora is beginning.",
  cta: {
    contact: { label: "CONTACT TEAM", href: "mailto:contact@aurora.tech" },
    whitepaper: { label: "DOWNLOAD WHITEPAPER", href: "#" },
  },
  credits: {
    university: "CHRIST UNIVERSITY",
    people: [
      "Founder & Lead Developer: Mr. Niroop H",
      "Faculty Advisor: Fr. Shijin PJ",
      "ID: 2561095",
    ],
    phone: "+91 72593 82794",
  },
  copyright: "© 2025 AURORA CORE TECH. ALL RIGHTS RESERVED.",
  links: [
    { label: "PRIVACY", href: "#" },
    { label: "TERMS", href: "#" },
    { label: "LINKEDIN", href: "#" },
  ],
};
