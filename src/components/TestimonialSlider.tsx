import { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "Working with Aquilae Technologies has been a game-changer for our business. Their offshore accounting services helped us streamline our financial operations significantly.",
    author: "John Smith",
    position: "CFO, TechCorp Inc.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    text: "The IT consulting team at Aquilae provided innovative solutions that transformed our digital infrastructure. Their expertise and professionalism are unmatched.",
    author: "Emma Johnson",
    position: "CTO, GlobalServe Ltd.",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    text: "Aquilae's HR support services have been invaluable in helping us build and manage our remote team. Their recruitment process is thorough and effective.",
    author: "Michael Chen",
    position: "HR Director, Innovex",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const TestimonialSlider = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      className="testimonial-swiper py-10"
    >
      {testimonials.map((testimonial) => (
        <SwiperSlide key={testimonial.id}>
          <div className="bg-white p-6 rounded-lg shadow-lg h-full flex flex-col">
            <div className="text-orange-500 mb-4">
              <Quote size={40} />
            </div>
            <p className="text-gray-700 italic mb-6 flex-grow">{testimonial.text}</p>
            <div className="flex items-center">
              <img
                src={testimonial.image}
                alt={testimonial.author}
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="font-semibold">{testimonial.author}</h4>
                <p className="text-sm text-gray-600">{testimonial.position}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;