import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion';
import { Users, Server, LineChart, ArrowRight, ChevronDown, BookOpen, Settings, Calculator } from 'lucide-react';
import { useRef } from 'react';

const services = [
  {
    id: 'finance',
    icon: <LineChart size={40} />,
    title: 'Accounts & Finance Offshoring',
    description: 'Precision meets expertise in our financial solutions, from bookkeeping to tax reports.',
    link: '/services/finance'
  },
  {
    id: 'hr',
    icon: <Users size={40} />,
    title: 'HR & Remote Operation Support',
    description: 'Strategic HR services to optimize your workforce and recruitment processes.',
    link: '/services/hr'
  },
  {
    id: 'tax',
    icon: <Calculator size={40} />,
    title: 'Tax Consultancy Dubai',
    description: 'Expert tax advisory and compliance solutions to optimize your tax strategy.',
    link: '/services/tax'
  }
];

const backgroundImages = [
  "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg",
  "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
  "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
  "https://images.pexels.com/photos/3184468/pexels-photo-3184468.jpeg",
  "https://images.pexels.com/photos/3184603/pexels-photo-3184603.jpeg"
];

const teamMembers = [
  {
    name: 'Daan de Graaf',
    role: 'Consulting Director',
    image: `./images/team/Daan-sir-image.jpg`
  },
  {
    name: 'Anand Pattabiraman',
    role: 'Managing Director',
    image: `./images/team/Anand-sir-image.jpg`
  },
  {
    name: 'Balajhi Devanathan',
    role: 'Finance Director',
    image: `./images/team/Balajhi-sir-image.jpg`
  },
  {
    name: 'Lisa Henke',
    role: 'Business Consultant',
    image: `./images/team/Lisa-Henke-Okt.2015-150x150.jpg`
  }
];

  

const heroTexts = [
  "Route to Success...",
  "Digitize. Transform. Grow.",
  "Boost your business with us.",
  "Training & development"
];

// Floating particles component
const FloatingParticles = () => {
  const particles = Array.from({ length: 15 }, (_, i) => i);
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle}
          className="absolute w-2 h-2 bg-orange-300 rounded-full opacity-20"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * 600,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * 600,
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

// Animated background gradient
const AnimatedBackground = () => {
  return (
    <motion.div
      className="absolute inset-0 opacity-5"
      animate={{
        background: [
          "radial-gradient(circle at 20% 50%, #f97316 0%, transparent 50%)",
          "radial-gradient(circle at 80% 20%, #f97316 0%, transparent 50%)",
          "radial-gradient(circle at 40% 80%, #f97316 0%, transparent 50%)",
          "radial-gradient(circle at 20% 50%, #f97316 0%, transparent 50%)",
        ],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
};

// Animation variants for the container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

// Enhanced animation variants for individual cards
const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.92,
    rotateX: -8
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 26,
      mass: 0.6
    }
  },
  hover: {
    y: -8,
    scale: 1.02,
    rotateY: 2,
    boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.15)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24
    }
  }
};

// Pulsing icon animation
const iconVariants = {
  initial: { scale: 1, rotate: 0 },
  hover: { 
    scale: 1.2, 
    rotate: 10,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  },
  pulse: {
    scale: [1, 1.1, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Text reveal animation
const textRevealVariants = {
  hidden: { 
    opacity: 0,
    y: 20,
    clipPath: "inset(100% 0 0 0)"
  },
  visible: { 
    opacity: 1,
    y: 0,
    clipPath: "inset(0% 0 0 0)",
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Arrow animation with morphing
const arrowVariants = {
  initial: { x: 0, scale: 1 },
  hover: { 
    x: 8, 
    scale: 1.2,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

// Section title animation with typewriter effect
const titleVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    }
  }
};

const letterVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    rotateX: -90
  },
  visible: { 
    opacity: 1, 
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const HomePage = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const offeringsRef = useRef(null);
  const isOfferingsInView = useInView(offeringsRef, { once: true, margin: "-100px" });
  const controls = useAnimation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(true);

    const bgInterval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    const textInterval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length);
    }, 3000);

    // Mouse tracking for parallax effects
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearInterval(bgInterval);
      clearInterval(textInterval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (isOfferingsInView) {
      controls.start("visible");
    }
  }, [isOfferingsInView, controls]);

  const scrollToContent = () => {
    const contentSection = document.getElementById('content');
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const titleText = "Our Offerings";

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center bg-orange-500">
        <div className="absolute inset-0 z-0 transition-opacity duration-1000">
          <img 
            src={backgroundImages[currentBgIndex]} 
            alt="Background" 
            className="w-full h-full object-cover opacity-40" // Increased opacity for more visibility
          />
          {/* Optional: subtle gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-800 via-transparent to-white opacity-0 pointer-events-none"></div>
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-center"
          >
            <motion.div
              key={currentTextIndex}
              className="h-32 flex flex-col items-center justify-center"
            >
              <AnimatePresence mode="wait">
                <motion.h1
                  key={heroTexts[currentTextIndex]}
                  className="text-5xl md:text-6xl font-bold mb-6 text-white"
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -30, scale: 0.95 }}
                  transition={{
                    duration: 1.2,
                    ease: "easeInOut"
                  }}
                >
                  {heroTexts[currentTextIndex]}
                </motion.h1>
              </AnimatePresence>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Link to="/about" className="btn border-2 border-white text-white hover:bg-white hover:text-orange-500 transform hover:scale-105 transition-all">
                Learn More
              </Link>
              <Link to="/contact" className="btn border-2 border-white text-white hover:bg-white hover:text-orange-500 transform hover:scale-105 transition-all">
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <motion.button
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5, repeat: Infinity, repeatType: "reverse" }}
        >
          <ChevronDown size={32} />
        </motion.button>
      </section>

      {/* About Us Section */}
<section className="relative py-52 bg-orange-50" id="content">
  {/* Background image */}
  <div className="absolute inset-0 z-0">
    <img
      src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="About Background"
      className="w-full h-full object-cover opacity-20" // 🔥 increased visibility
    />
  </div>

  <div className="container-custom relative z-10">
    <div className="text-center max-w-3xl mx-auto">
      {/* Animated Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-title mb-6"
      >
        About Us
      </motion.h2>

      {/* Paragraphs for balance */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-black mb-4 text-center"
      >
        We are a group of highly qualified professionals with wide experience in
        multiple business verticals, driven by our passion to deliver high
        standards of results.
      </motion.p>

      {/* ✅ Extra lines to fill empty space */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-black mb-4 text-center"
      >
        Our mission is to empower businesses through innovative solutions and a
        customer-first approach that ensures measurable success.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-black mb-8 text-center"
      >
        With expertise across industries, we help organizations digitize,
        transform, and grow with confidence in a fast-changing world.
      </motion.p>

      {/* CTA Button */}
      <Link
        to="/about"
        className="inline-flex items-center text-orange-500 font-medium hover:text-orange-600"
      >
        Learn More About Us
        <ArrowRight size={16} className="ml-2" />
      </Link>
    </div>
  </div>
</section>


  {/* Our Offerings Section */}
      <section className="relative pt-12 pb-20 overflow-hidden" ref={offeringsRef}>
        <motion.div 
          className="container-custom relative z-10"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <div className="text-center mb-8">
            <motion.h2
              className="section-title"
            >
              Our Offerings
            </motion.h2>
            {/* Removed extra divider to avoid double lines and excess space */}
            <motion.p
              variants={textRevealVariants}
              className="text-black max-w-xl mx-auto mt-4"
            >
              Expert solutions tailored to your business needs
            </motion.p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            variants={containerVariants}
          >
            {services.map((service, index) => (
              <Link key={service.id} to={service.link} className="group block">
                <motion.div
                  variants={cardVariants}
                  whileHover="hover"
                  className="relative bg-white p-8 rounded-2xl border border-orange-100 transition-transform duration-300 ease-out will-change-transform flex flex-col h-full cursor-pointer overflow-hidden transform-gpu"
                  layout
                  style={{
                    transformStyle: "preserve-3d",
                    perspective: "1000px"
                  }}
                >
                  {/* Card glow effect */}
                  <motion.div
                    className="absolute inset-4 bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl pointer-events-none"
                    initial={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  {/* Animated border */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{
                      background: "linear-gradient(45deg, transparent, #f97316, transparent)",
                      padding: "2px",
                    }}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-full h-full bg-white rounded-2xl" />
                  </motion.div>
                  
                  <div className="relative z-10">
                    <motion.div 
                      className="text-orange-500 mb-6 flex justify-center"
                      variants={iconVariants}
                      initial="initial"
                      whileHover="hover"
                      animate="pulse"
                    >
                      {service.icon}
                    </motion.div>
                    
                    <motion.h3 
                      className="text-xl font-semibold mb-4 group-hover:text-orange-600 transition-colors duration-300 text-center"
                      variants={textRevealVariants}
                    >
                      {service.title}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-gray-600 mb-8 flex-grow text-center leading-relaxed"
                      variants={textRevealVariants}
                    >
                      {service.description}
                    </motion.p>
                    
                    <motion.div
                      className="text-center"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span 
                        className="inline-flex items-center text-orange-500 font-semibold group-hover:translate-x-1 transition-all duration-300 text-lg"
                      >
                        Learn More 
                        <motion.div
                          className="ml-2"
                          variants={arrowVariants}
                          initial="initial"
                          whileHover="hover"
                        >
                          <ArrowRight size={20} />
                        </motion.div>
                      </span>
                    </motion.div>
                  </div>
                  
                  {/* Floating elements inside card */}
                </motion.div>
              </Link>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            className="text-center"
          >
            <motion.div
              whileHover={{
                background: "linear-gradient(45deg, #f97316, #ea580c, #f97316)",
                backgroundSize: "200% 200%",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              className="inline-block p-1 rounded-full bg-gradient-to-r from-orange-500 to-orange-600"
            >
              <Link 
                to="/services" 
                className="inline-flex items-center bg-white text-orange-500 font-bold hover:text-orange-600 text-xl group px-8 py-4 rounded-full transition-all duration-300"
              >
                View All Offerings 
                <motion.div
                  className="ml-3"
                  whileHover={{ x: 8, rotate: 45 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowRight size={24} />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
      
      {/* Our Team Section */}
      <section className="py-16 bg-orange-50">
        <div className="container-custom">
          <div className="text-center mb-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="section-title"
            >
              Our Team
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-black max-w-2xl mx-auto mb-8"
            >
              Meet our team driving innovation and excellence
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white rounded-lg overflow-hidden shadow-lg group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-orange-500">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Link 
              to="/team" 
              className="inline-flex items-center text-orange-500 font-medium hover:text-orange-600"
            >
              Learn More About Our Team <ArrowRight size={16} className="ml-2" />
            </Link>
          </motion.div>
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
              className="text-xl md:text-2xl font-bold mb-2"
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base mb-3 max-w-lg mx-auto"
            >
              Contact us today to discuss how we can help your business grow and succeed.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap gap-2 justify-center"
            >
              <Link to="/contact" className="btn border-2 border-white text-white hover:bg-white hover:text-orange-500 transform hover:scale-105 transition-all">
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;