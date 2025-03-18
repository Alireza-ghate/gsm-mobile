import Image from "next/image";
import Link from "next/link";
import { ProductType } from "./FeatureSection";

type ProductItemProp = {
  product: ProductType;
};

function ProductItem({ product }: ProductItemProp) {
  return (
    <Link href={`/${product.slug}`}>
      <div className="bg-white p-3 flex flex-col gap-2 border border-gray-300 hover:border-gray-400 trainsition-all duration-150 rounded-xl">
        {/* image */}
        <div className="relative w-[145px] h-[145px] self-center">
          <Image src={product.featureImage} alt={product.title} fill />
        </div>
        {/* infos */}
        <div className="px-1">
          <div className=" mb-2">
            <p className="text-[10px] mb-1 text-gray-400">{product.brand}</p>
            <h2 className="text-sm font-semibold">{product.title}</h2>
          </div>
          <div className="flex items-center gap-1">
            {product.price ? (
              <>
                <span className="text-sm font-semibold">{product.price}</span>
                <span className="text-[10px] text-gray-400">تومان</span>
              </>
            ) : (
              <span>به زودی</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductItem;
