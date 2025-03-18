import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-50 pt-12 pb-20">
      <div className="max-w-[1280px] mx-auto px-8 sm:px-12 ">
        {/* logo */}
        <div className="mb-8 w-[190px] md:w-[278px]">
          <Link href={"/"}>
            <Image
              src="/images/logo/GSM-Logo.png"
              alt="لوگوی دیجی موبایل"
              width={276}
              height={48}
              priority
            />
          </Link>
        </div>

        {/* footer content */}
        <div className="flex flex-col gap-8 lg:flex-row item-center justify-between flex-wrap lg:flex-nowrap lg:gap-12 text-sm text-blue-200 leading-7">
          <p className="md:flex-1">
            جی‌اس‌ام، با ۱۹ سال سابقه درخشان، به‌عنوان اولین و معتبرترین مرجع
            تخصصی موبایل در ایران، خدماتی فراتر از یک مارکت‌پلیس عادی ارائه
            می‌دهد. جی‌اس‌ام با همکاری فروشگاه‌های معتبر در سراسر کشور، گوشی‌های
            موبایل موجود در بازار را با قیمت‌ منصفانه، ارسال سریع کمتر از ۳ ساعت
            در سراسر ایران، امکان تحویل حضوری و گارانتی انحصاری جی‌اس‌ام+ عرضه
            می‌کند.
          </p>
          <div className="md:flex-1">
            <p className="text-xl text-blue-100 font-semibold mb-2">
              لینک های پر بازدید
            </p>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href={"/"}>قیمت گوشی‌ها</Link>
              </li>
              <li>
                <Link href={"/"}>قیمت گوشی سامسونگ</Link>
              </li>
              <li>
                <Link href={"/"}>قیمت گوشی اپل</Link>
              </li>
              <li>
                <Link href={"/"}>قیمت گوشی شیائومی</Link>
              </li>
            </ul>
          </div>
          <div className="md:flex-1">
            <p className="text-blue-100 font-semibold text-xl mb-2">
              دسترسی سریع
            </p>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href={"/"}>تماس با ما</Link>
              </li>
              <li>
                <Link href={"/"}>درباره ما</Link>
              </li>
              <li>
                <Link href={"/"}>شرایط و قوانین</Link>
              </li>
            </ul>
          </div>
          <div className="md:flex-1">
            <p className="text-blue-100 font-semibold text-xl mb-6">
              جی‌اس‌ام در شبکه‌های اجتماعی:
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link
                className="hover:text-blue-400 transition-colors duration-150 p-2"
                href={"/"}
              >
                <Instagram />
              </Link>
              <Link
                className="hover:text-blue-400 transition-colors duration-150 p-2"
                href={"/"}
              >
                <Facebook />
              </Link>
              <Link
                className="hover:text-blue-400 transition-colors duration-150 p-2"
                href={"/"}
              >
                <Linkedin />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
