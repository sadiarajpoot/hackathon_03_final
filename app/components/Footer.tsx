import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <>
    <div className="relative w-full bg-white h-auto px-4 py-10 sm:py-8 mt-[70px]">
    <div className="flex flex-wrap justify-between items-start max-w-[1240px] mx-auto gap-6">
      {/* Address Section */}
      <div className="w-full sm:w-[285px] text-[#9F9F9F] Poppins text-[16px] leading-[24px] font-normal">
        <p>
          400 University Drive Suite 200 Coral Gables, FL 33134 USA
        </p>
      </div>

      {/* Links and Help Section */}
      <div className="flex flex-wrap justify-around w-full sm:w-auto gap-10 sm:gap-16">
        {/* Help */}
        <div className="flex flex-col">
          <h3 className="text-[#9F9F9F] font-medium text-[16px] leading-[24px] mb-9">Help</h3>
          <ul className="flex flex-col gap-6 Poppins font-medium text-[16px]">
            <Link href="/"><li>Home</li></Link>
            <Link href="/shop"><li>Shop</li></Link>
            <Link href="/about"><li>About</li></Link>
            <Link href="/contact"><li>Contact</li></Link>
          </ul>
        </div>

        {/* Links */}
        <div className="flex flex-col">
          <h3 className="text-[#9F9F9F] font-medium text-[16px] leading-[24px] mb-9">Links</h3>
          <ul className="flex flex-col gap-6 Poppins font-medium text-[16px]">
            <li>Payment Options</li>
            <li>Returns</li>
            <li>Privacy Policies</li>
          </ul>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="w-full sm:w-[286px]">
        <h3 className="text-[#9F9F9F] font-medium text-[16px] leading-[24px] mb-4">Newsletter</h3>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          className="flex-1 border-b border-black focus:outline-none focus:border-blue-500 text-[16px] px-1 py-2 placeholder-gray-400"
        />

        {/* Subscribe Button */}
        <button className=" py-2 text-black font-medium m-1 transition  border-b border-black">
          Subscribe
        </button>
      </div>
    </div>

    {/* Footer Bottom Line */}
    <div className="mt-8 border-t border-gray-300 pt-4">
      <p className="sm:text-center md:px-8 md:text-left text-[#000000] Poppins text-[16px] leading-[24px] font-normal">
        2022 Meubel House. All rights reserved.
      </p>
    </div>
  </div>
  </>
  );
};

export default Footer;
