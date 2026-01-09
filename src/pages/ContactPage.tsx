import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-20 pb-8 bg-black text-white">
        <div className="absolute inset-0 z-[-1] opacity-20">
          <img 
            src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Contact Us" 
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
            Contact Us
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
            Get in touch with our team to discuss how we can help your business grow
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
              Please fill out the form below, and our team will be happy to get in touch with you as soon as possible.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="What is this regarding?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-orange-700 transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Address</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin size={24} className="text-orange-500 mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-sm font-semibold text-gray-800 mb-1">Registered Office</h3>
                        <p className="text-lg text-gray-700">
                          14, Chakrapani Street, West Mambalam, Chennai – 600 033, India
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <MapPin size={24} className="text-orange-500 mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-sm font-semibold text-gray-800 mb-1">Training Center</h3>
                        <p className="text-lg text-gray-700">
                          No: 26, Kanika Colony 3rd St, Lakshmi Nagar IV Stage, Voltas Colony, Nanganallur, Chennai, Tamil Nadu 600061
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone size={24} className="text-orange-500 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800 mb-1">Phone</h3>
                    <a 
                      href="https://wa.me/917338879700" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-orange-500 hover:text-orange-600 transition-colors duration-300"
                    >
                      +91 73388 79700
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Mail size={24} className="text-orange-500 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800 mb-1">Email</h3>
                    <a 
                      href="mailto:contact@aquilaetech.de?subject=Business Inquiry&body=Hello, I would like to discuss..."
                      className="text-orange-500 hover:text-orange-600 transition-colors duration-300"
                    >
                      contact@aquilaetech.de
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Maps Section */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Our Locations</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Registered Office Map */}
                  <div>
                    <h4 className="text-lg font-medium mb-2 text-gray-800">Registered Office</h4>
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden h-80">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.2979794483654!2d80.22509827468593!3d13.044257662113005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266f997447c37%3A0x235a16f5b6a2c79c!2s14%2C%20Chakrapani%20St%2C%20Ramakrishnapuram%2C%20West%20Mambalam%2C%20Chennai%2C%20Tamil%20Nadu%20600033%2C%20India!5e0!3m2!1sen!2sus!4v1695884162907!5m2!1sen!2sus" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>

                  {/* Training Center Map */}
                  <div>
                    <h4 className="text-lg font-medium mb-2 text-gray-800">Training Center</h4>
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden h-80">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1234567890123!2d80.1890747!3d12.9748031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525de2eb7f6123%3A0x3009525a6823d086!2s26%2C%20Kanika%20Colony%203rd%20St%2C%20Lakshmi%20Nagar%20IV%20Stage%2C%20Voltas%20Colony%2C%20Nanganallur%2C%20Chennai%2C%20Tamil%20Nadu%20600061%2C%20India!5e0!3m2!1sen!2sus!4v1695884162907!5m2!1sen!2sus" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;