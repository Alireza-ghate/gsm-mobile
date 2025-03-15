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
    <div className="relative w-full max-w-[1500px] mx-auto min-w-[300px] md:rounded-xl">
      <Swiper
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
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
      >
        {images.map((slide, index) => (
          <SwiperSlide key={index} className="relative w-full">
            <Link
              target="_blank"
              href={slide.href}
              className="block relative w-full h-80 md:h-[420px]"
            >
              <Image
                src={slide.src}
                alt={`اسلاید ${index + 1}`}
                fill
                priority={true}
                className="object-cover md:rounded-xl"
              />
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
  );
}

export default Carousel;
