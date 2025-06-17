import React from 'react';
import { ArrowRight } from 'lucide-react';

const RegisterPage: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary-900 text-white py-16">
        <div className="container">
          <div className="flex items-center gap-4 mb-6">
            {/* CSI Logo */}
            <img 
              src="/src/assets/csi_logo (1) copy.png" 
              alt="CSI Logo" 
              className="w-16 h-16 object-contain bg-white rounded-lg p-2"
            />
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Join Computer Society of India Student Chapter KRMU</h1>
              <p className="text-primary-100">K.R. Mangalam University</p>
            </div>
          </div>
          <p className="text-primary-100 max-w-3xl">
            Fill out the registration form to become a member of the Computer Society of India Student Chapter KRMU.
            Membership gives you access to various events, workshops, and resources.
          </p>
        </div>
      </section>

      {/* Registration Section */}
      <section className="section bg-gray-50">
        <div className="container max-w-4xl">
          <div className="card p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Registration Form</h2>
            
            <div className="mb-8">
              <p className="text-gray-700 mb-4 text-center">
                Please fill out the form below to register for Computer Society of India Student Chapter KRMU membership.
                Once submitted, we'll review your application and get back to you soon.
              </p>
              <div className="h-px bg-gray-200 my-6"></div>
            </div>

            {/* Google Form Embed */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-primary-800">Computer Society of India Student Chapter KRMU Registration</h3>
                <p className="text-gray-600 mt-2">
                  You'll be redirected to our Google Form to complete your registration.
                </p>
              </div>
              
              <div className="flex justify-center">
                <a 
                  href="https://forms.gle/KeQAtsNhcc6FLAsbA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary flex items-center gap-2"
                >
                  Open Registration Form <ArrowRight size={18} />
                </a>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-3">Membership Benefits</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Access to all Computer Society of India Student Chapter KRMU events and workshops</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Networking opportunities with industry professionals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Participation in technical competitions and hackathons</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Leadership and volunteering opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Certificate of membership and participation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section bg-white">
        <div className="container max-w-4xl">
          <h2 className="section-title text-center">Frequently Asked Questions</h2>
          <div className="mt-8 space-y-6">
            {[
              {
                question: 'Who can join Computer Society of India Student Chapter KRMU?',
                answer: 'Any student enrolled in K.R. Mangalam University can join Computer Society of India Student Chapter KRMU. We welcome students from all disciplines, not just computer science.'
              },
              {
                question: 'How long does the membership last?',
                answer: 'The membership is valid for one academic year, from July to June. You can renew your membership at the end of each academic year.'
              },
              {
                question: 'What documents do I need for registration?',
                answer: 'You need your student ID and a passport-sized photograph for registration.'
              },
              {
                question: 'What activities can I participate in?',
                answer: 'As a member, you can participate in workshops, seminars, hackathons, coding competitions, technical talks, and networking events organized by Computer Society of India Student Chapter KRMU.'
              },
              {
                question: 'How do I stay updated about events?',
                answer: 'Once you become a member, you will receive regular updates about upcoming events through email and our official communication channels.'
              }
            ].map((faq, index) => (
              <div key={index} className="card p-6">
                <h3 className="text-lg font-semibold text-primary-800 mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section bg-gray-50">
        <div className="container text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            If you have any questions about the registration process or membership benefits, 
            please don't hesitate to contact us.
          </p>
          <div className="flex justify-center gap-4">
            <a href="mailto:csikrmuchapter@krmangalam.edu.in" className="btn btn-primary">
              Email Us
            </a>
            <a href="tel:+911234567890" className="btn btn-outline">
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegisterPage;