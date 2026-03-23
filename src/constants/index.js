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
  meta,
  starbucks,
  tesla,
  shopify,
  threejs
} from "../assets";

import smarttodo from '../assets/smarttodo.png';
import securepass from '../assets/securepass.png';

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
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    ],
    image: smarttodo,
    source_code_link: "https://react-tasklistmanager.netlify.app/",
  },
  {
    name: "SecurePass",
    description:
      "A secure password manager system that allows users to safely store and manage credentials. It features user authentication, encrypted password storage, and secure login functionality.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "express", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
    ],
    
    image: securepass,
    source_code_link: "https://yorpassmanager.netlify.app/",
  },
];

const certificates = [
  {
    title: "Data Structures & Algorithms with Java",
    issuer: "Apna College",
    date: "Jan 2025",
    credentialLink: "https://drive.google.com/file/d/1XcR_DF5BKeALacLiPaukiTpsVHqgNQme/view",
    color: "#915EFF",
  },
  {
    title: "Ethical Hacking — Beginner to Advanced",
    issuer: "NPTEL",
    date: "Mar 2024",
    credentialLink: "https://drive.google.com/file/d/12IxeQYcIATI7ueN5VccYj1tUPLUBCpW6/view",
    color: "#FF6B35",
  },
  {
    title: "Full Stack Development",
    issuer: "GeeksforGeeks",
    date: "Jun 2023",
    credentialLink: "https://www.geeksforgeeks.org/",
    color: "#00B4D8",
  },
  {
    title: "Node.js Backend Integration",
    issuer: "Scaler",
    date: "Oct 2025",
    credentialLink: "https://moonshot.scaler.com/s/sl/NUAyNptaDC",
    color: "#43AA8B",
  },
];
const achievements = [
  {
    title: "LeetCode — 500+ Problems Solved",
    description:
      "Consistently solved competitive programming problems, ranking in top 30% globally.",
    icon: "💻",
    date: "Ongoing",
  },
  {
    title: "Hackathon — Top 5 Finalist",
    description:
      "Participated in a competitive hackathon and secured a position among the top 5 teams by building an innovative solution under time constraints.",
    icon: "🏆",
    date: "Mar 2023",
  },
  {
    title: "Google Developer Student Club — Lead",
    description:
      "Led a 50-member tech community, organizing workshops, hackathons, and seminars.",
    icon: "🌐",
    date: "2023–2024",
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
