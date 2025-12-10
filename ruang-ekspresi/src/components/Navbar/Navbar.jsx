import React, { useState } from 'react';
import './Navbar.module.css';
import headerLogo from '../../assets/logos/HeaderLOGORUANGEKSPRESI.png';
import headerText from '../../assets/logos/HeaderTULISANRUANGEKSPRESI.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 1, name: 'Brand' },
    { id: 2, name: 'About' },
    { id: 3, name: 'Program' },
    { id: 4, name: 'Projects' },
    { id: 5, name: 'Testimonials' },
    { id: 6, name: 'Contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 h-14 md:h-12 bg-white border-b border-gray-100 shadow-sm md:shadow-md px-4 md:px-8 lg:px-11 flex items-center z-50">
      {/* Logo Container */}
      <div className="flex items-center gap-2">
        <img 
          src={headerLogo} 
          alt="Logo Ruang Ekspresi" 
          className="h-6 md:h-7 lg:h-8 w-auto"
        />
        <img 
          src={headerText} 
          alt="Ruang Ekspresi" 
          className="h-3 md:h-4 lg:h-5 w-auto hidden sm:block"
        />
      </div>
      
      {/* Desktop Menu Items */}
      <div className="hidden md:flex ml-auto space-x-1">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center px-2 py-1 hover:bg-gray-50 cursor-pointer transition-colors min-w-[60px]"
          >
            <span className="text-xs md:text-sm text-[#374151] font-normal">{item.name}</span>
            <div className="w-8 md:w-12 h-0 border-t border-transparent hover:border-gray-700 mt-0.5 md:mt-1 transition-all"></div>
          </div>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="ml-auto md:hidden p-2"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg 
          className="w-6 h-6 text-gray-700" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-14 left-0 right-0 bg-white shadow-lg md:hidden border-t border-gray-100">
          <div className="flex flex-col">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href="#"
                className="px-6 py-4 text-[#374151] hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;