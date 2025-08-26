import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeftCircle, CheckCircle } from 'lucide-react';

// Service data
const servicesData = {
  finance: {
    title: 'Accounts and Finance Offshoring',
    subtitle: 'Precision meets expertise in our financial solutions',
    description: 'Welcome to our Accounts and Finance Offshore services, where precision meets expertise. Our dedicated team, strategically sourced from India, excels in delivering a spectrum of financial solutions. From meticulous bookkeeping and seamless payroll processing to expert tax reports, we ensure your financial statements reflect not just numbers but the true health of your business.',
    content: [
      'Our offshore talents go beyond the routine, handling month-end and year-end closures with finesse. Whether it\'s facing professional audits, internal audits, fed audits, or other statutory audits, our team is equipped to navigate them all. We recognize that the world of finance is dynamic, and that\'s why we embrace an Onsite-Offshore hybrid model, ensuring flexibility and agility in our services.',
      'What sets us apart is our commitment to understanding your unique needs. Our tailored solutions provide a 360-degree analysis, empowering you to make informed decisions that drive growth. As you expand, we scale our resources seamlessly, keeping disruptions at bay. Trust us for excellence, commitment, and a steadfast partnership in your financial journey.'
    ],
    features: [
      'Bookkeeping and financial statements',
      'Payroll processing',
      'Tax reports and compliance',
      'Month-end and year-end closures',
      'Audit preparation and support',
      'Tailored financial solutions'
    ],
    image: 'https://images.pexels.com/photos/7681340/pexels-photo-7681340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  hr: {
    title: 'HR & Remote Operation Support',
    subtitle: 'Strategic recruitment and workforce management',
    description: 'Embark on a transformative journey with our HR and remote Operation Support. We redefine recruitment by bringing a qualitative edge to your workforce. Operating predominantly in the United States, we excel in identifying, screening, and onboarding resources tailored to your needs.',
    content: [
      'Engagement is at our core. Periodic interactions and proactive talent sourcing ensure a dynamic pool of qualified individuals ready to fuel your growth. Leveraging social media platforms like LinkedIn, Facebook, Instagram, and Twitter, we keep our resources informed, motivated, and connected.',
      'Our commitment extends beyond conventional hiring. With a traffic signal approach to talent management, we minimize your effort in creating new resources. Let us handle the groundwork, allowing you to focus on strategic initiatives. Join hands with us for a seamless, efficient, and cost-effective hiring process.'
    ],
    features: [
      'Qualitative workforce enhancement',
      'Talent identification and screening',
      'Resource onboarding and management',
      'Proactive talent sourcing',
      'Social media engagement strategies',
      'Traffic signal approach to talent management'
    ],
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  tax: {
    title: 'Tax Consultancy Dubai',
    subtitle: 'Expert tax advisory and compliance solutions',
    description: 'Navigate the complex world of taxation with our comprehensive Tax Consultancy services in Dubai. Our team of certified tax professionals provides strategic tax planning, compliance management, and advisory services to optimize your tax position while ensuring full regulatory compliance across multiple jurisdictions.',
    content: [
      'Our tax experts bring deep knowledge of UAE tax regulations, VAT compliance, and international tax laws, helping businesses and individuals minimize tax liabilities through strategic planning and efficient structuring. We stay current with ever-changing tax laws and regulations to provide you with the most up-to-date advice and solutions.',
      'From routine tax preparation to complex tax planning strategies, we offer end-to-end tax services. Our proactive approach includes regular tax health checks, compliance monitoring, and strategic recommendations to help you make informed decisions that positively impact your bottom line. We also provide representation services for tax audits and disputes, ensuring your interests are protected throughout the process.'
    ],
    features: [
      'Strategic tax planning and optimization',
      'UAE VAT compliance and registration',
      'Corporate and individual tax preparation',
      'Multi-jurisdictional tax compliance',
      'Tax audit representation and support',
      'International tax advisory services'
    ],
    image: 'https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  elearning: {
    title: 'E-learning Management Tool & Process Optimization',
    subtitle: 'Transforming complex data into accessible learning tools',
    description: 'Enter a world of streamlined operations with our E-learning Management Tool & Process Optimization services. We don\'t just manage data; we transform it into a powerful tool for efficiency. Dive into the future with us as we simplify Standard Operating Procedures (SOPs) through animated videos and precise documentation.',
    content: [
      'Understanding your administration data and SOPs is our forte. We present complex information in animated videos, making understanding a breeze. Videos, accessible from any location, bridge language barriers and provide a universal reference for your global team.',
      'Our process optimization doesn\'t stop at videos. We offer a structured approach, creating clear documentation with flowcharts, diagrams, or process maps. This not only saves time and effort in training new employees but also paves the way for scalability and growth. Join us on a journey of efficiency and excellence.'
    ],
    features: [
      'SOP simplification through animated videos',
      'Comprehensive documentation creation',
      'Global accessibility of training materials',
      'Language barrier elimination',
      'Flowcharts, diagrams, and process maps',
      'Scalable training solutions'
    ],
    image: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  automation: {
    title: 'Robotic Process Automation',
    subtitle: 'Building the foundation for secure and scalable automation',
    description: 'Experience the future of automation with our Robotic Process Automation (RPA) services. We build the foundation for secure and scalable automation, reducing errors and enhancing workflow efficiency. RPA bots, your intelligent business solution, are deployed to automate tasks in finance, HR, IT, and beyond.',
    content: [
      'Our bots excel in tasks like data extraction, software deployment, and server management. They\'re not just automating tasks; they\'re revolutionizing how your business operates. Imagine streamlined data entry, flawless invoice processing, and efficient customer service – all thanks to our RPA expertise.',
      'We value your time and costs. Our team of experts ensures timely and effective RPA deployment tailored to your needs. We break down complexities, presenting ordinary tasks as extraordinary solutions. Partner with us to witness a new era of efficiency and innovation.'
    ],
    features: [
      'Error reduction and workflow enhancement',
      'Intelligent automation across departments',
      'Data extraction and processing',
      'Software deployment automation',
      'Server management optimization',
      'Cost-effective operational improvements'
    ],
    image: 'https://images.pexels.com/photos/8386431/pexels-photo-8386431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  it: {
    title: 'IT Consulting Services',
    subtitle: 'Expert guidance and innovative technology solutions',
    description: 'Welcome to a realm where IT meets expertise – our IT Consulting Services. We specialize in providing professional guidance, leveraging information technology to propel your business objectives. Our Onsite-Offshore hybrid model ensures a perfect blend of hands-on presence and offshore processes.',
    content: [
      'Our Unique Selling Proposition lies in our ability to decipher your challenges and deliver precise advice. The backbone of our offshore talent pool comprises seasoned experts with a decade-long stint in multinational corporations. Expect nothing short of valuable insights and effective technology solutions.',
      'From selecting and implementing cutting-edge technologies to providing onsite resources aligned with your geographical location, we stand by you. Our technical evaluations ensure the recruitment of skilled professionals, adept at solving complex problems. Partner with us for a tech-forward journey towards achieving your business goals.'
    ],
    features: [
      'Hybrid onsite-offshore model',
      'Professional guidance for IT challenges',
      'Technology selection and implementation',
      'Geographical alignment of resources',
      'Technical evaluations for recruitment',
      'Multinational corporation experienced experts'
    ],
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
};

const ServiceDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [service, setService] = useState<any>(null);

  // Helper functions for navigation
  const getPreviousService = (currentId: string) => {
    const serviceOrder = ['finance', 'hr', 'tax', 'elearning', 'automation', 'it'];
    const currentIndex = serviceOrder.indexOf(currentId);
    const previousIndex = currentIndex === 0 ? serviceOrder.length - 1 : currentIndex - 1;
    return serviceOrder[previousIndex];
  };

  const getNextService = (currentId: string) => {
    const serviceOrder = ['finance', 'hr', 'tax', 'elearning', 'automation', 'it'];
    const currentIndex = serviceOrder.indexOf(currentId);
    const nextIndex = currentIndex === serviceOrder.length - 1 ? 0 : currentIndex + 1;
    return serviceOrder[nextIndex];
  };
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    console.log('Service ID from URL:', id); // Debug log
    console.log('Available services:', Object.keys(servicesData)); // Debug log
    
    if (id && id in servicesData) {
      setService(servicesData[id as keyof typeof servicesData]);
      console.log('Service found:', servicesData[id as keyof typeof servicesData]); // Debug log
    } else {
      console.log('Service not found for ID:', id); // Debug log
    }
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Service Not Found</h2>
          <p className="text-gray-600 mb-4">Service ID: {id}</p>
          <p className="text-gray-600 mb-6">Available services: {Object.keys(servicesData).join(', ')}</p>
          <Link to="/services" className="btn btn-primary">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-20 pb-8 bg-black text-white">
        <div className="absolute inset-0 z-[-1] opacity-20">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container-custom">
          <Link to="/services" className="inline-flex items-center text-white hover:text-orange-300 mb-8">
            <ArrowLeftCircle size={20} className="mr-2" />
            Back to Offerings
          </Link>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-orange-500"
          >
            {service.title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 w-24 bg-orange-500 mb-4"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg max-w-3xl"
          >
            {service.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-gray-700 mb-6 text-lg">{service.description}</p>
                
                {service.content.map((paragraph: string, index: number) => (
                  <p key={index} className="text-gray-700 mb-6 text-lg">
                    {paragraph}
                  </p>
                ))}
              </motion.div>
            </div>
            
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gray-50 p-6 rounded-lg sticky top-24"
              >
                <h3 className="text-xl font-bold mb-5">Key Features</h3>
                <ul className="space-y-3">
                  {service.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle size={18} className="text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-7">
                  {/* Service Navigation */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    {/* Previous Service - Only show if not the first service */}
                    {id !== 'finance' && (
                      <Link 
                        to={`/services/${getPreviousService(id || 'finance')}`}
                        className="flex items-center text-sm text-gray-600 hover:text-orange-500 transition-colors duration-300"
                      >
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        <span>Previous</span>
                      </Link>
                    )}

                    {/* Spacer for first service to maintain layout */}
                    {id === 'finance' && <div></div>}

                    {/* Next Service - Only show if not the last service */}
                    {id !== 'it' && (
                      <Link 
                        to={`/services/${getNextService(id || 'finance')}`}
                        className="flex items-center text-sm text-gray-600 hover:text-orange-500 transition-colors duration-300"
                      >
                        <span>Next</span>
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    )}

                    {/* Spacer for last service to maintain layout */}
                    {id === 'it' && <div></div>}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-6 bg-orange-500 text-white">
        <div className="container-custom">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl font-bold mb-3"
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg mb-4 max-w-2xl mx-auto"
            >
              Contact us today to discuss how we can help with your {service.title.toLowerCase()} needs.
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

export default ServiceDetailPage;