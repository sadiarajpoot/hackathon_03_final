import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import AccountLogo from "../../public/Images/accountLogo.png"
import arrow from "../../public/Images/dashicons_arrow-down-alt2.png"
import PagesHeader from '../components/PagesHeader';

const Checkout = () => {
    return (
        <>
        <PagesHeader/>
      <div className="absolute w-full h-[316px] left-0 top-[100px] bg-cover bg-no-repeat filter blur-[3px]" style={{ backgroundImage: 'url(/Images/shop.png)' }}>
      </div>
      <Image src={AccountLogo} alt="shopLogo" className="absolute w-[160px] h-[140px] left-[658px] top-[161px]"></Image>
      <div className="absolute w-[121px] h-[24px] left-[660px] top-[300px]">
        <h3 className="absolute text-black Poppins font-medium text-[16px] leading-[24px]">
          Home  
        </h3>
        <Image src={arrow} alt="arrow" className='absolute left-[55px]' />
        <h3 className="absolute left-[80px] text-black Poppins font-light text-[16px] leading-[24px]">
          CheckOut
        </h3>
      </div>
      <div className="mt-[500px] w-full px-4 py-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
  {/* Billing Details Section */}
  <div className="border border-gray-200 rounded-lg p-6 bg-white">
    <h2 className="text-xl font-semibold mb-4 Poppins">Billing details</h2>
    <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* First Name */}
      <div>
        <label htmlFor="first-name" className="block text-sm text-gray-600 mb-1 Poppins">First Name</label>
        <input
          type="text"
          id="first-name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          placeholder="Enter your first name"
        />
      </div>
      {/* Last Name */}
      <div>
        <label htmlFor="last-name" className="block text-sm text-gray-600 mb-1 Poppins">Last Name</label>
        <input
          type="text"
          id="last-name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          placeholder="Enter your last name"
        />
      </div>
      {/* Company Name */}
      <div className="md:col-span-2">
        <label htmlFor="company-name" className="block text-sm text-gray-600 mb-1 Poppins">Company Name (Optional)</label>
        <input
          type="text"
          id="company-name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          placeholder="Enter your company name"
        />
      </div>
      {/* Country / Region */}
      <div className="md:col-span-2">
        <label htmlFor="country" className="block text-sm text-gray-600 mb-1 Poppins">Country / Region</label>
        <select
          id="country"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
           <option>Sri Lanka</option>
          <option>Pakistan</option>
          <option>United States</option>
          <option>United Kingdom </option>
          <option>Canada</option>
          <option>Australia</option>
          <option>India</option>
          <option>Germany</option>
          <option>France</option>
          <option>China</option>
          <option>Japan</option>
          <option>South Korea</option>
          <option>Brazil</option>
          <option>South Africa</option>
        </select>
      </div>
      {/* Street Address */}
      <div className="md:col-span-2">
        <label htmlFor="street-address" className="block text-sm text-gray-600 mb-1 Poppins">Street Address</label>
        <input
          type="text"
          id="street-address"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          placeholder="Enter your street address"
        />
      </div>
      {/* City */}
      <div>
        <label htmlFor="city" className="block text-sm text-gray-600 mb-1 Poppins">Town / City</label>
        <input
          type="text"
          id="city"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          placeholder="Enter your city"
        />
      </div>
      {/* Province */}
      <div>
        <label htmlFor="province" className="block text-sm text-gray-600 mb-1 Poppins">Province</label>
        <select
          id="province"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          <option>Western Province</option>
          <option>Southern Province</option>
          <option>Westhern Province</option>
          <option>Northern Province</option>
        </select>
      </div>
      {/* ZIP Code */}
      <div className="flex flex-col gap-2">
        <div className="flex-grow">
          <label htmlFor="zip" className="block text-sm text-gray-600 mb-1 Poppins">ZIP Code</label>
          <input
            type="text"
            id="zip"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="Enter your ZIP code"
          />
        </div>
      </div>
      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm text-gray-600 mb-1 Poppins">Phone</label>
        <input
          type="text"
          id="phone"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          placeholder="Enter your phone number"
        />
      </div>
      {/* Email */}
      <div className="md:col-span-2">
        <label htmlFor="email" className="block text-sm text-gray-600 mb-1 Poppins">Email Address</label>
        <input
          type="email"
          id="email"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          placeholder="Enter your email address"
        />
      </div>
      {/* Additional Information */}
      <div className="md:col-span-2">
        <label htmlFor="additional-info" className="block text-sm text-gray-600 mb-1 Poppins">Additional Information</label>
        <textarea
          id="additional-info"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          placeholder="Enter any additional information"
        ></textarea>
      </div>
    </form>
  </div>

  {/* Order Summary Section */}
  <div className="border border-gray-200 rounded-lg p-6 bg-white">
    <h2 className="text-xl font-semibold mb-4 Poppins">Product</h2>
    <div className="mb-4">
      {/* Product Details */}
      <div className="flex justify-between mb-2 Poppins">
        <span>Asgard Sofa x 1</span>
        <span>Rs. 250,000.00</span>
      </div>
      {/* Subtotal */}
      <div className="flex justify-between Poppins">
        <span>Subtotal</span>
        <span>Rs. 250,000.00</span>
      </div>
      {/* Total */}
      <div className="flex justify-between font-semibold text-lg Poppins">
        <span>Total</span>
        <span className="text-[#B88E2F]">Rs. 250,000.00</span>
      </div>
    </div>

    {/* Payment Method */}
    <div className="mb-4">
      <h3 className="text-lg font-medium mb-2 Poppins">Payment Method</h3>
      <div>
        <label className="flex items-center mb-2 Poppins">
          <input type="radio" name="payment-method" className="mr-2" />
          Direct Bank Transfer
        </label>
        <p className="text-sm text-gray-500 mb-2 Poppins">
          Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
        </p>
        <label className="flex items-center mb-2 Poppins">
          <input type="radio" name="payment-method" className="mr-2" />
          Cash on Delivery
        </label>
      </div>
    </div>

    {/* Place Order Button */}
    <button className="h-[64px] w-[205px] border py-2 rounded-lg hover:bg-gray-800 hover:text-white transition duration-300 Poppins">
      Place Order
    </button>
  </div>
</div>


      {/* same */}
      <div className="bg-[#FAF4F4] w-full md:h-[300px] h-auto p-16 mt-[100px]">
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
      {/* FOOTER */}
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
  
  export default Checkout;