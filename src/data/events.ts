import { IEvent } from '../types';

export const events: IEvent[] = [
  {
    id: '1',
    title: 'Tech Fusion',
    description: 'A comprehensive technology event bringing together various domains of computer science and engineering. Explore the latest trends in AI, web development, cybersecurity, and more through interactive sessions and demonstrations.',
    date: '2024-01-15',
    time: '1:30 PM - 2:30 PM',
    location: 'B-517, KRMU',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    isPast: true,
    category: 'Inter University',
  },
  {
    id: '2',
    title: 'Startup Pitch',
    description: 'An entrepreneurship event where students present their innovative startup ideas to a panel of industry experts and investors. Learn about business development, pitching techniques, and startup ecosystem.',
    date: '2024-02-20',
    time: '1:30 PM - 2:30 PM',
    location: 'B-517, KRMU',
    image: 'https://images.pexels.com/photos/7103/writing-notes-idea-conference.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    isPast: true,
    category: 'Competition',
  },
  {
    id: '3',
    title: 'HackShield2K25',
    description: 'A cybersecurity-focused hackathon where participants work on security challenges, vulnerability assessments, and develop solutions to protect digital infrastructure. Test your skills in ethical hacking and security.',
    date: '2024-03-10',
    time: '1:30 PM - 2:30 PM',
    location: 'B-517, KRMU',
    image: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    isPast: true,
    category: 'Hackathon',
  },
  {
    id: '4',
    title: 'Code the Web: From Scratch to Launch',
    description: 'A comprehensive web development workshop covering the complete journey from basic HTML/CSS to deploying a full-stack web application. Learn modern frameworks, best practices, and deployment strategies.',
    date: '2024-04-05',
    time: '1:30 PM - 2:30 PM',
    location: 'B-517, KRMU',
    image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    isPast: true,
    category: 'Workshop',
  },
];

export const getUpcomingEvents = (): IEvent[] => {
  return events.filter(event => !event.isPast);
};

export const getPastEvents = (): IEvent[] => {
  return events.filter(event => event.isPast);
};

export const getEventCategories = (): string[] => {
  return [...new Set(events.map(event => event.category))];
};