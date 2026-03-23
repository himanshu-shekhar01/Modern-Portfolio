import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  smarttodo,
  securepass,
  travelXpress,
  frontend,
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "projects", title: "Projects" },
  { id: "tech", title: "Skills" },
  { id: "contact", title: "Contact" },
];
const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const education = [
  {
    degree: "Bachelor of Technology — Computer Science & Engineering",
    institution: "Lovely Professional University",
    duration: "2023 – 2027",
    grade: "CGPA: 6.2 / 10",
    description:
      "Focused on Data Structures, Algorithms and Web Technologies. Active member of the Coding Club.",
    iconBg: "#383E56",
  },
  {
    degree: "Intermediate (Class XII) — PCM",
    institution: "N.P. Boys Senior Secondary School",
    duration: "2020 – 2022",
    grade: "Percentage: 72%",
    description:
      "Physics, Chemistry, Mathematics with Computer Science. Participated in state-level science exhibitions.",
    iconBg: "#E6DEDD",
  },
  {
    degree: "High School (Class X)",
    institution: "Nav Uday Public High School",
    duration: "2019-2020",
    grade: "Percentage: 75%",
    description: "Top Performer in Maths and Science.",
    iconBg: "#383E56",
  },
];

const experiences = [
  {
    title: "Content Creator (Tech)",
    company_name: "Personal Brand",
    icon: creator,
    iconBg: "#383E56",
    date: "2025 - Present",
    points: [
      "Creating educational content on coding, development, and internships to help students learn programming concepts.",
      "Built a consistent online presence by sharing simplified explanations of technical topics.",
      "Engaged with audience through social platforms, improving communication and teaching skills.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "LazyEats (College Startup)",
    icon: frontend,
    iconBg: "#E6DEDD",
    date: "2025",
    points: [
      "Developed and designed the hero section of the website, improving visual appeal and user engagement.",
      "Enhanced UI styling and responsiveness using modern CSS and frontend techniques.",
      "Collaborated with startup team members to build and refine product features.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company_name: "Skill Craft",
    icon: web,
    iconBg: "#383E56",
    date: "2024",
    points: [
      "Contributed to frontend development by building and styling responsive UI components using React.js and CSS.",
      "Collaborated with team members to improve website design and user experience.",
      "Worked on real-world projects, gaining hands-on experience in modern web development practices.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];
const projects = [
  {
    name: "SmartTodo",
    description:
      "A task management web application that helps users efficiently organize and prioritize daily tasks. It supports creating, updating, deleting, and categorizing tasks, along with deadline tracking and status management.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
      { name: "tailwindcss", color: "pink-text-gradient" },
    ],
    image: smarttodo,
    source_code_link: "https://react-tasklistmanager.netlify.app/",
  },
  {
    name: "TravelXpress",
    description:
      "A travel booking platform that enables users to search for flights, hotels, and rental cars, while also offering recommendations for popular destinations and travel packages.",
    tags: [
      { name: "reactjs", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "tailwindcss", color: "pink-text-gradient" },
    ],
    image: travelXpress,
    source_code_link: "https://travelxpress.netlify.app/",
  },
  {
    name: "SecurePass",
    description:
      "A secure password manager system that allows users to safely store and manage credentials. It features user authentication, encrypted password storage, and secure login functionality.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "express", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
      { name: "tailwindcss", color: "green-text-gradient" },
    ],

    image: securepass,
    source_code_link: "https://yorpassmanager.netlify.app/",
  },
];

const certificates = [
  {
    title: "Data Structures & Algorithms with Java",
    issuer: "Apna College / Online",
    date: "Jan 2025",
    credentialLink:
      "https://drive.google.com/file/d/1XcR_DF5BKeALacLiPaukiTpsVHqgNQme/view",
    color: "#915EFF",
  },
  {
    title: "Ethical Hacking — Beginner to Advanced",
    issuer: "NPTEL / Online",
    date: "Mar 2025",
    credentialLink:
      "https://drive.google.com/file/d/12IxeQYcIATI7ueN5VccYj1tUPLUBCpW6/view",
    color: "#FF6B35",
  },
  {
    title: "Full Stack Development",
    issuer: "GeeksforGeeks / Online",
    date: "Jun 2025",
    credentialLink:
      "https://media.geeksforgeeks.org/courses/certificates/fc7b10226e96c22191b35ca374bbe055.pdf",
    color: "#00B4D8",
  },
  {
    title: "Node.js Backend Integration",
    issuer: "Scaler / Online",
    date: "Oct 2025",
    credentialLink: "https://moonshot.scaler.com/s/sl/NUAyNptaDC",
    color: "#43AA8B",
  },

  {
    title: "Build Generative AI Apps & Solutions (No-Code)",
    issuer: "Udemy / Online Platform",
    date: "2025",
    credentialLink:
      "https://udemy-certificate.s3.amazonaws.com/pdf/UC-0253426e-822a-4e33-9df1-c34ddbaa0ecf.pdf",
    color: "#FF9F1C",
  },
  {
    title: "ChatGPT Made Easy — AI Essentials for Beginners",
    issuer: "Udemy / Online Platform",
    date: "2025",
    credentialLink:
      "https://udemy-certificate.s3.amazonaws.com/pdf/UC-737d9e99-1c1d-45fc-a955-3a41582a2425.pdf",
    color: "#2EC4B6",
  },
  {
    title: "Master Generative AI & AI Tools",
    issuer: "Udemy / Online Platform",
    date: "2025",
    credentialLink:
      "https://udemy-certificate.s3.amazonaws.com/pdf/UC-1df67af7-3f6b-4927-ba66-639776e82706.pdf",
    color: "#E71D36",
  },
];
const achievements = [
  {
    title: "LeetCode — 300+ Problems Solved",
    description:
      "Consistently solved competitive programming problems, ranking in top 30% globally.",
    icon: "💻",
    date: "Ongoing",
  },

  {
    title: "HackerRank — 4★ in Problem Solving",
    description:
      "Achieved a 4-Star rating on HackerRank in Problem Solving, demonstrating strong analytical thinking and coding proficiency across algorithmic challenges.",
    icon: "💡",
    date: "2024",
  },
  {
    title: "Hackathon — Top 5 Finalist",
    description:
      "Participated in a competitive hackathon and secured a position among the top 5 teams by building an innovative solution under time constraints.",
    icon: "🏆",
    date: "Mar 2023",
  },
];
export {
  services,
  technologies,
  education,
  experiences,
  testimonials,
  certificates,
  achievements,
  projects,
};
