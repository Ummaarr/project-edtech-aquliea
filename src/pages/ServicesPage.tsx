import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Server, LineChart, BookOpenCheck, Briefcase, Building2, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import ClientsSlider from '../components/ClientsSlider';

// Define service data
const services = [
  {
    id: 'finance',
    icon: <LineChart size={40} />,
    title: 'Accounts and Finance Offshoring',
    description: 'Precision meets expertise in our financial solutions, from bookkeeping to tax reports. Our offshore talents handle month-end and year-end closures, audits, and more.',
    link: '/services/finance'
  },
  {
    id: 'hr',
    icon: <Users size={40} />,
    title: 'HR & Remote Operation Support',
    description: 'Transformative HR services focusing on qualitative workforce enhancement. We excel in identifying, screening, and onboarding resources tailored to your needs.',
    link: '/services/hr'
  },
  {
    id: 'tax',
    icon: <Calculator size={40} />,
    title: 'Tax Consultancy Dubai',
    description: 'Expert tax advisory and compliance services to optimize your tax strategy and ensure regulatory compliance across multiple jurisdictions.',
    link: '/services/tax'
  },
  {
    id: 'training',
    icon: <Building2 size={40} />,
    title: 'Training and Development',
    description: 'Comprehensive training programs beyond corporate boundaries. Our programs focus on employability and entrepreneurship, preparing individuals for diverse careers.',
    link: '/training'
  },
  {
    id: 'elearning',
    icon: <BookOpenCheck size={40} />,
    title: 'E-learning Management Tool & Process Optimization',
    description: 'Streamlined operations through our E-learning Management services. We transform complex data into animated videos and documentation for global teams.',
    link: '/services/elearning'
  },
  {
    id: 'it',
    icon: <Server size={40} />,
    title: 'IT Consulting Services',
    description: 'Professional IT guidance leveraging technology to propel your business objectives. Our hybrid model ensures a perfect blend of onsite presence and offshore processes.',
    link: '/services/it'
  },
  {
    id: 'automation',
    icon: <Briefcase size={40} />,
    title: 'Robotic Process Automation',
    description: 'Experience the future with our RPA services. We build secure automation foundations to reduce errors and enhance workflow efficiency across departments.',
    link: '/services/automation'
  }
];

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-20 pb-8 bg-black text-white">
        <div className="absolute inset-0 z-[-1] opacity-20">
          <img 
            src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Our Offerings" 
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
            Our Offerings
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
            Comprehensive business solutions tailored to your specific needs
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                link={service.link}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="section-title"
            >
              Our Clients
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Trusted by leading companies across various industries
            </motion.p>
          </div>

          <div className="mb-12">
            <ClientsSlider />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="section-title"
            >
              Why Choose Our Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Discover the advantages of partnering with Aquilae Technologies for your business needs
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-orange-500 mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-100">
                  <span className="text-2xl font-bold">1</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Expertise</h3>
              <p className="text-gray-600">
                Highly qualified professionals with wide experience across multiple business verticals.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-orange-500 mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-100">
                  <span className="text-2xl font-bold">2</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Reach</h3>
              <p className="text-gray-600">
                International presence allows us to serve clients across different markets and time zones.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-orange-500 mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-100">
                  <span className="text-2xl font-bold">3</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Cost-Effective</h3>
              <p className="text-gray-600">
                Providing value through cost-effective solutions without compromising on quality.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-orange-500 mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-100">
                  <span className="text-2xl font-bold">4</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Client-Centric</h3>
              <p className="text-gray-600">
                Focused on understanding and meeting your unique business requirements and goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-6 bg-orange-600 text-white">
        <div className="container-custom">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl font-bold mb-3"
            >
              Ready to Collaborate With Us?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg mb-4 max-w-2xl mx-auto"
            >
              Explore our services or get in touch to discuss your business needs.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center"
            >
             
              <Link to="/contact" className="btn bg-transparent border-2 border-white hover:bg-white hover:text-orange-500">
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;