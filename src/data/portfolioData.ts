import { Project, SkillItem, TimelineEntry } from '../types';

export const PERSONAL_INFO = {
  name: "Gukhan B",
  title: "Artificial Intelligence & Full-Stack Engineer",
  tagline: "Building scalable web applications, secure Spring Boot backends, and intelligent AI-driven solutions.",
  location: "Coimbatore, Tamil Nadu, India (Open to Relocation)",
  email: "bgukhan204@gmail.com",
  phone: "+91 8838844579",
  github: "https://github.com/bgukhan204-tech",
  linkedin: "https://www.linkedin.com/in/gukhan-b-97674a381",
  bio: "Motivated Artificial Intelligence and Data Science engineering student passionate about software development and AI-driven solutions. Experienced in developing scalable web applications and intelligent systems through academic and personal projects. Seeking an opportunity to apply problem-solving abilities, analytical thinking, and innovative ideas in a dynamic technology-driven environment.",
  status: "Open for Software Engineering & AI Developer Roles",
  educationSummary: "B.Tech in Artificial Intelligence & Data Science | V.S.B College of Engineering Technical Campus, Coimbatore | CGPA: 8.2",
};

export const CORE_TECH_STACK = [
  { name: "Java & Spring Boot", description: "Spring Boot, Spring Security, JWT, RESTful API Development", tags: ["Java", "Spring Boot", "Spring Security", "JWT"] },
  { name: "React & Frontend", description: "Modern React, Interactive Component Design, Responsive Layouts", tags: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"] },
  { name: "MySQL Database", description: "Database Schema Design, Query Optimization, Connection Management", tags: ["MySQL", "Relational Database", "SQL Queries", "Indexing"] },
  { name: "Python & AI / Data Science", description: "TensorFlow, Streamlit, Multimedia Processing, Machine Learning Pipelines", tags: ["Python", "TensorFlow", "Streamlit", "Data Science", "OpenCV"] },
  { name: "Payment & API Integration", description: "Razorpay Payment Gateway, Role-Based Access Control (RBAC), REST APIs", tags: ["Razorpay API", "RBAC", "REST APIs", "JSON"] },
  { name: "Cloud & Deployment (Render)", description: "Web Application Hosting on Render, Cloud Computing Fundamentals", tags: ["Render", "Cloud Computing", "NPTEL Certified", "Web Hosting"] },
];

export const TOOLS_AND_PLATFORMS = [
  { name: "GitHub & Version Control", description: "Git Repositories, Version Tracking, Pull Requests, Code Collaboration", tags: ["Git", "GitHub", "Branching", "Version Control"] },
  { name: "Render Cloud Hosting", description: "Deploying full-stack web applications, database instances, and web services", tags: ["Render", "Cloud Hosting", "Deployment", "CI/CD"] },
  { name: "Postman & API Testing", description: "Testing and debugging REST endpoints, JWT authorization headers", tags: ["Postman", "API Debugging", "HTTP Methods", "Payloads"] },
  { name: "Streamlit UI Framework", description: "Rapid AI web application development and multimedia processing dashboards", tags: ["Streamlit", "Python UI", "Data Viz", "Live Feeds"] },
  { name: "Soft Skills & Teamwork", description: "Clear Communication, Collaborative Teamwork, Curiosity, Continuous Learning", tags: ["Communication", "Teamwork", "Curiosity", "Continuous Learning"] },
  { name: "Linux & IDEs", description: "VS Code, IntelliJ IDEA, Command Line, System Debugging", tags: ["VS Code", "IntelliJ", "Linux/Bash", "Debugging"] },
];

export const CERTIFICATIONS = [
  {
    title: "Introduction to Data Science and Artificial Intelligence",
    issuer: "Infosys Springboard",
    credentialId: "INFOSYS-DS-AI",
    link: "https://infyspringboard.onwingspan.com"
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL (National Programme on Technology Enhanced Learning)",
    credentialId: "NPTEL-CLOUD-COMP",
    link: "https://nptel.ac.in"
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "sentinel-ai",
    title: "Deepfake Detection: AI Multimedia Verification System",
    tagline: "AI-Powered Web Application utilizing Python, TensorFlow, and Streamlit for Rapid Video Ingestion",
    category: "AI & ML",
    description: "Engineered an AI-powered web application utilizing Python, TensorFlow, and Streamlit, featuring an efficient video processing pipeline for rapid multimedia ingestion. Designed a dual-engine detection system integrated with an advanced scoring and reasoning algorithm to evaluate authenticity and deliver precise prediction metrics.",
    detailedCaseStudy: {
      problem: "The rapid emergence of synthetically manipulated deepfake videos requires efficient, real-time multimedia ingestion and robust authenticity verification algorithms capable of distinguishing subtle facial artifacts.",
      solution: "Engineered a dual-engine detection pipeline using Python, TensorFlow, and Streamlit. Built an optimized video frame extraction workflow paired with an advanced scoring and reasoning algorithm to evaluate video authenticity and present clear prediction metrics.",
      algorithms: ["TensorFlow Deep Neural Network", "Frame Ingestion & Preprocessing Pipeline", "Authenticity Scoring Algorithm", "Confidence Reasoning Engine"],
      performanceGains: "Sub-second multimedia ingestion and precise authenticity prediction scoring across video and image frames.",
      challengesOvercome: "Optimized frame-by-frame video extraction pipelines to prevent memory bottlenecks during high-resolution multimedia processing in Streamlit."
    },
    architecture: {
      title: "Deepfake Detection Dual-Engine Processing Pipeline",
      nodes: [
        { id: "n1", label: "Multimedia Ingestion", sublabel: "Video / Image Input", type: "input" },
        { id: "n2", label: "Frame Extractor", sublabel: "OpenCV Pipeline", type: "process" },
        { id: "n3", label: "TensorFlow Model", sublabel: "Deep Neural Engine", type: "model" },
        { id: "n4", label: "Scoring Algorithm", sublabel: "Dual-Engine Metric Evaluation", type: "process" },
        { id: "n5", label: "Reasoning Engine", sublabel: "Confidence Analysis", type: "model" },
        { id: "n6", label: "Streamlit UI", sublabel: "Authenticity Verdict & Metrics", type: "output" }
      ],
      connections: [
        { from: "n1", to: "n2", label: "Stream Video" },
        { from: "n2", to: "n3", label: "Frame Tensors" },
        { from: "n3", to: "n4", label: "Feature Maps" },
        { from: "n4", to: "n5", label: "Scoring Weights" },
        { from: "n5", to: "n6", label: "Visual Dashboard" }
      ]
    },
    techStack: ["Python", "TensorFlow", "Streamlit", "OpenCV", "Deep Learning", "Data Processing"],
    metrics: [
      { label: "Architecture", value: "Dual-Engine", accent: "cyan" },
      { label: "Core Library", value: "TensorFlow", accent: "purple" },
      { label: "Frontend UI", value: "Streamlit", accent: "emerald" },
      { label: "Pipeline", value: "Video Ingestion", accent: "cyan" }
    ],
    githubUrl: "https://github.com/bgukhan204-tech",
    liveDemoUrl: "https://github.com/bgukhan204-tech",
    demoType: "deepfake-detector",
    featured: true
  },
  {
    id: "hyperscale-store",
    title: "Full-Stack B2C E-Commerce Marketplace",
    tagline: "Architected with Spring Security, JWTs, Razorpay Payment Gateway, and Live Map Tracking",
    category: "Full-Stack",
    description: "Architected a full-stack B2C e-commerce marketplace using Spring Security and JWTs to implement robust, secure role-based access control (RBAC). Integrated Razorpay API for secure payment processing alongside an interactive frontend featuring a real-time, map-based delivery tracking system.",
    detailedCaseStudy: {
      problem: "E-commerce platforms demand stringent role-based access control, reliable payment processing, and interactive real-time order tracking to deliver a secure and engaging buyer experience.",
      solution: "Architected a complete B2C platform using Java and Spring Boot with Spring Security and JWT authentication. Implemented Razorpay payment gateway API integration for secure transactions, backed by MySQL and an interactive React frontend with real-time map-based order tracking.",
      algorithms: ["JWT Token Authentication", "Role-Based Access Control (RBAC)", "Razorpay HMAC Payment Settlement", "Map-Based Geo-Tracking Algorithm"],
      performanceGains: "Secure, authenticated API routing with zero unauthorized access, seamless Razorpay payment flows, and responsive live delivery tracking.",
      challengesOvercome: "Successfully designed relational MySQL schemas for users, roles, products, and orders while streamlining secure communication with the Razorpay API."
    },
    architecture: {
      title: "Full-Stack Spring Boot & React E-Commerce Architecture",
      nodes: [
        { id: "h1", label: "React Frontend", sublabel: "Interactive UI & Maps", type: "input" },
        { id: "h2", label: "Spring Security", sublabel: "JWT Authentication & RBAC", type: "process" },
        { id: "h3", label: "Order & Product API", sublabel: "Spring Boot REST Services", type: "process" },
        { id: "h4", label: "Razorpay Gateway", sublabel: "Secure Payment Processing", type: "model" },
        { id: "h5", label: "MySQL Database", sublabel: "Relational ACID Store", type: "database" },
        { id: "h6", label: "Render Cloud", sublabel: "Deployed Web Application", type: "output" }
      ],
      connections: [
        { from: "h1", to: "h2", label: "HTTPS / JWT" },
        { from: "h2", to: "h3", label: "Authorized Route" },
        { from: "h3", to: "h4", label: "Payment API" },
        { from: "h3", to: "h5", label: "JPA / SQL Query" },
        { from: "h3", to: "h6", label: "Render Host" }
      ]
    },
    techStack: ["Java", "Spring Boot", "Spring Security", "JWT", "React", "MySQL", "Razorpay API", "Render"],
    metrics: [
      { label: "Security", value: "JWT + RBAC", accent: "cyan" },
      { label: "Payment API", value: "Razorpay", accent: "purple" },
      { label: "Backend", value: "Spring Boot", accent: "emerald" },
      { label: "Database", value: "MySQL", accent: "cyan" }
    ],
    githubUrl: "https://github.com/bgukhan204-tech",
    liveDemoUrl: "https://github.com/bgukhan204-tech",
    demoType: "spring-checkout",
    featured: true
  },
  {
    id: "datapulse-rag",
    title: "AI-Driven Intelligent Data Analytics & Insights Engine",
    tagline: "Scalable Web Application for Data Exploration, Predictive Modeling & Cloud Deployment",
    category: "Data Systems",
    description: "An intelligent analytics application bridging AI-driven algorithms with full-stack web engineering. Features interactive data visualization in React, RESTful service integration with Spring Boot and Python, and robust MySQL persistence deployed on Render.",
    detailedCaseStudy: {
      problem: "Organizations need intuitive web tools that process raw datasets, compute predictive metrics, and present visual insights through clean dashboards.",
      solution: "Engineered a modular web application combining React for interactive charting, Spring Boot and Python for analytical computation and REST APIs, and MySQL for structured storage.",
      algorithms: ["Data Preprocessing Pipeline", "Predictive Scoring Algorithm", "RESTful API Integration", "Dynamic Aggregation Queries"],
      performanceGains: "Fast data rendering and responsive API responses through optimized MySQL queries and streamlined backend integration.",
      challengesOvercome: "Streamlined database connectivity and tuned SQL queries to optimize API functionality and overall application performance."
    },
    architecture: {
      title: "AI-Driven Analytics & Web Application Architecture",
      nodes: [
        { id: "r1", label: "Data Input", sublabel: "Dataset / User Queries", type: "input" },
        { id: "r2", label: "Backend Services", sublabel: "Spring Boot & Python APIs", type: "process" },
        { id: "r3", label: "MySQL Store", sublabel: "Optimized Relational Schema", type: "database" },
        { id: "r4", label: "AI Insights Engine", sublabel: "Predictive Analytics", type: "model" },
        { id: "r5", label: "React Dashboard", sublabel: "Interactive Visualizations", type: "output" }
      ],
      connections: [
        { from: "r1", to: "r2", label: "Ingest Data" },
        { from: "r2", to: "r3", label: "SQL Queries" },
        { from: "r2", to: "r4", label: "Compute Metrics" },
        { from: "r4", to: "r5", label: "Render Charts" }
      ]
    },
    techStack: ["React", "Java", "Spring Boot", "Python", "MySQL", "GitHub", "Render"],
    metrics: [
      { label: "Domain", value: "AI & Data Science", accent: "cyan" },
      { label: "Backend", value: "Spring Boot", accent: "purple" },
      { label: "Frontend", value: "React", accent: "emerald" },
      { label: "Hosting", value: "Render", accent: "cyan" }
    ],
    githubUrl: "https://github.com/bgukhan204-tech",
    liveDemoUrl: "https://github.com/bgukhan204-tech",
    demoType: "rag-retriever",
    featured: true
  }
];

export const EXPERIENCE_DATA = [
  {
    id: "exp-1",
    role: "Full-Stack Web Development Intern",
    organization: "Software Development & Technology Intern",
    location: "Coimbatore, Tamil Nadu, India",
    period: "Internship Experience",
    highlight: "Developed and tested basic full-stack web application modules, assisting with frontend and backend integration workflows.",
    outcomes: [
      "Developed and tested basic full-stack web application modules, successfully assisting with frontend and backend integration workflows.",
      "Streamlined database connectivity and performed system debugging to optimize API functionality and overall application performance.",
      "Collaborated using GitHub for version control, issue tracking, and code repository management.",
      "Implemented responsive UI components in React and tested API integration with backend services."
    ],
    techStack: ["React", "Java", "Spring Boot", "MySQL", "REST APIs", "GitHub", "Render"]
  }
];

export const EDUCATION_DATA = [
  {
    id: "edu-1",
    degree: "B.Tech in Artificial Intelligence & Data Science",
    institution: "V.S.B College of Engineering Technical Campus",
    location: "Coimbatore, Tamil Nadu, India",
    period: "2022 — 2026",
    gpa: "CGPA: 8.2 / 10",
    honors: [
      "Certified in Introduction to Data Science and Artificial Intelligence (Infosys Springboard)",
      "Certified in Cloud Computing (NPTEL)",
      "Strong Academic Performance in AI, Data Science & Full-Stack Web Development"
    ],
    relevantCoursework: [
      "Artificial Intelligence & Machine Learning",
      "Data Science & Data Analytics",
      "Database Management Systems (MySQL)",
      "Object-Oriented Programming (Java)",
      "Web Application Development (React & Spring Boot)",
      "Cloud Computing Fundamentals"
    ]
  }
];
