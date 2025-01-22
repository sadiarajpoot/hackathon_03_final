"use client";
import { useState, useEffect } from "react";
import { fetchProductById } from "../../../sanity/lib/client";
import Image from "next/image";
import PagesHeader from "@/app/components/PagesHeader";
import Link from "next/link";
import { BsCart3 } from "react-icons/bs";
import Comments from "../../components/Comments";
import ProductCustomization from "@/app/components/Customization";
import { toast } from "react-toastify";
import AddToCardTosity from "@/app/components/AddToCardTosity";

interface ProductPageProps {
  params: { id: string };
}

const ProductPage = ({ params }: ProductPageProps) => {
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState<{ id: number; name: string; price: number | string; quantity: number; image: string }[]>([]);
  const [productQuantity, setProductQuantity] = useState<number>(1);
  const [addedItemMessage, setAddedItemMessage] = useState<string | null>(null);
  const [showCart, setShowCart] = useState<boolean>(false);

  const productId = params.id;

  useEffect(() => {
    const fetchProduct = async () => {
      const productData = await fetchProductById(productId);
      setProduct(productData);
      setLoading(false);
    };

    fetchProduct();

    // Load cart from local storage on mount
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, [productId]);

  useEffect(() => {
    // Save cart to local storage whenever cart changes
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
      setCart([
        ...cart,
        {
          id: product?.id || 0,
          name: product?.name || "Unknown",
          price: product?.price || 0,
          quantity: productQuantity,
          image: product?.image?.asset?.url || "/default-image.jpg",
        },
      ]);
    } 
const added=
toast.success(`${product?.name}) added to cart!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark"
    });
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

  const handleQuantityChange = (action: 'increase' | 'decrease') => {
    if (action === 'increase') {
      setProductQuantity(productQuantity + 1);
    } else if (action === 'decrease' && productQuantity > 1) {
      setProductQuantity(productQuantity - 1);
    }
  };

  const removeFromCart = (itemId: number) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  if (loading) return <div>Loading...</div>;

  if (!product) return <div>Product not found</div>;

  return (
    <div className="container mx-auto px-4 py-[200px]">
      <PagesHeader />
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
        <div className="flex justify-center items-center">
          <div className="rounded-lg overflow-hidden shadow-sm border-none w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl">
            <Image
              src={product?.image?.asset?.url || "/default-image.jpg"}
              alt={product?.name || "Product Image"}
              width={900}
              height={900}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-800 ">{product?.name}</h1>
          <h3 className="text-2xl font-semibold text-gray-700 Poppins"><span className='text-green-600'>$</span>{product.price}</h3>
          <h3 className="text-xl font-semibold text-gray-800">{product.category}</h3>
          <p className="text-sm text-gray-500 mt-4 pr-6 Poppins">{product?.description}</p>
          <ProductCustomization />
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800">Customer Reviews</h3>
            <div className="flex items-center mt-2">
              <div className="flex space-x-1">⭐⭐⭐⭐⭐</div>
              <span className="ml-2 text-gray-600">({product?.review?.length} Reviews)</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center border border-gray-300 rounded">
              <button onClick={() => handleQuantityChange('decrease')} className="px-3 py-2">-</button>
              <span className="px-4">{productQuantity}</span>
              <button onClick={() => handleQuantityChange('increase')} className="px-3 py-2">+</button>
            </div>
            <button onClick={addToCart} className="bg-black text-white px-6 py-2 Poppins rounded hover:bg-gray-800">
              Add To Cart
            </button>
          <AddToCardTosity />
          </div>
        </div>
      </div>

      {showCart && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 z-50">
          <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 mx-auto mt-20 bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">Your Cart</h3>
            <ul className="mt-4 space-y-4">
              {cart.map((item, index) => (
                <li key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Image
                      src={item.image || "/default-image.jpg"}
                      alt={item.name}
                      width={50}
                      height={50}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <span>{item.name} - {item.price} x {item.quantity}</span>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="text-red-600 Poppins">Remove</button>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex justify-between">
              <span>Total: ${validTotalPrice.toFixed(2)}</span>
              <button onClick={() => setShowCart(false)} className="bg-blue-400 text-white px-6 py-3 rounded-lg font-bold Poppins hover:bg-blue-500">
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="fixed bottom-8 right-8 flex items-center Poppins justify-center bg-[#4C4C4C] text-white rounded-full p-4 cursor-pointer" onClick={() => setShowCart(!showCart)}>
        <BsCart3 />
        {totalQuantity > 0 && (
          <span className="absolute top-0 right-0 Poppins bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
            {totalQuantity}
          </span>
        )}
      </div>



      <Comments />
    </div>
  );
};

export default ProductPage;
