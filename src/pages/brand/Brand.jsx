import React from "react";
import Slider from "./hero/Slider";
import ProductCard from "../appProduct/product/ProductCard";

const Brand = () => {
  return (
    <div>
      <Slider></Slider>
      <div className="grid grid-cols-2 px-24">
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>
    </div>
  );
};

export default Brand;
