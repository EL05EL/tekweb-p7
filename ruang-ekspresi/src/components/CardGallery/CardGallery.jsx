import React from 'react';
import Card from './Card';

// Import semua gambar
import chatIcon from '../../assets/icons/majesticons_chat-line.png';
import bookIcon from '../../assets/icons/akar-icons_book.png';
import codeIcon from '../../assets/icons/mingcute_code-fill.png';
import peoplePinkIcon from '../../assets/icons/octicon_people-24-pink.png';

const CardGallery = () => {
  const programs = [
    {
      title: 'Career Talks',
      description: 'Sesi sharing dari praktisi industri dan alumni sukses',
      color: 'bg-[#FEF08A]',
      borderColor: 'border-[#F59E0B]',
      icon: chatIcon,
    },
    {
      title: 'Extra Classes',
      description: 'Kelas tambahan skill development dan workshop teknis',
      color: 'bg-[#BBF7D0]',
      borderColor: 'border-[#10B981]',
      icon: bookIcon,
    },
    {
      title: 'Project Work',
      description: 'Mengerjakan project nyata dengan bimbingan mentor',
      color: 'bg-[#BFDBFE]',
      borderColor: 'border-[#1864AB]',
      icon: codeIcon,
    },
    {
      title: 'Mentoring',
      description: 'Sesi konsultasi personal dengan mentor berpengalaman',
      color: 'bg-[#FBB5C4]',
      borderColor: 'border-[#EC4899]',
      icon: peoplePinkIcon,
    },
  ];

  return (
    <section className="py-12 md:py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {programs.map((program, index) => (
            <Card
              key={index}
              title={program.title}
              description={program.description}
              color={program.color}
              borderColor={program.borderColor}
              icon={program.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardGallery;