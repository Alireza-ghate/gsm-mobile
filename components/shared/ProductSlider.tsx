"use client";

import { formatCurrenyToToman } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductItem from "./ProductItem";

export type ProductType = {
  title: string;
  slug: string;
  brand: string;
  featureImage: string;
  price: string;
};

// delete me
const items: ProductType[] = [
  {
    title: "گوشی شیائومی پوکو M7 ظرفیت 128GB رم 6GB",
    slug: "xiaomi-poco-m7",
    brand: "شیائومی",
    featureImage: "/images/products/p-1.webp",
    price: formatCurrenyToToman(16217000),
  },
  {
    title: "گوشی شیائومی پوکو M7 ظرفیت 128GB رم 6GB",
    slug: "xiaomi-poco-m7",
    brand: "شیائومی",
    featureImage: "/images/products/p-1.webp",
    price: formatCurrenyToToman(16217000),
  },
  {
    title: "گوشی شیائومی پوکو M7 ظرفیت 128GB رم 6GB",
    slug: "xiaomi-poco-m7",
    brand: "شیائومی",
    featureImage: "/images/products/p-1.webp",
    price: formatCurrenyToToman(16217000),
  },
  {
    title: "گوشی شیائومی پوکو M7 ظرفیت 128GB رم 6GB",
    slug: "xiaomi-poco-m7",
    brand: "شیائومی",
    featureImage: "/images/products/p-1.webp",
    price: formatCurrenyToToman(16217000),
  },
  {
    title: "گوشی شیائومی پوکو M7 ظرفیت 128GB رم 6GB",
    slug: "xiaomi-poco-m7",
    brand: "شیائومی",
    featureImage: "/images/products/p-1.webp",
    price: formatCurrenyToToman(16217000),
  },
  {
    title: "گوشی شیائومی پوکو M7 ظرفیت 128GB رم 6GB",
    slug: "xiaomi-poco-m7",
    brand: "شیائومی",
    featureImage: "/images/products/p-1.webp",
    price: formatCurrenyToToman(16217000),
  },
];

function ProductSlider({ title }: { title: string }) {
  return (
    <div className="bg-white rounded-xl p-6 my-4 md:px-8 md:py-12">
      <div className="wrapper">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl lg:text-2xl font-semibold">{title}</h2>
            <div className="text-blue-400 flex items-center cursor-pointer group ">
              <Link
                className="group-hover:translate-x-[2px] transition-all duration-300"
                href={"/"}
              >
                مشاهده همه
              </Link>
              <ChevronLeft
                className="group-hover:-translate-x-[2px] transition-all duration-300"
                size={20}
              />
            </div>
          </div>
          <div>
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={6}
              breakpoints={{
                375: { slidesPerView: 1.5 },
                400: { slidesPerView: 1.75 },
                640: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 5 },
                1280: { slidesPerView: 6 },
              }}
            >
              {items.map((product, index) => (
                <SwiperSlide key={index}>
                  <ProductItem product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductSlider;
