"use client";

import { useState } from "react";
import HamberMenu from "./HamberMenu";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import LoginButton from "./LoginButton";
import Navigation from "./Navigation";
import CartModal from "./CartModal";

function HeaderClient() {
  const [isOpen, setisOpen] = useState<boolean>(false);

  function handleClick() {
    setisOpen((open) => !open); //toggle
  }

  return (
    <>
      <div className="max-w-[1280px] min-w-[350px] mx-auto px-4 sm:px-12 py-6 lg:flex lg:flex-col lg:gap-4">
        <div className="flex flex-wrap lg:flex-nowrap gap-2 sm:gap-2.5 md:gap-3 lg:gap-4 xl:gap-5.5 items-center">
          <div className="flex items-center gap-2">
            <HamberMenu isOpen={isOpen} onClick={handleClick} />
            <div className="w-[140px] sm:w-[190px] ">
              <Logo />
            </div>
          </div>
          <SearchBar />
          <LoginButton />
          <CartModal />
        </div>
      </div>
      <Navigation isOpen={isOpen} />
    </>
  );
}

export default HeaderClient;
