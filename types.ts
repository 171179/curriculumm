
export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  year: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: 'Infraestrutura' | 'Desenvolvimento' | 'Design & Ferramentas';
}

export interface Project {
  title: string;
  description: string;
  status: string;
}

export interface ResumeData {
  personalInfo: {
    name: string;
    title: string;
    email: string;
    phones: string[];
    location: string;
    bio: string;
    avatar: string;
    languages: string[];
    social: {
      linkedin: string;
      facebook: string;
      github?: string;
    };
  };
  experiences: Experience[];
  projects: Project[];
  education: Education[];
  skills: Skill[];
  hobbies: string[];
}
