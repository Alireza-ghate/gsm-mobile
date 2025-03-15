import HamberMenu from "./HamberMenu";
import LoginButton from "./LoginButton";
import Logo from "./Logo";
import Navigation from "./Navigation";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <header className="bg-white border-b border-b-gray-200 z-50">
      <div className="max-w-[1280px] min-w-[350px] mx-auto relative bg-amber-300 px-12 py-6 lg:flex lg:flex-col lg:gap-4">
        <div className="flex flex-wrap lg:flex-nowrap gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5.5 items-center">
          <div className="flex items-center gap-2">
            <HamberMenu />
            <Logo />
          </div>

          {/* 1024px and below make it hidden */}
          <div className="hidden lg:block lg:flex-1">
            <SearchBar />
          </div>
          <LoginButton />
          {/* 1024px and above make it hidden */}
          <div className="lg:hidden w-full">
            <SearchBar />
          </div>
        </div>
      </div>

      <Navigation />
    </header>
  );
}

export default Header;
