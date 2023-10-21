import { BiSolidPencil } from "react-icons/bi";
import { Link } from "react-router-dom";

const ProductCard = ({ productData }) => {
  const { brandName, name, price, shortDescription, image, _id } = productData;

  return (
    <div className="relative mx-auto mb-10 flex flex-col text-gray-700 bg-white w-96 rounded-xl bg-clip-border">
      <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
        <img src={image} className="object-cover w-full h-full" />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex flex-col">
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
              {brandName} {name}
            </p>
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
              Phone
            </p>
          </div>
          <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
            {price}$
          </p>
        </div>
        <div className="rating">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            checked
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
        </div>
        <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
          {shortDescription}
        </p>
      </div>
      <div className="p-6 pt-0">
        <Link
          to={`/product/${_id}`}
          className="w-full px-[22.5px] btn bg-gradient-to-r from-gray-700 to-gray-900 text-white font-bold hover:drop-shadow-xl hover:scale-105 transition-all	duration-300"
        >
          Details
        </Link>
        <Link
          to={`/update/${_id}`}
          className="w-full px-[22.5px] btn bg-gradient-to-r from-gray-700 to-gray-900 text-white font-bold hover:drop-shadow-xl hover:scale-105 transition-all	duration-300"
        >
          Update<BiSolidPencil></BiSolidPencil>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
