import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const trainingImages = [
  "./images/WhatsApp-Image-2023-06-27-at-17.18.27-(2).jpeg",
  "./images/WhatsApp-Image-2023-06-27-at-17.18.39.jpeg", 
  "./images/WhatsApp-Image-2023-06-27-at-17.29.01.jpeg",
  "./images/WhatsApp-Image-2022-03-12-at-3.34.05.jpeg"
];

const TrainingSlider = () => {
  return (
    <Swiper
      modules={[Autoplay, EffectFade, Pagination]}
      effect="fade"
      fadeEffect={{
        crossFade: true
      }}
      pagination={{
        clickable: true,
        bulletClass: 'swiper-pagination-bullet',
        bulletActiveClass: 'swiper-pagination-bullet-active'
      }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      loop={true}
      className="training-swiper rounded-lg shadow-xl overflow-hidden"
    >
      {trainingImages.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="relative">
            <img 
              src={image} 
              alt={`Training Session ${index + 1}`}
              className="w-full h-96 object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TrainingSlider;