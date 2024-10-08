"use client";

import DecoratorLeft from "@src/components/commons/decorator-left";
import TestimonialCard from "@src/components/fragments/testimonials-card";
import { CSSProperties } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const testimonials = [
  {
    name: "Karno Nur Cahyo",
    position: "CTO at Brainmatics",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, molestiae ea. Cumque optio ipsum totam molestias voluptatibus, necessitatibus autem.",
    avatarUrl: "https://i.pravatar.cc/150?img=1", // Gambar dummy dari pravatar.cc
  },
  {
    name: "Siti Rahma",
    position: "CEO at Techcorp",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, molestiae ea. Cumque optio ipsum totam molestias voluptatibus, necessitatibus autem.",
    avatarUrl: "https://i.pravatar.cc/150?img=2", // Gambar dummy dari pravatar.cc
  },
  {
    name: "Doni Saputra",
    position: "Developer at Appworks",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, molestiae ea. Cumque optio ipsum totam molestias voluptatibus, necessitatibus autem.",
    avatarUrl: "https://i.pravatar.cc/150?img=3", // Gambar dummy dari pravatar.cc
  },
  {
    name: "Lina Mahardika",
    position: "Designer at Creatives",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, molestiae ea. Cumque optio ipsum totam molestias voluptatibus, necessitatibus autem.",
    avatarUrl: "https://i.pravatar.cc/150?img=4", // Gambar dummy dari pravatar.cc
  },
  {
    name: "Rudi Hartono",
    position: "Marketing at Innovate",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, molestiae ea. Cumque optio ipsum totam molestias voluptatibus, necessitatibus autem.",
    avatarUrl: "https://i.pravatar.cc/150?img=5", // Gambar dummy dari pravatar.cc
  },
];

export default function Testimonials() {
  const backgroundStyle: CSSProperties = {
    backgroundImage: "url('/home/join-us.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="  py-20  relative" style={backgroundStyle}>
      <div className="absolute bg-slate-800 opacity-90 h-full w-full top-0 z-0"></div>
      <DecoratorLeft
        className="absolute  top-0 right-0 rotate-180"
        fill="#7f8294"
      />

      <div className="container px-4 relative z-10">
        <h1 className="text-white  underline font-bold text-3xl md:text-4xl text-center mb-8">
          Testimonials
        </h1>

        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{
            clickable: true,
            renderBullet: (index, className) =>
              `<span class="${className} sh-bullet"></span>`, // Custom render bullet
          }}
          breakpoints={{
            // ketika width >= 640px (tablet)
            640: {
              slidesPerView: 2,
            },
            // ketika width >= 1024px (desktop)
            1024: {
              slidesPerView: 3,
            },
          }}
          className="testimonials-swiper mt-20"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard {...testimonial} />
            </SwiperSlide>
          ))}

          <div className="h-20 w-full"></div>
        </Swiper>
      </div>

      <DecoratorLeft
        className="absolute hidden md:block bottom-0 left-0 "
        fill="#7f8294"
      />
    </div>
  );
}
