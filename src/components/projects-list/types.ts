import { Technology } from '../technologies/technologies';

export type Project = {
  title: string;
  subtitle: string;
  year: number;
  description: string;
  technologies: Technology[];
  website: string;
  image: {
    src: string;
    alt: string;
  };
};
