import React from 'react';
import footerLogo from '../../assets/logos/FooterLOGORUANGEKSPRESI.png';
import footerText from '../../assets/logos/FooterTEXTRUANGEKSPRESI.png';
import mapIcon from '../../assets/icons/GroupMAPSPOINTER.png';
import mailIcon from '../../assets/icons/VectorMAILING.png';
import phoneIcon from '../../assets/icons/VectorTELEPHONE.png';

const Footer = () => {
  const quickLinks = ['Home', 'About', 'Program', 'Projects', 'Testimonials', 'Contact'];
  const programs = ['Career Talks', 'Extra Classes', 'Project Work', 'Mentoring'];

  return (
    <footer className="bg-[#1864AB] text-white pt-8 md:pt-10 lg:pt-12 pb-6 md:pb-8 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center gap-2 mb-4 md:mb-6">
              <img 
                src={footerLogo} 
                alt="Logo Ruang Ekspresi" 
                className="h-8 md:h-10 lg:h-12 w-auto"
              />
              <img 
                src={footerText} 
                alt="Ruang Ekspresi" 
                className="h-3 md:h-4 lg:h-5 w-auto"
              />
            </div>
            <p className="text-xs md:text-sm mb-6 leading-relaxed">
              Wadah kreatif dan kompetitif untuk mahasiswa yang ingin mengembangkan potensi melalui ideation, creation, collaboration, dan guidance.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 md:space-y-4">
            <div className="flex items-start gap-2 md:gap-3">
              <img src={mapIcon} alt="Alamat" className="w-4 h-4 md:w-5 md:h-5 mt-0.5 flex-shrink-0" />
              <p className="text-xs md:text-sm leading-relaxed">
                Jl. Ringroad Selatan, Kragilan, Tamanan, Kec. Banguntapan, Bantul, Daerah Istimewa Yogyakarta 55191
              </p>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <img src={mailIcon} alt="Email" className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
              <p className="text-xs md:text-sm">ruang_ekspresi@webmail.uad.ac.id</p>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <img src={phoneIcon} alt="Telepon" className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
              <p className="text-xs md:text-sm">(0274) 511830</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-3 md:mb-4 text-sm md:text-base">Quick Links</h4>
            <ul className="space-y-1 md:space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-xs md:text-sm hover:underline transition-colors hover:text-gray-200 block py-1"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-medium mb-3 md:mb-4 text-sm md:text-base">Programs</h4>
            <ul className="space-y-1 md:space-y-2">
              {programs.map((program, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-xs md:text-sm hover:underline transition-colors hover:text-gray-200 block py-1"
                  >
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-6 md:my-8"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-xs md:text-sm">© 2021 All Rights Reserved</p>
          <p className="text-xs text-white/70 mt-1">Ruang Ekspresi - Universitas Ahmad Dahlan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;