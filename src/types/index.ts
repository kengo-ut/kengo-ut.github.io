import { IconName } from "@/components/common/DynamicIcon";

export interface JsonData {
  value: string;
}

export interface HeroInfo {
  name: string;
  greeting: string;
}

export interface NavItem {
  icon: IconName;
  link: string;
}

export interface PersonalInfo {
  role: string;
  location: string;
  selfIntroduction: string;
  resumeLink: string;
}

export interface CoreCompetency {
  category: string;
  icon: IconName;
  skills: string[];
}

export interface ImageSlide {
  src: string;
  alt: string;
}

export interface EducationInfo {
  degree: string;
  field: string;
  school: {
    name: string;
    link: string;
  };
  location: string;
  period: string;
  advisor: string;
  gpa?: string;
  research?: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface ExperienceInfo {
  position: string;
  period: string;
  company: {
    name: string;
    link: string;
  };
  location: string;
  description: string[];
  technologies: string[];
}

export interface SkillInfo {
  title: string;
  icon: IconName;
  skills: {
    name: string;
    level: "beginner" | "intermediate" | "advanced";
  }[];
}

export interface PublicationInfo {
  title: string;
  authors: string[];
  conference: string;
  date: string;
  abstract: string;
  keywords?: string[];
  link?: string;
}

export interface CertificationInfo {
  name: string;
  issuer: string;
  date: string;
  id?: string;
  description?: string;
}

export interface AchievementInfo {
  category: string;
  title: string;
  score: string;
  date: string;
  details?: string;
}

export interface AwardInfo {
  title: string;
  link: string;
  conference: string;
  date: string;
  description: string;
}

export interface FooterInfo {
  name: string;
}

export interface ProjectInfo {
  title: string;
  period: string;
  description: string;
  image?: string;
  features?: string[];
  technologies: string[];
  demoUrl?: string;
  repoUrl?: string;
}
