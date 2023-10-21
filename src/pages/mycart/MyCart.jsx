import { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const MyCart = () => {
  const data = useLoaderData();
  // const [updateCart, setUpdateCart] = useState(data);
  const handleDelete = (_id) => {
    console.log("click", _id);
    fetch(
      `https://technology-and-electronics-server-164eke7af.vercel.app/cart/${_id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        toast.success("Deleted this item");
      })
      .catch((error) => {
        console.error("Error deleting item:", error);
      });
  };

  return (
    <>
      {data?.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
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

// import { useState } from "react";
// import toast from "react-hot-toast";
// import { useLoaderData } from "react-router-dom";

// const MyCart = () => {
//   const data = useLoaderData();
//   const [cartData, setCartData] = useState(data);

//   const handleDelete = (_id) => {
//     console.log("click", _id);
//     fetch(
//       `https://technology-and-electronics-server-164eke7af.vercel.app/cart/${_id}`,
//       {
//         method: "DELETE",
//       }
//     )
//       .then((res) => {
//         if (res.ok) {
//           return res.json();
//         } else {
//           throw new Error("Failed to delete item");
//         }
//       })
//       .then(() => {
//         const updatedCartData = cartData.filter((item) => item._id !== _id);
//         setCartData(updatedCartData);
//         toast.success("Item successfully removed from the cart.");
//       })
//       .catch((error) => {
//         console.error("Error deleting item:", error);
//         toast.error("An error occurred while deleting the item.");
//       });
//   };

//   return (
//     <>
//       {cartData?.length > 0 ? (
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
//           {cartData?.map((cart) => (
//             <div key={cart._id} className="card glass">
//               {/* ... (rest of the code) */}
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div className="h-[70vh] flex justify-center items-center">
//           <h2 className="text-3xl text-center">No Items in the Cart</h2>
//         </div>
//       )}
//     </>
//   );
// };

// export default MyCart;

// import { useState, useEffect } from "react";
// import toast from "react-hot-toast";
// import { useLoaderData } from "react-router-dom";

// const MyCart = () => {
//   const initialData = useLoaderData();
//   const [cartData, setCartData] = useState(initialData);

//   useEffect(() => {
//     // You can use this effect to update the cart data when it changes externally.
//     // For example, you can fetch the cart data when the component mounts.
//     // Replace this with your actual fetching logic.
//     fetchCartData().then((data) => setCartData(data));
//   }, []);

//   const handleDelete = (_id) => {
//     console.log("click", _id);
//     fetch(
//       `https://technology-and-electronics-server-164eke7af.vercel.app/cart/${_id}`,
//       {
//         method: "DELETE",
//       }
//     )
//       .then((res) => {
//         if (res.ok) {
//           return res.json();
//         } else {
//           throw new Error("Failed to delete item");
//         }
//       })
//       .then(() => {
//         const updatedCartData = cartData.filter((item) => item._id !== _id);
//         setCartData(updatedCartData);
//         toast.success("Item successfully removed from the cart.");
//       })
//       .catch((error) => {
//         console.error("Error deleting item:", error);
//         toast.error("An error occurred while deleting the item.");
//       });
//   };

//   return (
//     <>
//       {cartData?.length > 0 ? (
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
//           {cartData?.map((cart) => (
//             <div key={cart._id} className="card glass">
//               {/* ... (rest of the code) */}
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div className="h-[70vh] flex justify-center items-center">
//           <h2 className="text-3xl text-center">No Items in the Cart</h2>
//         </div>
//       )}
//     </>
//   );
// };

// export default MyCart;
