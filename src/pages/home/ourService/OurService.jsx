import { TbTruckDelivery } from "react-icons/tb";
import { AiOutlineDollar } from "react-icons/ai";
import { BsPersonFillGear } from "react-icons/bs";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const OurService = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-5 bg-[#f5f5f7] rounded-xl">
        <div data-aos="zoom-in" className="text-center my-9">
          <TbTruckDelivery className="text-8xl mx-auto"></TbTruckDelivery>
          <h2 className="font-semibold text-xl mb-2">Free Delivery</h2>
          <p className="text-[#737373] w-[60%] mx-auto">
            And free returns. See checkout for delivery dates.
          </p>
        </div>
        <div data-aos="zoom-in" className="text-center my-9">
          <AiOutlineDollar className="text-8xl mx-auto"></AiOutlineDollar>
          <h2 className="font-semibold text-xl mb-2">Pay monthly at 0% APR</h2>
          <p className="text-[#737373] w-[60%] mx-auto">
            Choose to check out with Apple Card Monthly Installments.
          </p>
        </div>
        <div data-aos="zoom-in" className="text-center my-9">
          <BsPersonFillGear className="text-8xl mx-auto"></BsPersonFillGear>
          <h2 className="font-semibold text-xl mb-2">Personalize it</h2>
          <p className="text-[#737373] w-[60%] mx-auto">
            Engrave your device with your name or a personal note
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurService;
