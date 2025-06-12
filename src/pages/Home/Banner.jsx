// components/Banner/Banner.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    title: "Remarkable Outcomes",
    description:
      "VolunteerMatch matches inspired people with inspiring causes. It's how volunteers and nonprofits connect to achieve remarkable outcomes",
    image:
      "https://img.freepik.com/free-photo/helping-hands-volunteer-support-community-service-graphic_53876-64955.jpg?ga=GA1.1.948762079.1747489031&semt=ais_hybrid&w=740",
  },
  {
    id: 2,
    title: "Remarkably Effective",
    description:
      "VolunteerMatch transforms volunteer recruiting, making it quick, easy and effective.",
    image:
      "https://plus.unsplash.com/premium_photo-1683134053085-ca8c6c0efd3f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dm9sdW50ZWVyJTIwZm9yJTIwaGVscGluZyUyMG1vdGhlcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    title: "Remarkable Network",
    description:
      "VolunteerMatch is the largest network in the nonprofit world, with the most volunteers, nonprofits and opportunities to make a difference.",
    image:
      "https://plus.unsplash.com/premium_photo-1723672804304-479b6c7e2f23?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHZvbHVudGVlciUyMGZvciUyMHRlYWNoaW5nfGVufDB8fDB8fHww",
  },
];

const Banner = () => {
  return (
    <div className="w-full mx-auto">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="overflow-hidden"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="hero min-h-screen"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="hero-overlay"></div>
              <div className="hero-content text-neutral-content text-center">
                <div className="">
                  <h1 className="mb-5 text-4xl">{slide.title}</h1>
                  <p className="mb-5 text-xl">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
