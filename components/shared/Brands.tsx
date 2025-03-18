"use client";
import { BRANDS } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function Brands() {
  return (
    <div className="bg-white rounded-xl py-6 mb-4 relative overflow-hidden">
      {/* left gradient */}
      <div className="absolute left-0 top-0 h-full w-10 md:w-18 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
      <div className="wrapper">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={5}
          breakpoints={{
            375: { slidesPerView: 3 },
            640: { slidesPerView: 5 },
            768: { slidesPerView: 6 },
            1024: { slidesPerView: 12 },
          }}
        >
          {BRANDS.map((brand, index) => (
            <SwiperSlide key={index}>
              <Link
                className="flex flex-col gap-4 items-center"
                href={brand.href}
              >
                <div className="relative w-14 h-14">
                  <Image
                    className="object-contain"
                    src={brand.src}
                    alt={`لوگوی ${brand.label}`}
                    fill
                    priority
                  />
                </div>
                <p className="text-sm">{brand.label}</p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* right gradient */}
      <div className="absolute right-0 top-0 h-full w-10 md:w-18 bg-gradient-to-r from-transparent to-white pointer-events-none z-10"></div>
    </div>
  );
}

export default Brands;
