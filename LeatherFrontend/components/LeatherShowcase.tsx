// "use client";
// import Link from 'next/link'

// export default function LeatherShowcase() {
//   const images = [
//     "/woman.jpg",
//     "/man.jpg",
//     "/office.jpg",
//     "/travel.jpg",
//     "/gifts.jpg",
//     "/Tote Bag.jpg",
//   ];

//   return (
//     <section className="w-full bg-white py-20">
//       <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        
//         {/* Left Text Section */}
//         <div className="flex-1 text-center lg:text-left">
//           <div className="mx-auto lg:mx-0 max-w-2xl">
//           <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
//             Premium Leather Collections
//           </h2>
//           <p className="text-gray-700 mb-6 text-lg">
//             Discover our exquisite range of handcrafted leather products.
//             Each piece is designed for durability, elegance, and timeless style.
//             Perfect for fashion enthusiasts and professionals alike.
//           </p>
//          <Link
//   href="/shop"
//   className="inline-block bg-brand-brown text-white px-6 py-3 rounded-lg shadow-md hover:bg-black transition"
// >
//   Explore Collection
// </Link>

//           </div>

//         </div>

//         {/* Right 3D Slider */}
//         <div className="flex-1 flex justify-center lg:justify-end overflow-hidden">
//           <div className="relative w-full max-w-[340px] h-[300px] perspective overflow-hidden">
//             <div className="slider3d animate-rotate3D">
//               {images.map((img, i) => (
//                 <div key={i} className="slide">
//                   <img
//                     src={img}
//                     alt="product"
//                     className="w-full h-full object-cover shadow-lg"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }


"use client";

import Link from "next/link";

export default function LeatherShowcase() {
  const images = [
    "/woman.jpg",
    "/man.jpg",
    "/office.jpg",
    "/travel.jpg",
    "/gifts.jpg",
    "/Tote Bag.jpg",
  ];

  return (
    <section className="w-full bg-white py-20 overflow-x-clip">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Premium Leather Collections
            </h2>

            <p className="text-gray-700 mb-6 text-lg">
              Discover our exquisite range of handcrafted leather products.
              Each piece is designed for durability, elegance, and timeless style.
              Perfect for fashion enthusiasts and professionals alike.
            </p>

            <Link
              href="/shop"
              className="inline-block bg-brand-brown text-white px-6 py-3 rounded-lg shadow-md hover:bg-black transition"
            >
              Explore Collection
            </Link>
          </div>
        </div>

        {/* Right 3D Slider */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-[560px] h-[360px] perspective overflow-hidden">
            <div className="slider3d animate-rotate3D">
              {images.map((img, i) => (
                <div key={i} className="slide">
                  <img
                    src={img}
                    alt="Leather collection"
                    className="w-full h-full object-cover shadow-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}