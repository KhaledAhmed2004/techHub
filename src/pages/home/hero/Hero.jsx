import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
    });
  }, []);
  return (
    <div className="flex flex-col-reverse lg:flex-row md:p-0 p-3 text-center lg:text-start min-h-[70vh] mt-6">
      {/* left side */}
      <div className="flex flex-col justify-center">
        <h2 className="text-xl font-semibold">We're Here for You</h2>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-800 via-blue-800 to-gray-900 bg-clip-text text-transparent lg:pr-5">
          Choosing the Finest Brands, Just for You!
        </h1>
      </div>
      {/* right side */}
      <div className="w-fit md:w-[60%] mx-auto my-5" data-aos="fade-left">
        <img
          className="rounded-2xl"
          src="https://i.ibb.co/YWrWFvJ/Dream-Shaper-v7-create-a-banner-for-mobile-PC-and-laptop-access-0-1.jpg"
        />
      </div>
    </div>
  );
};

export default Hero;
