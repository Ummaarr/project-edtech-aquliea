import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import TeamMember from '../components/TeamMember';

// Team data
const teamMembers = [
  {
    id: 1,
    name: 'Daan de Graaf',
    role: 'Consulting Director',
    description: 'Daan is a mechanical engineer with more than 25 years of experience of which 5 years in business consulting and web development for Small & Medium Sized Enterprises (SME) in The Netherlands and Germany.',
    image: './images/team/Daan-sir-image.jpg'
  },
  {
    id: 2,
    name: 'Anand Pattabiraman',
    role: 'Managing Director',
    description: 'Anand has more than 18 years of professional experience in handling regions across India, Japan, Europe, Middle East, China & USA. His successful track record in Operations, International Corporate management strategy, Sales & marketing & Business development ensures success.',
    image: './images/team/Anand-sir-image.jpg'
  },
  {
    id: 3,
    name: 'Balajhi Devanathan',
    role: 'Finance Director',
    description: 'A Chartered Accountant with more than 15 years of experience in operations and finance, Balajhi can help grow your vision, and fast. He has nurtured small and micro enterprises to new heights after his MBA from Pace University, New York.',
    image: './images/team/Balajhi-sir-image.jpg'
  },
  {
    id: 4,
    name: 'Lisa Henke',
    role: 'Business Consultant',
    description: 'Lisa Henke is a business consultant for 14 years and supports AQUILAE DIGITAL TECHNOLOGIES GmbH since the European market introduction, helping to establish successful business strategies relating to Marketing and Sales.',
    image: './images/team/Lisa-Henke-Okt.2015-150x150.jpg'
  }
];

const TeamPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 bg-black text-white">
        <div className="absolute inset-0 z-[-1] opacity-20">
          <img 
            src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Our Team" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container-custom">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-center text-orange-500"
          >
            Our Team
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 w-24 bg-orange-500 mx-auto mb-4"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-center max-w-3xl mx-auto"
          >
            Meet the experts behind our success, driving innovation and excellence in everything we do
          </motion.p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={member.id}
                image={member.image}
                name={member.name}
                role={member.role}
                description={member.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Our Culture */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="section-title"
            >
              Our Culture
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              The principles that guide our approach and define who we are as a company
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Our Culture" 
                className="rounded-lg shadow-xl"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-orange-500">Excellence</h3>
                  <p className="text-gray-600">
                    We are committed to delivering exceptional results and maintaining the highest standards in everything we do.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-orange-500">Integrity</h3>
                  <p className="text-gray-600">
                    We operate with honesty, transparency, and ethical principles in all our business dealings.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-orange-500">Innovation</h3>
                  <p className="text-gray-600">
                    We continuously seek creative solutions and embrace new technologies to drive business transformation.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-orange-500">Client Focus</h3>
                  <p className="text-gray-600">
                    We prioritize understanding our clients' needs and delivering solutions that exceed their expectations.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 bg-orange-500 text-white">
        <div className="container-custom">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Join Our Team
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl mb-8 max-w-2xl mx-auto"
            >
              We're always looking for talented individuals to join our growing team. Check out our current openings or send us your resume.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <a href="#" className="btn bg-white text-orange-500 hover:bg-gray-100">
                View Open Positions
              </a>
              <Link to="/contact?section=resume" className="btn bg-transparent border-2 border-white hover:bg-white hover:text-orange-500">
                Submit Your Resume
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;