import React from 'react';

// Import gambar
import calendarIcon from '../../assets/icons/lucide_calendar.png';
import jamSesiImage from '../../assets/images/gambar-jam-sesi.png';

const ScheduleSection = () => {
  const schedules = [
    {
      title: 'Sesi Pagi',
      time: '09.00 - 12.00 WIB',
      description: 'Workshop, Career Talks, dan Extra Classes intensif',
    },
    {
      title: 'Sesi Sore',
      time: '16.00 - 19.00 WIB',
      description: 'Project Work, Mentoring, dan Collaboration Session',
    },
  ];

  return (
    <section className="py-12 md:py-16 px-4 md:px-8 lg:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#374151] mb-4">
            Jadwal & Program Kegiatan
          </h2>
          <p className="text-[#4B5563] max-w-2xl mx-auto text-sm md:text-base">
            Program terstruktur yang dirancang untuk mengoptimalkan pembelajaran dan pengembangan skill Setiap Sabtu
          </p>
        </div>

        {/* Schedule Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          {/* Calendar Header */}
          <div className="flex items-center justify-center mb-8 md:mb-12">
            <div className="flex items-center gap-4">
              <div className="w-6 h-6 md:w-8 md:h-8">
                <img 
                  src={calendarIcon}
                  alt="Calendar"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-lg md:text-xl font-semibold text-[#1864AB]">
                Setiap Sabtu
              </span>
            </div>
          </div>

          {/* Schedule Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {schedules.map((schedule, index) => (
              <div
                key={index}
                className="bg-linear-to-r from-[#FFEB9C] to-[#A7F3D0] border-l-4 border-[#1864AB] rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="relative w-12 h-12 shrink-0">
                    <img 
                      src={jamSesiImage}
                      alt={schedule.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-medium text-black mb-2 text-lg">{schedule.title}</h3>
                    <p className="text-[#1864AB] font-medium mb-3 text-base">{schedule.time}</p>
                    <p className="text-[#4B5563] text-sm">{schedule.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;