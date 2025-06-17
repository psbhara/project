// Event types
export interface IEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
  isPast: boolean;
  category: string;
  link?: string;
}

// Team member types
export interface ITeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
  email?: string;
}

// Gallery image types
export interface IGalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  event: string;
  date: string;
}