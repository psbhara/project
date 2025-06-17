import React from 'react';
import { CheckCircle, Target, Users, Award, BookOpen, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary-900 text-white py-16">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About Computer Society of India Student Chapter KRMU</h1>
          <p className="text-primary-100 max-w-3xl">
            Learn about the Computer Society of India and our student chapter at K.R. Mangalam University.
          </p>
        </div>
      </section>

      {/* About CSI */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary-900">Computer Society of India</h2>
              <p className="text-gray-700 mb-4">
                The Computer Society of India (CSI) is the first and largest body of computer professionals in India. 
                Formed in 1965, CSI has been instrumental in guiding the Indian IT industry and helping the IT professionals to keep up with the rapidly changing IT landscape.
              </p>
              <p className="text-gray-700 mb-4">
                CSI has 72 chapters across India, 511 student branches, and more than 100,000 members including students, 
                faculty, researchers, industry professionals, and government officials.
              </p>
              <p className="text-gray-700">
                The society conducts seminars, conferences, workshops, and training programs for its members 
                and plays a significant role in shaping the IT education scenario in the country.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="CSI Members" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-8">
              <div className="flex items-center mb-4">
                <Target size={28} className="text-primary-600 mr-3" />
                <h2 className="text-2xl font-bold">Our Mission</h2>
              </div>
              <p className="text-gray-700 mb-4">
                To facilitate research, knowledge sharing, learning, and career enhancement for all categories of IT professionals, 
                while simultaneously inspiring and nurturing new entrants into the industry and helping them to integrate into the IT community.
              </p>
              <ul className="space-y-3">
                {[
                  'Develop skilled professionals in computing',
                  'Promote research and development in computer science',
                  'Encourage ethical use of technology',
                  'Bridge the gap between academia and industry'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={18} className="text-primary-600 mr-2 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="card p-8">
              <div className="flex items-center mb-4">
                <BookOpen size={28} className="text-primary-600 mr-3" />
                <h2 className="text-2xl font-bold">Our Vision</h2>
              </div>
              <p className="text-gray-700 mb-4">
                To be the premier organization for computing professionals in India, recognized for our commitment to 
                excellence, innovation, and ethical use of technology for the betterment of society.
              </p>
              <ul className="space-y-3">
                {[
                  'Establish a vibrant community of computing professionals',
                  'Be a trusted source of knowledge and resources',
                  'Foster technological innovation and entrepreneurship',
                  'Contribute to digital literacy and inclusion'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={18} className="text-primary-600 mr-2 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CSI KRMU Chapter */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title text-center">Computer Society of India Student Chapter KRMU</h2>
          <p className="section-subtitle text-center">
            Established in 2018, the Computer Society of India Student Chapter KRMU has been actively promoting computer knowledge and skills among students.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={28} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Active Community</h3>
              <p className="text-gray-600">
                Our chapter boasts an active community of over 500 student members who participate in various technical and non-technical events throughout the year.
              </p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={28} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Achievements</h3>
              <p className="text-gray-600">
                Our chapter has received recognition for outstanding performance at the regional and national level competitions organized by CSI.
              </p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar size={28} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Regular Events</h3>
              <p className="text-gray-600">
                We organize regular workshops, seminars, coding competitions, and industry visits to provide practical exposure to our members.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/team" className="btn btn-primary">
              Meet Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section bg-primary-900 text-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Benefits of Computer Society of India Student Chapter KRMU Membership</h2>
          <p className="text-primary-100 max-w-3xl mx-auto text-center mb-12">
            Join Computer Society of India Student Chapter KRMU and enjoy numerous benefits that will help you grow academically and professionally.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Professional Development',
                description: 'Access to workshops, seminars, and training programs to enhance your technical skills and knowledge.'
              },
              {
                title: 'Networking Opportunities',
                description: 'Connect with industry professionals, researchers, and fellow students to expand your professional network.'
              },
              {
                title: 'Research Opportunities',
                description: 'Collaborate on research projects and get your work published in CSI journals and conferences.'
              },
              {
                title: 'Leadership Development',
                description: 'Opportunities to take up leadership roles in event organization and chapter management.'
              },
              {
                title: 'Industry Exposure',
                description: 'Interact with industry experts and gain insights into the latest trends and technologies.'
              },
              {
                title: 'Career Growth',
                description: 'Enhance your resume with CSI membership and participation certificates for better job prospects.'
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-primary-800 p-6 rounded-lg hover:bg-primary-700 transition-colors">
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-primary-100">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Join Computer Society of India Student Chapter KRMU Today</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            Ready to be part of the largest computing society in India? Join Computer Society of India Student Chapter KRMU today and take your first step towards a successful career in technology.
          </p>
          <Link to="/register" className="btn btn-primary">
            Register Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;