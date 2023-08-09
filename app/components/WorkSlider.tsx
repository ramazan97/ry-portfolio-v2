"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "ry-bungalov",
          path: "/thumb4.jpg",
          href: "https://rydev-bungalov.vercel.app/",
        },
        {
          title: "ry-ecommerce",
          path: "/thumb1.jpg",
          href: "https://rydev-ecommerce-website.vercel.app/",
        },
        {
          title: "ry-blog",
          path: "/thumb3.jpg",
          href: "https://rydev-blog-3zxl0ejch-ramazan97.vercel.app/",
        },
        {
          title: "ry-wheather-app",
          path: "/thumb2.jpg",
          href: "https://rydev-weather-app.vercel.app/",
        },
      ],
    },
    // {
    //   images: [
    //     {
    //       title: "title",
    //       path: "/thumb4.jpg",
    //       href: "/",
    //     },
    //     {
    //       title: "title",
    //       path: "/thumb1.jpg",
    //       href: "/",
    //     },
    //     {
    //       title: "title",
    //       path: "/thumb2.jpg",
    //       href: "/",
    //     },
    //     {
    //       title: "title",
    //       path: "/thumb3.jpg",
    //       href: "/",
    //     },
    //   ],
    // },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      // modules={{ Pagination }}
      className="h-[280px] sm:h-[550px] "
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2  text-white grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div
                    key={index}
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group "
                  >
                    <Link href={image.href}>
                      <div className="flex items-center justify-center relative overflow-hidden group">
                        <Image
                          src={image.path}
                          width={500}
                          height={300}
                          alt=""
                        />

                        {/* overlay gradient */}

                        <div
                          className="absolute inset-0 bg-gradient-to-l from-transparent
                       via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 
                       transition-all duration-700  "
                        ></div>
                        {/* title */}
                        <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                          <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em] ">
                            <div className="delay-100">LIVE</div>
                            <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150  ">
                              PROJECT
                            </div>
                            <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-500 ">
                              <BsArrowRight />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
