// src/data/portfolio.js

export const profile = {
  name: "Amami Danansuriya",
  firstName: "Amami",
  lastName: "Danansuriya",
  role: "Data Science Undergraduate | AI Engineer",
  summary:
    "Passionate about software and technology, seeking a challenging role to apply my skills, expand my knowledge, and contribute to organizational success while building a strong foundation for my career.",
  location: "Colombo, Sri Lanka",
  email: "amamidanansuriya@gmail.com",
  github: "https://github.com/AmamiD",
  linkedin: "https://www.linkedin.com/in/amami-danansuriya-48a784303/",
  resumeUrl: "/Resume.pdf",
  photoUrl: "/profile.jpg",
};

/**
 * ABOUT SECTION (matches your reference layout)
 */
export const aboutText = {
  p1: `I am a Data Science Undergraduate passionate about software and AI technology. I enjoy learning new tools and building real projects that improve my skills.`,
  p2: `With hands-on experience across multiple technologies, I’m continuously working to expand my knowledge and apply my technical expertise to solve real-world problems in a dynamic environment.`,
};

/**
 * Right side list in About page (Quick Stats)
 * Edit the numbers anytime.
 */
export const quickStats = [
  { value: "4+", label: "Certifications Completed" },
  { value: "3+", label: "Projects Developed" },
  { value: "10+", label: "Technologies Used" },
  { value: "3", label: "Development Platforms" },
];

/**
 * 4 cards (2x2) in About page
 */
export const aboutHighlights = [
  {
    title: "Current Education",
    desc: "Higher Diploma in Computing & Software Engineering (ICBT / Cardiff Met)",
    icon: "graduation",
  },
  {
    title: "Specialization",
    desc: "Web Development & Mobile Applications",
    icon: "code",
  },
  {
    title: "AI/ML Focus",
    desc: "Certified AI/ML Engineer with practical learning experience",
    icon: "brain",
  },
  {
    title: "Career Goal",
    desc: "Seeking software engineering opportunities to grow and contribute",
    icon: "target",
  },
];

/**
 * EDUCATION SECTION
 */
export const education = [
  {
    year: "Since 2024",
    title: "Higher Diploma in Computing & Software Engineering",
    institute: "Cardiff Metropolitan University (ICBT Campus)",
    lines: [
      "Currently studying computing and software engineering",
      "Hands-on project development with modern tools",
    ],
  },
  {
    year: "2021 – 2023",
    title: "G.C.E Advanced Level – Commerce Stream",
    institute: "Gothami Balika Vidyalaya, Colombo 10",
    lines: ["Completed A/L in Commerce stream"],
  },
  {
    year: "2020 – 2021",
    title: "Diploma in English",
    institute: "ESOFT Metro Campus",
    lines: ["Successfully completed Diploma in English"],
  },
];

/**
 * CERTIFICATIONS SECTION
 */
export const certifications = [
  {
    title: "AI/ML Engineer",
    provider: "SLIIT",
    icon: "ai",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7433855961728999424/", // add certificate link if you have
  },
  {
    title: "Introduction to AI",
    provider: "Simplilearn",
    icon: "ai",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7434211432260513792/",
  },
  {
    title: "Introduction to Java",
    provider: "SoloLearn",
    icon: "java",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7391394082427654145/",
  },
  {
    title: "Introduction to MERN Stack",
    provider: "Simplilearn",
    icon: "web",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7395027444572827649/",
  },
];

/**
 * PROJECTS SECTION
 * Add GitHub & demo links if you have them.
 */
export const projects = [
  {
    name: "The Gadget Hub Website",
    desc:
      "E-commerce system with role-based dashboards and quotation-to-order workflow for distributors and admins.",
    tech: ["React (Vite)", "JavaScript", "ASP.NET Core Web API", "EF Core", "SQL Server"],
    features:
      "Product browsing, cart, order placement, order tracking, admin & distributor dashboards, quotation request/submission and order confirmation flow.",
    github: "https://github.com/AmamiD/GadgetHub", // add your GitHub repo link
    icon: "bag",
  },
  {
    name: "FitZone Fitness Center Website",
    desc:
      "Website for a fitness center with user registration, service information, and booking management.",
    tech: ["HTML", "CSS", "PHP"],
    features:
      "User login/register, service listing, appointment booking, admin management features.",
    github: "https://github.com/AmamiD/fitzone",
    icon: "fitness",
  },
  {
    name: "LuxeVista Resort App",
    desc:
      "Mobile app for a luxury hotel to explore rooms, book activities, and manage stays.",
    tech: ["Android (Java)", "SQLite"],
    features:
      "Room browsing, activity booking workflow, guest stay management.",
    github: "",
    icon: "hotel",
  },
];

/**
 * SKILLS SECTION
 */
export const skillsShowcase = [
  {
    title: "Full Stack Development",
    icon: "stack",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "React (Vite)",
      "ASP.NET Core Web API",
      "Entity Framework Core",
      "PHP",
    ],
  },
  {
    title: "Programming Languages",
    icon: "code",
    items: ["Java", "Python", "C++", "R"],
  },
  {
    title: "Mobile Development",
    icon: "mobile",
    items: ["Android (Java)", "SQLite", "Android Studio"],
  },
  {
    title: "Databases",
    icon: "db",
    items: ["SQL Server", "MySQL", "SQLite"],
  },
  {
    title: "Tools & Methodologies",
    icon: "tools",
    items: ["VS Code", "R Studio", "Figma", "MS Office", "Agile", "Waterfall"],
  },
];

export const softSkills = [
  {
    title: "Public Speaking",
    desc: "Effective communication and presentation skills",
    icon: "speak",
  },
  {
    title: "Project Management",
    desc: "Planning, execution and delivery of projects",
    icon: "manage",
  },
  {
    title: "Self Management",
    desc: "Disciplined and self-motivated work approach",
    icon: "self",
  },
  {
    title: "Teamwork & Leadership",
    desc: "Collaborative team player with leadership potential",
    icon: "team",
  },
  {
    title: "Responsible & Honest",
    desc: "Ethical approach with accountability and integrity",
    icon: "honest",
  },
  {
    title: "Critical Thinking",
    desc: "Analytical problem-solving and decision making",
    icon: "think",
  },
];

/**
 * CONTACT CARDS SECTION
 */

export const contactCards = [
  {
    title: "Email",
    value: "amamidanansuriya@gmail.com",
    note: "Feel free to reach out!",
    icon: "email",
    link: "mailto:amamidanansuriya@gmail.com",
  },
  {
    title: "LinkedIn",
    value: "https://www.linkedin.com/in/amami-danansuriya-48a784303/",
    note: "Connect professionally",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/amami-danansuriya-48a784303/",
  },
  {
    title: "GitHub",
    value: "https://github.com/AmamiD",
    note: "View my projects and code",
    icon: "github",
    link: "https://github.com/AmamiD",
  },
];