import { useLoaderData } from "react-router-dom";

const MyCart = () => {
  const data = useLoaderData();
  const handleDelete = (_id) => {
    console.log("click", _id);
    fetch(
      `https://technology-and-electronics-server-ntgl4njvl.vercel.app/cart/${_id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error deleting item:", error);
      });
  };

  return (
    <>
      {data?.length > 0 ? (
        <div className="grid grid-cols-3 gap-5">
          {data?.map((cart) => (
            <div key={cart._id} className="card glass">
              <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
                <img src={cart.image} className="object-cover w-full h-full" />
              </div>
              <div className="card-body">
                <h2 className="card-title">
                  {cart.brandName} {cart.name}
                </h2>
                <p>{cart.shortDescription}</p>
                <div className="card-actions ">
                  <button className="btn btn-primary w-full">Buy Now</button>
                  <button
                    onClick={() => handleDelete(cart._id)}
                    className="btn btn-primary w-full"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="h-[70vh] flex justify-center items-center">
          <h2 className="text-3xl text-center">No Card Added</h2>
        </div>
      )}
    </>
  );
};

export default MyCart;
