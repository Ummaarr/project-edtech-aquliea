import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const countries = [
  { name: 'United States', flag: '🇺🇸', position: 'top-1/4 left-[20%]' },
  { name: 'United Kingdom', flag: '🇬🇧', position: 'top-1/3 left-[45%]' },
  { name: 'Germany', flag: '🇩🇪', position: 'top-1/3 left-[47%]' },
  { name: 'India', flag: '🇮🇳', position: 'top-2/3 left-[65%]' }
];

const GlobalPresence = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] bg-gray-100 rounded-lg overflow-hidden">
      {/* World Map Background */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://images.pexels.com/photos/4388167/pexels-photo-4388167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="World Map" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Country Markers */}
      {countries.map((country, index) => (
        <motion.div
          key={country.name}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
          className={`absolute ${country.position} flex flex-col items-center`}
        >
          <div className="relative">
            <MapPin 
              size={32} 
              className="text-orange-500" 
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <span className="text-sm font-bold text-white">{country.flag}</span>
            </div>
          </div>
          <span className="mt-1 bg-white px-2 py-1 rounded-full text-xs font-medium shadow-md">
            {country.name}
          </span>
        </motion.div>
      ))}
      
      {/* Statistics */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent py-8">
        <div className="container-custom">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center text-white">
              <h4 className="text-3xl font-bold text-orange-500">4+</h4>
              <p className="text-sm uppercase">Countries</p>
            </div>
            <div className="text-center text-white">
              <h4 className="text-3xl font-bold text-orange-500">50+</h4>
              <p className="text-sm uppercase">Projects</p>
            </div>
            <div className="text-center text-white">
              <h4 className="text-3xl font-bold text-orange-500">100+</h4>
              <p className="text-sm uppercase">Clients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalPresence;