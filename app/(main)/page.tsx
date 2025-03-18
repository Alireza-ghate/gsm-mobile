import Brands from "@/components/shared/Brands";
import Carousel from "@/components/shared/Carousel";
import FeatureSection from "@/components/shared/FeatureSection";
import Services from "@/components/shared/Services";

export const metadata = {
  title: "از بررسی تا خرید موبایل",
};

function Homepage() {
  return (
    <div className="bg-gray-100 p-4">
      <Carousel />
      <Brands />
      <Services />
      <FeatureSection title="جدیدترین گوشی ها" />
    </div>
  );
}

export default Homepage;
