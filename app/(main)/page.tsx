import Brands from "@/components/shared/Brands";
import Carousel from "@/components/shared/Carousel";
import ProductSlider from "@/components/shared/ProductSlider";
import Services from "@/components/shared/Services";

export const metadata = {
  title: "از بررسی تا خرید موبایل",
};

// const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

async function Homepage() {
  // await delay(3000);
  return (
    <>
      <Carousel />
      <div>
        <Brands />
        <Services />
        <ProductSlider title="پرطرفدارترین گوشی‌ها" />
        <ProductSlider title="جدیدترین گوشی ها" />
      </div>
    </>
  );
}

export default Homepage;
