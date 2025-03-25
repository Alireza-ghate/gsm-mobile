"use client";

import { ProductInfoType } from "@/app/(main)/products/[slug]/page";
import { Check } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

function VarientsSelector({ product }: { product: ProductInfoType }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedCapacity = searchParams.get("capacity") || product.capacity[0]; //in the begening no searchParams in url (undefined)
  const selectedColor = searchParams.get("color") || product.colors[0];

  function handleCapacityChange(capacity: string) {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("capacity", capacity);
    router.push(`?${newParams.toString()}`, { scroll: false });
  }

  function handleColorChange(color: string) {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("color", color);
    router.push(`?${newParams.toString()}`, { scroll: false });
  }

  return (
    <>
      {/* capacity */}
      <div className="mb-6">
        <h2 className="font-semibold mb-4">حافظهٔ داخلی و رم</h2>
        <div className="flex items-center gap-1.5 md:gap-3 flex-wrap lg:flex-nowrap">
          {product.capacity.map((capacity, index) => (
            <div
              key={index}
              className={`flex items-end p-1 md:px-1.5 md:py-1 gap-1.5 cursor-pointer shrink-0 border border-gray-300 rounded-full ${
                selectedCapacity === capacity ? "bg-blue-100" : "bg-white"
              }`}
              onClick={() => handleCapacityChange(capacity)}
            >
              <span
                className={`border ${
                  selectedCapacity === capacity
                    ? "bg-blue-700"
                    : "bg-transparent"
                }  border-gray-300 rounded-full`}
              >
                <Check
                  size={16}
                  className={` ${
                    selectedCapacity === capacity
                      ? "text-blue-100"
                      : "text-transparent"
                  }`}
                />
              </span>
              <span
                style={{ direction: "ltr" }}
                className="text-xs text-gray-500"
              >
                {capacity}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* color */}
      <div className="mb-10">
        <h2 className="font-semibold mb-4">رنگ‌ها</h2>
        <div className="flex items-center gap-1.5 md:gap-3 flex-wrap lg:flex-nowrap">
          {product.colors.map((color, index) => (
            <div
              key={index}
              className={`flex items-center p-1 md:px-1.5 md:py-1 gap-1.5 cursor-pointer shrink-0 border border-gray-300 rounded-full ${
                selectedColor === color ? "bg-blue-100" : "bg-white"
              }`}
              onClick={() => handleColorChange(color)}
            >
              <span
                className={`border ${
                  selectedColor === color ? "bg-blue-700" : "bg-transparent"
                }  border-gray-300 rounded-full`}
              >
                <Check
                  size={16}
                  className={` ${
                    selectedColor === color
                      ? "text-blue-100"
                      : "text-transparent"
                  }`}
                />
              </span>
              <span
                style={{ direction: "ltr" }}
                className="text-xs text-gray-500"
              >
                {color}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default VarientsSelector;
