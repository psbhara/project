import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import TeamMemberCard from '../components/TeamMemberCard';
import { teamMembers, getTeamCategories } from '../data/team';

const TeamPage: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...getTeamCategories()];

  // Filter team members based on selected category
  const filteredMembers = filter === 'All' 
    ? teamMembers 
    : teamMembers.filter(member => {
        if (filter === 'Faculty Coordinators') return member.role.includes('Faculty');
        if (filter === 'Core Team') return ['President', 'Vice President', 'Secretary', 'Treasurer'].includes(member.role);
        if (filter === 'Technical Team') return member.role.includes('Technical') || member.role.includes('Developer');
        if (filter === 'Event Management') return member.role.includes('Event') || member.role.includes('Marketing');
        if (filter === 'Design Team') return member.role.includes('Design');
        if (filter === 'Content Team') return member.role.includes('Content');
        return false;
      });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary-900 text-white py-16">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h1>
          <p className="text-primary-100 max-w-3xl">
            Meet the dedicated individuals who make Computer Society of India Student Chapter KRMU a success. Our team works tirelessly to organize events, 
            workshops, and activities for the benefit of our members.
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="section bg-gray-50">
        <div className="container">
          {/* Category Filter */}
          <div className="mb-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center">
              <Filter size={20} className="text-primary-600 mr-2" />
              <span className="font-medium">Filter by Role:</span>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    filter === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredMembers.map(member => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>

          {/* Empty State */}
          {filteredMembers.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-700 mb-2">No team members found</h3>
              <p className="text-gray-500">
                There are no team members in the {filter} category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Join the Team */}
      <section className="section bg-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            Interested in joining the Computer Society of India Student Chapter KRMU team? We're always looking for passionate individuals 
            who want to contribute to our community. Contact us to learn about current openings.
          </p>
          <a href="mailto:csikrmuchapter@krmangalam.edu.in" className="btn btn-primary">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;