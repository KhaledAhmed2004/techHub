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
      data-aos="zoom-in"
      className="bg-[url('https://i.ibb.co/0JPWnNw/664xauto-samsung-jadi-peringkat-ke-7-di-interbrand-best-global-brands-2015-151005h.jpg')] bg-cover bg-no-repeat min-h-[250px] hover:scale-105 transition-all duration-200"
    ></div>
  );
};

export default BrandCard;
