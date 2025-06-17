import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Users, Image, Award, ChevronRight, Clock } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import EventCard from '../components/EventCard';
import TeamMemberCard from '../components/TeamMemberCard';
import { getPastEvents } from '../data/events';
import { teamMembers } from '../data/team';
import { galleryImages } from '../data/gallery';

const HomePage: React.FC = () => {
  const pastEvents = getPastEvents().slice(0, 3);
  const featuredTeamMembers = teamMembers.slice(2, 6);
  const featuredGalleryImages = galleryImages.slice(0, 8);

  return (
    <div>
      <HeroSection />
      
      {/* About Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="section-title mb-6">About Computer Society of India Student Chapter KRMU</h2>
              <p className="text-gray-700 mb-4">
                The Computer Society of India (CSI) is the first and largest body of computer professionals in India. 
                The K.R. Mangalam University Student Chapter of CSI aims to facilitate research, knowledge sharing, 
                learning, and career enhancement for all categories of IT professionals.
              </p>
              <p className="text-gray-700 mb-6">
                Our mission is to develop skilled professionals in the field of computing who can contribute to the 
                advancement of technology in society. We organize workshops, seminars, competitions, and other 
                technical events to foster learning and innovation.
              </p>
              <Link to="/about" className="btn btn-primary inline-flex items-center gap-2">
                Learn More <ChevronRight size={18} />
              </Link>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Team collaboration" 
                  className="rounded-lg shadow-md h-40 object-cover w-full"
                />
                <img 
                  src="https://images.pexels.com/photos/7102/notes-macbook-study-conference.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Workshop session" 
                  className="rounded-lg shadow-md h-56 object-cover w-full"
                />
              </div>
              <div className="space-y-4 mt-6">
                <img 
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Hackathon" 
                  className="rounded-lg shadow-md h-56 object-cover w-full"
                />
                <img 
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Discussion" 
                  className="rounded-lg shadow-md h-40 object-cover w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="section-title text-center">What We Offer</h2>
          <p className="section-subtitle text-center">
            Join Computer Society of India Student Chapter KRMU to expand your knowledge and build your career in technology
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              {
                icon: <Calendar size={32} className="text-primary-600" />,
                title: 'Technical Events',
                description: 'Workshops, seminars, and conferences on the latest technologies and trends.',
              },
              {
                icon: <Users size={32} className="text-primary-600" />,
                title: 'Networking',
                description: 'Connect with industry professionals, alumni, and like-minded students.',
              },
              {
                icon: <Award size={32} className="text-primary-600" />,
                title: 'Competitions',
                description: 'Participate in hackathons, coding contests, and project exhibitions.',
              },
              {
                icon: <Image size={32} className="text-primary-600" />,
                title: 'Learning Resources',
                description: 'Access to tutorials, learning materials, and hands-on training sessions.',
              },
            ].map((feature, index) => (
              <div 
                key={index} 
                className="card p-6 text-center hover:border-primary-500 hover:border transition-all"
              >
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Coming Soon Events Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="section-title mb-2">Upcoming Events</h2>
              <p className="text-gray-600">
                Exciting events and activities are being planned
              </p>
            </div>
            <Link to="/events" className="btn btn-outline hidden md:flex items-center gap-2">
              View All Events <ArrowRight size={16} />
            </Link>
          </div>
          
          {/* Coming Soon Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card group">
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                <div className="text-center text-white">
                  <Clock size={48} className="mx-auto mb-4 opacity-80" />
                  <h3 className="text-2xl font-bold mb-2">Coming Soon</h3>
                  <p className="text-primary-100">Exciting events are being planned</p>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">New Events in Planning</h3>
                <p className="text-gray-600 mb-4">
                  We're working on organizing amazing workshops, seminars, and competitions. 
                  Stay tuned for announcements!
                </p>
                <Link to="/register" className="btn btn-primary w-full">
                  Register to Stay Updated
                </Link>
              </div>
            </div>
            
            {/* Show some past events as examples */}
            {pastEvents.slice(0, 2).map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/events" className="btn btn-outline inline-flex items-center gap-2">
              View All Events <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="section-title mb-2">Meet Our Team</h2>
              <p className="text-gray-600">
                The dedicated members behind Computer Society of India Student Chapter KRMU
              </p>
            </div>
            <Link to="/team" className="btn btn-outline hidden md:flex items-center gap-2">
              View Full Team <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTeamMembers.map(member => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/team" className="btn btn-outline inline-flex items-center gap-2">
              View Full Team <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Gallery Preview */}
      <section className="section bg-white">
        <div className="container">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="section-title mb-2">Photo Gallery</h2>
              <p className="text-gray-600">
                Glimpses of our events and activities
              </p>
            </div>
            <Link to="/gallery" className="btn btn-outline hidden md:flex items-center gap-2">
              View Full Gallery <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {featuredGalleryImages.map(image => (
              <Link 
                key={image.id} 
                to="/gallery" 
                className="relative overflow-hidden group rounded-lg h-40 md:h-48"
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
                    {image.event}
                  </span>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/gallery" className="btn btn-outline inline-flex items-center gap-2">
              View Full Gallery <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Computer Society of India Student Chapter KRMU?</h2>
          <p className="text-primary-100 text-lg max-w-2xl mx-auto mb-8">
            Become a member of the Computer Society of India Student Chapter KRMU and take your first step towards a successful career in technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register" className="btn bg-white text-primary-700 hover:bg-gray-100">
              Register Now
            </Link>
            <Link to="/about" className="btn border border-white text-white hover:bg-primary-800">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;