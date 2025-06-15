'use client';

import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const StickyHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white bg-opacity-95 shadow-md py-2'
            : 'bg-white bg-opacity-80 py-4'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div></div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <div className="flex space-x-8">
              <a
                href="#about"
                className={`hover:text-blue-600 transition-colors ${isScrolled ? 'text-gray-800' : 'text-gray-800'}`}
              >
                About
              </a>
              <a
                href="#experience"
                className={`hover:text-blue-600 transition-colors ${isScrolled ? 'text-gray-800' : 'text-gray-800'}`}
              >
                Experience
              </a>
              <a
                href="#skills"
                className={`hover:text-blue-600 transition-colors ${isScrolled ? 'text-gray-800' : 'text-gray-800'}`}
              >
                Skills
              </a>
              {/* <a href="#strava" className={`hover:text-orange-500 transition-colors ${isScrolled ? 'text-gray-800' : 'text-gray-800'}`}>Hobbies</a> */}
              <a
                href="#projects"
                className={`hover:text-blue-600 transition-colors ${isScrolled ? 'text-gray-800' : 'text-gray-800'}`}
              >
                Projects
              </a>
              <a
                href="#contact"
                className={`hover:text-blue-600 transition-colors ${isScrolled ? 'text-gray-800' : 'text-gray-800'}`}
              >
                Contact
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed top-0 inset-x-0 z-40 h-screen bg-white transform ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'} transition-transform duration-300 ease-in-out md:hidden pt-20`}
      >
        <div className="container mx-auto px-6 py-4">
          <nav className="flex flex-col space-y-6">
            <a
              href="#about"
              onClick={closeMobileMenu}
              className="text-xl font-medium text-gray-800 hover:text-blue-600 transition-colors"
            >
              About
            </a>
            <a
              href="#experience"
              onClick={closeMobileMenu}
              className="text-xl font-medium text-gray-800 hover:text-blue-600 transition-colors"
            >
              Experience
            </a>
            <a
              href="#skills"
              onClick={closeMobileMenu}
              className="text-xl font-medium text-gray-800 hover:text-blue-600 transition-colors"
            >
              Skills
            </a>
            {/* <a href="#strava" onClick={closeMobileMenu} className="text-xl font-medium text-gray-800 hover:text-orange-500 transition-colors">Hobbies</a> */}
            <a
              href="#projects"
              onClick={closeMobileMenu}
              className="text-xl font-medium text-gray-800 hover:text-blue-600 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="text-xl font-medium text-gray-800 hover:text-blue-600 transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default StickyHeader;
