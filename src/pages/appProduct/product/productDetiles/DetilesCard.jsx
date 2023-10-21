import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData, useParams } from "react-router-dom";

const DetilesCard = () => {
  const [data, setData] = useState([]);
  const [cart] = data;
  //   const [getItem, setGatItem] = useState({});
  //   const [item] = data;
  const { _id } = useParams();
  //   console.log(_id);

  useEffect(() => {
    fetch(
      ` https://technology-and-electronics-server-164eke7af.vercel.app/product/${_id}`
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [_id]);

  const handleAddToCart = () => {
    console.log(cart);
    fetch(
      ` https://technology-and-electronics-server-164eke7af.vercel.app/cart`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cart),
      }
    )
      .then((res) => res.json())
      .then((data) => toast.success("Successfully add in Cart"));
  };

  return (
    <div>
      {data.map((item) => (
        <div
          key={item._id}
          className="max-h-[80vh] relative mx-auto flex w-full max-w-[48rem] flex-col md:flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
        >
          <div className="relative mx-auto w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
            <img src={item.image} className="object-cover w-full h-full" />
          </div>
          <div className="p-6">
            <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
              {item.brandName}
            </h6>
            <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              {item.name}
            </h4>
            <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
              {item.shortDescription}
            </p>
            <a className="inline-block" href="#">
              <Link
                onClick={handleAddToCart}
                className="px-[22.5px] btn bg-gradient-to-r from-gray-700 to-gray-900 text-white font-bold hover:drop-shadow-xl hover:scale-105 transition-all	duration-300"
              >
                Add Cart
              </Link>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DetilesCard;
