import { Search } from "lucide-react";

function SearchBar() {
  return (
    <div className="w-full order-3 lg:order-0">
      <form className="relative">
        <Search
          strokeWidth={1.5}
          className="text-gray-400 z-10 absolute top-[20%] right-[1%] w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
        />
        <input
          className="w-full bg-gray-100 pr-8 pl-1.5 py-1 md:pr-10 md:pl-2.5 md:py-2 rounded-md outline-none focus:outline-none placeholder:text-sm focus:ring-2 focus:ring-blue-300 transition-all duration-150 focus:placeholder:text-gray-300"
          dir="rtl"
          type="text"
          name="searchInput"
          placeholder="جستجو در محصولات و اخبار روز"
        />
      </form>
    </div>
  );
}

export default SearchBar;
