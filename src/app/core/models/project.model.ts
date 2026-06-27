export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string[];
  image: string;
  coverImage: string;
  technologies: string[];
  category: 'work' | 'personal';
  year: string;
  location: string;
  range: string;
  demoUrl?: string;
  codeUrl?: string;
  featured: boolean;
}
