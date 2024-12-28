"use client";
import { products } from "@/data/data";
import Image from "next/image";
import PagesHeader from "@/app/components/PagesHeader";
import Link from "next/link";
import { useState, useEffect } from "react"; 
import { BsCart3 } from "react-icons/bs"; 


interface ProductPageProps {
  params: { id: string };
}

const ProductPage = ({ params }: ProductPageProps) => {
  const productId = Number(params.id);

  // Find the product by its id
  const product = products.find((item) => item.id === productId);

  // Cart state to track the items added to the cart
  const [cart, setCart] = useState<{ id: number; name: string; price: number|string; quantity: number }[]>([]);

  // State for product quantity on the current page
  const [productQuantity, setProductQuantity] = useState<number>(1);

  // State for the temporary message when an item is added
  const [addedItemMessage, setAddedItemMessage] = useState<string | null>(null);

  // State for showing cart items modal
  const [showCart, setShowCart] = useState<boolean>(false);

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);


  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);


  const addToCart = () => {
    const existingProduct = cart.find((item) => item.id === product?.id);
    if (existingProduct) {
  
      const updatedCart = cart.map((item) =>
        item.id === product?.id
          ? { ...item, quantity: item.quantity + productQuantity }
          : item
      );
      setCart(updatedCart);
    } else {
      // Add new product to the cart
      setCart([
        ...cart,
        { id: product?.id || 0, 
          name: product?.name || "Unknown", 
          price: product?.price || 0,
          quantity: productQuantity,},
      ]);
    }


    setAddedItemMessage(`${product?.name} * ${productQuantity}`);
    setTimeout(() => {
      setAddedItemMessage(null);
    }, 3000); 
  };

  const totalPrice = cart.reduce((total, item) => {
    const itemPrice = typeof item.price === "number" ? item.price : parseFloat(item.price) || 0;
    return total + itemPrice * item.quantity;
  }, 0);
  
  const validTotalPrice = isNaN(totalPrice) ? 0 : totalPrice;
  
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  

  // Function to handle quantity change
  const handleQuantityChange = (action: 'increase' | 'decrease') => {
    if (action === 'increase') {
      setProductQuantity(productQuantity + 1);
    } else if (action === 'decrease' && productQuantity > 1) {
      setProductQuantity(productQuantity - 1);
    }
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemId: number) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  return (
    <div className="container mx-auto px-4 py-[200px]">
      <PagesHeader />
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <ol className="flex space-x-2">
          <li>
            <Link href="/" className="hover:text-gray-800 Poppins">Home</Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/shop" className="hover:text-gray-800 Poppins">Shop</Link>
          </li>
          <li>/</li>
          <li className="text-gray-800 Poppins">{product?.name}</li>
        </ol>
      </nav>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
        {/* Image Gallery */}
        <div className="flex justify-center items-center">
          <div className="rounded-lg overflow-hidden shadow-sm border-none w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl">
            <Image
              src={product?.image || "/default-image.jpg"} 
              alt={product?.name || "Product Image"}
              width={900}
              height={900}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-800">{product?.name}</h1>
          <h2 className="text-2xl font-semibold text-gray-600">{product?.price}</h2>

          {/* Product Description */}
          <p className="text-sm text-gray-500 mt-4 pr-6 Poppins">{product?.Description}</p>

          {/* Reviews */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800">Customer Reviews</h3>
            <div className="flex items-center mt-2">
              {/* Star Rating */}
              <div className="flex space-x-1">
                ⭐⭐⭐⭐⭐
              </div>
              <span className="ml-2 text-gray-600">({product?.review.length} Reviews)</span>
            </div>

            {/* Sizes */}
            <div className="mb-4">
              <h3 className="text-lg text-gray-700 mb-2 Poppins mt-2 ">Size</h3>
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
              <h3 className="text-lg text-gray-700 mb-2 Poppins">Color</h3>
              <div className="flex space-x-2">
                <div className="w-8 h-8 rounded-full bg-[#816DFA] border-gray-300 cursor-pointer hover:scale-105"></div>
                <div className="w-8 h-8 rounded-full bg-black  border-gray-300 cursor-pointer hover:scale-105"></div>
                <div className="w-8 h-8 rounded-full bg-[#CDBA7B]  border-gray-300 cursor-pointer hover:scale-105"></div>
              </div>
            </div>

            {/* Reviews Section */}
            <div className="mt-4">
              <h4 className="text-lg font-medium text-gray-700">What our customers say</h4>
              <div className="mt-2 space-y-4">
                {/* Loop through reviews */}
                {product?.review.map((review, index) => (
                  <div key={index} className="mt-4 space-y-4 sm:flex sm:flex-col sm:space-y-6 lg:space-y-4 mr-16">
                    <div className="p-4 border rounded-lg shadow-sm">
                      <p className="text-sm text-black Poppins">&ldquo;{review.text}&ldquo;</p>
                      <div className="flex items-center mt-2">
                        <span className="text-sm text-blue-600 Poppins">- {review.name}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Add to Cart Button */}
          <div className="flex items-center space-x-4">
            {/* Quantity Control */}
            <div className="flex items-center border border-gray-300 rounded">
              <button
                onClick={() => handleQuantityChange('decrease')}
                className="px-3 py-2"
              >
                -
              </button>
              <span className="px-4">{productQuantity}</span>
              <button
                onClick={() => handleQuantityChange('increase')}
                className="px-3 py-2"
              >
                +
              </button>
            </div>
            <button
              onClick={addToCart}
              className="bg-black text-white px-6 py-2 Poppins rounded hover:bg-gray-800"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>

      {/* Cart Details (Modal) */}
      {showCart && (
  <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 z-50">
    <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 mx-auto mt-20 bg-white p-4 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold text-gray-800">Your Cart</h3>
      <ul className="mt-4 space-y-4">
        {cart.map((item, index) => {
          const productImage = products.find((product) => product.id === item.id)?.image;
          return (
            <li key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {/* Product Image */}
                <Image
                  src={productImage || "/default-image.jpg"}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="w-12 h-12 object-cover rounded"
                />
                {/* Product Name and Quantity */}
                <span>{item.name} - {item.price} x {item.quantity}</span>
              </div>
              {/* Remove Button */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600 Poppins"
              >
                Remove
              </button>
            </li>
          );
        })}
      </ul>


            <div className="mt-4 flex justify-between">
              <span>Total: ${validTotalPrice.toFixed(2)}</span>
              <button
                onClick={() => setShowCart(false)}
                className="bg-blue-400 text-white px-6 py-3 rounded-lg font-bold Poppins hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200 transform hover:scale-105"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}


      {/* Cart Icon */}
      <div
        className="fixed bottom-8 right-8 flex items-center Poppins  justify-center bg-[#4C4C4C] text-white rounded-full p-4 cursor-pointer"
        onClick={() => setShowCart(!showCart)}
      >
        <BsCart3 />
        {totalQuantity > 0 && (
          <span className="absolute top-0 right-0 Poppins bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
            {totalQuantity}
          </span>
        )}
      </div>

      {/* Item added confirmation message */}
      {addedItemMessage && (
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-green-500 Poppins text-white px-4 py-2 rounded">
          {addedItemMessage} added to cart!
        </div>
      )}
    </div>
  );
};

export default ProductPage;
