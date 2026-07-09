export interface Course {
  id: string;
  name: string;
  duration: string;
  hours: string;
  level: string;
  category: "development" | "data" | "cloud" | "management";
  shortDescription: string;
  fullDescription: string;
  syllabus: string[];
  features: string[];
  rating: number;
  reviewsCount: number;
  image?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  iconName: string;
  summary: string;
  details: string;
  offerings: string[];
  benefits: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
  courseTaken: string;
  avatar: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: "Tech" | "Career" | "Interview Prep";
  image: string;
  date: string;
  author: string;
  readTime: string;
}

export interface Enquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  course: string;
  service: string;
  message: string;
  date: string;
}
