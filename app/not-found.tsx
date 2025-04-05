import Link from "next/link";

function NotFoundPage() {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="flex items-center justify-center flex-col shadow-md p-20">
        <h1 className="text-2xl font-semibold mb-8">صفحه مورد نظر یافت نشد</h1>
        <Link
          className="bg-blue-600 border border-blue-600 px-4 py-2 rounded-md text-blue-50 hover:bg-blue-500 transition-colors duration-150"
          href="/"
        >
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
