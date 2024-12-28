
import Image from "next/image"; 
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 Poppins">About Us</h1>
        <p className="text-lg text-gray-700 mb-8 Poppins">
          We bring comfort and style to your home with our exclusive collection of high-quality sofas.
        </p>
      </div>

      {/* About Us Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Text Section */}
        <div>
          <h2 className="text-3xl font-semibold mb-4 Poppins">Our Story</h2>
          <p className="text-lg text-gray-700 mb-6 Poppins">
            At Sofa Website, we believe that your home should be a reflection of your unique taste and style.
            Since our inception, we have been committed to offering a curated selection of high-quality sofas, crafted with
            care to ensure comfort, durability, and a timeless design. Our mission is to provide customers with furniture
            that enhances their living spaces and enriches their lives.
          </p>
          <p className="text-lg text-gray-700 mb-6 Poppins">
            Each of our products is thoughtfully designed, using premium materials, and manufactured with attention to detail.
            Whether you&apos;re looking for a modular sofa, a sectional, or an elegant accent piece, we offer versatile solutions
            for every home.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <Image
            src="/Images/Asgaard sofa 1.png"
            alt="Sofa Image"
            width={400}
            height={300}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Our Values Section */}
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-semibold mb-4 Poppins">Our Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2 Poppins">Quality</h3>
            <p className="text-lg text-gray-700 Poppins">
              We prioritize quality at every step, from selecting materials to the final inspection, ensuring each piece
              meets our high standards.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2 Poppins">Comfort</h3>
            <p className="text-lg text-gray-700 Poppins">
              Comfort is our top priority. Our sofas are designed to provide support and relaxation, making them perfect
              for your living space.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2 Poppins">Sustainability</h3>
            <p className="text-lg text-gray-700 Poppins">
              We are committed to sustainability, using eco-friendly materials and processes to reduce our environmental
              impact.
            </p>
          </div>
        </div>
      </div>


      <div className="mt-12 text-center">
        <h2 className="text-3xl font-semibold mb-4 Poppins">Join Our Community</h2>
        <p className="text-lg text-gray-700 mb-6 Poppins">
          We invite you to explore our collection of sofas and find the perfect one for your home. We&apos;re here to help you
          make your space as comfortable and stylish as possible.
        </p>
        <Link href="/shop">
  <button className="bg-green-500 text-white px-8 py-3 Poppins rounded-lg shadow-lg hover:bg-green-600 hover:scale-105 transform transition-all duration-300 ease-in-out flex items-center gap-2 justify-center m-auto">
    <FaShoppingCart /> Explore Our Collection
  </button>
</Link>


      </div>
    </div>
  );
};

export default AboutPage;
