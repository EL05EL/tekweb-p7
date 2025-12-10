import React from 'react';

const TestimonialCard = ({ name, role, comment, photo }) => {
  return (
    <div className="bg-white rounded-xl md:rounded-2xl shadow-md md:shadow-lg p-4 md:p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
      {/* Avatar and Name */}
      <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
        <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center shrink-0 overflow-hidden border-2 border-white shadow-md">
          <img 
            src={photo} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="min-w-0">
          <h4 className="text-base md:text-lg lg:text-xl font-medium">{name}</h4>
          <p className="text-[#1864AB] text-xs md:text-sm">{role}</p>
        </div>
      </div>

      {/* Comment */}
      <p className="text-[#333333] text-sm md:text-base lg:text-lg italic mb-4 md:mb-6 grow leading-relaxed">
        "{comment}"
      </p>

      {/* Rating Stars */}
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-yellow-400 text-sm md:text-base lg:text-lg">★</span>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;