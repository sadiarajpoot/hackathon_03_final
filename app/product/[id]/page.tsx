"use client"
import { HomePageProducts } from '@/data/data';
import { useState, useEffect } from 'react';
import { BsCart3 } from 'react-icons/bs';

type Product = {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  rating: number;
  image: string;
  description: string;
  quantity?: number; // Add quantity to the product type for cart purposes
};

type Review = {
  userName: string;
  userImage: string;
  text: string;
  rating: number;
};

const ProductDetails = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const [product, setProduct] = useState<Product | null>(null);
  const [comment, setComment] = useState("");
  const [reviews, setReviews] = useState<Review[]>([]); // Store reviews
  const [cart, setCart] = useState<Product[]>([]); // Store cart items
  const [productQuantity, setProductQuantity] = useState(1);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {

    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }

    if (id) {
      const foundProduct = HomePageProducts.find(
        (product) => product.id === parseInt(id, 10)
      );
      setProduct(foundProduct || null);
    }
  }, [id]);


  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      setReviews([
        ...reviews,
        {
          userName: "Guest User",
          userImage: "/Images/user.png",
          text: comment,
          rating: 4,
        },
      ]);
      setComment("");
    }
  };

  const addToCart = (product: Product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {

      setCart(cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: (item.quantity || 1) + productQuantity }
          : item
      ));
    } else {

      setCart([...cart, { ...product, quantity: productQuantity }]);
    }
  };

  const handleQuantityChange = (action: 'increase' | 'decrease') => {
    setProductQuantity(prev => {
      if (action === 'increase') return prev + 1;
      if (prev > 1) return prev - 1;
      return prev;
    });
  };

  const removeFromCart = (productId: number) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={`text-yellow-500 ${i < rating ? 'text-yellow-500' : 'text-gray-300'}`} >
          ★
        </span>
      );
    }
    return stars;
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  // Calculate total cart quantity and price
  const totalQuantity = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);
  const totalPrice = cart.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img src={product.image} alt={product.name} className="w-full h-auto object-contain" />
        </div>

        {/* Details Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl font-bold mb-4 Poppins">{product.name}</h1>
          <p className="text-sm text-gray-700 mb-4 Poppins">{product.description}</p>
          <div className="flex items-center justify-center gap-4 mb-4">
            {renderStars(product.rating)} {/* Show rating stars */}
          </div>
          <p className="text-xl font-semibold mb-4 Poppins">Price: Rs. {product.price}</p>
          <p className="text-md text-gray-500 line-through mb-4 Poppins">Original Price: Rs. {product.originalPrice}</p>

          <div className="flex items-center justify-center gap-4 mt-4">
            {/* Quantity Control */}
            <div className="flex items-center space-x-4 mt-4">
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
                onClick={() => addToCart(product)}
                className="bg-black text-white px-6 py-2 Poppins rounded hover:bg-gray-800"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>


      <div
        className="fixed bottom-8 right-8 bg-slate-500 text-white p-4 rounded-full cursor-pointer "
        onClick={() => setShowCart(true)}
      >
        <div className="flex items-center justify-center">
          <BsCart3 size={30} />
        </div>

        {totalQuantity > 0 && (
          <span className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/4 bg-red-500 text-white text-xl rounded-full px-2 py-1">
            {totalQuantity}
          </span>
        )}
      </div>


      {showCart && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 z-50">
          <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 mx-auto mt-20 bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">Your Cart</h3>
            <ul className="mt-4 space-y-4">
              {cart.map((item, index) => (
                <li key={index} className="flex justify-between items-center sm:flex-col sm:items-start sm:space-y-2 md:flex-row md:items-center md:space-y-0">
                  {/* Product Image */}
                  <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-md sm:w-16 sm:h-16 md:w-12 md:h-12" />

                  {/* Product Name and Price */}
                  <span className="text-sm sm:text-base font-medium text-gray-800">
                    {item.name} - Rs. {item.price}
                  </span>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 text-sm sm:text-base"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex justify-between">
              <span>Total: Rs. {totalPrice}</span>
              <button
                onClick={() => setShowCart(false)} // Close cart modal
                className="bg-blue-400 text-white px-6 py-3 rounded-lg font-bold Poppins hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200 transform hover:scale-105"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Reviews Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 Poppins">Reviews:</h2>
        <div className="space-y-4">
          {reviews.length > 0 ? (
            reviews.map((review, index) => (
              <div key={index} className="border p-4 rounded-md shadow-sm flex gap-4">
                {/* User Profile Image */}
                <img src={review.userImage} alt={review.userName} className="w-12 h-12 rounded-full" />
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold">{review.userName}</p>
                    <div className="flex">{renderStars(review.rating)}</div>
                  </div>
                  <p>{review.text}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-blue-700 Poppins">No reviews yet.</p>
          )}
        </div>
      </div>

      {/* Comment Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 Poppins">Leave a Comment:</h2>
        <form onSubmit={handleCommentSubmit} className="space-y-4">
          <textarea
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Write your comment here..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition Poppins"
          >
            Submit Comment
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductDetails;
