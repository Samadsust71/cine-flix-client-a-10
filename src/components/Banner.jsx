

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



const Banner = () => {
  const slides = [
    {
      title: "Experience the Magic of Cinema",
      subtitle: "Discover the latest blockbusters and timeless classics.",
      image: "https://i.ibb.co/LY1RZX7/slide1.jpg",
    },
    {
      title: "Your Favorite Movies, Anytime",
      subtitle: "Stream and explore from the comfort of your home.",
      image: "https://i.ibb.co.com/WBFVhmz/slide5.jpg",
    },
    {
      title: "Dive into Stories That Inspire",
      subtitle: "Unforgettable characters and epic adventures await.",
      image: "https://i.ibb.co/Jr5GPKK/slide3.webp",
    },
  ];

  return (
    <div className="relative mb-10 w-11/12 mx-auto">
      <Swiper
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="rounded-lg"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative ">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-[400px] md:h-[600px] rounded-lg object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-4">
              <h2 className="text-2xl md:text-4xl font-bold">{slide.title}</h2>
              <p className="mt-2 text-sm md:text-lg">{slide.subtitle}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;

