import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const BrandCard = ({ brandData }) => {
  // useEffect(() => {
  //   fetch(
  //     `https://technology-and-electronics-server-5yeidzl2t.vercel.app/${brandName}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, [brandName]);

  const { brandName, imageUrl, _id } = brandData;

  return (
    <Link
      to={`/${brandName}`}
      style={{
        boxShadow: "15px 15px 20px rgba(0, 0, 0, 0.2),-10px -15px 20px #fffb",
        backgroundImage: `url(${imageUrl})`,
      }}
      className="bg-cover relative bg-no-repeat min-h-[250px] rounded-xl hover:scale-105 transition-all duration-200 flex"
      //   data-aos="zoom-in"
    >
      <div className="bg-black w-full opacity-10 rounded-xl"></div>
      <h2 className="text-2xl font-bold pl-3 pt-2 absolute">{brandName}</h2>
    </Link>
  );
};

export default BrandCard;
