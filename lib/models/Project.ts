export interface Project {
  _id?: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl: string;
  category: 'fullstack' | 'frontend' | 'backend' | 'mobile';
  featured: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
