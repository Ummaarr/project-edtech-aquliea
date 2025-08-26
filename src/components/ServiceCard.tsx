import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon, 
  title, 
  description, 
  link,
  index
}) => {
  // Different animation variants for each card type
  const cardVariants = [
    {
      hover: { 
        scale: 1.03, 
        y: -5,
        rotateY: 2,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      },
      tap: { scale: 0.98 }
    },
    {
      hover: { 
        scale: 1.02, 
        y: -3,
        rotateX: 2,
        boxShadow: "0 15px 20px -5px rgba(0, 0, 0, 0.08), 0 8px 8px -5px rgba(0, 0, 0, 0.03)"
      },
      tap: { scale: 0.99 }
    },
    {
      hover: { 
        scale: 1.04, 
        y: -4,
        rotateZ: 1,
        boxShadow: "0 25px 30px -5px rgba(0, 0, 0, 0.12), 0 12px 12px -5px rgba(0, 0, 0, 0.05)"
      },
      tap: { scale: 0.97 }
    },
    {
      hover: { 
        scale: 1.025, 
        y: -2,
        rotateY: -1,
        boxShadow: "0 18px 22px -5px rgba(0, 0, 0, 0.09), 0 9px 9px -5px rgba(0, 0, 0, 0.035)"
      },
      tap: { scale: 0.985 }
    },
    {
      hover: { 
        scale: 1.035, 
        y: -6,
        rotateX: -2,
        boxShadow: "0 22px 28px -5px rgba(0, 0, 0, 0.11), 0 11px 11px -5px rgba(0, 0, 0, 0.045)"
      },
      tap: { scale: 0.975 }
    },
    {
      hover: { 
        scale: 1.015, 
        y: -1,
        rotateZ: -0.5,
        boxShadow: "0 12px 16px -5px rgba(0, 0, 0, 0.07), 0 6px 6px -5px rgba(0, 0, 0, 0.025)"
      },
      tap: { scale: 0.995 }
    },
    {
      hover: { 
        scale: 1.045, 
        y: -7,
        rotateY: 3,
        boxShadow: "0 28px 35px -5px rgba(0, 0, 0, 0.13), 0 14px 14px -5px rgba(0, 0, 0, 0.055)"
      },
      tap: { scale: 0.965 }
    }
  ];

  const selectedVariant = cardVariants[index % cardVariants.length];

  return (
    <Link to={link} className="block">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ 
          scale: 1.02, 
          y: -3
        }}
        whileTap={{ scale: 0.98 }}
        transition={{ 
          duration: 0.3,
          ease: "easeOut"
        }}
        className="bg-white p-6 rounded-lg shadow-xl border border-gray-100 cursor-pointer h-full group hover:shadow-2xl transform-gpu will-change-transform"
      >
        <div className="text-orange-500 mb-4 transition-all duration-300 ease-out group-hover:scale-105">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-gray-800 transition-colors duration-300 ease-out group-hover:text-orange-600">
          {title}
        </h3>
        <p className="text-gray-600 mb-6 flex-grow leading-normal">
          {description}
        </p>
        <div className="inline-flex items-center text-orange-500 font-medium transition-colors duration-300 ease-out group-hover:text-orange-600">
          Learn More 
          <ArrowRight size={16} className="ml-2 transition-transform duration-300 ease-out group-hover:translate-x-1" />
        </div>
      </motion.div>
    </Link>
  );
};

export default ServiceCard;