"use client";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const brands = [
  {
    src: "/images/brands/brand_samsung_colored_3x_1_d15d556157.webp",
    href: "/",
    label: "سامسونگ",
  },
  {
    src: "/images/brands/brand_xiaomi_colored_3x_1_26f908cbea.webp",
    href: "/",
    label: "شیائومی",
  },
  {
    src: "/images/brands/brand_apple_colored_3x_1_a5f950863c.webp",
    href: "/",
    label: "اپل",
  },
  {
    src: "/images/brands/c9e01e05-b397-41cb-86bd-e7cf834fb4e3.webp",
    href: "/",
    label: "کیو سی وای",
  },
  {
    src: "/images/brands/brand_huawei_colored_3x_1_4cef727312.webp",
    href: "/",
    label: "هواوی",
  },
  {
    src: "/images/brands/brand_googel_colored_3x_1_b40f0de101.webp",
    href: "/",
    label: "گوگل",
  },
  {
    src: "/images/brands/brand_nokia_colored_3x_1_b2bd23df47.webp",
    href: "/",
    label: "نوکیا",
  },
  {
    src: "/images/brands/brand_asus_colored_3x_1_a704f9b126.webp",
    href: "/",
    label: "ایسوس",
  },
  {
    src: "/images/brands/brand_oneplus_colored3x.webp",
    href: "/",
    label: "وان‌پلاس",
  },
  {
    src: "/images/brands/4a86fe7a-72e4-4db5-b9b8-537d655e2ec6.webp",
    href: "/",
    label: "گلوریمی",
  },
  {
    src: "/images/brands/brand_honor_colored_3x_1_7711e3ad6e.webp",
    href: "/",
    label: "آنر",
  },
  {
    src: "/images/brands/ic_brand_nothing_colored3x.webp",
    href: "/",
    label: "ناتینگ",
  },
];

function Brands() {
  return (
    <div className="bg-white rounded-xl py-6 mb-4 relative overflow-hidden">
      {/* left gradient */}
      <div className="absolute left-0 top-0 h-full w-10 md:w-18 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
      <div className="wrapper">
        <Swiper
          className="overflow-hidden"
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
          {brands.map((brand, index) => (
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
