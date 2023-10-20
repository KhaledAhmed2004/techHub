import Slider from "./hero/Slider";
import ProductCard from "../appProduct/product/ProductCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Brand = () => {
  const [brandProduct, setBrandProduct] = useState([]);
  const { brand } = useParams();
  useEffect(() => {
    fetch(
      `https://technology-and-electronics-server-k2xg04seu.vercel.app/${brand}`
    )
      .then((res) => res.json())
      .then((data) => setBrandProduct(data));
  }, [brand]);

  // console.log(brandProduct, brand);

  return (
    <div>
      <Slider></Slider>
      <div className="grid grid-cols-2 px-24">
        {brandProduct.map((productData) => (
          <ProductCard
            key={productData._id}
            productData={productData}
          ></ProductCard>
        ))}
        {/* <ProductCard></ProductCard> */}
      </div>
    </div>
  );
};

export default Brand;
