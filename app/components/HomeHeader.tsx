"use client";
import Link from "next/link";
import Image from "next/image";
import { BsCart3 } from "react-icons/bs";
import { GoHeart } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { TbUserExclamation } from "react-icons/tb";
import Logo from "../../public/Images/logo.png"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "../components/ui/sheet";

import { Menu } from "lucide-react";

const HomeHeader = () => {


  return (
    <>
      {/* Header Container */}
      <div className="absolute w-full h-[100px] left-0 top-0 p-4 bg-[#FBEBB5] z-50 flex justify-end">
  {/* Logo */}
  <div className="absolute left-0 md:left-4 md:top-4 top-0 flex items-center">
    <Image src={Logo} alt="Logo"  />
  </div>

  {/* Icons Container */}
  <div className="hidden absolute md:flex md:space-x-8 md:right-8 md:top-[36px]">
    <Link href="/cart">
      <div className="w-[28px] h-[28px]">
        <BsCart3 size={30} />
      </div>
    </Link>
    <div className="w-7 h-7">
      <GoHeart size={30} />
    </div>
    <div className="w-7 h-7">
      <IoSearchOutline size={30} />
    </div>
    <div className="w-7 h-7">
      <Link href="/">
        <TbUserExclamation size={30} />
      </Link>
    </div>
  </div>

  {/* Desktop Navigation */}
  <div className="flex ml-[300px]  md:h-[24px] md:left-[180px] md:top-[38px] absolute">
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
          
<div className="flex justify-end mt-4">
  <Sheet>
    <SheetTrigger className="md:hidden">
      <Menu className="w-7 h-7" />
    </SheetTrigger>

    {/* Menu Content */}
    <SheetContent>
      {/* Carts Section */}
      <div className="flex flex-row space-x-5 mt-6">
        <Link href="/cart">
          <div className="w-[28px] h-[28px] hidden">
            <BsCart3 size={30} />
          </div>
        </Link>
        <div className="w-7 h-7">
          <GoHeart size={30} />
        </div>
        <div className="w-7 h-7">
          <IoSearchOutline size={30} />
        </div>
        <div className="w-7 h-7">
          <Link href="/">
            <TbUserExclamation size={30} />
          </Link>
        </div>
      </div>

      {/* Navigation Links */}
      <ul className="flex flex-col space-y-10 mt-20 w-full font-bold ">
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
    </SheetContent>
  </Sheet>
</div>

        </div>

      </div>
    </>
  );
};

export default HomeHeader;

