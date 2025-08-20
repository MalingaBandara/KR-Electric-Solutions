import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navLinks = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'About',
    path: '/about'
  }, {
    name: 'Services',
    path: '/services'
  }, {
    name: 'Projects',
    path: '/projects'
  }, {
    name: 'Contact',
    path: '/contact'
  }];
  return <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 md:py-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-blue-600">KR </span>
            <span className="hidden md:block text-xl font-semibold text-gray-800">
              Electric Solutions
            </span>
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map(link => <Link key={link.name} to={link.path} className={`text-base font-medium transition-colors hover:text-blue-600 ${location.pathname === link.path ? 'text-blue-600' : 'text-gray-700'}`}>
                {link.name}
              </Link>)}
          </nav>
          {/* Mobile menu button */}
          <button className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none" onClick={toggleMenu}>
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && <nav className="md:hidden mt-4 pb-2 space-y-4">
            {navLinks.map(link => <Link key={link.name} to={link.path} className={`block py-2 text-base font-medium transition-colors hover:text-blue-600 ${location.pathname === link.path ? 'text-blue-600' : 'text-gray-700'}`} onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </Link>)}
          </nav>}
      </div>
    </header>;
};
export default Header;