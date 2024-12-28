
import Image from 'next/image';
import Group8 from "../../public/Images/Group 8.png"
import Group9 from "../../public/Images/Group 9.png"
import Asgaard from "../../public/Images/Asgaard sofa 1.png"
import group48 from "../../public/Images/group 48.png"
import rectangle1 from "../../public/Images/Rectangle 13@2x.png"
import rectangle2 from "../../public/Images/Rectangle 14.png"
import Group36 from "../../public/Images/Group 36.png"
import Group35 from "../../public/Images/Group 35.png"
import Group43 from "../../public/Images/Group 43.png"
import Link from 'next/link'
import HomeHeader from './HomeHeader';
import { HomePageProducts} from '@/data/data';
import HeroImage from "../../public/Images/Rocket single seater 1.png"

const HomePage = () => {

  return (
    <>
      <HomeHeader />
      <div className="bg-[#FBEBB5] w-full h-auto md:h-[1000px] flex flex-col md:flex-row pt-[150px] md:pt-[300px] px-4 md:px-[132px] relative">
        {/* Text Section */}
        <div className="relative w-full sm:w-[440px] h-auto sm:h-[276px] px-4 sm:px-0">
          <h3 className="text-black font-medium Poppins text-[28px] sm:text-[36px] md:text-[64px] leading-[34px] sm:leading-[42px] md:leading-[96px]">
            Rocket single seater
          </h3>
          <h2 className="mt-4 sm:mt-4 text-black font-medium Poppins transform transition-transform duration-300 cursor-pointer hover:scale-105 text-[16px] sm:text-[24px] leading-[20px] sm:leading-[36px]">
            Shop Now
          </h2>
          <hr className="mt-2 sm:mt-4 w-[60px] sm:w-[121px] border-1.5 border-black" />
        </div>

        {/* Image Section */}
        <div className="relative flex justify-center sm:justify-start items-center sm:pl-4 md:pl-0 md:absolute md:left-[548px] md:top-[80px] drop-shadow-[0px_28px_30px_rgba(0,0,0,0.1)]">
          <Image
            src={HeroImage}
            alt="Rocket single seater"
            width={853}
            height={700}
            className="w-full sm:w-[400px] md:w-[853px] md:h-[900px] object-contain"
          />
        </div>
      </div>




      {/* group10 */}
      <div className=" sm:absolute w-full h-auto left-0 md:top-[996px] sm:top-[200px] bg-[#FAF4F4] p-4">
        <div className="relative flex flex-col sm:flex-row justify-center items-center gap-4">
          <div className="w-full sm:w-[605px] h-auto sm:h-[562px]">
            <Image src={Group8} alt="Group8" className="w-full h-auto" />
          </div>
          <div className="w-full sm:w-[605px] h-auto sm:h-[562px]">
            <Image src={Group9} alt="Group9" className="w-full h-auto" />
          </div>
        </div>
      </div>

      <div className="relative w-full h-auto md:mt-[592px] md:py-32">
        {/* Group19 */}
        <h3 className="text-center Poppins font-medium text-[36px] leading-[54px] p-5 text-black">
          Top Picks For You
        </h3>
        <p className="text-center Poppins font-medium text-[16px] leading-[24px] text-[#9F9F9F] mb-8">
          Find a bright ideal to suit your taste with our great selection of suspension, floor, and table lights.
        </p>

        {/* Product Grid */}
        <div className="flex flex-wrap justify-center gap-8 px-4">
  {/* Product Card */}
  {HomePageProducts.map((product) => (
    <div
      key={product.id}
      className="w-full sm:w-[90%] md:w-[230px] mx-4 h-auto flex flex-col items-center p-2 border border-gray-300 rounded-lg shadow-md"
    >
      <img src={product.image} alt={product.name} className="mb-2 w-full h-auto" />
      <h3 className="Poppins font-medium text-[16px] leading-[24px] text-black text-center mb-1">
        {product.name}
      </h3>
      <div className="flex items-center justify-center mb-1">
        <span className="Poppins text-[14px] text-gray-500 line-through mr-1">
          Rs. {product.originalPrice.toLocaleString()}
        </span>
        <span className="Poppins text-[18px] text-black font-medium">
          Rs. {product.price.toLocaleString()}
        </span>
      </div>
      <div className="flex items-center justify-center mb-2">
        <span className="text-yellow-500">{'★'.repeat(product.rating)}</span>
        <span className="ml-2 text-gray-500">{product.rating} / 5</span>
      </div>
      <div className="flex gap-1 mb-2">
        <button className="bg-slate-500 text-white px-4 py-1 rounded text-[14px] hover:bg-slate-600 transition hover:scale-105">
          Add to Cart
        </button>
        <button className="bg-green-500 text-white px-4 py-1 rounded text-[14px] hover:bg-green-600 transition hover:scale-105">
          Buy Now
        </button>
      </div>
      <Link href={`/product/${product.id}`}>
        <h3 className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 py-2 rounded-md text-xs font-semibold uppercase shadow-md transform transition-transform duration-200 hover:scale-105 hover:shadow-lg hover:from-teal-500 hover:to-blue-500 mt-4 text-center">
          View Details
        </h3>
      </Link>
    </div>
  ))}
</div>


        <h3 className=" Poppins font-medium text-[16px] mb-2 mt-12 text-center sm:text-[20px] leading-[30px] text-black">
          View More
        </h3>
        <hr className="w-[80px] sm:w-[115px] h-0 mx-auto mb-9  border border-black " />
      </div>

      <div className="relative w-full h-auto sm:h-auto bg-[#FFF9E6] py-6">
        {/* For Small Screens (sm) */}
        <div className="sm:flex sm:flex-col sm:items-center sm:gap-6 sm:py-6 md:hidden">
          {/* Text Section */}
          <div className="text-center">
            <div className="text-black Poppins font-medium text-[20px] sm:text-[24px] leading-[30px] mb-2">
              New Arrivals
            </div>
            <h2 className="text-black Poppins font-semibold text-[32px] sm:text-[48px] leading-[48px] sm:leading-[72px]">
              Asgaard sofa
            </h2>
          </div>
          {/* Order Now Button */}
          <div className="flex items-center justify-center">
            <div className="text-black Poppins font-normal text-[16px] sm:text-[20px] leading-[30px] hover:cursor-pointer">
              Order Now
              <hr className="w-[80px] sm:w-[115px] h-0 mx-auto mt-2 border border-black md:hidden" />
            </div>
          </div>
          {/* Image */}
          <div className="relative w-full h-[300px] sm:h-[400px]">
            <Image src={Asgaard} alt="Asgaard Sofa" layout="fill" objectFit="cover" />
          </div>
        </div>

        {/* For Medium Screens and Larger (md and above) */}
        <div className="hidden md:block relative w-full h-[799px] bg-[#FFF9E6] py-6">
          {/* New Arrivals Section */}
          <div className="absolute md:w-[331px] md:h-[205px] md:left-[1000px] md:top-[266px] text-center">
            <div className="text-black text-center Poppins font-medium text-[20px] sm:text-[24px] leading-[30px] mb-2 sm:mb-4">
              New Arrivals
            </div>
            <h2 className="text-black Poppins font-semibold text-[32px] sm:text-[48px] leading-[48px] sm:leading-[72px]">
              Asgaard sofa
            </h2>
          </div>
          <div className="absolute w-[255px] h-[64px] left-[1050px] top-[408px] border-[1px] border-[#000000] hover:border-none hover:rounded-sm  hover:bg-slate-500 ">
            <button className="p-4 pl-16 text-black Poppins m-auto font-normal text-[20px] leading-[30px] hover:text-white">
              Order Now
            </button>
          </div>
          <div className="absolute w-[983px] h-[799px] left-[0px]">
            <Image src={Asgaard} alt="Asgaard Sofa" layout="fill" objectFit="cover" />
          </div>
        </div>
      </div>

      {/* group 54 */}
      <div className="w-full md:h-[944px] sm:h-auto bg-white md:p-20 p-3">
        <div className="m-auto w-full sm:text-center">
          <h2 className="sm:text-center mt-9 text-black Poppins font-medium text-[36px] leading-[54px] font-[Poppins]">
            Our Blogs
          </h2>
          <p className="text-[#9F9F9F] font-medium text-[16px]  Poppins leading-[24px] font-[Poppins] sm:py-4 mt-4">
            Find a bright ideal to suit your taste with our great selection
          </p>
        </div>

        {/* Blog Posts Section */}
        <div className="w-full md:w-[1240px] h-auto sm:px-4 flex flex-col sm:gap-8 md:flex-row md:gap-6 justify-center mt-10">

          {/* First Blog Card */}
          <div className="mt-9 w-full sm:w-[320px] md:w-[310px]  h-auto p-2 rounded-lg sm:flex sm:flex-col sm:items-center sm:mb-9 border border-slate-300">
            <Image src={group48} alt="group48" className="md:w-full sm:w-[150px] sm:h-[auto] h-[auto]" />

            <div className="w-full sm:text-center sm:px-4 mt-6">
              <h2 className="text-[20px] leading-[30px] font-normal Poppins text-black text-center">
                Going all-in with millennial design
              </h2>
              <h2 className="text-[24px] leading-[36px]  Poppins font-medium text-black text-center mt-2">
                Read More
              </h2>
              <hr className="w-[115px] mx-auto mt-2 border-t-2 border-black" />
              <div className="w-[223px] h-[24px] flex justify-between mx-auto mt-4">
                <Image src={Group36} alt="Group36" />
                <Image src={Group35} alt="Group35" />
              </div>
            </div>
          </div>

          {/* Second Blog Card */}
          <div className="mt-9 w-full sm:w-[320px] md:w-[310px] h-auto p-2 rounded-lg sm:flex sm:flex-col sm:items-center sm:mb-9 border border-slate-300">
            <Image src={rectangle2} alt="rectangle2" className="w-full sm:w-[280px] h-auto" />
            <div className="w-full sm:text-center sm:px-4 mt-6">
              <h2 className="text-[20px] leading-[30px] font-normal  Poppins text-black text-center">
                Going all-in with millennial design
              </h2>
              <h2 className="text-[24px] Poppins leading-[36px] font-medium text-black text-center mt-2">
                Read More
              </h2>
              <hr className="w-[115px] mx-auto mt-2 border-t-2 border-black" />
              <div className="w-[223px] h-[24px] flex justify-between mx-auto mt-4">
                <Image src={Group36} alt="Group36" />
                <Image src={Group35} alt="Group35" />
              </div>
            </div>
          </div>

          {/* Third Blog Card */}
          <div className="mt-9 w-full sm:w-[320px] md:w-[310px] h-auto p-2 rounded-lg sm:flex sm:flex-col sm:items-center sm:mb-9 border border-slate-300">
            <Image src={rectangle1} alt="rectangle1" className="w-full sm:w-[280px] h-auto" />
            <div className="w-full sm:text-center sm:px-4 mt-6">
              <h2 className="text-[20px] leading-[30px] font-normal Poppins text-black text-center">
                Going all-in with millennial design
              </h2>
              <h2 className="text-[24px] leading-[36px] font-medium  Poppins text-black text-center mt-2">
                Read More
              </h2>
              <hr className="w-[115px] mx-auto mt-2 border-t-2 border-black" />
              <div className="w-[223px] h-[24px] flex justify-between mx-auto mt-4">
                <Image src={Group36} alt="Group36" />
                <Image src={Group35} alt="Group35" />
              </div>
            </div>
          </div>
        </div>

        {/* View All Posts Section */}
        <h2 className="w-full sm:w-[126px] mx-auto text-center text-[20px] leading-[30px]  font-medium text-black mt-6">
          View All Posts
        </h2>
        <hr className="w-[115px] mx-auto mt-2 border-t-2 border-black" />
      </div>




      {/* group */}
      <div className="relative w-full h-[450px] sm:h-[350px] overflow-hidden">
        <Image src={Group43} alt="Group43" className="w-full h-full object-cover" />

        <div className="absolute w-[454px] h-[202px] left-1/2 top-[100px] transform -translate-x-1/2 sm:w-[90%] sm:top-[50px]">
          <div className="w-full h-[120px] text-center">
            <h2 className="text-[24px] leading-[90px] Poppins font-bold text-black sm:text-[30px] sm:leading-[40px]">
              Our Instagram
            </h2>
            <h3 className="text-[20px] leading-[30px] Poppins font-normal text-black mt-2 sm:text-[14px] sm:leading-[20px]">
              Follow our store on Instagram
            </h3>
          </div>

          <div className="flex justify-center items-center w-[255px] h-[64px] bg-[#FAF4F4] rounded-full shadow-md mt-4 mx-auto sm:w-[200px] sm:h-[50px]">
            <h2 className="text-[20px] leading-[30px] font-normal Poppins text-black sm:text-[16px] sm:leading-[20px]">
              Follow Us
            </h2>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="relative w-full bg-white h-auto px-4 py-10 sm:py-8">
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
            <button className=" py-2 text-black font-medium m-2 transition  border-b border-black">
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
  )
}

export default HomePage