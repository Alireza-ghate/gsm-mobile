import HamberMenu from "./HamberMenu";
import LoginButton from "./LoginButton";
import Logo from "./Logo";
import Navigation from "./Navigation";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <header className="bg-white border-b border-b-gray-200 z-50">
      <div className="max-w-[1280px] min-w-[350px] mx-auto relative px-12 py-6 lg:flex lg:flex-col lg:gap-4">
        <div className="flex flex-wrap lg:flex-nowrap gap-2 sm:gap-2.5 md:gap-3 lg:gap-4 xl:gap-5.5 items-center">
          <div className="flex items-center gap-2">
            <HamberMenu />
            <div className="w-[140px] sm:w-[190px] ">
              <Logo />
            </div>
          </div>
          <SearchBar />
          <LoginButton />
        </div>
      </div>

      <Navigation />
    </header>
  );
}

export default Header;
