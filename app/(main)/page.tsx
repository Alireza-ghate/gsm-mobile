import Brands from "@/components/shared/Brands";
import Carousel from "@/components/shared/Carousel";

export const metadata = {
  title: "از بررسی تا خرید موبایل",
};

function Homepage() {
  return (
    <div className="bg-gray-100 p-4">
      <Carousel />
      <Brands />
    </div>
  );
}

export default Homepage;
