import React, { useState } from 'react';
import { Calendar, Filter, Clock } from 'lucide-react';
import EventCard from '../components/EventCard';
import { getPastEvents, getEventCategories } from '../data/events';

const EventsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  const pastEvents = getPastEvents();
  const categories = ['All', ...getEventCategories()];
  
  const filteredEvents = activeTab === 'past' 
    ? pastEvents.filter(event => selectedCategory === 'All' || event.category === selectedCategory)
    : [];

  return (
    <div className="pt-20">
      <section className="bg-primary-900 text-white py-16">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Events</h1>
          <p className="text-primary-100 max-w-3xl">
            Explore our past events and stay tuned for upcoming workshops, seminars, competitions, and more.
            Register to stay connected with the CSI KRMU community.
          </p>
        </div>
      </section>
      
      <section className="section bg-gray-50">
        <div className="container">
          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-md shadow-sm">
              <button
                onClick={() => setActiveTab('upcoming')}
                className={`px-6 py-3 text-sm font-medium rounded-l-lg ${
                  activeTab === 'upcoming'
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                } flex items-center gap-2`}
              >
                <Calendar size={18} />
                Upcoming Events
              </button>
              <button
                onClick={() => setActiveTab('past')}
                className={`px-6 py-3 text-sm font-medium rounded-r-lg ${
                  activeTab === 'past'
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                } flex items-center gap-2`}
              >
                <Calendar size={18} />
                Past Events
              </button>
            </div>
          </div>
          
          {/* Upcoming Events - Coming Soon */}
          {activeTab === 'upcoming' && (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock size={48} className="text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Coming Soon</h3>
                <p className="text-gray-600 mb-6">
                  We're planning exciting new events including workshops, seminars, hackathons, and competitions. 
                  Stay tuned for announcements!
                </p>
                <div className="space-y-3">
                  <p className="text-sm text-gray-500">
                    Register to receive updates about upcoming events
                  </p>
                  <a 
                    href="/register" 
                    className="btn btn-primary inline-flex items-center gap-2"
                  >
                    Register for Updates
                  </a>
                </div>
              </div>
            </div>
          )}
          
          {/* Past Events */}
          {activeTab === 'past' && (
            <>
              {/* Filters */}
              <div className="flex items-center justify-center mb-8">
                <div className="bg-white p-2 rounded-lg shadow-sm flex items-center">
                  <Filter size={16} className="text-gray-500 mr-2 ml-2" />
                  <span className="text-gray-700 mr-3">Filter by category:</span>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(category => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-3 py-1 text-sm rounded-full transition-colors ${
                          selectedCategory === category
                            ? 'bg-primary-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Event Cards */}
              {filteredEvents.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredEvents.map(event => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium text-gray-700 mb-2">No events found</h3>
                  <p className="text-gray-500">
                    There are no past events in the {selectedCategory !== 'All' ? selectedCategory : ''} category.
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default EventsPage;