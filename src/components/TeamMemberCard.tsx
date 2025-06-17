import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';
import { ITeamMember } from '../types';

interface TeamMemberCardProps {
  member: ITeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div className="card relative group overflow-hidden">
      <div className="relative h-64 overflow-hidden bg-gray-200">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Social Links Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full flex justify-center space-x-3">
            {member.linkedin && (
              <a 
                href={member.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/90 p-2 rounded-full text-primary-600 hover:bg-primary-600 hover:text-white transition-colors"
                aria-label={`${member.name}'s LinkedIn`}
              >
                <Linkedin size={18} />
              </a>
            )}
            
            {member.github && (
              <a 
                href={member.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/90 p-2 rounded-full text-primary-600 hover:bg-primary-600 hover:text-white transition-colors"
                aria-label={`${member.name}'s GitHub`}
              >
                <Github size={18} />
              </a>
            )}
            
            {member.email && (
              <a 
                href={`mailto:${member.email}`}
                className="bg-white/90 p-2 rounded-full text-primary-600 hover:bg-primary-600 hover:text-white transition-colors"
                aria-label={`Email ${member.name}`}
              >
                <Mail size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold">{member.name}</h3>
        <p className="text-primary-600">{member.role}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;