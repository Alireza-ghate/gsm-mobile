import ProductInfo from "@/components/shared/ProductInfo";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChevronLeft } from "lucide-react";

// if we had server component we use PARAMS and AWAIT it
// if we had client component we use useParams()

// if content of this page stays still and would not change over time use generateStaticParams() (ssg)
// if content changes regluarly let it dynamic render (ssr)

/* export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // 1) get the product
  const product = await fetch();

  //  2) use product infos as page title
  return {
    title: `${product.title}`,
    description: product.description
  };
} */

export type ProductInfoType = {
  title: string;
  images: string[];
  capacity: string[];
  colors: string[];
  stock: number;
  brand: string;
  price: number;
  discount: number;
};

async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const productSlug = slug; //get the single product using this

  // fake product
  const product = {
    title: "اپل آیفون 13 Ch - نات‌اکتیو ظرفیت 128GB رم 4GB",
    images: [
      "/images/products/apple_iphone_13-main.webp",
      "/images/products/apple_iphone_13-66317.webp",
      "/images/products/apple_iphone_13-66318.webp",
      "/images/products/apple_iphone_13-66319.webp",
      "/images/products/apple_iphone_13-66325.webp",
      "/images/products/apple_iphone_13-66326.webp",
      "/images/products/apple_iphone_13-66316.webp",
    ],
    capacity: ["128 GB-4 GB", "512 GB-4 GB", "256 GB-4 GB"],
    colors: ["آبی", "قرمز", "سفید", "مشکی", "صورتی"],
    stock: 5,
    brand: "اپل",
    price: 50000000,
    discount: 0,
  };

  return (
    <div className="bg-white rounded-xl p-4">
      <Breadcrumb className="px-1.5 py-1 ">
        <BreadcrumbList className="text-xs md:text-sm">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">خانه</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <ChevronLeft />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="/products">خرید موبایل</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <ChevronLeft />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage className="font-semibold">
              {product.title}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="max-w-[1280px] mx-auto">
        {/* gallery + product info */}
        <ProductInfo product={product} />
      </div>
    </div>
  );
}

export default ProductDetailsPage;
