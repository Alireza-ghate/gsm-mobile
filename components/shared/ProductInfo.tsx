import { type ProductInfoType } from "@/app/(main)/products/[slug]/page";
import { formatCurrenyToToman } from "@/lib/utils";
import { CircleCheck, Gift, ShieldCheck, Truck } from "lucide-react";
import AddToCart from "./AddToCart";
import ProductGallery from "./ProductGallery";
import VarientsSelector from "./VarientsSelector";

function ProductInfo({ product }: { product: ProductInfoType }) {
  return (
    <div className="py-12 sm:px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-6 place-items-center">
      <ProductGallery images={product.images} />
      <div className="self-start">
        <h1 className="text-xl md:text-2xl font-semibold mb-4 mt-6">
          {product.title}
        </h1>
        <span className="text-gray-400 text-xs bg-gray-100 px-6 py-1 rounded-full">
          {product.brand}
        </span>
        <div className="flex gap-2 flex-col xl:flex-row items-center justify-between mt-8 mb-4 text-sm text-blue-400">
          <div className="flex gap-2 items-center bg-blue-50 rounded-full px-10 py-2 w-full justify-center">
            <span>
              <Truck />
            </span>
            <span>ارسال رایگان زیر ۴۸ ساعت</span>
          </div>
          <div className="flex gap-2 items-center bg-blue-50 rounded-full px-10 py-2 w-full justify-center">
            <span>
              <Gift />
            </span>
            <span>بیمه سرقت و تعمیر رایگان</span>
          </div>
        </div>
        <div className="text-gray-500 text-sm space-y-1 mb-4 mt-6">
          <p>با تغییر ویژگی‌های زیر، قیمت گوشی ممکن است تغییر کند.</p>
          <p>
            توجه کنید که بعضی از ویژگی‌ها تنها در ترکیب‌های خاصی موجود هستند.
          </p>
        </div>
        <VarientsSelector product={product} />
        <div className="h-[300px] bg-gray-100 rounded-xl px-4">
          <div className="text-gray-600 flex items-center gap-1 border-b border-gray-200 py-4">
            <ShieldCheck />
            <span className="text-sm">18 ماه گارانتی</span>
          </div>
          <div className="text-gray-600 flex items-center gap-1 border-b border-gray-200 py-4">
            <CircleCheck />
            <span className="text-sm">موجود در انبار</span>
          </div>

          <div className="flex items-center justify-between py-4">
            <AddToCart />
            <span className="text-2xl text-red-600 font-semibold">
              {formatCurrenyToToman(product.price)}{" "}
              <span className="text-sm ">تومان</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
