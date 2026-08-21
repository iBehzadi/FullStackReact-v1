import React from "react";
import { Link } from "react-router-dom";
import { FiEye, FiShoppingCart } from "react-icons/fi";
export default function ProductCard({ id, image, category, title, price }) {
  return (
    <div className="group relative">
      <div className="relative aspect-3/4 overflow-hidden rounded-2xl bg-gray-100">
        <div className="absolute top-4 left-4 z-20 bg-white px-3 py-1 rounded-full shadow-sm">
          <p className="text-[10px] font-black uppercase tracking-widest text-gray-900">
            New
          </p>
        </div>
        <img
          src={image}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          alt=""
        />

        <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/20 opacity-0 backdrop-blur-[2px] transition-all duration-300 group-hover:opacity-100">
          <button className="p-4 bg-white rounded-full text-gray-900 hover:bg-orange-500 shadow-xl hover:text-white transition-colors">
            <FiShoppingCart size={20} />
          </button>
          <Link to={`/product-details/${id}`} className="p-4 bg-white rounded-full text-gray-900 hover:bg-orange-500 shadow-xl hover:text-white transition-colors">
            <FiEye size={20} />
          </Link>
        </div>
      </div>
      <div className="mt-6 flex justify-between items-start">
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">
            {category}
          </p>
          <h3 className="text-base font-bold text-gray-900 group-hover:text-orange-600 transition-colors ">
            {title}
          </h3>
        </div>
        <p className="text-lg font-black text-gray-900">{price}</p>
      </div>
    </div>
  );
}
