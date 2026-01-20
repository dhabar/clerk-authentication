import React from 'react';

const HeroMobile = () => {
  return (
    <section className="w-full min-h-screen bg-linear-to-b from-blue-50 to-white flex flex-col items-center px-6 py-10">
      {/* Badge */}
      <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full mb-4 inline-flex items-center gap-1 text-sm font-medium">
        🔥 New Collection 2026
      </div>

      {/* Headline */}
      <h1 className="text-4xl font-extrabold text-center mb-3 leading-tight">
        Shop <span className="text-purple-500">Smarter.</span> <br />
        Live <span className="text-green-500">Better.</span>
      </h1>

      {/* Subheadline */}
      <p className="text-gray-600 text-center mb-6 max-w-[280]">
        Discover premium products crafted for modern lifestyles — quality, speed, and style in one place.
      </p>

      {/* Buttons */}
      <div className="flex flex-col gap-3 w-full max-w-70 mb-4">
        <button className="bg-linear-to-r from-purple-500 to-blue-500 text-white py-3 rounded-lg font-semibold shadow-md hover:opacity-90 transition">
          Shop Now
        </button>
        
      </div>

      {/* Social Proof */}
      <p className="text-gray-500 text-sm mb-6 text-center">
        🛡️ Secure Payments · 🚚 Fast Delivery · 🔁 Easy Returns
      </p>

      {/* Product Image */}
      <div className="relative w-full max-w-70">
        <img
          src="/path-to-your-product-image.png"
          alt="Products"
          className="w-full rounded-xl shadow-lg"
        />

        {/* Floating Cards */}
        <div className="absolute top-2 left-2 bg-white px-2 py-1 rounded-lg shadow flex items-center text-xs gap-1">
          🚚 Free Shipping
        </div>
        <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-lg shadow flex items-center text-xs gap-1">
          ⏱ 24h Delivery
        </div>
        <div className="absolute bottom-2 right-2 bg-white px-2 py-1 rounded-lg shadow flex items-center text-xs gap-1">
          ⭐ Best Seller
        </div>
      </div>
    </section>
  );
};

export default HeroMobile;
