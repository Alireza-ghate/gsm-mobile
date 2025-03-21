import { ChevronLeft } from "lucide-react";
import Link from "next/link";

function Navigation({ isOpen }: { isOpen: boolean }) {
  return (
    <nav
      className={`${
        isOpen ? "block" : "hidden"
      } absolute z-[100] bg-white lg:pt-0 w-full h-screen right-0 lg:block lg:relative px-12 py-6 lg:h-auto max-w-[1280px] min-w-[350px] mx-auto`}
    >
      <ul className="flex flex-col gap-5 lg:flex-row lg:gap-4">
        <li>
          <Link className="flex items-center justify-between" href={"#"}>
            <span>خرید موبایل</span>
            <ChevronLeft size={20} strokeWidth={1.5} className="lg:hidden" />
          </Link>
        </li>
        <li>
          <Link className="flex items-center justify-between" href={"#"}>
            <span>لوازم جانبی</span>
            <ChevronLeft size={20} strokeWidth={1.5} className="lg:hidden" />
          </Link>
        </li>
        <li>
          <Link className="flex items-center justify-between" href={"#"}>
            <span>اخبار</span>
            <ChevronLeft size={20} strokeWidth={1.5} className="lg:hidden" />
          </Link>
        </li>
        <li>
          <Link className="flex items-center justify-between" href={"#"}>
            <span>بررسی‌ها</span>
            <ChevronLeft size={20} strokeWidth={1.5} className="lg:hidden" />
          </Link>
        </li>
        <li>
          <Link className="flex items-center justify-between" href={"#"}>
            <span>مقاله‌ها</span>
            <ChevronLeft size={20} strokeWidth={1.5} className="lg:hidden" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
