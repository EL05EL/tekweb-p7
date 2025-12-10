import React from 'react';

// Import semua gambar dengan path lengkap dari src/assets
import lampIcon from '../../assets/icons/lets-icons_lamp-light.png';
import wrenchIcon from '../../assets/icons/lucide_wrench.png';
import peopleBlueIcon from '../../assets/icons/octicon_people-24-blue.png';
import gradIcon from '../../assets/icons/simple-line-icons_graduation.png';

const PillarsSection = () => {
  const pillars = [
    {
      title: 'Ideation',
      description: 'Mengembangkan ide-ide kreatif dan inovatif melalui brainstorming dan workshop ideation yang terarah.',
      color: 'bg-[#FEF08A]',
      borderColor: 'border-[#F59E0B]',
      icon: lampIcon,
    },
    {
      title: 'Creation',
      description: 'Mewujudkan ide menjadi karya nyata dengan dukungan tools dan teknologi terkini.',
      color: 'bg-[#BBF7D0]',
      borderColor: 'border-[#10B981]',
      icon: wrenchIcon,
    },
    {
      title: 'Collaboration',
      description: 'Bekerja sama dalam tim multidisiplin untuk menciptakan solusi yang komprehensif.',
      color: 'bg-[#BFDBFE]',
      borderColor: 'border-[#1864AB]',
      icon: peopleBlueIcon,
    },
    {
      title: 'Guidance & Support',
      description: 'Mendapat bimbingan dari mentor berpengalaman dan akses ke berbagai resources pembelajaran.',
      color: 'bg-[#FBB5C4]',
      borderColor: 'border-[#EC4899]',
      icon: gradIcon,
    },
  ];

  return (
    <section className="py-12 md:py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#374151] mb-4">
            Empat Pilar Ruang Ekspresi
          </h2>
          <p className="text-[#4B5563] max-w-2xl mx-auto text-sm md:text-base">
            Komprehensif yang dirancang untuk mengembangkan potensi kreatif mahasiswa melalui pendekatan holistik
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className={`${pillar.color} border ${pillar.borderColor} rounded-xl p-6 md:p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300`}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 mb-4 flex items-center justify-center">
                <img 
                  src={pillar.icon}
                  alt={pillar.title}
                  className="w-12 h-12 md:w-14 md:h-14 object-contain"
                />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-4">{pillar.title}</h3>
              <p className="text-[#374151] text-sm md:text-base">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;