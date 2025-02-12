import Image from "next/image";
import Link from "next/link";
import { FaCartPlus, FaShoppingCart } from "react-icons/fa";
import PagesHeader from "../components/PagesHeader";
import Footer from "../components/Footer";
import { products } from "../../data/data";

const AboutPage = () => {
  return (
    <div className="container mx-auto p-4">
      <PagesHeader />

      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 Poppins mt-16">About Us</h1>
        <p className="text-lg text-gray-700 mb-8 Poppins">
          We bring comfort and style to your home with our exclusive collection of high-quality sofas.
        </p>
      </div>

      {/* Products Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        {products.map((product: any) => (
          <div key={product.id} className="mb-6 p-4 border rounded-lg shadow-md">


            <Image
              src={product.image || "/default-image.jpg"}
              alt={product.name || "Product Image"}
              width={300}
              height={300}
              className="w-full h-auto object-cover"
            />
            <h2 className="text-base font-medium mb-2 Poppins">{product.name}</h2>
            <p className="text-base font-medium mb-2 Poppins"> {product.price} </p>
            <div className="flex justify-between">
            <span>⭐⭐⭐⭐⭐</span>
            <button className="flex-1 text-slate-600 rounded transition hover:scale-105 flex items-end justify-end">
                    <FaCartPlus size={25} className="mr-2" />
                  </button>
            </div>
           
          </div>
        ))}
      </div>

      {/* About Us Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {/* Text Section */}
        <div>
          <h2 className="text-3xl font-semibold mb-4 Poppins">Our Story</h2>
          <p className="text-lg text-gray-700 mb-6 Poppins">
            At Sofa Website, we believe that your home should be a reflection of your unique taste and style.
            Since our inception, we have been committed to offering a curated selection of high-quality sofas, crafted with
            care to ensure comfort, durability, and a timeless design.
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
              We prioritize quality at every step, from selecting materials to the final inspection.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2 Poppins">Comfort</h3>
            <p className="text-lg text-gray-700 Poppins">
              Our sofas are designed to provide support and relaxation.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2 Poppins">Sustainability</h3>
            <p className="text-lg text-gray-700 Poppins">
              We are committed to sustainability, using eco-friendly materials and processes.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-semibold mb-4 Poppins">Join Our Community</h2>
        <p className="text-lg text-gray-700 mb-6 Poppins">
          Explore our collection of sofas and find the perfect one for your home.
        </p>
        <Link href="/shop">
          <button className="bg-green-500 text-white px-8 py-3 Poppins rounded-lg shadow-lg hover:bg-green-600 hover:scale-105 transform transition-all duration-300 ease-in-out flex items-center gap-2 justify-center m-auto">
            <FaShoppingCart /> Explore Our Collection
          </button>
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
