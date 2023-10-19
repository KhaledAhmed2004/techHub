import BrandCard from "./BrandCard";

const OurBrand = () => {
  return (
    <div className="p-14">
      <h2 className="text-5xl font-bold text-center mb-8">
        Our <span className="text-orange-700">Brands</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        <BrandCard></BrandCard>
        <BrandCard></BrandCard>
        <BrandCard></BrandCard>
        <BrandCard></BrandCard>
        <BrandCard></BrandCard>
        <BrandCard></BrandCard>
      </div>
    </div>
  );
};

export default OurBrand;
