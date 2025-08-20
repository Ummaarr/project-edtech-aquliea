import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, ChevronDown } from 'lucide-react';
import { Menu, Transition } from '@headlessui/react';

interface LanguageSelectorProps {
  mobile?: boolean;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ mobile = false }) => {
  const { i18n } = useTranslation();
  
  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
  };

  return (
    <Menu as="div" className="relative">
      {({ open }) => (
        <>
          <Menu.Button
            className={`flex items-center ${
              mobile ? 'text-gray-700' : 'text-gray-700'
            } hover:text-orange-500 focus:outline-none`}
          >
            <Globe size={mobile ? 20 : 16} className="mr-1" />
            {!mobile && (
              <>
                <span className="ml-1">{currentLanguage.flag}</span>
                <ChevronDown size={14} className="ml-1" />
              </>
            )}
          </Menu.Button>

          <Transition
            show={open}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              static
              className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
            >
              {languages.map((language) => (
                <Menu.Item key={language.code}>
                  {({ active }) => (
                    <button
                      onClick={() => changeLanguage(language.code)}
                      className={`${
                        active ? 'bg-gray-100' : ''
                      } ${
                        i18n.language === language.code ? 'text-orange-500' : 'text-gray-700'
                      } flex items-center w-full px-4 py-2 text-sm`}
                    >
                      <span className="mr-2">{language.flag}</span>
                      {language.name}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

export default LanguageSelector;