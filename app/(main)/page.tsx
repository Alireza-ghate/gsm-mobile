import Brands from "@/components/shared/Brands";
import Carousel from "@/components/shared/Carousel";
import ProductSlider from "@/components/shared/ProductSlider";
import Services from "@/components/shared/Services";

export const metadata = {
  title: "از بررسی تا خرید موبایل",
};

function Homepage() {
  return (
    <>
      <Carousel />
      <div className="bg-gray-100 p-4">
        <Brands />
        <Services />
        <ProductSlider title="پرطرفدارترین گوشی‌ها" />
        <ProductSlider title="جدیدترین گوشی ها" />
      </div>
    </>
  );
}

export default Homepage;
