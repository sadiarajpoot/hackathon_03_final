"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsCart3 } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import Logo from "../../public/Images/logo.png";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "../components/ui/sheet";

import { Menu } from "lucide-react";
import AuthButtons from "./AuthButtons";




const HomeHeader = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const handleSearchClick = () => {
    setIsSearchOpen(true);
  };

  const handleCloseSearch = () => {
    setIsSearchOpen(false);
  };

  return (
    <>


      <div className="absolute w-full h-[100px] left-0 top-0 p-4 bg-[#FBEBB5] z-50 flex justify-end">
        {/* Logo */}
        <div className="absolute left-0 md:left-4 md:top-4 top-0 flex items-center">
          <Image src={Logo} alt="Logo" />
        </div>

        {/* Icons Container */}
        <div className="hidden absolute md:flex md:space-x-8 md:right-8 md:top-[36px]">



          <div className="w-7 h-7 ">
            <IoSearchOutline size={30} onClick={handleSearchClick} className="cursor-pointer" />
          </div>
          
          <AuthButtons />

        </div>

        {/* Desktop Navigation */}

        <div className="flex ml-[300px] md:h-[24px] md:left-[180px] md:top-[38px] absolute">
          <ul className="hidden md:flex flex-row justify-between space-x-9 w-full Poppins font-medium">
            <Link href="/">
              <li className="cursor-pointer">Home</li>
            </Link>
            <Link href="/shop">
              <li className="cursor-pointer">Shop</li>
            </Link>
            <Link href="/about">
              <li className="cursor-pointer">About</li>
            </Link>
            <Link href="/contact">
              <li className="cursor-pointer">Contact</li>

            </Link>
          
          </ul>

          <div className="flex justify-end ">

            <Sheet>
           
  {/* Auth Button Wrapper */}
  <div className="w-28 h-12 flex items-center justify-center sm:block md:hidden">
  <button className="w-full h-full text-black font-medium rounded-lg transition-all flex items-center justify-center">
    <AuthButtons />
  </button>
  <div className="w-7 h-7">
    <IoSearchOutline size={25} onClick={handleSearchClick} className="cursor-pointer absolute left-[74px] top-3" />
  </div>
</div>


  {/* Menu Button */}
  <SheetTrigger className="flex md:hidden items-center space-x-9">
  <Menu className="w-10 h-10" />
</SheetTrigger>


              {/* Menu Content */}
              <SheetContent>
                {/* Carts Section */}
      
                <div className=" w-7 h-7 flex items-center justify-center cursor-pointer transition-all duration-300 rounded-full p-2 hover:scale-105">
                  <Link href="/">
                    {/* <UserProfile /> */}
                  </Link>
                </div>
                <div className="flex flex-row space-x-5 mt-6">
                  <Link href="/cart">
                    <div className="w-[28px] h-[28px] hidden">
                      <BsCart3 size={30} />
                    </div>
                  </Link>


                </div>
                {/* Navigation Links */}
                {/* <div className="w-7 h-7">
                  <IoSearchOutline size={30} onClick={handleSearchClick} className="cursor-pointer absolute top-6" />
                </div> */}
                
                <ul className="flex flex-col space-y-10 space-x-9 mt-20 w-full font-medium ">
        
                  <Link href="/">

                   <li className="cursor-pointer ml-9">Home</li>
                  </Link>
                  <Link href="/shop">
                    <li className="cursor-pointer">Shop</li>
                  </Link>
                  <Link href="/about">
                    <li className="cursor-pointer">About</li>
                  </Link>
                  <Link href="/contact">
                    <li className="cursor-pointer">Contact</li>
                  </Link>

                </ul>
                <div className="flex justify-around mt-24 mr-9">
                  {/* <button className="Poppins text-slate-500 font-medium"><Link href="/signup">Sign Up</Link></button>
               <button className="w-28 h-12 Poppins text-slate-500 font-medium border border-slate-400"><Link href="/login">Login</Link></button> */}


                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

      </div>

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            {/* Close Button */}
            <button
              onClick={handleCloseSearch}
              className="text-gray-500 hover:text-gray-700 float-right text-xl"
            >
              &times;
            </button>

            {/* Search Input */}
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Search</h2>
            <input
              type="text"
              placeholder="Search here..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

      )}

    </>
  );
};

export default HomeHeader;
