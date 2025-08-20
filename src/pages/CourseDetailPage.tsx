import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeftCircle, Download, UserPlus, Clock, Users, Award, CheckCircle, BookOpen, Target } from 'lucide-react';

// Course data with detailed information
const coursesData = {
  'stock-trading': {
    title: 'Stock, Currency & Commodity Trading',
    subtitle: 'Master the fundamentals of trading in financial markets',
    duration: '8 weeks',
    level: 'Beginner to Intermediate',
    students: '2000+',
    rating: '4.8',
    description: `Welcome to our comprehensive Stock, Currency & Commodity Trading course, where we transform beginners into confident traders. This course is designed to provide you with a solid foundation in trading across multiple financial markets.

Our expert instructors will guide you through the complexities of market analysis, risk management, and trading strategies. You'll learn to read charts, understand market trends, and make informed trading decisions that can lead to profitable outcomes.

The course combines theoretical knowledge with practical application, ensuring you gain hands-on experience in real market conditions. We cover everything from basic concepts to advanced trading techniques, making this course suitable for both beginners and those looking to enhance their existing knowledge.

By the end of this course, you'll have the confidence and skills needed to navigate the financial markets successfully. Our comprehensive approach ensures you understand not just how to trade, but why certain strategies work and how to adapt them to changing market conditions.`,
    curriculum: [
      'Introduction to Financial Markets',
      'Understanding Stock Markets',
      'Currency Trading Fundamentals',
      'Commodity Market Analysis',
      'Technical Analysis Techniques',
      'Risk Management Strategies',
      'Trading Psychology',
      'Portfolio Management',
      'Market Research Methods',
      'Practical Trading Sessions'
    ],
    features: [
      'Live trading sessions with experts',
      'Real-time market analysis',
      'Personal trading mentor',
      'Access to trading platforms',
      'Weekly market updates',
      'Certificate of completion'
    ],
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  'capital-market': {
    title: 'Capital Market',
    subtitle: 'Gain insights into capital markets and investment strategies',
    duration: '6 weeks',
    level: 'Intermediate',
    students: '1500+',
    rating: '4.7',
    description: `Dive deep into the world of capital markets with our comprehensive course designed for aspiring finance professionals and investors. This course provides a thorough understanding of how capital markets function and their role in the global economy.

You'll explore various financial instruments, market structures, and investment strategies that drive capital market operations. Our curriculum covers both primary and secondary markets, helping you understand how companies raise capital and how investors can participate in these opportunities.

The course emphasizes practical applications of theoretical concepts, with case studies from real market scenarios. You'll learn to analyze market trends, evaluate investment opportunities, and understand the regulatory framework that governs capital markets.

Our expert faculty brings years of industry experience, providing insights that go beyond textbook knowledge. You'll gain the analytical skills needed to make informed investment decisions and understand the broader economic factors that influence market movements.`,
    curriculum: [
      'Capital Market Structure',
      'Primary vs Secondary Markets',
      'Equity Markets Analysis',
      'Debt Markets Overview',
      'Investment Banking Basics',
      'Market Regulation & Compliance',
      'Portfolio Theory',
      'Risk Assessment Techniques',
      'Market Efficiency Concepts',
      'Case Study Analysis'
    ],
    features: [
      'Industry expert sessions',
      'Market simulation exercises',
      'Investment analysis tools',
      'Regulatory framework training',
      'Networking opportunities',
      'Professional certification'
    ],
    image: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  'financial-communications': {
    title: 'Financial Communications',
    subtitle: 'Learn effective communication strategies for financial professionals',
    duration: '4 weeks',
    level: 'All Levels',
    students: '1200+',
    rating: '4.9',
    description: `Master the art of financial communication with our specialized course designed for finance professionals who need to convey complex information clearly and effectively. This course focuses on developing your ability to communicate financial concepts to diverse audiences.

You'll learn to create compelling financial reports, deliver impactful presentations, and engage stakeholders through various communication channels. The course covers both written and verbal communication skills essential for success in the financial industry.

Our curriculum includes practical exercises in financial writing, presentation techniques, and stakeholder engagement strategies. You'll practice creating investor presentations, writing financial summaries, and conducting financial briefings.

The course also addresses the psychological aspects of financial communication, helping you understand how to build trust and credibility with your audience. You'll learn to adapt your communication style to different stakeholders, from technical teams to executive leadership.`,
    curriculum: [
      'Financial Writing Fundamentals',
      'Presentation Design & Delivery',
      'Stakeholder Communication',
      'Financial Reporting Standards',
      'Visual Data Representation',
      'Crisis Communication',
      'Digital Communication Tools',
      'Cross-cultural Communication',
      'Regulatory Communication',
      'Communication Ethics'
    ],
    features: [
      'Presentation skills workshop',
      'Writing portfolio development',
      'Peer review sessions',
      'Industry case studies',
      'Communication tools training',
      'Professional feedback'
    ],
    image: 'https://images.pexels.com/photos/6801642/pexels-photo-6801642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  'investment-banking': {
    title: 'Investment Banking',
    subtitle: 'Explore the world of investment banking and financial advisory',
    duration: '10 weeks',
    level: 'Advanced',
    students: '800+',
    rating: '4.8',
    description: `Enter the prestigious world of investment banking with our comprehensive course designed for ambitious finance professionals. This advanced program covers all aspects of investment banking, from mergers and acquisitions to capital raising and financial advisory services.

You'll gain deep insights into the investment banking industry, learning about deal structuring, valuation techniques, and client relationship management. The course provides hands-on experience with financial modeling, due diligence processes, and transaction execution.

Our curriculum is designed by industry veterans who bring real-world experience to the classroom. You'll work on actual case studies and participate in simulated deal scenarios that mirror the challenges faced by investment banking professionals.

The course also covers the regulatory environment, ethical considerations, and career development strategies specific to investment banking. You'll build a strong foundation for pursuing opportunities in this competitive and rewarding field.`,
    curriculum: [
      'Investment Banking Overview',
      'Mergers & Acquisitions',
      'Capital Markets & IPOs',
      'Financial Modeling',
      'Valuation Techniques',
      'Due Diligence Process',
      'Deal Structuring',
      'Client Relationship Management',
      'Regulatory Framework',
      'Career Development'
    ],
    features: [
      'Real deal case studies',
      'Financial modeling workshops',
      'Industry networking events',
      'Mentorship program',
      'Interview preparation',
      'Industry certification'
    ],
    image: 'https://images.pexels.com/photos/6801647/pexels-photo-6801647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  'corporate-success': {
    title: 'Impetuous to Corporate Success',
    subtitle: 'Develop leadership skills and business acumen for corporate excellence',
    duration: '6 weeks',
    level: 'Intermediate to Advanced',
    students: '1800+',
    rating: '4.7',
    description: `Accelerate your journey to corporate success with our comprehensive leadership and business development program. This course is designed for professionals who aspire to take on leadership roles and drive organizational growth.

You'll develop essential leadership skills, strategic thinking capabilities, and business acumen necessary for corporate success. The course covers various aspects of corporate leadership, from team management to strategic planning and execution.

Our curriculum combines leadership theory with practical application, providing you with tools and techniques that you can immediately implement in your professional environment. You'll learn to navigate corporate politics, build effective teams, and drive organizational change.

The course also focuses on personal development, helping you identify your leadership style and develop the confidence needed to succeed in corporate environments. You'll gain insights into corporate culture, stakeholder management, and performance optimization.`,
    curriculum: [
      'Leadership Fundamentals',
      'Strategic Thinking',
      'Team Building & Management',
      'Corporate Communication',
      'Change Management',
      'Performance Optimization',
      'Stakeholder Management',
      'Corporate Ethics',
      'Innovation & Growth',
      'Personal Branding'
    ],
    features: [
      'Leadership assessment tools',
      'Mentorship opportunities',
      'Networking sessions',
      'Case study analysis',
      'Personal development plan',
      'Leadership certification'
    ],
    image: 'https://images.pexels.com/photos/6801645/pexels-photo-6801645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  'gst': {
    title: 'GST (Goods and Services Tax)',
    subtitle: 'Comprehensive training on GST regulations and compliance',
    duration: '5 weeks',
    level: 'All Levels',
    students: '3000+',
    rating: '4.9',
    description: `Master the complexities of GST with our comprehensive training program designed for professionals, business owners, and students. This course provides thorough coverage of GST regulations, compliance requirements, and practical applications.

You'll learn about GST structure, registration processes, tax calculations, and filing procedures. The course covers various aspects of GST implementation, from basic concepts to advanced compliance strategies.

Our curriculum includes hands-on practice with GST software, real-world case studies, and practical exercises that simulate actual business scenarios. You'll gain confidence in handling GST-related challenges and ensuring compliance with regulatory requirements.

The course is regularly updated to reflect the latest changes in GST regulations and procedures. Our expert instructors bring practical experience from working with businesses across various industries, providing insights that go beyond theoretical knowledge.`,
    curriculum: [
      'GST Fundamentals',
      'Registration Process',
      'Tax Calculation Methods',
      'Input Tax Credit',
      'GST Returns Filing',
      'Compliance Requirements',
      'GST Software Training',
      'Industry-specific Applications',
      'Audit & Assessment',
      'Recent Updates & Changes'
    ],
    features: [
      'Hands-on software training',
      'Real business case studies',
      'Compliance checklists',
      'Regular updates on changes',
      'Expert consultation sessions',
      'Compliance certification'
    ],
    image: 'https://images.pexels.com/photos/6801649/pexels-photo-6801649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
};

const CourseDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [course, setCourse] = useState<any>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (id && id in coursesData) {
      setCourse(coursesData[id as keyof typeof coursesData]);
    }
  }, [id]);

  const handleDownloadBrochure = () => {
    // In a real application, this would download an actual brochure
    alert('Brochure download will be available soon. Please contact us for more information.');
  };

  const handleRegisterNow = () => {
    // In a real application, this would open a registration form or redirect to registration page
    window.open('https://wa.me/917338879700?text=I%20am%20interested%20in%20registering%20for%20the%20' + encodeURIComponent(course?.title || 'course'), '_blank');
  };

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Course Not Found</h2>
          <Link to="/training" className="btn btn-primary">
            Back to Training
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 bg-black text-white">
        <div className="absolute inset-0 z-[-1] opacity-30">
          <img 
            src={course.image} 
            alt={course.title} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container-custom">
          <Link to="/training" className="inline-flex items-center text-white hover:text-orange-300 mb-8">
            <ArrowLeftCircle size={20} className="mr-2" />
            Back to Training
          </Link>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-orange-500"
          >
            {course.title}
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
            {course.subtitle}
          </motion.p>
          
          {/* Course Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-6 mt-8"
          >
            <div className="flex items-center text-sm">
              <Clock size={16} className="mr-2 text-orange-500" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center text-sm">
              <Users size={16} className="mr-2 text-orange-500" />
              <span>{course.students} students</span>
            </div>
            <div className="flex items-center text-sm">
              <Award size={16} className="mr-2 text-orange-500" />
              <span>{course.rating}/5 rating</span>
            </div>
            <div className="flex items-center text-sm">
              <Target size={16} className="mr-2 text-orange-500" />
              <span>{course.level}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Side - Course Description */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-6">Course Overview</h2>
                <div className="prose prose-lg max-w-none">
                  {course.description.split('\n\n').map((paragraph: string, index: number) => (
                    <p key={index} className="text-gray-700 mb-6">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Curriculum */}
                <div className="mt-12">
                  <h3 className="text-2xl font-bold mb-6">Course Curriculum</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {course.curriculum.map((item: string, index: number) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle size={20} className="text-orange-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mt-12">
                  <h3 className="text-2xl font-bold mb-6">What You'll Get</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {course.features.map((feature: string, index: number) => (
                      <div key={index} className="flex items-start">
                        <BookOpen size={20} className="text-orange-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Right Side - Action Buttons */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="sticky top-24"
              >
                {/* Course Image */}
                <div className="mb-8">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>

                {/* Action Buttons */}
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-xl font-bold mb-6 text-center">Ready to Get Started?</h3>
                  
                  <div className="space-y-4">
                    {/* Download Brochure Button */}
                    <button
                      onClick={handleDownloadBrochure}
                      className="w-full btn btn-outline flex items-center justify-center"
                    >
                      <Download size={20} className="mr-2" />
                      Download Brochure
                    </button>
                    
                    {/* Register Now Button */}
                    <button
                      onClick={handleRegisterNow}
                      className="w-full btn btn-primary flex items-center justify-center"
                    >
                      <UserPlus size={20} className="mr-2" />
                      Register Now
                    </button>
                  </div>

                  {/* Course Info */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-semibold">{course.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Level:</span>
                        <span className="font-semibold">{course.level}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Students:</span>
                        <span className="font-semibold">{course.students}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Rating:</span>
                        <span className="font-semibold">{course.rating}/5</span>
                      </div>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                    <p className="text-sm text-gray-600 text-center">
                      Have questions? Contact us at{' '}
                      <a href="tel:+917338879700" className="text-orange-600 font-semibold">
                        +91 73388 79700
                      </a>
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container-custom">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Start Your Learning Journey Today
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl mb-8 max-w-2xl mx-auto"
            >
              Join thousands of students who have transformed their careers with our expert-led training programs.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <button
                onClick={handleRegisterNow}
                className="btn bg-orange-500 hover:bg-orange-600 text-white"
              >
                Register for This Course
              </button>
              <Link to="/training" className="btn bg-transparent border-2 border-white hover:bg-white hover:text-black">
                View All Courses
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetailPage;