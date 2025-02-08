import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import shopLogo from "../../public/Images/shop logo.png";
import arrow from "../../public/Images/dashicons_arrow-down-alt2.png";
import Group57 from "../../public/Images/Group 57.png";
import Round from "../../public/Images/ci_grid-big-round.png";
import List from "../../public/Images/bi_view-list.png";
import Footer from '../components/Footer';
import PagesHeader from "../components/PagesHeader";
import { client } from '@/sanity/lib/client';
// Fetch products from Sanity

const fetchProducts = async () => {
  const query = `*[_type == "product"] {
    _id,
    name,
    price,
    image {
      asset -> {
        url
      }
    },
    discountPercentage,
    category,
    description
  }`;

  try {
    const products = await client.fetch(query);
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

// Shop Page Component
const Shop = async () => {
  const products = await fetchProducts();

  return (
    <>
      {/* Page Header */}
      <PagesHeader />

      {/* Background Image */}
      <div
        className="absolute w-full h-[316px] left-0 top-[100px] bg-cover bg-no-repeat filter blur-[3px]"
        style={{ backgroundImage: 'url(/Images/shop.png)' }}
      ></div>

      {/* Shop Logo */}
      <Image
        src={shopLogo}
        alt="Shop Logo"
        className="absolute w-[124px] h-[132px] left-[50%] sm:left-[658px] top-[161px] transform -translate-x-1/2 sm:translate-x-0"
      />

      {/* Breadcrumb */}
      <div className="absolute w-full sm:w-[121px] sm:h-[24px] left-0 sm:left-[660px] top-[295px] flex justify-center sm:justify-start items-center sm:space-x-2">
        <h3 className="text-black Poppins font-medium text-[16px] leading-[24px]">Home</h3>
        <Image src={arrow} alt="arrow" className="w-[16px] h-[16px]" />
        <h3 className="text-black font-poppins font-light text-[16px] leading-[24px]">Shop</h3>
      </div>

      {/* Filters Bar */}
      <div className="absolute w-full bg-[#FAF4F4] md:h-[100px] h-auto left-0 top-[463px] flex flex-col sm:flex-row justify-between items-center sm:items-start">
        <div className="w-[24px] h-[24px] mt-10"></div>
        <div className="mt-9 flex justify-center sm:justify-start items-center md:space-x-6 space-x-2 sm:ml-[50px]">
          <Image src={Group57} alt="Group57" />
          <Image src={Round} alt="Round" />
          <Image src={List} alt="List" />
          <hr className="w-[37px] h-0 border-2 border-[#9F9F9F] transform rotate-90" />
          <h3 className="text-black Poppins font-normal text-[14px] ml-4">
            Showing 1–{products.length} of {products.length} results
          </h3>
        </div>
        <div className="flex justify-center sm:justify-start items-center mt-9 sm:ml-auto">
          <h3 className="text-black Poppins font-normal text-[20px] leading-[30px] p-3">Show</h3>
          <div className="w-[55px] h-[55px] bg-white flex justify-center items-center">
            <h3 className="text-[#9F9F9F] Poppins font-normal text-[20px] leading-[30px]">16</h3>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="w-full h-auto md:py-10 px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:mt-[570px] mt-[800px]">
          {products.map((product:any) => (
            <Link
              key={product._id}
              href={`/shop/${product._id}`}
              className="relative w-full sm:w-[90%] mx-auto hover:scale-105 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out"
            >
              <div className="relative w-full p-4">
                {/* Product Image */}
                <div className="relative w-full h-64 overflow-hidden rounded-lg">
                  <Image
                    src={product.image.asset.url}
                    alt={product.name}
                    width={500}
                    height={500}
                    className="object-cover w-full h-full transform transition duration-500 hover:scale-105"
                  />
                </div>

                {/* Product Details */}
                <div className="flex flex-col items-start justify-between mt-4 space-y-3">
                  <h3 className="text-lg font-semibold text-gray-800 Poppins">{product.name}</h3>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }, (_, index) => (
                      <span key={index} className="text-yellow-500">★</span>
                    ))}
                  </div>
                  <div className="flex w-full items-center mt-2">
                    <h3 className="text-xl font-semibold text-gray-700"><span className='text-green-600'>$</span>{product.price}</h3>
                    <h3 className="text-sm  font-semibold text-gray-500 ml-2"><span className='text-green-600'>$</span>{product.discountPercentage}</h3>
                    {/* <h3 className="text-xl font-semibold text-gray-800">{product.category}</h3> */}
                    
                  </div>
                  <div className="flex w-full items-center mt-2">
                    <h3 className="text-sm font-normal text-gray-800 Poppins">{product.description}</h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/* Three More Products */}
        
      </div>

      {/* Pagination */}
      <div className="w-full sm:w-[392px] h-[60px] flex absolute md:left-[580px] left-[35px] md:space-x-4 space-x-2 p-2 sm:justify-start mt-[27px]">
        <div className="w-[60px] h-[60px] bg-[#FBEBB5] rounded-[10px] flex justify-center items-center">
          <h3 className="text-[20px] text-black">1</h3>
        </div>
        <div className="w-[60px] h-[60px] bg-[#FFF9E5] rounded-[10px] flex justify-center items-center text-[20px] text-black">2</div>
        <div className="w-[60px] h-[60px] bg-[#FFF9E5] rounded-[10px] flex justify-center items-center text-[20px] text-black">3</div>
        <div className="w-[98px] h-[60px] bg-[#FFF9E5] rounded-[10px] flex justify-center items-center text-[20px] text-black">next</div>
      </div>

      {/* Info Section */}
      <div className="bg-[#FAF4F4] w-full md:h-[300px] h-auto p-16 md:mt-[120px] mt-[140px]">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-6">
          <div className="w-full md:w-[376px] text-center md:text-left">
            <h3 className="text-black Poppins font-medium text-[32px] leading-[48px]">Free Delivery</h3>
            <p className="text-[#9F9F9F] Poppins font-normal text-[20px] leading-[30px]">
              For all orders over $50, consectetur adipiscing elit.
            </p>
          </div>
          <div className="w-full md:w-[376px] text-center md:text-left">
            <h3 className="text-black Poppins font-medium text-[32px] leading-[48px]">90 Days Return</h3>
            <p className="text-[#9F9F9F] Poppins font-normal text-[20px] leading-[30px]">
              If goods have problems, consectetur adipiscing elit.
            </p>
          </div>
          <div className="w-full md:w-[376px] text-center md:text-left">
            <h3 className="text-black Poppins font-medium text-[32px] leading-[48px]">Secure Payment</h3>
            <p className="text-[#9F9F9F] Poppins font-normal text-[20px] leading-[30px]">
              100% secure payment, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Shop;
