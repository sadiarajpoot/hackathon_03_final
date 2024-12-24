import Image from "next/image";
import Link from "next/link";
import CartImage from "../../public/Images/cartimage.png"
import CartLogo from "../../public/Images/cartLogo.png"
import arrow from "../../public/Images/dashicons_arrow-down-alt2.png"
import PagesHeader from "../components/PagesHeader";

const Cart = () => {
  return (
    <>
    <PagesHeader/>
    <div className="absolute w-full h-[316px] left-0 top-[100px] bg-cover bg-no-repeat filter blur-[3px]" style={{ backgroundImage: 'url(/Images/shop.png)' }}>
</div>

<Image src={CartLogo} alt="shopLogo" className="absolute w-[124px] h-[132px] left-[50%] sm:left-[658px] top-[161px] transform -translate-x-1/2 sm:translate-x-0" />

<div className="absolute w-full sm:w-[121px] sm:h-[24px] left-0 sm:left-[660px] top-[295px] flex justify-center sm:justify-start items-center sm:space-x-2">
  <h3 className="text-black Poppins font-medium text-[16px] leading-[24px]">Home</h3>
  <Image src={arrow} alt="arrow" className="w-[16px] h-[16px]" />
  <h3 className="text-black font-poppins font-light text-[16px] leading-[24px]">Cart</h3>
</div>
{/* card */}
<div className="w-full px-4 py-8 max-w-6xl mx-auto absolute top-[450px] md:left-20 ">
  {/* Cart Section */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Cart Items */}
    <div className="md:col-span-2 rounded-lg p-6">
      <table className="w-full border-collapse">
        <thead className="hidden md:table-header-group Poppins">
          <tr className="bg-yellow-100">
            <th className="py-2 px-4 text-left">Product</th>
            <th className="py-2 px-4 text-left">Price</th>
            <th className="py-2 px-4 text-left">Quantity</th>
            <th className="py-2 px-4 text-left">Subtotal</th>
            <th className="py-2 px-4 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="grid grid-cols-1 md:table-row border-b md:border-none gap-4 md:gap-0">
            {/* Product */}
            <td className="py-4 px-4 flex items-center md:table-cell">
              <Image
                src={CartImage}
                height={100}
                width={100}
                alt="Asgard sofa"
                className="w-16 h-16 rounded-md mr-4"
              />
              <span className="block md:hidden font-bold Poppins">Product:</span>
              Asgard sofa
            </td>

            {/* Price */}
            <td className="py-4 px-4 md:table-cell Poppins">
              <span className="block md:hidden font-bold">Price:</span>
              Rs. 250,000.00
            </td>

            {/* Quantity */}
            <td className="py-4 px-4 md:table-cell Poppins">
              <span className="block md:hidden font-bold">Quantity:</span>
              <input
                type="number"
                min="1"
                defaultValue="1"
                className="w-12 text-center border border-gray-300 rounded-lg"
              />
            </td>

            {/* Subtotal */}
            <td className="py-4 px-4 md:table-cell Poppins">
              <span className="block md:hidden font-bold Poppins">Subtotal:</span>
              Rs. 250,000.00
            </td>

            {/* Action */}
            <td className="py-4 px-4 text-center md:table-cell">
              <span className="block md:hidden font-bold">Action:</span>
              <button className="text-yellow-500 hover:text-yellow-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.136 21H7.864a2 2 0 01-1.997-1.858L5 7m5 4v6m4-6v6m1-10V5a2 2 0 00-2-2H9a2 2 0 00-2 2v2m5 4h.01"
                  />
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Cart Totals */}
    <div className="bg-yellow-50 rounded-lg m-2 p-4">
      <h2 className="text-xl font-semibold mb-4 Poppins">Cart Totals</h2>
      <div className="flex justify-between mb-2 Poppins">
        <span>Subtotal</span>
        <span>Rs. 250,000.00</span>
      </div>
      <div className="flex justify-between font-semibold text-lg mb-4">
        <span>Total</span>
        <span className="text-[#B88E2F] Poppins">Rs. 250,000.00</span>
      </div>
      <div className="flex justify-center items-center">
        <Link href="/checkout">
          <button className="my-6 h-[64px] w-[205px] border Poppins hover:text-white py-2 rounded-lg hover:bg-gray-800 transition duration-300">
            Check Out
          </button>
        </Link>
      </div>
    </div>
  </div>
</div>

    {/* same */}
    <div className="bg-[#FAF4F4] w-full md:h-[300px] h-auto p-16 md:mt-[950px] mt-[1450px]">
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

export default Cart;