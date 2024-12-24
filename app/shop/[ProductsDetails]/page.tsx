import Image from "next/image";
import Link from "next/link";
import ProductDetails from "../../../public/Images/productdetails.png"
import Pink from "../../../public/Images/PinkSofa2.png"
import Pink2 from "../../../public/Images/PinkSofa1.png"
import item17 from "../../../public/Images/item17.png"
import item18 from "../../../public/Images/Group 18.png"
import item19 from "../../../public/Images/item 19.png"
import item20 from "../../../public/Images/item 20.png"
import PagesHeader from "@/app/components/PagesHeader";

const ProductPage = () => {
  return (
    <div className="container mx-auto px-4 py-[200px]">
      <PagesHeader />
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-4">
        <ol className="list-reset flex space-x-2">
          <li><Link href="/" className="hover:text-gray-800 Poppins">Home</Link></li>
          <li>/</li>
          <li><Link href="/shop" className="hover:text-gray-800 Poppins">Shop</Link></li>
          <li>/</li>
          <li className="text-gray-800 Poppins">Asgaard Sofa</li>
        </ol>
      </nav>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div>
          <div className="rounded-lg overflow-hidden mb-4 mt-[40px]">
            <Image
              src={ProductDetails}
              alt="Asgaard Sofa"
              width={800}
              height={800}
              className="w-full"
            />
          </div>

        </div>

        {/* Product Details Rewies*/}
        <div>
          <h1 className="text-3xl font-semibold mb-2 Poppins mt-[40px]">Asgaard Sofa</h1>
          <p className="text-xl text-gray-700 font-medium mb-4 Poppins">Rs. 250,000.00</p>
          <div className="flex items-center mb-4">
            <div className="text-yellow-500 flex items-center space-x-1">
              <span>⭐⭐⭐⭐⭐</span>
            </div>
            <span className="text-sm text-gray-500 ml-2 Poppins">5 Customer Reviews</span>
          </div>
          <p className="text-gray-600 mb-4 Poppins">
            Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero...
          </p>

          {/* Size Options */}
          <div className="mb-4">
            <h3 className="text-sm text-gray-700 mb-2 Poppins">Size</h3>
            <div className="flex space-x-2">

              <button className="border bg-[#FBEBB5] border-gray-300 px-4 py-2 rounded hover:border-black">
                L
              </button>
              <button className="border border-gray-300 px-4 py-2 rounded hover:border-black">
                XL
              </button>
              <button className="border border-gray-300 px-4 py-2 rounded hover:border-black">
                XS
              </button>

            </div>
          </div>

          {/* Color Options circles */}
          <div className="mb-4">
            <h3 className="text-sm text-gray-700 mb-2 Poppins">Color</h3>
            <div className="flex space-x-2">
              <div className="w-8 h-8 rounded-full bg-[#816DFA] border-gray-300 cursor-pointer"></div>
              <div className="w-8 h-8 rounded-full bg-black  border-gray-300 cursor-pointer"></div>
              <div className="w-8 h-8 rounded-full bg-[#CDBA7B]  border-gray-300 cursor-pointer"></div>
            </div>
          </div>

          {/* Add to Cart button*/}
          <div className="flex items-center space-x-4">
            <div className="flex items-center border border-gray-300 rounded">
              <button className="px-3 py-2">-</button>
              <span className="px-4">1</span>
              <button className="px-3 py-2">+</button>
            </div>
            <Link href="/cart"><button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 Poppins">
              Add To Cart
            </button></Link>
          </div>
        </div>
      </div>
      <div className=" absolute md:w-[605px] w-full h-0 md:left-[735px] left-0 md:top-[830px] top-[1120px] border border-[#D9D9D9]">
        <p className=" mt-[50px]  text-[#9F9F9F] text-[16px] leading-[24px] font-normal Poppins">
          SKU <span className="absolute w-[44px] h-[24px] left-[80px]"> : <span className="absolute w-[44px] h-[24px] left-[30px]">SS001</span></span>
        </p>
        <p className=" mt-[20px]  text-[#9F9F9F] text-[16px] leading-[24px] font-normal Poppins">
          Category <span className="absolute w-[44px] h-[24px] left-[80px]"> : <span className="absolute w-[44px] h-[24px] left-[30px]">Sofas</span></span>
        </p>
        <p className=" mt-[20px]  text-[#9F9F9F] text-[16px] leading-[24px] font-normal Poppins">
          Tags <span className="absolute w-[440px] h-[24px] left-[80px]"> : <span className="absolute w-[190px] h-[24px] left-[20px]  text-[#9F9F9F] text-[16px] leading-[24px] font-normal font-poppins">Sofa, Chair, Home, Shop</span></span>
        </p>
        <p className=" mt-[20px]  text-[#9F9F9F] text-[16px] leading-[24px] font-normal Poppins">
          Share<span className="absolute w-[44px] h-[24px] left-[80px]"> :</span>
          <span className="absolute w-[44px] h-[24px] left-[120px] top-[180px] flex flex-row space-x-4">
            <Link href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <g fill="none">
                  <g clip-path="url(#akarIconsFacebookFill0)">
                    <path fill="currentColor" fill-rule="evenodd" d="M0 12.067C0 18.034 4.333 22.994 10 24v-8.667H7V12h3V9.333c0-3 1.933-4.666 4.667-4.666c.866 0 1.8.133 2.666.266V8H15.8c-1.467 0-1.8.733-1.8 1.667V12h3.2l-.533 3.333H14V24c5.667-1.006 10-5.966 10-11.933C24 5.43 18.6 0 12 0S0 5.43 0 12.067" clip-rule="evenodd" />
                  </g>
                  <defs>
                    <clipPath id="akarIconsFacebookFill0">
                      <path fill="#fff" d="M0 0h24v24H0z" />
                    </clipPath>
                  </defs>
                </g>
              </svg>
            </Link>
            <Link href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" />
              </svg>
            </Link>
            <Link href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23" />
              </svg>
            </Link>
          </span>
        </p>
      </div>
      {/* paragraphs */}
      <div className="md:w-full h-[0px] left-0  mt-[250px] border-t-2 border-[#D9D9D9] overflow-x-hidden"></div>

      <div className="w-full sm:w-[744px] h-auto mx-auto sm:top-[950px] top-[1450px] overflow-x-hidden space-y-9 md:p-9 p-3">
        <div className="w-full sm:w-[649px] h-[36px] mx-auto sm:top-[130px] flex justify-around  Poppins md:text-[24px] space-x-4 text-[14px] text-[#9F9F9F]">
          <p className="text-black">Description</p>
          <p>Additional Information</p>
          <p>Reviews [5]</p>
        </div>

        <div className="w-full sm:w-[1026px] h-auto mx-auto sm:top-[210px] space-y-3 Poppins font-normal text-[16px] leading-[24px] text-justify text-[#9F9F9F]">
          <p>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
          <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine-tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
        </div>

        <div className="w-full sm:w-[1239px] h-[348px] mx-auto sm:top-[300px]">
          {/* This section can be filled with content if needed */}
        </div>
      </div>

      <div className="w-full h-[0px] left-0 top-[1800px] border-t-2 border-[#D9D9D9]"></div>

      <div className="w-full sm:w-[1239px] h-[348px] mx-auto mt-[-380px] flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4 shadow-md">
        <Image src={Pink} alt="PinkSofa" className="w-full sm:w-[48%]" />
        <Image src={Pink2} alt="PinkSofa" className="w-full sm:w-[48%]" />
      </div>


      {/* div second */}
      <div className="w-full sm:w-[1240px] h-[777px] mx-auto md:mt-[30px] ">
        <h3 className="absolute left-1/2 md:top-[1850px] top-[2370px] transform -translate-x-1/2 sm:text-center text-black Poppins font-medium md:text-[36px] text-[16px] md:leading-[54px]">
          Related Products
        </h3>
        <div className="md:mt-[150px] mt-[120px] w-full sm:w-[1240px] h-[397px]  flex justify-evenly flex-wrap sm:flex-nowrap gap-4 px-4 ">
          <Image src={item17} alt="item17" className="w-full sm:w-[23%]" />
          <Image src={item18} alt="item18" className="w-full sm:w-[23%]" />
          <Image src={item19} alt="item19" className="w-full sm:w-[23%]" />
          <Image src={item20} alt="item20" className="w-full sm:w-[23%]" />
        </div>
        <span className="absolute w-[115px] h-[49px] Poppins font-medium text-[16px] p-4 border-b-2 border-black left-1/2 transform -translate-x-1/2 md:top-[2480px] top-[4250px] text-center">
          View More
        </span>
      </div>

      {/* footer */}
      <div className="relative w-full bg-white h-auto px-4 py-10 sm:py-8 md:mt-[-200px] mt-[1200px]">
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
            <div className="flex flex-col ">
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
    </div>

  );
};

export default ProductPage;