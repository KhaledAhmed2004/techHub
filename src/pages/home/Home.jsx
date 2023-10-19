import Hero from "./hero/Hero";
import OurBrand from "./ourBrand/OurBrand";
import OurService from "./ourService/OurService";
import Review from "./review/Review";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <OurService></OurService>
      <OurBrand></OurBrand>
      <Review></Review>
    </div>
  );
};

export default Home;
