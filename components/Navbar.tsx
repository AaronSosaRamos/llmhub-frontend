import { useState } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false); 

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  const services = [
    'Fundamentals',
    'Prompt Engineering',
    'RAG',
    'Papers',
    'Open Source',
    'Fine-Tuning',
    'Architecture',
    'Model Deployment',
    'Security',
    'Multimodal Models',
    'Frameworks',
    'Inference Optimization',
  ];

  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-lg top-0 z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">LLMHub</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex space-x-8">
              <Link href="/">
                <span className="text-gray-900 dark:text-white">Home</span>
              </Link>

              <Menu as="div" className="relative">
                <Menu.Button className="text-gray-900 dark:text-white flex items-center">
                  Services <FaChevronDown className="ml-2" />
                </Menu.Button>
                <Transition
                  as="div"
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border border-gray-200 dark:border-gray-700">
                    <div className="py-1">
                      {services.map((service, index) => (
                        <Menu.Item key={index}>
                          {({ active }) => (
                            <Link href={`${service.toLowerCase().replace(/\s+/g, '-')}`}>
                              <span
                                className={`block px-4 py-2 text-sm ${
                                  active ? 'bg-gray-100 dark:bg-gray-700' : ''
                                } text-gray-900 dark:text-white`}
                              >
                                {service}
                              </span>
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <Link href="/contact">
                <span className="text-gray-900 dark:text-white">Contact Us</span>
              </Link>
            </div>

            <button
              onClick={toggleDarkMode}
              className="text-gray-900 dark:text-white text-xl focus:outline-none"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>

            <div className="md:hidden flex items-center">
              <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-900 dark:text-white">
                {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 py-2 border-t border-gray-200 dark:border-gray-700">
          <div className="space-y-2">
            <Link href="/">
              <span className="block text-center text-gray-900 dark:text-white">Home</span>
            </Link>

            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="block w-full text-center text-gray-900 dark:text-white flex justify-center items-center"
            >
              Services <FaChevronDown className={`ml-2 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>

            {servicesOpen && (
              <div className="w-full bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border border-gray-200 dark:border-gray-700">
                <div className="py-1">
                  {services.map((service, index) => (
                    <Link key={index} href={`#${service.toLowerCase().replace(/\s+/g, '-')}`}>
                      <span
                        className="block px-4 py-2 text-sm text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        {service}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <Link href="/contact">
              <span className="block text-center text-gray-900 dark:text-white">Contact Us</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
