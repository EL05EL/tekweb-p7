import React from 'react';

// Import gambar
import diskusiImage from '../../assets/images/Ilustrasi diskusi ruang ekspresi.png';
import timPembuatImage from '../../assets/images/FotoTIMPEMBUAT123.png';
import liveDemoIcon from '../../assets/logos/vector-logo-live-demo.png';
import nextArrowIcon from '../../assets/icons/carbon_next-outline.png';

const ProjectShowcase = () => {
  const projects = [
    {
      category: 'UI/UX Design',
      title: 'Creative Portfolio Platform',
      description: 'Platform showcase karya mahasiswa dengan sistem rating dan feedback komunitas',
      team: [
        { 
          name: 'Budi Santoso', 
          role: 'Frontend Developer',
        },
        { 
          name: 'Siti Rahayu', 
          role: 'UI Designer',
        },
        { 
          name: 'Ahmad Fauzi', 
          role: 'Backend Developer',
        },
      ],
    },
  ];

  return (
    <section className="py-12 md:py-16 px-4 md:px-8 lg:px-12 bg-[#FEF7F9]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#374151] mb-4">
            Showcase Student Projects
          </h2>
          <p className="text-[#4B5563] max-w-2xl mx-auto text-sm md:text-base">
            Karya-karya inovatif yang telah dihasilkan oleh mahasiswa dalam program Ruang Ekspresi
          </p>
        </div>

        {/* Project Cards */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2">
              {/* Left Column - Content */}
              <div className="p-6 md:p-8">
                <div className="inline-block bg-[#BFDBFE] px-4 py-2 rounded-full mb-4">
                  <span className="text-[#374151] font-medium">{project.category}</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h3>
                <p className="text-[#374151] mb-8">{project.description}</p>

                <div className="mb-6">
                  <h4 className="font-medium text-black mb-4">Tim Pembuat :</h4>
                  
                  {/* Container dengan panah KANAN di sebelah kiri daftar tim */}
                  <div className="flex items-center">
                    {/* Panah KANAN (sebelah kiri daftar tim) */}
                    <div className="mr-4 shrink-0">
                      <img
                        src={nextArrowIcon}
                        alt="Next"
                        className="w-8 h-8 md:w-10 md:h-10" // Menghadap kanan
                      />
                    </div>
                    
                    {/* Daftar anggota tim */}
                    <div className="flex-1 space-y-4">
                      {project.team.map((member, idx) => (
                        <div key={idx} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                          {/* Foto Profile */}
                          <div className="w-12 h-12 md:w-14 md:h-14 shrink-0">
                            <img
                              src={timPembuatImage}
                              alt={member.name}
                              className="w-full h-full rounded-full object-cover border-2 border-blue-200"
                            />
                          </div>
                          
                          {/* Informasi */}
                          <div className="flex-1">
                            <p className="font-semibold text-gray-800 text-base md:text-lg">{member.name}</p>
                            <p className="text-gray-600 text-sm md:text-base">{member.role}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <button className="bg-[#1864AB] text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors">
                  <img 
                    src={liveDemoIcon}
                    alt="Live Demo"
                    className="w-5 h-5"
                  />
                  <span>Live Demo</span>
                </button>
              </div>

              {/* Right Column - Ilustrasi Diskusi */}
              <div className="p-6 md:p-8">
                {/* Container dengan panah KIRI di sebelah kanan ilustrasi */}
                <div className="flex items-center h-full">
                  {/* Ilustrasi Diskusi */}
                  <div className="flex-1">
                    <img
                      src={diskusiImage}
                      alt="Ilustrasi Diskusi Ruang Ekspresi"
                      className="w-full h-auto rounded-xl border-4 border-blue-200 shadow-lg"
                    />
                    <div className="mt-4 text-center">
                      <p className="text-sm text-gray-600">Ilustrasi Diskusi Ruang Ekspresi</p>
                    </div>
                  </div>
                  
                  {/* Panah KIRI (sebelah kanan ilustrasi) */}
                  <div className="ml-4 shrink-0">
                    <img
                      src={nextArrowIcon}
                      alt="Previous"
                      className="w-8 h-8 md:w-10 md:h-10 rotate-180 transform" // rotate-180 untuk menghadap kiri
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;