import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const BrandCard = ({ brandData }) => {
  const { brandName, imageUrl } = brandData;
  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  }, []);
  return (
    <div
      style={{
        boxShadow: "15px 15px 20px rgba(0, 0, 0, 0.2),-10px -15px 20px #fffb",
        backgroundImage: `url(${imageUrl})`,
      }}
      className="bg-cover relative bg-no-repeat min-h-[250px] rounded-xl hover:scale-105 transition-all duration-200 flex"
      //   data-aos="zoom-in"
    >
      <div className="bg-black w-full opacity-10 rounded-xl"></div>
      <h2 className="text-2xl font-bold pl-3 pt-2 absolute">{brandName}</h2>
    </div>
  );
};

export default BrandCard;
