import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Transition } from '@headlessui/react';
import LanguageSelector from './LanguageSelector';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const servicesMenu = [
    { name: 'Accounts & Finance Offshoring', path: '/services/finance' },
    { name: 'HR & Remote Operation Support', path: '/services/hr' },
    { name: 'Tax Consultancy Dubai', path: '/services/tax' },
    { name: 'Training & Development', path: '/training' },
    { name: 'E-learning Management', path: '/services/elearning' },
    { name: 'Robotic Process Automation', path: '/services/automation' },
    { name: 'IT Consulting Services', path: '/services/it' }
  ];

  const trainingMenu = [
  { name: 'Stock Trading', path: '/course/stock-trading' },
  { name: 'Capital Market', path: '/course/capital-market' },
  { name: 'Financial Communications', path: '/course/financial-communications' },
  { name: 'Investment Banking', path: '/course/investment-banking' },
  { name: 'Corporate Success', path: '/course/corporate-success' },
  { name: 'GST Training', path: '/course/gst' }
];

  return (
    <header 
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-full 
      ${scrolled ? 'w-[93%] shadow-lg' : 'w-[88%]'} 
      bg-[url('/images/header-bg.png')] bg-repeat bg-center bg-cover`}
    >
      <div className="container-custom h-full">
        <div className="flex items-center h-14">
          <Link to="/" className="flex items-center mr-16">
            <img 
              src={`${import.meta.env.BASE_URL}./images/LOGO_-_AQUILAE-removebg-preview.png`}
              alt="Aquilae Technologies" 
              className="h-11 w-auto" 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center flex-grow justify-end space-x-9">
            <Link 
              to="/" 
              className={`text-base uppercase tracking-wide font-medium ${
                location.pathname === '/' 
                  ? 'text-orange-500' 
                  : 'text-black hover:text-orange-500'
              }`}
            >
              {t('header.home')}
            </Link>
            <Link 
              to="/about" 
              className={`text-sm uppercase tracking-wide font-medium ${
                location.pathname === '/about' 
                  ? 'text-orange-500' 
                  : 'text-black hover:text-orange-500'
              }`}
            >
              {t('header.about')}
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <Link
                to="/services"
                className={`flex items-center text-sm uppercase tracking-wide font-medium ${
                  location.pathname.includes('/services')
                    ? 'text-orange-500'
                    : 'text-black group-hover:text-orange-500'
                }`}
              >
                Our Offerings
                <ChevronDown size={14} className="ml-1 transition-transform group-hover:rotate-180" />
              </Link>

              <div className="absolute left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform">
                <div className="py-2 bg-white rounded-lg shadow-xl">
                  {servicesMenu.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Training Dropdown */}
            <div className="relative group">
              <Link
                to="/training"
                className={`flex items-center text-sm uppercase tracking-wide font-medium ${
                  location.pathname === '/training'
                    ? 'text-orange-500'
                    : 'text-black group-hover:text-orange-500'
                }`}
              >
                {t('header.training')}
                <ChevronDown size={14} className="ml-1 transition-transform group-hover:rotate-180" />
              </Link>

              <div className="absolute left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform">
                <div className="py-2 bg-white rounded-lg shadow-xl">
                  {trainingMenu.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link 
              to="/team" 
              className={`text-sm uppercase tracking-wide font-medium ${
                location.pathname === '/team' 
                  ? 'text-orange-500' 
                  : 'text-black hover:text-orange-500'
              }`}
            >
              {t('header.team')}
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm uppercase tracking-wide font-medium ${
                location.pathname === '/contact' 
                  ? 'text-orange-500' 
                  : 'text-black hover:text-orange-500'
              }`}
            >
              {t('header.contact')}
            </Link>
            {/* *<LanguageSelector /> */}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 lg:hidden ml-auto">
            {/* <LanguageSelector mobile /> */}
            <button 
              onClick={toggleMenu}
              className="text-black hover:text-orange-500 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <Transition
        show={isMenuOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="lg:hidden bg-white/90 rounded-2xl mt-2">
          <div className="container-custom py-6 space-y-4">
            <Link 
              to="/" 
              className={`block py-2 text-sm uppercase tracking-wide font-medium ${
                location.pathname === '/' ? 'text-orange-500' : 'text-black'
              }`}
            >
              {t('header.home')}
            </Link>
            <Link 
              to="/about" 
              className={`block py-2 text-sm uppercase tracking-wide font-medium ${
                location.pathname === '/about' ? 'text-orange-500' : 'text-black'
              }`}
            >
              {t('header.about')}
            </Link>

            {/* Mobile Services Menu */}
            <div className="space-y-2">
              <div className="text-black font-medium text-sm uppercase tracking-wide">Our Offerings</div>
              {servicesMenu.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block py-1 pl-4 text-sm text-gray-700 hover:text-orange-500"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Training Menu */}
            <div className="space-y-2">
              <div className="text-black font-medium text-sm uppercase tracking-wide">{t('header.training')}</div>
              {trainingMenu.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block py-1 pl-4 text-sm text-gray-700 hover:text-orange-500"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <Link 
              to="/team" 
              className={`block py-2 text-sm uppercase tracking-wide font-medium ${
                location.pathname === '/team' ? 'text-orange-500' : 'text-black'
              }`}
            >
              {t('header.team')}
            </Link>
            <Link 
              to="/contact" 
              className={`block py-2 text-sm uppercase tracking-wide font-medium ${
                location.pathname === '/contact' ? 'text-orange-500' : 'text-black'
              }`}
            >
              {t('header.contact')}
            </Link>
          </div>
        </div>
      </Transition>
    </header>
  );
};

export default Header;