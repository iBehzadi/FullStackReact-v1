import React, { useEffect, useState } from "react";
import { getShopContext } from "../../../Context/ShopContext";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";
export default function HomeCollection() {
  const { products } = getShopContext();
  const [homeProducts, setHomeProducts] = useState([]);
  useEffect(() => {
    setHomeProducts(products?.slice(0, 8) || []);
  }, [products]);
  const loadingProducts = new Array(8)
    .fill(null)
    .map((_, index) => <ProductCardSkeleton key={index} />);
  const productItems = homeProducts.map((item) => (
    <ProductCard 
      id={item._id}
      image={item.image[0]}
      category={item.category}
      title={item.name}
      price={item.price}
      key={item._id}
    />
  ));
  return (
    <div className="py-20 px-6 max-w-7xl mx-auto">
      {/* header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="max-w-xl">
          <span className="text-orange-500 font-bold uppercase tracking-[0.3em] text-xs">
            Curated Selection
          </span>
          <h2 className="text-4xl font-black text-gray-900 mt-2 tracking-widest">
            Our{" "}
            <span className="text-gray-400 font-light italic">Signature</span>{" "}
            Collections
          </h2>
        </div>
        <div className="text-sm font-bold cursor-pointer uppercase tracking-widest border-b-2 border-black pb-1 hover:text-orange-500 hover:border-orange-500">
          View All Products
        </div>
      </div>

      {/* home collection display */}
      {homeProducts.length > 0 ? (
        <div className="grid grid-cols-4 gap-x-8 gap-y-12">{productItems}</div>
      ) : (
        loadingProducts
      )}
    </div>
  );
}
