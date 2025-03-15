function SearchBar() {
  return (
    <div className="w-full">
      <form>
        <input
          className="w-full bg-gray-100 px-1.5 py-1 md:px-2.5 md:py-2 rounded-md outline-none focus:outline-none placeholder:text-sm focus:ring-2 focus:ring-blue-300 transition-all duration-150 focus:placeholder:text-gray-300"
          dir="rtl"
          type="text"
          name="searchInput"
          placeholder="جستجو در سایت"
        />
      </form>
    </div>
  );
}

export default SearchBar;
