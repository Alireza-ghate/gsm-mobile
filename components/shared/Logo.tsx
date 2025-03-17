import Image from "next/image";
import Link from "next/link";

// static import if image is not inside public folder
// import Logo from "@/public/images/logo/GSM-Logo.png";

function Logo() {
  return (
    <Link href={"/"}>
      <Image
        src="/images/logo/GSM-Logo.png"
        alt="لوگوی دیجی موبایل"
        width={190}
        height={35}
        priority
      />
    </Link>
  );
}

export default Logo;
