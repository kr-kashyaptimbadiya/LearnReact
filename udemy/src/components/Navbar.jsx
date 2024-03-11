import React from "react";
import {
  ShoppingCartIcon,
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import Udemy from "./Udemy";

function Navbar() {
  return (
    <div>
      <div className="flex space-x-4 bg-white h-[54px] shadow-lg text-center justify-between items-center px-4">
        <MenuIcon className="h-6 w-6 md:hidden" />
        <h2 className="text-3xl font-bold">udemy</h2>
        <h3 className="hidden text-sm md:block">Categories</h3>
        <form className="hidden bg-[#f8fafb] md:flex border border-black rounded-3xl flex-1 h-12 items-center">
          <SearchIcon className="h-5 w-5 mx-4 text-gray-400" />

          <input
            type="text"
            placeholder="Search For Anything"
            className="bg-transparent text-sm outline-none"
          />
        </form>
        <h3 className="hidden text-sm lg:block">Udemy Business</h3>
        <h3 className="hidden text-sm lg:block md:hidden">Teach On Udemy</h3>
        <div className="flex"></div>
        <div className="flex">
          <SearchIcon className="h-6 w-6 text-gray-400 md:hidden" />
          <ShoppingCartIcon className="h-6 w-6" />
        </div>
        <div className="hidden md:flex pr-4 space-x-4 justify-end">
          <button className="border border-black h-10 text-s font-bold w-20 hover:bg-[#F5F5F5]">
            LOGIN
          </button>
          <button className="border bg-black text-white border-black h-10 text-s font-bold w-20 ">
            SignUp
          </button>
          <button className="border border-black w-10 flex items-center justify-center hover:bg-[#F5F5F5]">
            <GlobeAltIcon className="h-5 w-5"></GlobeAltIcon>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
