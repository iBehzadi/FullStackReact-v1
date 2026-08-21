import React, { useContext, useEffect, useState } from "react";
import { getShopContext, ShopContext } from "../../../Context/ShopContext";
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
    <div>
      {/* header */}
      <div>
        <div>
          <span>Curated Selection</span>
          <h2>
            Our <span>Signature</span> Collections
          </h2>
        </div>
        <div>View All Products</div>
      </div>

      {/* home collection display */}
      {homeProducts.length > 0 ? productItems : loadingProducts}
    </div>
  );
}
