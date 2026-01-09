import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, Award, GraduationCap, TrendingUp, CreditCard, BarChart, MessageSquare, Target, Check, Quote } from 'lucide-react';
import MOUSlider from '../components/MOUSlider';
import TrainingSlider from '../components/TrainingSlider';

// Animation variants similar to "Our Offerings"
const coursesContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const courseCardVariants = {
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
      type: 'spring',
      stiffness: 260,
      damping: 26,
      mass: 0.6
    }
  },
  hover: {
    y: -8,
    scale: 1.02,
    rotateY: 2,
    boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.15)',
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 24
    }
  }
};

const courseIconVariants = {
  initial: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.2,
    rotate: 10,
    transition: { duration: 0.3, ease: 'easeInOut' }
  }
};

// Training Statistics
const stats = [
  { value: '10000+', label: 'Students Trained' },
  { value: '20+', label: 'Partner Colleges' },
  { value: '50+', label: 'Corporate Partners' }
];

// Course data
const courses = [
  {
    id: 'corporate-success',
    title: 'Impetuous to Corporate Success',
    description: 'Develop leadership skills and business acumen necessary for driving corporate success and growth.',
    icon: <Target size={24} />,
    duration: '6 weeks',
    level: 'Intermediate to Advanced',
    featured: false
  },
  {
    id: 'capital-market',
    title: 'Capital Market',
    description: 'Gain insights into capital markets, investment strategies, and market analysis techniques.',
    icon: <BarChart size={24} />,
    duration: '6 weeks',
    level: 'Intermediate',
    featured: false
  },
  {
    id: 'financial-communications',
    title: 'Financial Communications',
    description: 'Learn effective communication strategies for financial reports, presentations, and stakeholder engagement.',
    icon: <MessageSquare size={24} />,
    duration: '4 weeks',
    level: 'All Levels',
    featured: false
  },
  {
    id: 'investment-banking',
    title: 'Investment Banking',
    description: 'Explore the world of investment banking, including mergers and acquisitions, IPOs, and financial advisory.',
    icon: <CreditCard size={24} />,
    duration: '10 weeks',
    level: 'Advanced',
    featured: true
  },
  {
    id: 'stock-trading',
    title: 'Stock, Currency & Commodity Trading',
    description: 'Master the fundamentals of trading in stocks, currencies, and commodities with our comprehensive course.',
    icon: <TrendingUp size={24} />,
    duration: '8 weeks',
    level: 'Beginner to Intermediate',
    featured: true
  },
  {
    id: 'gst',
    title: 'GST (Goods and Services Tax)',
    description: 'Comprehensive training on GST regulations, compliance, filing procedures, and practical applications.',
    icon: <Check size={24} />,
    duration: '5 weeks',
    level: 'All Levels',
    featured: true
  }
];

// Program types
const programTypes = [
  {
    title: 'Online Courses',
    description: 'Flexible, self-paced learning with expert-led video lessons, assignments, and online support.',
    icon: <BookOpen size={32} />
  },
  {
    title: 'In-person Sessions',
    description: 'In-person intensive training sessions at college campuses across India with hands-on activities.',
    icon: <GraduationCap size={32} />
  },
  {
    title: 'Certification Programs',
    description: 'Industry-recognized certifications to validate your skills and enhance your career prospects.',
    icon: <Award size={32} />
  },
  {
    title: 'Workshops',
    description: 'Focused, short-duration sessions on specific topics with practical exercises and case studies.',
    icon: <Clock size={32} />
  }
];

// Trainers data
const featuredTrainer = {
  id: 1,
  name: 'ANAND PATTABIRAMAN',
  title: 'Director & Founder',
  subtitle: 'Aquilae Technologies Private Limited',
  description: 'Anand Pattbiraman is a Chartered Accountant by profession, preferred coach and mentor to Upskill the students. Anand is a Passionate Trainer, Motivating Speaker and Patient Listener. He breaks complex topics into simple examples to enable students understand with ease.',
  image: './images/team/Anand-sir-image.jpg'
};

const otherTrainers = [
  {
    id: 2,
    name: 'Ramadevi Pattabiraman',
    title: 'Bio Graphical Consultant & Trainer',
    subtitle: '',
    description: 'Expert biographical consultant and trainer with extensive experience in personal development and professional growth coaching.',
    image: './images/team/WhatsApp-Image-2025-06-16-at-1.19.33-PM.jpeg'
  },
  {
    id: 3,
    name: 'Meha Shah',
    title: 'Human Resource & Student Coach Specialist',
    subtitle: '',
    description: 'Specialized in human resource management and student coaching with a focus on career development and skill enhancement.',
    image: './images/team/WhatsApp-Image-2025-06-16-at-1.19.33-PM-(1).jpeg'
  },
  {
    id: 5,
    name: 'Jayapradha Ekambaram',
    title: 'Head - Student Counsellor / HR',
    subtitle: '',
    description: 'Expert student counsellor and HR professional dedicated to guiding students through their academic and career journey.',
    image: './images/team/WhatsApp-Image-2025-06-16-at-1.20.07-PM.jpeg'
  },
  {
    id: 6,
    name: 'Balajhi Devanathan',
    title: 'Finance Director',
    subtitle: 'Chartered Accountant',
    description: 'A Chartered Accountant with more than 15 years of experience in operations and finance. He has nurtured small and micro enterprises to new heights after his MBA from Pace University, New York.',
    image: './images/team/Balajhi-sir-image.jpg'
  }
];


// Student feedback data
const studentFeedback = [
  {
    id: 1,
    text: "The sessions was refreshing. It was different and i greatly appreciate the efforts taken to make it interactive. The information was taught in a simple way and the practical examples made sure that it would stay in our heads for a long time. Looking forward for more classes like this",
    author: "Ankitha",
    institution: "Stella Maris"
  },
  {
    id: 2,
    text: "The Stock Trading course completely transformed my understanding of the market. The practical approach and mentorship were invaluable.",
    author: "Rahul Sharma",
    institution: "Stock Trading Course Graduate"
  },
  {
    id: 3,
    text: "I attended the GST workshop during my final year, and it gave me a competitive edge when applying for finance positions after graduation.",
    author: "Priya Patel",
    institution: "GST Workshop Participant"
  },
  {
    id: 4,
    text: "The Financial Communications course helped me develop critical skills that I use daily in my role as a financial analyst.",
    author: "Amit Kumar",
    institution: "Financial Communications Graduate"
  }
];

const TrainingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openWhatsApp = () => {
    window.open('https://wa.me/917338879700', '_blank');
  };

  const downloadCatalog = () => {
    // In a real application, this would download an actual catalog
    alert('Course catalog download will be available soon. Please contact us for more information.');
  };

  return (
    <div className="relative">
      {/* WhatsApp floating button */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
        aria-label="Contact on WhatsApp"
      >
       <img
         src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
         alt="WhatsApp"
        width={24}
        height={24}
       />
      </button>

      {/* Hero Section */}
      <section className="relative pt-20 pb-8 bg-black text-white">
        <div className="absolute inset-0 z-[-1] opacity-20">
          <img 
            src="https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Training & Development" 
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
            Training & Development
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
            Empowering the next generation with practical skills that transcend academic and professional realms
          </motion.p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.h3
                  className="text-3xl md:text-4xl font-bold text-orange-500 mb-2"
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {stat.value}
                </motion.h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section - MOVED TO FRONT */}
      <section className="py-12">
        <div className="container-custom">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="section-title"
            >
              Our Courses
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Explore our comprehensive range of courses designed to enhance your skills and knowledge
            </motion.p>
          </div>

          {/* Featured Courses */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Featured Courses</h3>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              variants={coursesContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              {courses.filter(course => course.featured).map((course) => (
                <Link key={course.id} to={`/course/${course.id}`}>
                  <motion.div
                    className="bg-white rounded-lg overflow-hidden shadow-lg group cursor-pointer"
                    variants={courseCardVariants}
                    whileHover="hover"
                  >
                    <div className="h-3 bg-orange-500"></div>
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-3">
                        <motion.div 
                          className="p-3 bg-orange-100 rounded-lg text-orange-500"
                          variants={courseIconVariants}
                        >
                          {course.icon}
                        </motion.div>
                        <span className="bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full">
                          {course.level}
                        </span>
                      </div>
                      <h4 className="text-xl font-semibold mb-3 group-hover:text-orange-500 transition-colors">
                        {course.title}
                      </h4>
                      <p className="text-gray-600 mb-4">{course.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="flex items-center text-sm text-gray-500">
                          <Clock size={16} className="mr-1" />
                          {course.duration}
                        </span>
                        <span className="text-orange-500 hover:text-orange-600 font-medium text-sm">
                          Learn More
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </div>

          {/* All Courses */}
          <div>
            <h3 className="text-2xl font-bold mb-6">All Courses</h3>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={coursesContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              {courses.map((course) => (
                <Link key={course.id} to={`/course/${course.id}`}>
                  <motion.div
                    className="bg-white p-5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-orange-500 group cursor-pointer"
                    variants={courseCardVariants}
                    whileHover="hover"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <motion.div 
                        className="text-orange-500"
                        variants={courseIconVariants}
                      >
                        {course.icon}
                      </motion.div>
                      <span className="text-sm text-gray-500 flex items-center">
                        <Clock size={16} className="mr-1" />
                        {course.duration}
                      </span>
                    </div>
                    <h4 className="text-xl font-semibold mb-2">{course.title}</h4>
                    <p className="text-gray-600 mb-3">{course.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        {course.level}
                      </span>
                      <span className="text-orange-500 hover:text-orange-600 font-medium">
                        Learn More
                      </span>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Trainers Section - MOVED AFTER COURSES */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
            <div className="text-center mb-12">
              <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="section-title"
            >
              Our Trainers
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Learn from industry experts and experienced professionals who are passionate about education and student success.
            </motion.p>
          </div>

          {/* Featured Trainer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden mb-12 max-w-3xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative">
                <img 
                  src={featuredTrainer.image} 
                  alt={featuredTrainer.name} 
                  className="w-full h-64 lg:h-full object-cover object-top"
                />
              </div>
              <div className="p-6 lg:p-8 flex flex-col justify-center">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">{featuredTrainer.name}</h3>
                <p className="text-orange-500 font-semibold mb-1">{featuredTrainer.title}</p>
                <p className="text-gray-600 text-sm mb-4">{featuredTrainer.subtitle}</p>
                <p className="text-gray-700 text-sm leading-relaxed">{featuredTrainer.description}</p>
              </div>
            </div>
          </motion.div>

          {/* Other Trainers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherTrainers.map((trainer, index) => (
              <motion.div
                key={trainer.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={trainer.image} 
                    alt={trainer.name} 
                    className="w-full h-64 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-xs font-bold text-gray-900 mb-1 leading-tight">{trainer.name}</h3>
                  <p className="text-orange-500 font-semibold text-xs mb-2 leading-tight">{trainer.title}</p>
                  <p className="text-gray-700 text-xs leading-relaxed line-clamp-3">{trainer.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <TrainingSlider />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Nurturing Future Leaders</h2>
              <p className="text-gray-600 mb-6 text-justify">
                At Aquilae, we don't just offer services; we invest in the future. Explore a world of growth with our Training and Development programs, extending beyond corporate boundaries. Our commitment goes beyond business – we're dedicated to nurturing young minds through our partnership with Unmaze.
              </p>
              <p className="text-gray-600 mb-6 text-justify">
                Our curriculum, featuring GST, the 3C program, stock market trading, financial communication, authenticity in leadership, and a commerce lab, is designed to mold well-rounded individuals. We offer bifold training focusing on employability and entrepreneurship, preparing graduates for both corporate and entrepreneurial journeys.
              </p>
              <p className="text-gray-600 text-justify">
                "Breaking the complex into simple and presenting the ordinary, extraordinary" defines us. We specialize in simplifying complex topics, making them accessible to students from all disciplines. Our seminars and workshops bridge the gap between formal education and practical corporate demands.
              </p>
            </motion.div>
          </div>

          {/* Program Types */}
          <div>
            <h2 className="text-3xl font-bold mb-12 text-center">
              Our Program Types
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {programTypes.map((program, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg text-center"
                >
                  <div className="text-orange-500 mb-4 flex justify-center">
                    {program.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{program.title}</h3>
                  <p className="text-gray-600">{program.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Student Feedback Section */}
      <section className="py-2 bg-cyan-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-3">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl font-bold mb-3 text-orange-500"
            >
              Student Feedback
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-1 w-16 bg-orange-500 mx-auto mb-4"
            ></motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-gray-300 max-w-xl mx-auto text-sm"
            >
              Hear what our students have to say about their learning experience with us
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {studentFeedback.map((feedback, index) => (
              <motion.div
                key={feedback.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-3 rounded-lg relative text-gray-800"
              >
                <div className="text-orange-500 mb-2">
                  <Quote size={16} />
                </div>
                <p className="italic text-gray-700 mb-2 text-xs leading-relaxed text-justify">
                  "{feedback.text}"
                </p>
                <div className="border-t border-gray-200 pt-2">
                  <h4 className="font-semibold text-gray-900 text-xs">{feedback.author}</h4>
                  <p className="text-xs text-orange-500">{feedback.institution}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
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
              Our Academic Partnerships
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              We collaborate with leading educational institutions to bridge the gap between academia and industry
            </motion.p>
          </div>

          <div className="mb-12">
            <MOUSlider />
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
              Ready to Enhance Your Skills?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg mb-4 max-w-2xl mx-auto"
            >
              Browse our course catalog or contact us to discuss custom training solutions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <button 
                onClick={downloadCatalog}
                className="btn bg-transparent border-2 border-white hover:bg-white hover:text-orange-500"
              >
                Download Course Catalog
              </button>
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

export default TrainingPage;