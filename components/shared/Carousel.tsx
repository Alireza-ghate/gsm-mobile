"use client";

import Image from "next/image";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// static import
import slide1 from "@/public/images/carousel/slide_1.webp";
import slide2 from "@/public/images/carousel/slide_2.webp";
import slide3 from "@/public/images/carousel/slide_3.webp";
import slide4 from "@/public/images/carousel/slide_4.webp";

import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: slide1, href: "/" },
  { src: slide2, href: "/" },
  { src: slide3, href: "/" },
  { src: slide4, href: "/" },
];

function Carousel() {
  return (
    <div className="bg-gray-100 rounded-xl mb-4">
      <div className="relative max-w-[1500px] mx-auto md:rounded-xl">
        <Swiper
          className="flex md:rounded-xl"
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          pagination={{
            clickable: true,
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
        >
          {images.map((slide, index) => (
            <SwiperSlide key={index} className="shrink-0">
              <Link target="_blank" href={slide.href} className="shrink-0">
                <figure className="relative w-full h-[220px] sm:h-[280px] md:h-[360px] lg:h-[420px] shrink-0">
                  <Image
                    src={slide.src}
                    alt={`اسلاید ${index + 1}`}
                    priority={true}
                    className=" lg:object-cover md:rounded-xl shrink-0"
                    fill
                  />
                </figure>
              </Link>
            </SwiperSlide>
          ))}
          {/* custom navigation buttons */}
          <button className="hidden z-10 custom-prev absolute right-6 top-4/5 bg-white text-blue-500 w-8 h-8 md:flex items-center justify-center rounded-full">
            <ChevronRight />
          </button>
          <button className="hidden z-10 custom-next absolute right-[72px] top-4/5 bg-white text-blue-500 w-8 h-8 md:flex items-center justify-center rounded-full ">
            <ChevronLeft />
          </button>
        </Swiper>
      </div>
    </div>
  );
}

export default Carousel;
