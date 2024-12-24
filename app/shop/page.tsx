
import React from 'react'
import Image from 'next/image'
import shopLogo from "../../public/Images/shop logo.png"
import arrow from "../../public/Images/dashicons_arrow-down-alt2.png"
import Group57 from "../../public/Images/Group 57.png"
import Round from "../../public/Images/ci_grid-big-round.png"
import List from "../../public/Images/bi_view-list.png"
import Item1 from "../../public/Images/item1.png"
import Item2 from "../../public/Images/item 2.png"
import Item3 from "../../public/Images/item 3.png"
import Item4 from "../../public/Images/item 4.png"
import Item5 from "../../public/Images/item 5.png"
import Item6 from "../../public/Images/item 6.png"
import Item7 from "../../public/Images/item 7.png"
import Item8 from "../../public/Images/item 8.png"
import Item9 from "../../public/Images/item 9.png"
import Item10 from "../../public/Images/item 10.png"
import Item11 from "../../public/Images/item11.png"
import Item12 from "../../public/Images/item 12.png"
import Item13 from "../../public/Images/item 13.png"
import Item14 from "../../public/Images/item14.png"
import Item15 from "../../public/Images/item 15.png"
import Item16 from "../../public/Images/item16.png"
import Link from 'next/link'
import Footer from '../components/Footer'
import PagesHeader from "../components/PagesHeader";
const Shop = () => {
  
  return (
    <>
      <PagesHeader />
      <div className="absolute w-full h-[316px] left-0 top-[100px] bg-cover bg-no-repeat filter blur-[3px]" style={{ backgroundImage: 'url(/Images/shop.png)' }}>
</div>

<Image src={shopLogo} alt="shopLogo" className="absolute w-[124px] h-[132px] left-[50%] sm:left-[658px] top-[161px] transform -translate-x-1/2 sm:translate-x-0" />

<div className="absolute w-full sm:w-[121px] sm:h-[24px] left-0 sm:left-[660px] top-[295px] flex justify-center sm:justify-start items-center sm:space-x-2">
  <h3 className="text-black Poppins font-medium text-[16px] leading-[24px]">Home</h3>
  <Image src={arrow} alt="arrow" className="w-[16px] h-[16px]" />
  <h3 className="text-black font-poppins font-light text-[16px] leading-[24px]">Shop</h3>
</div>
{/* bar */}
<div className="absolute w-full bg-[#FAF4F4] md:h-[100px] h-auto left-0 top-[463px] flex flex-col sm:flex-row justify-between items-center sm:items-start">
  {/* <!-- Group57 Image --> */}
  {/* <!-- List Image --> */}
  <div className="w-[24px] h-[24px] mt-10">
 
  </div>

  {/* <!-- Showing Text and HR --> */}
  <div className="mt-9 flex justify-center sm:justify-start items-center md:space-x-6 space-x-2 sm:ml-[50px]">
  <Image src={Group57} alt="Group57" />
  <Image src={Round} alt="Round" />
  <Image src={List} alt="List" />
    <hr className="w-[37px] h-0 border-2 border-[#9F9F9F] transform rotate-90" />
    <h3 className="text-black Poppins font-normal text-[14px] ml-4">Showing 1–16 of 32 results</h3>
  </div>

  {/* <!-- Show Section --> */}
  <div className="flex justify-center sm:justify-start items-center mt-9 sm:ml-auto">
    <h3 className="text-black Poppins font-normal text-[20px] leading-[30px] p-3">Show</h3>
    <div className="w-[55px] h-[55px] bg-white flex justify-center items-center">
      <h3 className="text-[#9F9F9F] Poppins font-normal text-[20px] leading-[30px]">16</h3>
    </div>
  </div>

  {/* <!-- Sort Section --> */}
  <div className="flex justify-center sm:justify-start items-center mt-9 sm:ml-[30px]">
    <h3 className="text-black Poppins font-normal text-[16px] p-4">Sort by Default</h3>
    <div className="bg-white w-[140px] h-[50px] flex justify-center items-center mr-4">
      <h3 className="text-[#9F9F9F] Poppins font-normal text-[20px] leading-[30px]">Default</h3>
    </div>
  </div>
</div>


      {/* group 79 */}
      <div className="w-full h-auto md:py-10">
  {/* Group 64 */}
  <div className="w-full md:w-[1240px] h-auto flex flex-wrap justify-between mx-auto md:mt-[580px] mt-[900px]">
    <Link href={`/shop/ProductsDetails${1}`} className="relative w-full sm:w-[45%] md:w-[287px] mb-4 md:mb-0">
      <div className="relative w-full h-[372px]">
        <Image src={Item1} alt="Item1" />
        <h3 className="w-[194px] h-[24px] text-[16px] Poppins font-normal leading-[24px] text-black">
          Trenton modular sofa_3
        </h3>
        <h3 className="absolute w-[158px] text-[24px] Poppins font-medium leading-[36px] text-black">
          Rs. 25,000.00
        </h3>
      </div>
    </Link>
    <Link href={`/shop/ProductsDetails${2}`} className="relative w-full sm:w-[45%] md:w-[287px] mb-4 md:mb-0">
      <div className="relative w-full h-[372px]">
        <Image src={Item2} alt="Item2" />
        <h3 className="w-[194px] h-[24px] text-[16px] Poppins font-normal leading-[24px] text-black">
          Granite dining table with dining chair
        </h3>
        <h3 className="absolute w-[158px] top-[340px] text-[24px] Poppins font-medium leading-[36px] text-black">
          Rs. 25,000.00
        </h3>
      </div>
    </Link>
    <Link href={`/shop/ProductsDetails${3}`} className="relative w-full sm:w-[45%] md:w-[287px] mb-4 md:mb-0">
      <div className="relative w-full h-[372px]">
        <Image src={Item3} alt="Item3" />
        <h3 className="w-[194px] h-[24px] text-[16px] Poppins font-normal leading-[24px] text-black">
          Outdoor bar table and stool
        </h3>
        <h3 className="absolute w-[158px] top-[340px] text-[24px] Poppins font-medium leading-[36px] text-black">
          Rs. 25,000.00
        </h3>
      </div>
    </Link>
    <Link href={`/shop/ProductsDetails${4}`} className="relative w-full sm:w-[45%] md:w-[287px] mb-4 md:mb-0">
      <div className="relative w-full h-[372px]">
        <Image src={Item4} alt="Item4" />
        <h3 className="w-[194px] h-[24px] text-[16px] Poppins font-normal leading-[24px] text-black">
          Plain console with teak mirror
        </h3>
        <h3 className="absolute w-[158px] top-[340px] text-[24px] Poppins font-medium leading-[36px] text-black">
          Rs. 25,000.00
        </h3>
      </div>
    </Link>
  </div>

  {/* Group 80 */}
  <div className="w-full md:w-[1240px] h-auto flex flex-wrap justify-between mx-auto mt-[20px]">
    <Link href={`/shop/ProductsDetails${5}`} className="relative w-full sm:w-[45%] md:w-[287px] mb-4 md:mb-0">
      <div className="relative w-full h-[372px]">
        <Image src={Item5} alt="Item5" />
        <h3 className="w-[194px] h-[24px] text-[16px] Poppins font-normal leading-[24px] text-black">
          Grain coffee table
        </h3>
        <h3 className="absolute w-[158px] text-[24px] Poppins font-medium leading-[36px] text-black">
          Rs. 15,000.00
        </h3>
      </div>
    </Link>
    <Link href={`/shop/ProductsDetails${6}`} className="relative w-full sm:w-[45%] md:w-[287px] mb-4 md:mb-0">
      <div className="relative w-full h-[372px]">
        <Image src={Item6} alt="Item6" />
        <h3 className="w-[194px] h-[24px] text-[16px] Poppins font-normal leading-[24px] text-black">
          Kent coffee table
        </h3>
        <h3 className="absolute w-[158px] top-[340px] text-[22px] Poppins font-medium leading-[36px] text-black">
          Rs. 225,000.00
        </h3>
      </div>
    </Link>
    <Link href={`/shop/ProductsDetails${7}`} className="relative w-full sm:w-[45%] md:w-[287px] mb-4 md:mb-0">
      <div className="relative w-full h-[372px]">
        <Image src={Item7} alt="Item7" />
        <h3 className="w-[194px] h-[24px] text-[15px] Poppins font-normal leading-[24px] text-black">
          Round coffee table_color 2
        </h3>
        <h3 className="absolute w-[158px] top-[340px] text-[22px] Poppins font-medium leading-[36px] text-black">
          Rs. 251,000.00
        </h3>
      </div>
    </Link>
    <Link href={`/shop/ProductsDetails${8}`} className="relative w-full sm:w-[45%] md:w-[287px] mb-4 md:mb-0">
      <div className="relative w-full h-[372px]">
        <Image src={Item8} alt="Item8" />
        <h3 className="w-[194px] h-[24px] text-[16px] Poppins font-normal leading-[24px] text-black">
          Reclaimed teak coffee table
        </h3>
        <h3 className="absolute w-[158px] top-[340px] text-[22px] Poppins font-medium leading-[36px] text-black">
          Rs. 25,200.00
        </h3>
      </div>
    </Link>
  </div>

  {/* Group 82 */}
  <div className="w-full md:w-[1240px] h-auto flex flex-wrap justify-between mx-auto mt-[0px]">
    <Link href={`/shop/ProductsDetails${9}`} className="relative w-full sm:w-[45%] md:w-[287px] mb-4 md:mb-0">
      <div className="relative w-full h-[372px]">
        <Image src={Item9} alt="Item9" />
        <h3 className="w-[194px] h-[24px] text-[16px] Poppins font-normal leading-[24px] text-black">
          Plain console_
        </h3>
        <h3 className="absolute w-[158px] text-[22px] Poppins font-medium leading-[36px] text-black">
          Rs. 258,200.00
        </h3>
      </div>
    </Link>
    <Link href={`/shop/ProductsDetails${10}`} className="relative w-full sm:w-[45%] md:w-[287px] mb-4 md:mb-0">
      <div className="relative w-full h-[372px]">
        <Image src={Item10} alt="Item10" />
        <h3 className="w-[194px] h-[24px] text-[16px] Poppins font-normal leading-[24px] text-black">
          Reclaimed teak Sideboard
        </h3>
        <h3 className="absolute w-[158px] top-[340px] text-[24px] Poppins font-medium leading-[36px] text-black">
          Rs. 20,000.00
        </h3>
      </div>
    </Link>
    <Link href={`/shop/ProductsDetails${11}`} className="relative w-full sm:w-[45%] md:w-[287px] mb-4 md:mb-0">
      <div className="relative w-full h-[372px]">
        <Image src={Item11} alt="Item11" />
        <h3 className="w-[194px] h-[24px] text-[16px] Poppins font-normal leading-[24px] text-black">
          SJP_0825
        </h3>
        <h3 className="absolute w-[158px] text-[20px] Poppins font-medium leading-[36px] text-black">
          Rs. 200,000.00
        </h3>
      </div>
    </Link>
    <Link href={`/shop/ProductsDetails${12}`} className="relative w-full sm:w-[45%] md:w-[287px] mb-4 md:mb-0">
      <div className="relative w-full h-[372px]">
        <Image src={Item12} alt="Item12" />
        <h3 className="w-[194px] h-[24px] text-[16px] Poppins font-normal leading-[24px] text-black">
          Bella chair and table
        </h3>
        <h3 className="absolute w-[158px] text-[20px] Poppins font-medium leading-[36px] text-black">
          Rs. 100,000.00
        </h3>
      </div>
    </Link>
  </div>

  {/* Group 82 */}
  <div className="w-full md:w-[1240px] h-auto flex flex-wrap justify-between mx-auto mt-[20px]">
    <Link href={`/shop/ProductsDetails${13}`} className="relative w-full sm:w-[45%] md:w-[287px] mb-4 md:mb-0">
      <div className="relative w-full h-[372px]">
        <Image src={Item13} alt="Item13" />
        <h3 className="w-[194px] h-[24px] text-[16px] Poppins font-normal leading-[24px] text-black">
          Granite square side table
        </h3>
        <h3 className="absolute w-[158px] top-[330px] text-[21px] Poppins font-medium leading-[36px] text-black">
          Rs. 258,800.00
        </h3>
      </div>
    </Link>
    <Link href={`/shop/ProductsDetails${14}`} className="relative w-full sm:w-[45%] md:w-[287px] mb-4 md:mb-0">
      <div className="relative w-full h-[372px]">
        <Image src={Item14} alt="Item14" />
        <h3 className="w-[194px] h-[24px] text-[16px] Poppins font-normal leading-[24px] text-black">
          Asgaard sofa
        </h3>
        <h3 className="absolute w-[158px] text-[21px] Poppins font-medium leading-[36px] text-black">
          Rs. 250,000.00
        </h3>
      </div>
    </Link>
    <Link href={`/shop/ProductsDetails${15}`} className="relative w-full sm:w-[45%] md:w-[287px] mb-4 md:mb-0">
      <div className="relative w-full h-[372px]">
        <Image src={Item15} alt="Item15" />
        <h3 className="w-[194px] h-[24px] text-[16px] Poppins font-normal leading-[24px] text-black">
          Maya sofa three seater
        </h3>
        <h3 className="absolute w-[158px] text-[21px] Poppins font-medium leading-[36px] text-black">
          Rs. 115,000.00
        </h3>
      </div>
    </Link>
    <Link href={`/shop/ProductsDetails${16}`} className="relative w-full sm:w-[45%] md:w-[287px] mb-4 md:mb-0">
      <div className="relative w-full h-[372px]">
        <Image src={Item16} alt="Item16" />
        <h3 className="w-[194px] h-[24px] text-[16px] Poppins font-normal leading-[24px] text-black">
          Outdoor sofa set
        </h3>
        <h3 className="absolute w-[158px] text-[21px] Poppins font-medium leading-[36px] text-black">
          Rs. 244,000.00
        </h3>
      </div>
    </Link>
  </div>
</div>


      {/* Group 72 */}
      <div className="w-full sm:w-[392px] h-[60px] flex absolute md:left-[600px] md:space-x-4 space-x-2 p-2 sm:justify-start mt-8">
  <div className="w-[60px] h-[60px] bg-[#FBEBB5] rounded-[10px] flex justify-center items-center">
    <h3 className="text-[20px] text-black">1</h3>
  </div>
  <div className="w-[60px] h-[60px] bg-[#FFF9E5] rounded-[10px] flex justify-center items-center text-[20px] text-black sm:left-[100px]">
    2
  </div>
  <div className="w-[60px] h-[60px] bg-[#FFF9E5] rounded-[10px] flex justify-center items-center text-[20px] text-black sm:left-[195px]">
    3
  </div>
  <div className="w-[98px] h-[60px] bg-[#FFF9E5] rounded-[10px] flex justify-center items-center text-[20px] text-black sm:left-[294px]">
    next
  </div>
</div>

      {/* group 76 */}
      
<div className="bg-[#FAF4F4] w-full md:h-[300px] h-auto p-16 md:mt-[160px] mt-[140px]">
  <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-6">
    
    {/* Free Delivery Section */}
    <div className="w-full md:w-[376px] text-center md:text-left">
      <h3 className="text-black Poppins font-medium text-[32px] leading-[48px]">Free Delivery</h3>
      <p className="text-[#9F9F9F] Poppins font-normal text-[20px] leading-[30px]">
        For all orders over $50, consectetur adipim scing elit.
      </p>
    </div>
    
    {/* 90 Days Return Section */}
    <div className="w-full md:w-[376px] text-center md:text-left">
      <h3 className="text-black Poppins font-medium text-[32px] leading-[48px]">90 Days Return</h3>
      <p className="text-[#9F9F9F] Poppins font-normal text-[20px] leading-[30px]">
        If goods have problems, consectetur adipim scing elit.
      </p>
    </div>
    
    {/* Secure Payment Section */}
    <div className="w-full md:w-[376px] text-center md:text-left">
      <h3 className="text-black Poppins font-medium text-[32px] leading-[48px]">Secure Payment</h3>
      <p className="text-[#9F9F9F] Poppins font-normal text-[20px] leading-[30px]">
        100% secure payment, consectetur adipim scing elit.
      </p>
    </div>
  </div>
</div>

      <Footer/>
    </>
  )
}

export default Shop
