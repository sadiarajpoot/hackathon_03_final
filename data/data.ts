
import { Description } from '@radix-ui/react-dialog';
import Image from 'next/image'
// import Item1 from "../../public/Images/item1.png"
// import Item2 from "../../public/Images/item 2.png"
// import Item3 from "../../public/Images/item 3.png"
// import Item4 from "../../public/Images/item 4.png"
// import Item5 from "../../public/Images/item 5.png"
// import Item6 from "../../public/Images/item 6.png"
// import Item7 from "../../public/Images/item 7.png"
// import Item8 from "../../public/Images/item 8.png"
// import Item9 from "../../public/Images/item 9.png"
// import Item10 from "../../public/Images/item 10.png"
// import Item11 from "../../public/Images/item11.png"
// import Item12 from "../../public/Images/item 12.png"
// import Item13 from "../../public/Images/item 13.png"
// import Item14 from "../../public/Images/item14.png"
// import Item15 from "../../public/Images/item 15.png"
// import Item16 from "../../public/Images/item16.png"
// import Link from 'next/link'

export const products = [
  { 
    id: 1, 
    image: "/Images/item1.png", 
    name: "Trenton modular sofa_3", 
    price: "Rs. 25,000.00", 
    originalprice:"Rs. 30,000.00",
    Description: "The Trenton Modular Sofa offers a perfect blend of modern design, comfort, and versatility, making it an ideal addition to any living space. Crafted with high-quality materials, this sofa is designed to provide both durability and style. This sofa features a modular structure, allowing you to easily customize it to fit your space. Whether you need a cozy corner setup or a spacious seating arrangement, the Trenton Modular Sofa can be reconfigured to suit your needs.", 
    review: [
      { name: "John Doe", rating: 5, text: "This sofa is incredibly comfortable and stylish! It fits perfectly in my living room and I love the color!" },
      { name: "Jane Smith", rating: 4, text: "Absolutely love this sofa. High quality, and very easy to assemble. Totally worth the price!" },
      { name: "Sarah Lee", rating: 5, text: "The perfect addition to my living room. I love how it can be reconfigured!" }
    ]
  },
  { 
    id: 2, 
    image: "/Images/item 2.png", 
    name: "Granite dining table with dining chair", 
    price: "Rs. 27,000.00", 
    originalprice:"Rs. 30,000.00",
    Description: "Elevate your dining experience with the Granite Dining Table with Dining Chairs, a perfect blend of luxury, durability, and timeless elegance. This stunning set is designed to impress and withstand the test of time, making it an ideal choice for both modern and traditional interiors. Paired with ergonomic chairs designed for comfort, this dining set ensures that you and your guests enjoy hours of relaxed dining.", 
    review: [
      { name: "David Brown", rating: 5, text: "The quality of the granite is exceptional! This dining set adds such a luxurious touch to my home." },
      { name: "Emily White", rating: 4, text: "Very elegant and functional. The chairs are super comfortable for long dinners." },
      { name: "Michael Green", rating: 5, text: "I’m so happy with this purchase. The table is a showstopper!" }
    ]
  },
  { 
    id: 3, 
    image: "/Images/item 3.png", 
    name: "Outdoor bar table and stool", 
    price: "Rs. 35,000.00", 
    originalprice:"Rs. 40,000.00",
    Description: "Transform your outdoor space into a stylish and functional entertaining area with the Outdoor Bar Table and Stool set. This high-quality set is perfect for enjoying casual drinks, hosting friends, or simply relaxing in your backyard, patio, or balcony. Crafted for both comfort and durability, it’s an ideal choice for any outdoor setting.", 
    review: [
      { name: "Chris Adams", rating: 4, text: "Great set for outdoor gatherings. The stools are comfortable and the table looks sleek." },
      { name: "Olivia King", rating: 5, text: "Love this set! It adds a great vibe to our patio. Very sturdy and stylish." },
      { name: "Luke Johnson", rating: 5, text: "Perfect for our outdoor bar. Very durable and stylish. Totally recommend!" }
    ]
  },
  { 
    id: 4, 
    image: "/Images/item 4.png", 
    name: "Plain console with teak mirror", 
    price: "Rs. 26,000.00", 
    originalprice:"Rs. 30,000.00",
    Description: "Elevate your entryway, hallway, or living space with the timeless charm of the Plain Console with Teak Mirror. This elegant set combines minimalist design with natural materials to create a sophisticated and functional piece for any room. The clean lines of the console, paired with the warm hues of the teak mirror, bring a touch of refinement to your home decor.", 
    review: [
      { name: "Sophia Wilson", rating: 5, text: "The console looks amazing in my hallway. The teak mirror adds so much character!" },
      { name: "Liam Scott", rating: 4, text: "Beautiful design, but the mirror could be a bit larger. Overall, very happy with it." },
      { name: "Ava Carter", rating: 5, text: "Perfect for my entryway. It’s a stylish and functional piece." }
    ]
  },
  { 
    id: 5, 
    image: "/Images/item 5.png", 
    name: "Grain coffee table", 
    price: "Rs. 15,000.00", 
    originalprice:"Rs. 20,000.00",
    Description: "Bring a touch of nature and craftsmanship to your living space with the Grain Coffee Table. This stunning piece combines organic beauty with modern design, featuring a unique wood grain pattern that showcases the natural charm of the material. Perfect for contemporary or rustic interiors, the Grain Coffee Table is not just functional but also a statement piece that enhances your home decor.", 
    review: [
      { name: "James Taylor", rating: 4, text: "Beautiful wood grain and solid construction. A perfect addition to my living room." },
      { name: "Isabella Davis", rating: 5, text: "I love the natural wood finish. It complements my rustic decor perfectly!" },
      { name: "Ethan Miller", rating: 5, text: "A stunning coffee table. The quality is excellent and it’s very sturdy." }
    ]
  },
  { 
    id: 6, 
    image: "/Images/item 6.png", 
    name: "Kent coffee table", 
    price: "Rs. 225,000.00", 
    originalprice:"Rs. 300,000.00",
    Description: "The Kent Coffee Table combines sleek modern design with functional elegance, making it a perfect centerpiece for any contemporary living space. With its minimalist silhouette and refined finish, this coffee table adds a touch of sophistication while offering practicality for daily use.", 
    review: [
      { name: "Mason Roberts", rating: 5, text: "This coffee table is simply stunning! It’s sleek, modern, and fits perfectly in my living room." },
      { name: "Charlotte Lewis", rating: 5, text: "The quality and finish are incredible. It has a minimalist design that I love." },
      { name: "Amelia Clark", rating: 4, text: "A beautiful table, though a little pricey. It does look amazing in our home!" }
    ]
  },
  { 
    id: 7, 
    image: "/Images/item 7.png", 
    name: "Round coffee table_color 2", 
    price: "Rs. 251,000.00", 
    originalprice:"Rs. 260,000.00",
    Description: "The Round Coffee Table – Color 2 combines sophistication, style, and functionality in one elegant design. Its minimalist yet chic appearance makes it the perfect addition to any modern living room or lounge area. Whether you’re furnishing a contemporary space or looking to add a stylish focal point to your decor, this coffee table offers both aesthetic appeal and practicality.", 
    review: [
      { name: "Lucas Walker", rating: 5, text: "A beautiful, modern coffee table. The color is perfect for my living room." },
      { name: "Chloe Martinez", rating: 5, text: "Sleek, elegant, and great quality. It’s exactly what I was looking for!" },
      { name: "Benjamin Hall", rating: 4, text: "Nice table but a bit heavy. Still, it looks fantastic in our living room!" }
    ]
  },
  { 
    id: 8, 
    image: "/Images/item 8.png", 
    name: "Reclaimed teak coffee table", 
    price: "Rs. 25,200.00", 
    originalprice:"Rs. 28,500.00",
    Description: "The Reclaimed Teak Coffee Table is the perfect blend of sustainability, craftsmanship, and timeless beauty. Made from high-quality reclaimed teak wood, this coffee table offers a rustic yet elegant addition to any living space. Its unique charm and eco-friendly design make it a standout piece in both contemporary and traditional settings.", 
    review: [
      { name: "Aiden Perez", rating: 5, text: "Love the rustic look and the eco-friendly materials. The table is solid and well-made." },
      { name: "Zoe King", rating: 5, text: "Beautiful craftsmanship. I’m proud to have this in my living room." },
      { name: "Jackson Lee", rating: 4, text: "Great table, but it has a few rough edges. Still, it’s perfect for my home!" }
    ]
  },
  { 
    id: 9, 
    image: "/Images/item 9.png", 
    name: "Plain console_", 
    price: "Rs. 258,200.00", 
    originalprice:"Rs. 250,000.00",
    Description: "The Plain Console is a beautifully simple and versatile piece that adds an elegant touch to any entryway, living room, or hallway. Its minimalist design provides the perfect balance of functionality and style, making it an ideal addition to both modern and traditional interiors.", 
    review: [
      { name: "Zoe Harris", rating: 5, text: "A gorgeous piece! The simplicity and functionality are unmatched." },
      { name: "Ethan Scott", rating: 4, text: "Nice console, but the finish could have been a little smoother." },
      { name: "Mia Robinson", rating: 5, text: "Perfect for my entryway. It’s simple but elegant." }
    ]
  },
  { 
    id: 10, 
    image: "/Images/item 10.png", 
    name: "Reclaimed teak Sideboard", 
    price: "Rs. 20,000.00", 
    originalprice:"Rs. 25,000.00",
    Description: "The Reclaimed Teak Sideboard is a stunning fusion of sustainability and timeless craftsmanship, designed to add both functionality and natural beauty to any space. Made from carefully sourced reclaimed teak wood, this piece serves as a statement of eco-friendly design, bringing a rustic yet refined charm to your home.", 
    review: [
      { name: "Natalie Thompson", rating: 5, text: "This sideboard is absolutely gorgeous! The teak wood is beautiful and sturdy." },
      { name: "Jack Turner", rating: 5, text: "A well-made, stylish sideboard that complements my living room perfectly." },
      { name: "Sophia Moore", rating: 4, text: "Great sideboard, but I wish it had a bit more storage space." }
    ]
  },
  { 
    id: 11, 
    image: "/Images/item11.png", 
    name: "SJP_0825", 
    price: "Rs. 200,000.00", 
    originalprice:"Rs. 30,000.00",
    Description: "The SJP_0825 Sofa is a luxurious, modern seating solution designed for comfort and style. It combines sleek lines with a contemporary aesthetic, making it a perfect fit for both casual and formal living rooms. The sofa boasts a minimalist yet elegant design with clean, straight lines and a plush cushion structure. It adds a sophisticated touch to any living space.", 
    review: [
      { name: "Sophie Evans", rating: 5, text: "Incredibly comfortable! This sofa has transformed my living room." },
      { name: "Benjamin White", rating: 4, text: "Great sofa, but the cushions could be a bit firmer." },
      { name: "Olivia Harris", rating: 5, text: "Love the minimalist design and amazing comfort." }
    ]
  },
  { 
    id: 12, 
    image: "/Images/item 12.png", 
    name: "Bella chair and table", 
    price: "Rs. 100,000.00", 
    originalprice:"Rs. 90,000.00",
    Description: "The Bella Chair and Table set is a refined and stylish furniture duo that combines both elegance and practicality. Perfect for a variety of spaces, such as living rooms, dining areas, or home offices, it creates a timeless look with a contemporary twist.", 
    review: [
      { name: "Liam Foster", rating: 5, text: "Absolutely love this set. The design is modern and the quality is exceptional." },
      { name: "Emily Carter", rating: 4, text: "Very stylish! Just wish the chair was a bit more comfortable for longer sitting." },
      { name: "Charlotte Roberts", rating: 5, text: "Perfect for my office. The set looks elegant and professional." }
    ]
  },
  { 
    id: 13, 
    image: "/Images/item 13.png", 
    name: "Granite square side table", 
    price: "Rs. 258,800.00", 
    originalprice:"Rs. 270,000.00",
    Description: "The Granite Square Side Table is a sophisticated and durable piece of furniture designed to elevate the aesthetic of any space. With its modern and timeless appeal, this table seamlessly blends with both contemporary and traditional décor.", 
    review: [
      { name: "Sophie Moore", rating: 5, text: "This side table is beautiful! It’s a perfect blend of modern and classic design." },
      { name: "Noah Harris", rating: 4, text: "The table looks amazing but is a bit heavy. Still a fantastic piece." },
      { name: "Amelia Brown", rating: 5, text: "I love the granite finish! It looks great in my living room." }
    ]
  },
  { 
    id: 14, 
    image: "/Images/item14.png", 
    name: "Asgaard sofa", 
    price: "Rs. 250,000.00", 
    originalprice:"Rs. 280,000.00",
    Description: "The Asgaard Sofa is perfect for those looking to create a stylish and inviting atmosphere in their home. It is ideal for living rooms, family rooms, or modern lounges, where both aesthetics and comfort are a priority. Whether you’re hosting guests or relaxing with family, this sofa serves as a statement piece that combines function and design seamlessly.", 
    review: [
      { name: "Jacob Adams", rating: 5, text: "Incredible sofa! Super comfortable and looks great in my living room." },
      { name: "Avery Wilson", rating: 4, text: "Very nice sofa, though the cushions could be firmer." },
      { name: "Maya Clark", rating: 5, text: "A statement piece for sure. I get so many compliments on it!" }
    ]
  },
  { 
    id: 15, 
    image: "/Images/item 15.png", 
    name: "Maya sofa three seater", 
    price: "Rs. 115,000.00", 
    originalprice:"Rs. 120,000.00",
    Description: "The Maya Sofa Three-Seater is a stylish and comfortable piece of furniture that combines contemporary design with luxurious comfort. Perfect for modern living rooms, lounges, or any space that requires both form and function, the Maya Sofa is designed to make a statement while providing optimal comfort.", 
    review: [
      { name: "Jack Mitchell", rating: 5, text: "This sofa is everything! It's both stylish and extremely comfortable." },
      { name: "Harper Miller", rating: 4, text: "Great sofa, though the cushions are a little too soft for my liking." },
      { name: "Lily Harris", rating: 5, text: "I’m in love with this sofa. It’s perfect for my living room!" }
    ]
  },
  { 
    id: 16, 
    image: "/Images/item16.png", 
    name: "Outdoor sofa set", 
    price: "Rs. 244,000.00", 
    originalprice:"Rs. 273,000.00",
    Description: "An Outdoor Sofa Set is an essential addition to any outdoor living area, offering the perfect balance of comfort, style, and durability. Whether you’re enjoying a quiet evening outdoors or hosting a summer gathering, this versatile furniture will provide a comfortable and inviting space for relaxation and socializing. Choose a set that fits your space and design preferences to transform your outdoor area into a cozy, stylish haven.", 
    review: [
      { name: "Mason Clark", rating: 5, text: "This set is amazing! So comfortable and perfect for our patio." },
      { name: "Isabella White", rating: 4, text: "Great quality, though the cushions could use a little more padding." },
      { name: "Ethan Scott", rating: 5, text: "Fantastic outdoor set! It’s exactly what we needed for our backyard." }
    ]
  }
];
// data.ts
import MaskGroup11 from "../../public/Images/Mask group11.png";
import MaskGroup12 from "../../public/Images/maskgroup12.png";
import MaskGroup16 from "../../public/Images/Mask group 16.png";
import MaskGroup17 from "../../public/Images/Mask group 17.png";

// Product Interface
export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  rating: number;
  image: string;
  description: string;
}

// Array of products with expanded descriptions
// import MaskGroup11 from "../../public/Images/Mask group11.png";
// import MaskGroup12 from "../../public/Images/maskgroup12.png";
// import MaskGroup16 from "../../public/Images/Mask group 16.png";
// import MaskGroup17 from "../../public/Images/Mask group 17.png";

// Product Interface
export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  rating: number;
  image: string;
  description: string;
  reviews: Review[]; // Add reviews array
}

export interface Review {
  reviewer: string;
  rating: number; // Rating out of 5
  comment: string;
}

// Array of products with 3 reviews each
export const HomePageProducts: Product[] = [
  {
    id: 1,
    name: "Trenton modular sofa_3",
    price: 25000,
    originalPrice: 30000,
    rating: 4,
    image: "/Images/Mask group11.png",
    description: "The Trenton modular sofa_3 offers a luxurious and comfortable seating experience, with a versatile modular design that fits perfectly in your living room or any modern space.",
    reviews: [
      {
        reviewer: "John Doe",
        rating: 5,
        comment: "Absolutely love this sofa! It's so comfortable, and the modular design fits perfectly in my living room.",
      },
      {
        reviewer: "Jane Smith",
        rating: 4,
        comment: "Great quality, but the color was a bit lighter than expected. Still very happy with my purchase.",
      },
      {
        reviewer: "Alice Johnson",
        rating: 5,
        comment: "The sofa is stylish and functional. I love the soft fabric and the variety of seating arrangements. Worth the price!",
      },
    ],
  },
  {
    id: 2,
    name: "Outdoor bar table and stool",
    price: 30000,
    originalPrice: 35000,
    rating: 4,
    image: "/Images/Mask group 16.png",
    description: "This stylish outdoor bar table and stool set is perfect for patios and gardens, offering a sleek design and comfortable seating for your outdoor gatherings.",
    reviews: [
      {
        reviewer: "Michael Johnson",
        rating: 4,
        comment: "The set looks amazing in my backyard! The quality is great, and the stools are comfortable.",
      },
      {
        reviewer: "Emily Brown",
        rating: 5,
        comment: "Perfect for outdoor parties! Stylish and sturdy. I get so many compliments on it.",
      },
      {
        reviewer: "David Miller",
        rating: 3,
        comment: "The table is great, but the stools could be more comfortable. Overall, still a good purchase.",
      },
    ],
  },
  {
    id: 3,
    name: "Plain console with teak mirror",
    price: 25000,
    originalPrice: 28000,
    rating: 4,
    image: "/Images/Mask group 17.png",
    description: "Elegant console with a teak mirror, perfect for your living room or entryway. The sleek design adds a touch of sophistication to any space.",
    reviews: [
      {
        reviewer: "Sarah Davis",
        rating: 5,
        comment: "This console looks stunning in my hallway. The teak mirror adds a touch of sophistication and complements my decor perfectly.",
      },
      {
        reviewer: "Daniel Lee",
        rating: 4,
        comment: "Good quality, but I wish the console had a few more compartments for storage.",
      },
      {
        reviewer: "Olivia Wilson",
        rating: 5,
        comment: "Very happy with this console. The design is modern and minimalistic, and it works well with the rest of my furniture.",
      },
    ],
  },
  {
    id: 4,
    name: "Granite dining table with dining chair",
    price: 40000,
    originalPrice: 38000,
    rating: 4,
    image: "/Images/maskgroup12.png",
    description: "A luxurious granite dining table paired with comfortable dining chairs. Perfect for any formal dining setting, with a sleek and durable design.",
    reviews: [
      {
        reviewer: "Linda White",
        rating: 5,
        comment: "This dining set is exactly what I needed! Sturdy, elegant, and looks amazing in my dining room.",
      },
      {
        reviewer: "Chris Green",
        rating: 4,
        comment: "Very nice, but the granite is heavier than I expected. Still, a great investment for my home.",
      },
      {
        reviewer: "Sophia Black",
        rating: 5,
        comment: "The granite is beautifully polished, and the chairs are very comfortable. I love hosting dinner parties with this set.",
      },
    ],
  },
];

