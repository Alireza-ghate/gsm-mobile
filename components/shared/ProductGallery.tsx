"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

function ProductGallery({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);
  const thumbnailRef = useRef<HTMLDivElement | null>(null);

  // change main slider
  function handleNext() {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }
  function handlePrev() {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }

  // control thumbnails scroll
  function scrollThumbnail(direction: "left" | "right") {
    if (thumbnailRef.current) {
      const scrollAmount = 100;
      if (direction === "left") {
        thumbnailRef.current.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      } else {
        thumbnailRef.current.scrollBy({
          left: -scrollAmount,
          behavior: "smooth",
        });
      }
    }
  }

  return (
    <div className="flex flex-col gap-4 items-center self-baseline">
      {/* main slider */}
      <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] relative">
        <Image
          src={images[current]}
          alt={`اسلاید شماره ی ${current + 1}`}
          fill
          priority
          className="object-cover"
        />

        {/* main slider nav buttons */}
        <button
          onClick={handleNext}
          className="absolute -left-6 top-1/2 -translate-y-1/2 bg-blue-50 text-blue-700 rounded-full p-2"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={handlePrev}
          className="absolute -right-6 top-1/2 -translate-y-1/2 bg-blue-50 text-blue-700 rounded-full p-2"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* thumbnails silder */}
      <div className="relative">
        <div
          ref={thumbnailRef}
          className="flex items-center overflow-x-scroll no-scrollbar gap-4 w-[300px] md:w-[400px]"
        >
          {images.map((src, index) => (
            <div
              onClick={() => setCurrent(index)}
              key={index}
              className={`w-[75px] h-[75px] rounded-md overflow-hidden shrink-0 relative border-2 ${
                current === index ? "border-blue-600" : "border-transparent"
              }`}
            >
              <Image
                src={src}
                alt={`اسلاید شماره ی ${current + 1}`}
                fill
                priority
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* thumbnail nav btns */}
        <button
          className="absolute -left-10 -translate-y-1/2 bg-blue-50 text-blue-600 p-1 rounded-full top-1/2"
          onClick={() => scrollThumbnail("right")}
        >
          <ChevronLeft size={20} />
        </button>
        <button
          className="absolute -right-10 -translate-y-1/2 bg-blue-50 text-blue-600 p-1 rounded-full top-1/2"
          onClick={() => scrollThumbnail("left")}
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}

export default ProductGallery;

{
  /* <div className="w-[320px] h-[320px] relative">
        <Image
          className="object-cover object-center"
          src={images[current]}
          alt={`اسلاید شماره ی ${current + 1}`}
          fill
          priority
        />
      </div>

      <div className="bg-gray-400 overflow-x-auto flex gap-2 items-center">
        {images.map((image, index) => (
          <div
            onClick={() => setCurrent(index)}
            className="relative w-[80px] h-[80px] shrink-0"
            key={index}
          >
            <Image
              src={image}
              alt={`محصول شماره ی ${index + 1}`}
              priority
              fill
            />
          </div>
        ))}
      </div> */
}
