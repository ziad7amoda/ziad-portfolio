export const personalInfo = {
  name: "Ziad Hamoda",
  title: "Full Stack Engineer",
  tagline: "Full Stack Engineer · React.js · Next.js · Node.js · Express",
  about:
    "I'm a passionate full-stack engineer who loves building performant, user-friendly web applications. With expertise spanning from pixel-perfect frontends to scalable backend architectures, I thrive on turning complex problems into elegant solutions. I'm always exploring new technologies and pushing the boundaries of what's possible on the web.",
  email: "ziad7amoda@gmail.com",
  openToWork: true,
  resumeUrl: "/resume.pdf",
  socialLinks: {
    github: "https://github.com/ziad7amoda",
    linkedin: "https://www.linkedin.com/in/ziad-hamoda/",
  },
  githubUsername: "ziad7amoda",
};

export const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "PostgreSQL",
  "MongoDB",
  "Supabase",
  "Tailwind CSS",
  "Material UI",
  "Redux",
  "HTML5",
  "CSS3",
  "Python",
  "Docker",
  "Git",
  "Postman",
  "Figma",
  "REST APIs",
  "GraphQL",
  "TensorFlow.js",
  "MediaPipe"
];

export interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  image?: string;
  problem?: string;
  solution?: string;
  features?: string[];
}

export const projects: Project[] = [
  {
    id: "teleme-healthcare",
    name: "Teleme",
    description:
      "A full-stack healthcare platform featuring role-based authentication, dual clinic/video consults, digital prescriptions, and real-time doctor availability.",
    techStack: ["React", "TypeScript", "Supabase", "PostgreSQL", "CSS"],
    liveUrl: "https://teleme.net",
    githubUrl: "https://github.com/ziad7amoda/teleme-healthcare",
    image: "/projects/teleme.png",
    problem: "Managing secure patient data and complex authorization checks across multiple user roles (patient, doctor, admin) while processing online payments.",
    solution: "Engineered PostgreSQL Row Level Security (RLS) policies and Supabase Edge Functions to handle 100% of authorization checks at the database level, and integrated OMPay.",
    features: ["Role-based Authentication", "OMPay Integration", "Real-time Availability", "Dual Clinic & Video Consults"],
  },
  {
    id: "courtly-booking",
    name: "Courtly",
    description:
      "A full-stack sports venue booking platform for soccer, basketball, and padel courts, built to support multiple concurrent bookings with real-time availability.",
    techStack: ["React", "Node.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://courtly-theta.vercel.app",
    githubUrl: "https://github.com/ziad7amoda/courtly",
    image: "/projects/courtly.png",
    problem: "Preventing booking conflicts and managing concurrent reservations for various sports courts with specific fixed booking slots and cancellation policies.",
    solution: "Developed a robust PostgreSQL database architecture to handle concurrency, paired with a highly responsive React and Tailwind UI maintaining 90+ Lighthouse performance scores.",
    features: ["Concurrent Booking Architecture", "Fixed Booking Slots", "Cancellation Policies", "Cross-device Responsive UI"],
  },
  {
    id: "nashd-marketing",
    name: "Nashd",
    description:
      "A high-conversion landing page and marketing website designed to showcase features and drive downloads for the Nashd mobile application on the App Store.",
    techStack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    liveUrl: "https://nashd-website.vercel.app/",
    githubUrl: "https://github.com/ziad7amoda/nashd",
    image: "/projects/nashd.png",
    problem: "The mobile app needed an SEO-optimized digital presence to clearly explain its value proposition and directly funnel users to the App Store.",
    solution: "Built a lightning-fast, responsive marketing site emphasizing clear calls-to-action, smooth interactions, and optimized assets to maximize user acquisition.",
    features: ["App Store Conversion Funnel", "SEO Optimization", "Responsive UI", "High-Performance Assets"],
  },
  {
    id: "wave-asl",
    name: "Wave!",
    description:
      "An AI-powered American Sign Language (ASL) learning web app featuring interactive lessons, quizzes, progress tracking, and real-time AI gesture feedback.",
    techStack: ["React", "Node.js", "TensorFlow.js", "ONNX Runtime", "MediaPipe"],
    liveUrl: "https://wave-app-delta.vercel.app/",
    githubUrl: "https://github.com/ziad7amoda/wave",
    image: "/projects/wave.png",
    problem: "Traditional ASL learning platforms lack real-time, interactive feedback, making it difficult for students to know if they are performing static and dynamic signs accurately.",
    solution: "Integrated custom-trained ONNX models and MediaPipe hand tracking, optimized via ONNX Runtime to maintain a consistent 30 FPS for seamless real-time browser performance.",
    features: ["Real-time AI Gesture Feedback", "200+ Signs Recognition (95% Accuracy)", "Interactive Lessons & Quizzes", "Custom-trained ONNX Models"],
  }
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const emailjsConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
};

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  techStack: string[];
}

export const experienceData: Experience[] = [
  {
    id: "exp-1",
    role: "Full Stack Engineer",
    company: "Teleme",
    period: "11/2025 - Present",
    description: [
      "Built and deployed a healthcare web platform using React and Supabase. designed robust role-based authentication and secure appointment booking workflows, successfully managing 3 distinct user roles (patient, doctor, admin) and handling 100% of authorization checks. Integrated a payment gateway to enhance user experience and operational efficiency"
    ],
    techStack: ["Next.js", "Node.js", "TypeScript", "Supabase", "PostgreSQL", "Payment Gateway Integration", "Docker", "AWS"],
  },
  {
    id: "exp-2",
    role: "Intern Frontend Developer",
    company: "Elevvo Pathways",
    period: "07/2025 - 08/2025",
    description: [
      "Implemented and Enhanced responsive user interfaces using React and JavaScript, reducing page load times by 15%.",
      "Collaborated with a cross-functional team to integrate RESTful APIs and enhance data fetching efficiency, resulting in a 10% reduction in server response time."
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "JavaScript"],
  },
];

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

export const educationData: Education[] = [
  {
    id: "edu-1",
    degree: "B.S. in Computer and Data Science, Intelligent Systems Department",
    institution: "Alexandria University",
    period: "2021 - 2025",
    details: "Graduated with Honors. Coursework included Data Structures, Algorithms, Web Engineering, and Database Management.",
  },
];
