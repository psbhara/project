import React from 'react';
import { Calendar, Clock, MapPin, ExternalLink } from 'lucide-react';
import { IEvent } from '../types';
import { Link } from 'react-router-dom';

interface EventCardProps {
  event: IEvent;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="card group">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute top-3 right-3 z-10">
          <span className={`px-3 py-1 text-xs font-medium rounded-full ${
            event.isPast ? 'bg-gray-600 text-white' : 'bg-accent-500 text-white'
          }`}>
            {event.isPast ? 'Past Event' : 'Upcoming'}
          </span>
        </div>
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <div className="mb-2">
          <span className="inline-block px-2.5 py-0.5 bg-primary-100 text-primary-800 text-xs font-medium rounded">
            {event.category}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-500">
            <Calendar size={16} className="mr-2 text-primary-500" />
            <span>{formatDate(event.date)}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Clock size={16} className="mr-2 text-primary-500" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <MapPin size={16} className="mr-2 text-primary-500" />
            <span>{event.location}</span>
          </div>
        </div>
        
        {!event.isPast && event.link && (
          <a 
            href={event.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary w-full flex justify-center items-center gap-2"
          >
            Register Now <ExternalLink size={16} />
          </a>
        )}
        
        {event.isPast && (
          <Link 
            to={`/gallery?event=${encodeURIComponent(event.title)}`}
            className="btn btn-outline w-full"
          >
            View Photos
          </Link>
        )}
      </div>
    </div>
  );
};

export default EventCard;