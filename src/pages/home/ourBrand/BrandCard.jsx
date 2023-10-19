import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const BrandCard = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  }, []);
  return (
    <div
      style={{
        boxShadow: "15px 15px 20px rgba(0, 0, 0, 0.2),-15px -15px 20px #fffb",
      }}
      className="bg-[url('https://i.ibb.co/0JPWnNw/664xauto-samsung-jadi-peringkat-ke-7-di-interbrand-best-global-brands-2015-151005h.jpg')] bg-cover bg-no-repeat min-h-[250px] rounded-xl hover:scale-105 transition-all duration-200 hover:text-center hover:items-center hover:justify-center hover:duration-200  flex"
      //   data-aos="zoom-in"
    >
      <h2 className="text-2xl font-bold pl-3 pt-2">Samsung</h2>
    </div>
  );
};

export default BrandCard;
