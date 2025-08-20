import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-black text-white footer-height">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src={`${import.meta.env.BASE_URL}./images/logo-white.png`}
              alt="Aquilae Technologies" 
              className="h-8 mb-4" 
            />
            <p className="text-gray-400 mb-4">
              Providing innovative solutions to businesses worldwide since 2015.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-orange-500">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  {t('header.home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  {t('header.about')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Our Offerings
                </Link>
              </li>
              <li>
                <Link to="/training" className="text-gray-400 hover:text-white transition-colors">
                  {t('header.training')}
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-400 hover:text-white transition-colors">
                  {t('header.team')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  {t('header.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-orange-500">Our Offerings</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services/finance" className="text-gray-400 hover:text-white transition-colors">
                  Accounts and Finance Offshoring
                </Link>
              </li>
              <li>
                <Link to="/services/hr" className="text-gray-400 hover:text-white transition-colors">
                  HR & Remote Operation Support
                </Link>
              </li>
              <li>
                <Link to="/services/tax" className="text-gray-400 hover:text-white transition-colors">
                  Tax Consultancy Dubai
                </Link>
              </li>
              <li>
                <Link to="/services/training" className="text-gray-400 hover:text-white transition-colors">
                  Training & Development
                </Link>
              </li>
              <li>
                <Link to="/services/elearning" className="text-gray-400 hover:text-white transition-colors">
                  E-learning Management
                </Link>
              </li>
              <li>
                <Link to="/services/automation" className="text-gray-400 hover:text-white transition-colors">
                  Robotic Process Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-orange-500">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="text-orange-500 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  14, Chakrapani Street, West Mambalam, Chennai – 600 033, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-orange-500 mr-2 flex-shrink-0" />
                <span className="text-gray-400">+91 73388 79700</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-orange-500 mr-2 flex-shrink-0" />
                <a href="mailto:contact@aquilaetech.de" className="text-gray-400 hover:text-white">
                  contact@aquilaetech.de
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 pt-4 text-center text-gray-400">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;