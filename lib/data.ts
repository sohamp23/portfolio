export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  location: string;
  current?: boolean;
  bullets: string[];
  tech: string[];
}

export interface ProjectItem {
  title: string;
  category: string;
  description: string;
  bullets: string[];
  tech: string[];
  // TODO: replace with real URLs once available — buttons only render when these are set.
  githubUrl?: string;
  liveUrl?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export const focusAreas: string[] = [
  "Full-stack engineering",
  "AI/ML systems",
  "Cloud-native development",
  "Payments & billing systems",
  "Product engineering",
  "Cybersecurity",
  "Developer tools",
];

export const experience: ExperienceItem[] = [
  {
    company: "Enercare",
    role: "Software Engineer Intern",
    duration: "May 2026 — August 2026",
    location: "Markham, ON",
    current: true,
    bullets: [
      "Contributing to billing and payment systems at enterprise scale, on a microservices architecture built with NestJS and Java.",
      "Working within the payments platform integrated with Zuora for subscription billing and revenue workflows.",
      "Applying domain-driven design and saga-pattern orchestration to coordinate distributed, multi-step payment transactions across services.",
      "Shipping through CI/CD pipelines on Azure DevOps to production billing systems.",
    ],
    tech: ["NestJS", "Java", "TypeScript", "Zuora", "Azure DevOps", "Microservices"],
  },
  {
    company: "CAME — Canadian Association For Medical Education",
    role: "Software Engineer",
    duration: "April 2026 — June 2026",
    location: "Ottawa, ON — Remote",
    bullets: [
      "Engineered a full-stack web platform for CAME end-to-end as a 2-person team, interfacing directly with CAME President Marcus Law and Foundation Chair Dr. Deena Hamza to gather requirements, present technical decisions, and align delivery with organizational objectives.",
      "Built on Next.js, TypeScript, Node.js, and PostgreSQL.",
      "Introduced a Figma-to-production pipeline via MCP server integration, eliminating manual handoff and accelerating frontend development.",
      "Architected and executed a full cloud migration to a serverless Vercel deployment, cutting projected annual infrastructure costs by 85% while improving scalability, performance, and long-term maintainability.",
    ],
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Vercel", "Figma MCP"],
  },
  {
    company: "Evolvere Mental Health",
    role: "Software Engineer",
    duration: "January 2026 — April 2026",
    location: "Mississauga, ON — Remote",
    bullets: [
      "Built and shipped a production iOS mental health platform end-to-end using React Native, TypeScript, Firebase, Firestore, and Node.js, releasing 5 App Store versions and supporting 1,000+ students.",
      "Architected a scalable serverless backend by designing Firestore data models, real-time synchronization, Firebase Authentication, and Cloud Functions.",
      "Optimized platform performance and UX by improving forum rendering, reducing onboarding friction, and iterating on core product features to increase responsiveness, usability, and long-term engagement.",
    ],
    tech: ["React Native", "TypeScript", "Firebase", "Firestore", "Node.js"],
  },
  {
    company: "University of Toronto — Department of Computer Science",
    role: "Software Research Assistant",
    duration: "September 2025 — April 2026",
    location: "Toronto, ON — Hybrid",
    bullets: [
      "Developed static program analysis infrastructure for PythonTA, extending AST-based semantic analysis, type checking, and control-flow analysis to improve automated code diagnostics across 1,000+ submissions per term.",
      "Designed high-coverage verification frameworks for 50+ static analysis passes, building automated regression pipelines with pytest, pylint, mypy, and pycodestyle.",
      "Improved analyzer correctness, reduced false positives, and strengthened runtime contract verification.",
    ],
    tech: ["Python", "pytest", "pylint", "mypy", "pycodestyle", "AST Analysis"],
  },
];

export const projects: ProjectItem[] = [
  {
    title: "VibeForge",
    category: "AI · Marketplace",
    description:
      "A full-stack AI application marketplace where creators publish, categorize, and discover AI-built products.",
    bullets: [
      "Architected the marketplace on Next.js with Supabase Auth and PostgreSQL, covering creator profiles, discovery flows, and product categorization.",
      "Implemented Supabase Row-Level Security to enforce per-creator data isolation at the database layer, alongside metadata schemas and asset storage rules built for marketplace scale.",
    ],
    tech: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Supabase"],
    githubUrl: undefined,
    liveUrl: undefined,
  },
  {
    title: "RESUmate",
    category: "AI · Tooling",
    description:
      "An AI-powered resume scanner that scores resumes against job descriptions for ATS optimization.",
    bullets: [
      "Built a resume intelligence pipeline from PDF parsing to keyword extraction, ATS-style scoring, and structured JSON feedback.",
      "Connected a Node.js backend to a Next.js frontend to surface missing keywords, section-level feedback, and AI-generated bullet rewrite suggestions with low-latency evaluations.",
    ],
    tech: ["JavaScript", "Next.js", "Node.js", "PDF.js", "HTML/CSS"],
    githubUrl: undefined,
    liveUrl: undefined,
  },
  {
    title: "CAME Web Platform",
    category: "Full-Stack · Cloud",
    description:
      "Full-stack web platform and cloud migration for a national medical education organization.",
    bullets: [
      "Delivered end-to-end on Next.js, TypeScript, Node.js, and PostgreSQL as part of a 2-person team.",
      "Migrated to a serverless Vercel deployment, cutting projected annual infrastructure costs by 85% while improving scalability and maintainability.",
    ],
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Vercel"],
    githubUrl: undefined,
    liveUrl: undefined,
  },
  {
    title: "Evolvere",
    category: "Mobile · Health Tech",
    description: "Production iOS mental health platform supporting 1,000+ students.",
    bullets: [
      "Shipped 5 App Store releases end-to-end with React Native, Firebase, and Firestore.",
      "Built real-time community features, authentication, and a scalable serverless backend.",
    ],
    tech: ["React Native", "TypeScript", "Firebase", "Firestore", "Node.js"],
    githubUrl: undefined,
    liveUrl: undefined,
  },
];

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    items: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "C/C++", "HTML/CSS", "Bash"],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      "React",
      "React Native",
      "Next.js",
      "Node.js",
      "NestJS",
      "Flask",
      "Django",
      "TensorFlow",
      "PyTorch",
      "Pandas",
      "NumPy",
      "Firebase",
      "Firestore",
      "REST APIs",
    ],
  },
  {
    category: "Developer Tools & Platforms",
    items: [
      "Git",
      "Docker",
      "Linux",
      "CI/CD",
      "AWS",
      "Supabase",
      "Azure DevOps",
      "Zuora",
      "Zuora Workflows",
    ],
  },
];

export const education = {
  school: "University of Toronto",
  duration: "September 2023 — May 2028",
  degree: "Honours Bachelor of Science",
  program: "Double Major in Computer Science and Commerce · Minor in Statistics",
  gpa: "3.82",
  coursework: [
    "Data Structures & Algorithms",
    "Software Design",
    "Database Systems",
    "Intro to Machine Learning",
    "Regression Analysis",
    "Numerical Methods",
    "Algorithm Design",
    "Linear Algebra II",
    "Probability & Statistics II",
  ],
};

export const contact = {
  name: "Soham Patel",
  email: "sohamp2305@gmail.com",
  phone: "647-833-1265",
  phoneHref: "6478331265",
  linkedin: "https://www.linkedin.com/in/soham-patel23",
  resumeHref: "/resume.pdf",
};
