import React from 'react';
import heroIllustration from '../../assets/images/Ilustrasi diskusi ruang ekspresi.png';

const HeroSection = () => {
  const tags = [
    { text: 'Ideation', color: 'bg-[#FEF08A]' },
    { text: 'Creation', color: 'bg-[#BBF7D0]' },
    { text: 'Collaboration', color: 'bg-[#BFDBFE]' },
    { text: 'Guidance & Support', color: 'bg-[#FBB5C4]' },
  ];

  return (
    <section className="pt-16 md:pt-20 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto bg-white rounded-lg md:rounded-xl p-4 md:p-6 lg:p-8 flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-12 shadow-sm md:shadow-lg">
        {/* Text Content */}
        <div className="lg:w-2/3 w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1864AB] leading-tight md:leading-tight lg:leading-tight xl:leading-tight">
            RUANG EKSPRESI :<br className="hidden sm:block" /> Wadah kreatif & Kompetitif Mahasiswa
          </h1>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 md:gap-3 mt-6 md:mt-8">
            {tags.map((tag, index) => (
              <div
                key={index}
                className={`${tag.color} px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[#374151] font-medium text-xs md:text-sm lg:text-base`}
              >
                {tag.text}
              </div>
            ))}
          </div>
        </div>

        {/* Hero Illustration */}
        <div className="lg:w-1/3 w-full mt-6 lg:mt-0">
          <img
            src={heroIllustration}
            alt="Ilustrasi diskusi ruang ekspresi"
            className="w-full h-auto object-contain rounded-xl md:rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;