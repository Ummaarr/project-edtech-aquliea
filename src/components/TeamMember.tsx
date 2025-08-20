import { motion } from 'framer-motion';

interface TeamMemberProps {
  image: string;
  name: string;
  role: string;
  description: string;
  index: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({ 
  image, 
  name, 
  role, 
  description,
  index
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden group"
    >
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-80 object-cover object-center transition-transform duration-500 group-hover:scale-105" 
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-orange-500 font-medium mb-3">{role}</p>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

export default TeamMember;