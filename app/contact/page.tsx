import Link from 'next/link';
import Image from 'next/image'
import ContactLogo from "../../public/Images/contactlogo.png"
import arrow from "../../public/Images/dashicons_arrow-down-alt2.png"
import PagesHeader from '../components/PagesHeader'
import ContactDiv from "../../public/Images/contact.png"


const Page = () => {
  return (
    <>
      <PagesHeader />
      <div className="relative w-full h-[316px] left-0 top-[100px] bg-cover bg-no-repeat filter blur-[3px]" style={{ backgroundImage: 'url(/Images/shop.png)' }}>
      </div>

      <Image src={ContactLogo} alt="shopLogo" className="absolute w-[124px] h-[132px] left-[50%] top-[161px] transform -translate-x-1/2 sm:left-[658px] sm:top-[161px]" />

      <div className="absolute w-[121px] h-[24px] left-[50%] top-[295px] transform -translate-x-1/2 sm:left-[660px] sm:top-[295px]">
        <h3 className="absolute text-black Poppins font-medium text-[16px] leading-[24px]">
          Home
        </h3>
        <Image src={arrow} alt="arrow" className='absolute left-[55px]' />
        <h3 className="absolute left-[80px] text-black font-poppins font-light text-[16px] leading-[24px]">
          Contact
        </h3>
      </div>

      <div className="absolute w-full h-[1144px] left-0 top-[416px] ">
        <h3 className="absolute w-full sm:w-[375px] h-[54px] left-[50%] transform -translate-x-1/2 sm:left-[533px] mt-10 Poppins font-semibold text-[30px] leading-[54px] text-black text-center md:left-[50%] md:transform md:-translate-x-1/2 md:text-[36px]">
          Get In Touch With Us
        </h3>

        <p className="absolute w-full sm:w-[644px] h-auto sm:p-4 left-[50%] transform -translate-x-1/2 sm:left-[398px] top-[100px] Poppins font-normal md:text-[16px] sm:text-[12px] leading-[24px] text-center sm:text-start text-[#9F9F9F] md:left-[50%] md:transform md:-translate-x-1/2">
          For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
        {/* form addres */}
        <div className="absolute w-full md:w-[1058px] h-[923px] md:left-[151px] top-[197px] flex flex-col md:flex-row justify-between items-start">
  <div className="w-full md:w-[393px] h-[537px] md:top-[60px]">
    <Image src={ContactDiv} alt='ContactDiv' />
  </div>
  <div className="relative w-full max-w-[635px] p-4 md:p-9 Poppins font-medium text-[16px]">
    <label htmlFor="name" className='block text-black'>Your Name</label>
    <input
      type="text"
      id='name'
      className='w-full h-[40px] border border-slate-500 rounded mt-4 p-4 font-light'
      placeholder='abc'
    />

    <label htmlFor="email" className='block text-black mt-6'>Email Address</label>
    <input
      type="email"
      id='email'
      className='w-full h-[40px] border border-slate-500 rounded mt-4 p-4 font-light'
      placeholder='abc@def.com'
    />

    <label htmlFor="subject" className='block text-black mt-6'>Subject</label>
    <input
      type="text"
      id='subject'
      className='w-full h-[40px] border border-slate-500 rounded mt-4 p-4 font-light'
      placeholder='This is an optional'
    />

    <label htmlFor="message" className='block text-black mt-6'>Messages</label>
    <textarea
      id='message'
      className='w-full h-[100px] border border-slate-500 rounded mt-4 p-4 font-light'
      placeholder='Hi! I’d like to ask about'
    ></textarea>

    <button
      className="w-full h-[48px] mt-6 border border-black text-black hover:text-white font-semibold rounded-lg hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-200 transition-all duration-200"
    >
      Submit
    </button>
  </div>
</div>
</div>

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
  )
}

export default Page