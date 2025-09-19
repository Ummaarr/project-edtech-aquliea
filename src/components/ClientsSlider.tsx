import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const clientLogos = [
  "./images/logo.png",
  "./images/logo-white.png",
  "./images/LOGO_-_AQUILAE-removebg-preview.png",
  "./images/logo.png",
  "./images/logo-white.png",
  "./images/LOGO_-_AQUILAE-removebg-preview.png",
  "./images/logo.png"
];

const ClientsSlider = () => {
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
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2, spaceBetween: 30 },
        1024: { slidesPerView: 2, spaceBetween: 40 },
        1280: { slidesPerView: 3, spaceBetween: 40 },
      }}
      className="mou-swiper"
    >
      {clientLogos.map((logo, index) => (
        <SwiperSlide key={index}>
          <div className="bg-white rounded-lg overflow-hidden shadow group hover:shadow-md transition-all duration-300">
            <div className="h-24 overflow-hidden flex items-center justify-center">
              <img 
                src={logo} 
                alt={`Client Logo ${index + 1}`}
                className="max-h-16 w-auto object-contain" 
              />
            </div>
            <div className="p-3">
              <h4 className="text-xs font-semibold text-gray-800 mb-0.5">
                Our Client
              </h4>
              <p className="text-[10px] text-gray-600">
                Trusted Partner
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ClientsSlider;

