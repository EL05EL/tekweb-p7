import React from 'react';

const Card = ({ title, description, color, borderColor, icon }) => {
  return (
    <div className={`${color} ${borderColor} border-2 rounded-xl p-6 hover:shadow-xl transition-all duration-300 h-full transform hover:-translate-y-1`}>
      <div className="flex flex-col h-full">
        {/* Icon in circle */}
        <div className="w-14 h-14 rounded-full bg-white/70 flex items-center justify-center text-2xl mb-4 shadow-sm">
          <img 
            src={icon}
            alt={title}
            className="w-8 h-8 object-contain"
          />
        </div>

        {/* Title */}
        <h3 className="text-lg md:text-xl font-semibold mb-2 text-[#0f172a]">{title}</h3>

        {/* Description */}
        <p className="text-[#374151] grow text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Card;