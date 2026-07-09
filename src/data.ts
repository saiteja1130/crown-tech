import { Course, ServiceItem, Testimonial, BlogPost } from "./types";

export const COURSES_DATA: Course[] = [
  {
    id: "data-science-ai",
    name: "Data Science With AI",
    duration: "6–12 months",
    hours: "320+ hours",
    level: "Advanced",
    category: "data",
    image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?auto=format&fit=crop&q=80&w=600",
    shortDescription: "Master Python, Machine Learning, Deep Learning, and Generative AI models. Learn data analysis and neural networks with real-time enterprise datasets.",
    fullDescription: "Our signature flagship curriculum designed for engineers and analytical thinkers. This comprehensive course prepares you for high-paying roles like AI Engineer, Data Scientist, and ML Developer. Includes hands-on training with PyTorch, TensorFlow, LLMs, and prompt engineering.",
    syllabus: [
      "Python Basics to Advanced & Pandas/NumPy",
      "Statistical Analysis & Data Visualization (D3, Seaborn)",
      "Machine Learning Algorithms (Supervised/Unsupervised)",
      "Deep Learning, Neural Networks & Computer Vision",
      "Generative AI, LLMs, Prompt Engineering, and RAG Systems",
      "Deploying Models to Cloud (AWS, Azure) & ML Ops"
    ],
    features: [
      "320+ Hours of Live Virtual & Classroom Training",
      "12+ Industry Real-Time Capstone Projects",
      "Weekly Mentor-led Code Reviews",
      "Guaranteed Placement Prep and Hackathons"
    ],
    rating: 4.9,
    reviewsCount: 1240
  },
  {
    id: "mern-stack",
    name: "MERN Stack Developer",
    duration: "4–6 months",
    hours: "240+ hours",
    level: "Intermediate to Advanced",
    category: "development",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=600",
    shortDescription: "Build modern, highly interactive web applications using MongoDB, Express.js, React, and Node.js. Focuses on full-stack Javascript architecture.",
    fullDescription: "Transform into an expert full-stack developer. This industry-aligned course walks you through complete database design, REST and GraphQL APIs, advanced state management in React, and modern microservices architecture with Express and Node.js.",
    syllabus: [
      "Advanced Javascript (ES6+) & Modern CSS (Tailwind)",
      "React.js Single Page Applications, Hooks, and Redux/Zustand",
      "Node.js Core, Async Patterns, and Express Server Framework",
      "NoSQL Databases (MongoDB) & Schema Design",
      "JWT Authentication, Secure API Routes, and WebSockets",
      "Docker Containers and Deploying to Vercel/Render/Heroku"
    ],
    features: [
      "Complete Full Stack Portfolio Builder (4 real-world projects)",
      "Agile Development Methodology & Scrum Practices",
      "Real-world System Architecture & Code standards",
      "Direct guidance on Technical System Design rounds"
    ],
    rating: 4.8,
    reviewsCount: 980
  },
  {
    id: "java-developer",
    name: "Full Stack Java Developer",
    duration: "5–6 months",
    hours: "280+ hours",
    level: "Intermediate",
    category: "development",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600",
    shortDescription: "Become an enterprise-grade backend and full-stack developer. Cover Java, Spring Boot, Hibernate, microservices, and modern frontend pairings.",
    fullDescription: "Enterprise businesses run on Java. This course equips you with robust system development concepts, object-oriented principles, relational databases, Spring Boot microservices, high-scale database query design, and UI integration with Angular or React.",
    syllabus: [
      "Java Core, Multithreading, Streams, and OOPs Principles",
      "Spring Boot Framework, Spring Security, and JPA/Hibernate",
      "Relational Databases (PostgreSQL/MySQL) & SQL Optimizations",
      "Microservices Architecture, Eureka Discovery, and API Gateways",
      "Docker, Kubernetes, and Enterprise CI/CD Pipelines",
      "Frontend Integration (React or Angular Components)"
    ],
    features: [
      "Enterprise Scale Architecture Training",
      "Database Tuning & High Volume Transaction Design",
      "1-on-1 Mock Reviews with Senior Architects from top MNCs",
      "Comprehensive Placement drive access across 100+ partner companies"
    ],
    rating: 4.9,
    reviewsCount: 1420
  },
  {
    id: "python-developer",
    name: "Full Stack Python Developer",
    duration: "4–5 months",
    hours: "220+ hours",
    level: "Beginner to Intermediate",
    category: "development",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=600",
    shortDescription: "Learn robust web development with Python, Django, Flask, PostgreSQL, and modern client interfaces. Perfect for beginner developers.",
    fullDescription: "Python is clear, intuitive, and extremely fast to develop. This program bridges basic scripting with powerful backend web engineering using Django, coupled with SQL database querying, unit testing, and dynamic web interfaces.",
    syllabus: [
      "Python Basics, Algorithms, Data Structures, and OOPs",
      "Django Web Framework, ORM, Admin Panel, and Templates",
      "Django REST Framework for building high-grade RESTful APIs",
      "PostgreSQL Integration, Indexes, and Database Migrations",
      "Frontend UI Development (HTML5, Tailwind CSS, Javascript)",
      "AWS Deployments, Gunicorn, and Nginx reverse proxy setups"
    ],
    features: [
      "Perfect roadmap for absolute beginners and non-CS graduates",
      "Includes automation scripts and web scraping portfolio",
      "Interactive coding assignments with live expert assistance",
      "Extensive resume enhancement & GitHub portfolio showcase"
    ],
    rating: 4.7,
    reviewsCount: 860
  },
  {
    id: "dotnet-developer",
    name: "Full Stack .NET Developer",
    duration: "5–6 months",
    hours: "260+ hours",
    level: "Intermediate",
    category: "development",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600",
    shortDescription: "Build blazing fast corporate systems using C#, ASP.NET Core, Entity Framework, SQL Server, and React UI development.",
    fullDescription: "C# and .NET Core power massive enterprise applications across financial, insurance, and medical industries worldwide. Master C# basics, secure web services, SQL Server design, Azure Cloud deploy, and interactive frontends.",
    syllabus: [
      "C# Language Fundamentals, LINQ, and Object Oriented Design",
      "ASP.NET Core Web API, Middleware, and Dependency Injection",
      "Entity Framework Core, Code-First & Database-First approaches",
      "SQL Server Database Design, Stored Procedures, and Query Tuning",
      "Azure Web Apps, Azure Functions, and Key Vault integration",
      "Frontend Web Integration with React & TypeScript"
    ],
    features: [
      "Enterprise Design Patterns (CQRS, Repository Pattern)",
      "Heavy emphasis on high-performance API design",
      "Mock code reviews with Microsoft Certified experts",
      "Staffing assistance inside leading domestic and global MNCs"
    ],
    rating: 4.8,
    reviewsCount: 750
  },
  {
    id: "devops-cloud",
    name: "DevOps With Multi-Cloud",
    duration: "5–6 months",
    hours: "260+ hours",
    level: "Advanced",
    category: "cloud",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=600",
    shortDescription: "Master infrastructure automation, CI/CD, Docker, Kubernetes, and Cloud Management across AWS, Azure, and GCP.",
    fullDescription: "Learn to automate deployments, orchestrate huge clusters, and maintain 99.9% uptime. This deep dive into Devops concepts focuses on Terraform Infrastructure-as-Code, Kubernetes environments, multi-cloud services, and DevSecOps compliance.",
    syllabus: [
      "Linux Administration, Shell Scripting, and Git Workflows",
      "Docker Containerization & Multi-stage Build Architectures",
      "Kubernetes Clustering, Pods, Deployments, and Helm Charts",
      "Jenkins, GitHub Actions, and Gitlab CI/CD Pipelines",
      "Terraform (Infrastructure as Code) & Ansible Automation",
      "Multi-Cloud Services: AWS (EC2, S3, IAM, RDS) & Microsoft Azure"
    ],
    features: [
      "100% Practical Cloud Labs with individual sandbox environments",
      "Official Certification exam preparation (AWS Solutions Arch, CKA)",
      "Focus on site reliability engineering (SRE) paradigms",
      "Direct recruitment drives from our Staffing division"
    ],
    rating: 4.9,
    reviewsCount: 1120
  },
  {
    id: "software-testing-ai",
    name: "Software Testing With AI",
    duration: "4 months",
    hours: "180+ hours",
    level: "Beginner to Intermediate",
    category: "management",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600",
    shortDescription: "Learn Manual, Database, and automated Testing (Selenium, Playwright) augmented with advanced AI test generation tools.",
    fullDescription: "QA has evolved. Learn modern software quality assurance and test automation from scratch, combined with advanced modern AI productivity tools that write and debug automated scripts. Covers API testing with Postman and UI automation.",
    syllabus: [
      "Software Testing Lifecycle, Bug Tracking, and Jira Workflows",
      "Java/Python for Testers & OOPs concepts",
      "Selenium WebDriver with Page Object Model (POM)",
      "Playwright Automation & Modern End-to-End testing",
      "API Testing (Postman, RestAssured) & SQL database verification",
      "AI Tools for automatic test script generation and debugging"
    ],
    features: [
      "Extensive real QA project simulation",
      "API testing certification prep",
      "Daily lab tasks with trainer reviews",
      "Placement pool selection for immediate client staffing needs"
    ],
    rating: 4.8,
    reviewsCount: 890
  },
  {
    id: "mulesoft-ai",
    name: "MuleSoft with AI",
    duration: "4–5 months",
    hours: "200+ hours",
    level: "Advanced",
    category: "cloud",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600",
    shortDescription: "Become an Integration Architect. Master Anypoint Platform, RAML API development, and AI-assisted Mule flows.",
    fullDescription: "MuleSoft is the world's leading enterprise API integration system. Learn Mule ESB, DataWeave transformations, flow designs, cloudhub management, and integrate AI prompts to rapidly generate secure data connections.",
    syllabus: [
      "Integration Paradigms, ESB Concepts, and RESTful Design",
      "Anypoint Studio, Mule Flows, Subflows, and Batch Processing",
      "DataWeave 2.0 Transformation Language & Advanced Expressions",
      "RAML API Specification, API Manager, and Policy Enforcements",
      "MuleSoft CloudHub, On-Prem Deployments, and CI/CD Integrations",
      "Salesforce & SAP Integrations & MuleSoft AI Einstein features"
    ],
    features: [
      "MuleSoft Certified Developer (MCD) Exam Preparation",
      "Highly niche role placement with premium salary brackets",
      "Real-world enterprise system simulations",
      "Staffing priority for top Fortune 500 partners"
    ],
    rating: 4.9,
    reviewsCount: 560
  },
  {
    id: "cyber-security",
    name: "Cyber Security",
    duration: "5 months",
    hours: "210+ hours",
    level: "Advanced",
    category: "cloud",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600",
    shortDescription: "Protect critical systems. Learn Ethical Hacking, Network Defense, Penetration Testing, Security Auditing, and Incident Response.",
    fullDescription: "With rising digital threats, cyber security is a top corporate priority. Train in real lab networks, perform vulnerability assessments, run authorized penetration testing, analyze digital forensics, and study SOC operations.",
    syllabus: [
      "Networking Protocols, Linux Security, and Cryptography",
      "Ethical Hacking Methodologies, Reconnaissance, and Scanning",
      "Web Application Penetration Testing (OWASP Top 10)",
      "Network Security, Firewalls, IDS/IPS, and Wireshark Analysis",
      "SIEM Tools (Splunk), SOC Workflows, and Incident Response",
      "Compliance Frameworks: ISO 27001, SOC2, and GDPR guidelines"
    ],
    features: [
      "Immersive virtual hacking labs and sandbox environments",
      "CEH (Certified Ethical Hacker) curriculum structure",
      "Assistance in placement in security operations centers",
      "100% secure, hands-on, authorized offensive/defensive training"
    ],
    rating: 4.8,
    reviewsCount: 670
  },
  {
    id: "mainframes",
    name: "Mainframes",
    duration: "4 months",
    hours: "180+ hours",
    level: "Intermediate",
    category: "data",
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=600",
    shortDescription: "Learn foundational computing architectures. Covers COBOL, JCL, CICS, DB2, and enterprise transaction processing.",
    fullDescription: "Mainframes remain the solid bedrock of global banking, logistics, and governmental systems. This course keeps old-school power alive, instructing you on database connections, batch job architectures, and mainframe operating environments.",
    syllabus: [
      "Introduction to IBM Mainframe Architecture & TSO/ISPF",
      "COBOL Programming Language (Structure, Data divisions, Logic)",
      "JCL (Job Control Language), DD statements, and Utility tools",
      "DB2 Relational Databases, SQL inside COBOL, and Cursor Controls",
      "CICS (Customer Information Control System) for online transactions",
      "Mainframe Modernization, APIs, and modern DevOps for COBOL"
    ],
    features: [
      "Rare high-demand skillset preferred by banking clients",
      "Guaranteed interview scheduling with global banking service MNCs",
      "Dedicated terminal emulator access for daily practice",
      "Mentored by mainframe veterans with 15+ years experience"
    ],
    rating: 4.7,
    reviewsCount: 420
  },
  {
    id: "digital-marketing",
    name: "Digital Marketing",
    duration: "3–6 months",
    hours: "220+ hours",
    level: "Beginner",
    category: "management",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
    shortDescription: "Acquire marketing leadership skills. Master SEO, Google Ads, Meta Ads, Content Strategy, Analytics, and Social Media Marketing.",
    fullDescription: "Drive high-impact traffic and conversions. Gain actual marketing skills in SEO optimization, search engine advertising, social media execution, campaign building, funnel analysis, and data tracking with modern tools like GA4.",
    syllabus: [
      "Search Engine Optimization (SEO) & Technical Audits",
      "Pay Per Click (PPC) Marketing, Google Search and Display Ads",
      "Social Media Marketing (SMM) on Meta, LinkedIn, and YouTube",
      "Email Marketing, Marketing Automation & Lead Nurturing",
      "Google Analytics (GA4), Tag Manager, and Conversion Tracking",
      "AI Tools for Content Copywriting, Ad Creatives, and SEO optimization"
    ],
    features: [
      "Manage real live marketing campaigns with a starter budget",
      "12+ Industry globally recognized certifications (Google, HubSpot)",
      "Perfect for entrepreneurs, career switchers, and content creators",
      "Dedicated placement training with agency and corporate partners"
    ],
    rating: 4.8,
    reviewsCount: 1150
  },
  {
    id: "professional-hr",
    name: "Professional HR Management",
    duration: "3–4 months",
    hours: "160+ hours",
    level: "Beginner to Intermediate",
    category: "management",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
    shortDescription: "Acquire global HR skills. Master Recruitment, Payroll Administration, Employee Relations, Labor Laws, and HR Analytics.",
    fullDescription: "Every tech firm needs a powerful HR workforce. Learn absolute personnel administration, recruitment lifecycle, talent sourcing, salary structures, payroll calculations, and tools for modern organizational management.",
    syllabus: [
      "Strategic HR Planning & Global Sourcing / Recruiting",
      "Onboarding processes, Induction systems, and Talent retention",
      "Payroll Calculations, Provident Fund (PF), Tax Deductions & ESIC",
      "Industrial Labor Laws, Contract Laws & Corporate compliance",
      "Performance Management Systems (PMS) & KPI structuring",
      "Modern HR Software (ATS, Workday) & Advanced HR Analytics"
    ],
    features: [
      "Practical case study based learning format",
      "Direct placement integration within Crown Technology Staffing division",
      "Complete documentation, drafts, and policy template building guides",
      "Mock interviews and HR leadership panels"
    ],
    rating: 4.7,
    reviewsCount: 610
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "training",
    title: "1. Software Training Services",
    iconName: "GraduationCap",
    summary: "Industry-oriented education designed to bridge the skill gap, empowering students with hands-on labs and direct placement drives.",
    details: "We offer some of the most dynamic, updated educational programs available in technical space. From Data Science with AI to Enterprise Full-Stack frameworks, our physical classes and interactive workspaces focus on 100% practical knowledge.",
    offerings: [
      "Industry-oriented curriculum matching global top-tier tech standards",
      "Real-time projects matching enterprise scale deployment scenarios",
      "100% Dedicated Placement support, mock sessions, and direct drives"
    ],
    benefits: [
      "Gain direct access to 100+ Campus Drives",
      "Learn from active software architects with verified corporate histories",
      "Flexible hybrid learning modes matching your schedule"
    ]
  },
  {
    id: "staffing",
    title: "2. IT Staffing Company",
    iconName: "Users",
    summary: "Comprehensive, dynamic recruitment structures matching top talents with forward-thinking enterprises, from contracts to direct hires.",
    details: "Crown Technology serves as an active strategic bridge between top-tier IT talents and companies seeking top quality results. We handle the entire screening, technical interviewing, and credential vetting to save you months of sourcing time.",
    offerings: [
      "Permanent staffing for core, highly stable critical positions",
      "Contract staffing for rapid scaling or project-centric operations",
      "Contract-to-Hire setup ensuring cultural and structural alignment"
    ],
    benefits: [
      "Pre-vetted technical talent saving 70% interview time",
      "Compliance-first handling of salaries, local labor regulations, and onboarding",
      "95% Retention rate across placed candidates"
    ]
  },
  {
    id: "outsourcing",
    title: "3. Outsourcing & Development Services",
    iconName: "Globe",
    summary: "Sovereign global engineering services deploying dedicated technical squads to design, develop, and host complex enterprise portals.",
    details: "Focus entirely on your key core objectives while our engineering teams design, build, test, and host your services. We operate with standard, high-grade agile sprints to maintain flawless transparency.",
    offerings: [
      "Dedicated Team Model delivering specialized remote developer squads",
      "Project-Based Model executing structured custom requests at fixed rates",
      "Offshore Development Center (ODC) maximizing budget efficiencies",
      "Managed Services ensuring 24/7 server monitoring and feature updates"
    ],
    benefits: [
      "Accelerated time-to-market with ready-made scrum teams",
      "Predictable costing with clear sprint objectives and delivery schedules",
      "Robust security protocols keeping internal client intellectual properties safe"
    ]
  },
  {
    id: "development",
    title: "4. Custom Development",
    iconName: "Cpu",
    summary: "Stunning web and mobile systems crafted with robust structures, premium interfaces, fast responses, and high conversions.",
    details: "We turn complex business workflows into elegant, intuitive digital assets. By integrating high-performance frontend interfaces with bulletproof server-side APIs, we construct software that scales seamlessly.",
    offerings: [
      "Web Applications featuring rich interactivity, high SEO performance, and deep security",
      "Mobile Apps for iOS and Android built on cross-platform native feel",
      "Custom Enterprise Software aligning back-office portals and CRM integrations",
      "Modern cloud migration and systems modernization"
    ],
    benefits: [
      "Clean UI/UX layout and pixel-perfect responsiveness across all screens",
      "State-of-the-art secure REST/GraphQL API systems built for high-throughput",
      "Comprehensive warranty, deployment monitoring, and documentation"
    ]
  },
  {
    id: "medical-coding",
    title: "5. Medical Coding Services",
    iconName: "ClipboardPlus",
    summary: "Accurate, HIPAA-compliant medical coding and billing solutions connecting healthcare providers with certified coders for maximum revenue cycle efficiency.",
    details: "Crown Technology's Medical Coding division provides end-to-end healthcare revenue cycle management. Our team of certified medical coders (CPC, CCS, RHIT) handles accurate ICD-10-CM, CPT, and HCPCS code assignment, ensuring optimal reimbursement rates and zero compliance violations for hospitals, clinics, and specialty practices worldwide.",
    offerings: [
      "ICD-10-CM / CPT / HCPCS coding for all clinical specialties",
      "Medical billing, claim submission & denial management",
      "Medical coding training & AAPC/AHIMA certification prep",
      "Offshore medical coding outsourcing with 99%+ accuracy",
      "Revenue Cycle Management (RCM) consulting & audits",
      "HIPAA-compliant data handling & secure workflow integration"
    ],
    benefits: [
      "99%+ coding accuracy reducing claim denials and revenue leakage",
      "HIPAA-compliant secure infrastructure protecting patient data",
      "Faster reimbursement cycles with reduced AR days",
      "Certified coders (CPC / CCS / RHIT) across 30+ medical specialties",
      "Dedicated account managers and real-time productivity dashboards"
    ]
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Learning Planning",
    description: "Personalized onboarding and counseling session to determine the perfect tech path aligning with your previous educational background and career goals."
  },
  {
    step: "02",
    title: "Concept Understanding",
    description: "Deep, live interactive classes explaining fundamental principles, supplemented with elegant visualization diagrams and curated documentation."
  },
  {
    step: "03",
    title: "Practical Projects",
    description: "Move from concepts to containers. Build dynamic real-world projects matching actual enterprise-scale code quality and repository requirements."
  },
  {
    step: "04",
    title: "Evaluation & Testing",
    description: "Rigorous diagnostic mock exams, automated technical questionnaires, and weekly live mock technical interviews to identify areas for growth."
  },
  {
    step: "05",
    title: "Placement Preparation",
    description: "Resume optimization, building clean GitHub portfolios, scheduling exclusive campus interview slots, and conducting mock HR interviews."
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Industry-aligned Curriculum",
    description: "Our syllabus is rigorously reviewed and updated every quarter by working architects to ensure absolute compliance with current market trends."
  },
  {
    title: "Hands-on Real-time Projects",
    description: "No basic calculators here. Build microservice systems, complex relational schemas, automated test flows, and AI model deployments."
  },
  {
    title: "Mock Interviews & Resume Support",
    description: "Interactive resume enhancements and structured mock sessions designed by premium recruiters to instantly highlight your technical strengths."
  },
  {
    title: "Expert Trainers",
    description: "Learn from highly experienced software engineers and industry veterans who teach you not just core syntax, but production best-practices."
  },
  {
    title: "Placement Assistance",
    description: "Leverage our active IT Staffing division to directly access exclusive open positions in top MNCs and high-growth technology startups."
  },
  {
    title: "Flexible Learning Modes",
    description: "Choose between fully interactive live online classrooms, structured physical workshops, or hybrid setups matching your personal pace."
  }
];

export const REAL_STATS = [
  { value: "15+", label: "Industry Courses" },
  { value: "50,000+", label: "Students Trained" },
  { value: "10,000+", label: "Placements Achieved" },
  { value: "100+", label: "Campus Drives Conducted" }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Sai Kumar N.",
    role: "MERN Stack Developer",
    company: "Cognizant",
    text: "Crown Technology completely transformed my career path. Coming from a non-CS background, the step-by-step practical focus in the MERN Stack Developer course and the constant mock interviews built my confidence. Within 5 months, I got placed with a fantastic offer!",
    rating: 5,
    courseTaken: "MERN Stack Developer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: "t2",
    name: "Priyanka Sharma",
    role: "AI Consultant",
    company: "TCS",
    text: "The Data Science with AI course was extremely intensive, packing in everything from pandas data structures to custom Generative AI prompt pipelines. The capstone enterprise projects are exactly what got the recruiters' attention during my campus drive. Highly recommended!",
    rating: 5,
    courseTaken: "Data Science With AI",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: "t3",
    name: "Vikram Reddy",
    role: "Lead DevOps Architect",
    company: "Infosys",
    text: "I wanted to upscale from traditional system administration into Cloud Operations. The DevOps with Multi-cloud program delivered outstanding labs. Building CI/CD pipelines, orchestrating Kubernetes pods, and writing clean Terraform scripts felt real. The staffing team scheduled 4 interviews immediately.",
    rating: 5,
    courseTaken: "DevOps With Multi-Cloud",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: "t4",
    name: "Meenakshi K.",
    role: "Associate HR Manager",
    company: "Tech Mahindra",
    text: "The Professional HR Management course is very structured. They cover actual practical payroll structures, tax brackets, local labor laws, and strategic corporate recruitment. It got me placed as an Associate HR inside an MNC within three weeks of graduation.",
    rating: 5,
    courseTaken: "Professional HR Management",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "b1",
    title: "The Generative AI Wave: How to Future-Proof Your IT Career in 2026",
    excerpt: "With AI tools and LLMs scaling exponentially, traditional software engineering is shifting. Discover the key skills you need to stand out as an AI-powered developer.",
    content: "The technological landscape is moving faster than ever. As Generative AI tools integrate directly into codebases, developers who master AI orchestration, prompt engineering, and Retrieval-Augmented Generation (RAG) are seeing their values double. At Crown Technology, we integrate AI concepts into all of our programming tracks to ensure you are ready for the immediate and long-term future. Mastering the combination of strong core engineering (like Java or Python) with Gen AI workflows is the highest-conversion skill of this decade.",
    category: "Tech",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600",
    date: "June 24, 2026",
    author: "Prasad Rao (Director of Curriculum)",
    readTime: "5 min read"
  },
  {
    id: "b2",
    title: "How to Build a Killer GitHub Portfolio that Captures Tech Recruiters",
    excerpt: "Recruiters spend less than 30 seconds on your resume. Here is how you can use beautiful README files and production-grade code structures on GitHub to win interviews.",
    content: "Many students finish courses but fail to present their work effectively. A simple list of files on GitHub does not tell a story. To stand out, you need to write professional README files, include architectural workflow charts, explain your database schemas, and outline key design patterns. This blog walks you through formatting git commits, structuring repository directories, and creating interactive system diagrams that prove you can code on enterprise levels.",
    category: "Career",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=600",
    date: "July 02, 2026",
    author: "Sneha Sen (Senior IT Staffing Partner)",
    readTime: "4 min read"
  },
  {
    id: "b3",
    title: "Cracking the Coding Interview: 5 Secrets MNC Recruiters Look For",
    excerpt: "Preparing for a technical round? Understand the precise parameters recruiters evaluate: Clean syntax, error handling, optimization, logical communication, and scalability.",
    content: "Technical interviews are not just about arriving at the correct output. Recruiters evaluate how you approach complex obstacles. Learn to voice your analytical thoughts during whiteboarding, describe your complexity tradeoffs (Time and Space complexity), write structured tests, handle edge cases gracefully, and demonstrate high technical maturity. We prepare you for these variables via our weekly mock sessions and direct feedback reviews.",
    category: "Interview Prep",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80&w=600",
    date: "July 05, 2026",
    author: "Ravi Teja (Principal Architect & Trainer)",
    readTime: "6 min read"
  }
];
