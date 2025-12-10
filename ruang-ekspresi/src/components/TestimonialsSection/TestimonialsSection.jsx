import React, { useState } from 'react';
import TestimonialCard from './TestimonialCard';
import testimonialPhoto from '../../assets/images/FotoKATAMEREKA.png';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Budi Santoso',
      role: 'Mahasiswa Sistem Informasi',
      comment: 'Kolaborasi antar disiplin ilmu di sini luar biasa. Saya belajar banyak hal dari teman-teman dari jurusan lain',
      photo: testimonialPhoto,
    },
    {
      name: 'Siti Rahayu',
      role: 'Mahasiswa Desain Komunikasi Visual',
      comment: 'Mentor yang sangat membantu dan lingkungan yang supportive membuat saya berkembang pesat',
      photo: testimonialPhoto,
    },
    {
      name: 'Ahmad Fauzi',
      role: 'Mahasiswa Teknik Informatika',
      comment: 'Project-based learning di sini sangat aplikatif dan relevan dengan industri',
      photo: testimonialPhoto,
    },
    {
      name: 'Dewi Anggraini',
      role: 'Mahasiswa Bisnis Digital',
      comment: 'Program ini membantu saya mengembangkan soft skill dan networking yang berharga',
      photo: testimonialPhoto,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-10 md:py-12 lg:py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#374151] mb-3 md:mb-4">
            Kata Mereka
          </h2>
          <p className="text-[#4B5563] max-w-2xl mx-auto text-xs sm:text-sm md:text-base px-4">
            Dengarkan pengalaman dari mahasiswa yang telah bergabung dengan Ruang Ekspresi
          </p>
        </div>

        {/* Desktop Testimonials Grid - Hidden on Mobile */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              comment={testimonial.comment}
              photo={testimonial.photo}
            />
          ))}
        </div>

        {/* Mobile Testimonials Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full shrink-0 px-2">
                  <TestimonialCard
                    name={testimonial.name}
                    role={testimonial.role}
                    comment={testimonial.comment}
                    photo={testimonial.photo}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-[#1864AB] w-6' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;