import { Info } from "lucide-react";
import Image from "next/image";

function Services() {
  return (
    <div className="bg-white rounded-xl mb-4 py-6 text-[12px] md:text-sm text-gray-400">
      <div className="max-w-[700px] mx-auto px-4">
        <div className="flex items-start sm:items-center justify-center divide-x divide-gray-200">
          <div className="flex flex-col gap-2.5 items-center flex-1">
            <Image
              src={"/images/services/guarantee.svg"}
              alt="پرداخت امن"
              width={48}
              height={48}
            />
            <p>پرداخت امن</p>
          </div>
          <div className="flex flex-col gap-2.5 items-center flex-1">
            <Image
              src={"/images/services/refund.svg"}
              alt="قیمت منصفانه"
              width={48}
              height={48}
            />
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1 cursor-pointer">
              <p>قیمت منصفانه</p>
              <Info size={16} />
            </div>
          </div>
          <div className="flex flex-col gap-2.5 items-center flex-1">
            <Image
              src={"/images/services/delivery.svg"}
              alt="ارسال سریع"
              width={48}
              height={48}
            />
            <p>ارسال سریع</p>
          </div>
          <div className="flex flex-col gap-2.5 items-center flex-1">
            <Image
              src={"/images/services/price-cut.svg"}
              alt="خرید اقساطی"
              width={48}
              height={48}
            />
            <p>خرید اقساطی</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
