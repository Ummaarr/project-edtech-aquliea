import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  "./images/WhatsApp-Image-2023-07-04-at-12.44.21-(1).jpeg",
  "./images/WhatsApp-Image-2025-06-05-at-12.28.28-PM-(2).jpeg",
  "./images/WhatsApp-Image-2025-06-11-at-4.08.27-PM.jpeg",
  "./images/WhatsApp-Image-2025-06-11-at-4.18.08-PM.jpeg",
  "./images/WhatsApp-Image-2025-06-11-at-4.29.06-PM.jpeg",
  "./images/WhatsApp-Image-2025-06-11-at-4.32.41-PM.jpeg",
  "./images/WhatsApp-Image-2025-06-11-at-4.35.15-PM.jpeg"
];

const MOUSlider = () => {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      spaceBetween={20}
      slidesPerView={1}
      centeredSlides={true}
      navigation={true}
      pagination={{
        clickable: true,
        bulletClass: 'swiper-pagination-bullet',
        bulletActiveClass: 'swiper-pagination-bullet-active'
      }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      }}
      className="mou-swiper"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="bg-white rounded-lg overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300">
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src={image} 
                alt={`Partnership Signing ${index + 1}`}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
            <div className="p-4">
              <h4 className="text-sm font-semibold text-gray-800 mb-1">
                Academic Partnership
              </h4>
              <p className="text-xs text-gray-600">
                MOU Signing & Collaboration
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MOUSlider;