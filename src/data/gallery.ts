import { IGalleryImage } from '../types';

export const galleryImages: IGalleryImage[] = [
  {
    id: '1',
    src: '/src/assets/code the web/IMG-20250301-WA0017.jpg',
    alt: 'Code the Web Workshop',
    category: 'Workshops',
    event: 'Code the Web: From Scratch to Launch',
    date: '2024-04-05'
  },
  {
    id: '2',
    src: '/src/assets/code the web/IMG-20250301-WA0019.jpg',
    alt: 'Code the Web Workshop Session',
    category: 'Workshops',
    event: 'Code the Web: From Scratch to Launch',
    date: '2024-04-05'
  }
];

export const getGalleryCategories = (): string[] => {
  return [...new Set(galleryImages.map(image => image.category))];
};