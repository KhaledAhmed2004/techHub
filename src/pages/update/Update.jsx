import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const [data] = useLoaderData();
  console.log(data);
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const image = form.image.value;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const type = form.type.value;
    const price = form.price.value;
    const shortDescription = form.shortDescription.value;
    const rating = form.rating.value;
    const product = {
      image,
      name,
      brandName,
      type,
      price,
      shortDescription,
      rating,
    };
    console.log("product", product);
    fetch(
      ` https://technology-and-electronics-server-pzmnao612.vercel.app/update/${data._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      }
    )
      .then((res) => {
        toast.success("Successfully product updated.");
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="hero min-h-[calc(100vh-64px)] bg-base-200">
        <div className="w-full md:w-[80%] hero-content flex-col lg:flex-row-reverse">
          <div
            style={{
              boxShadow:
                "15px 15px 20px rgba(0, 0, 0, 0.3),-15px -15px 20px #fffb",
            }}
            className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100"
          >
            <form onSubmit={handleUpdate} className="card-body ">
              <h1 className="text-4xl text-center font-bold mb-5">
                Product Update
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  style={{
                    boxShadow:
                      "inset 2px 2px 9px rgba(0, 0, 0, 0.1),inset -5px -5px 10px #fff",
                  }}
                  type="text"
                  defaultValue={data.image}
                  name="image"
                  placeholder="Image"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  style={{
                    boxShadow:
                      "inset 2px 2px 9px rgba(0, 0, 0, 0.1),inset -5px -5px 10px #fff",
                  }}
                  defaultValue={data.name}
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Brand Name</span>
                </label>
                <input
                  style={{
                    boxShadow:
                      "inset 2px 2px 9px rgba(0, 0, 0, 0.1),inset -5px -5px 10px #fff",
                  }}
                  type="text"
                  defaultValue={data.brandName}
                  name="brandName"
                  placeholder="Brand Name"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Type</span>
                </label>
                <input
                  style={{
                    boxShadow:
                      "inset 2px 2px 9px rgba(0, 0, 0, 0.1),inset -5px -5px 10px #fff",
                  }}
                  type="text"
                  defaultValue={data.type}
                  name="type"
                  placeholder="Type"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  style={{
                    boxShadow:
                      "inset 2px 2px 9px rgba(0, 0, 0, 0.1),inset -5px -5px 10px #fff",
                  }}
                  type="text"
                  defaultValue={data.price}
                  name="price"
                  placeholder="Price"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Short Description</span>
                </label>
                <input
                  style={{
                    boxShadow:
                      "inset 2px 2px 9px rgba(0, 0, 0, 0.1),inset -5px -5px 10px #fff",
                  }}
                  type="text"
                  defaultValue={data.shortDescription}
                  name="shortDescription"
                  placeholder="Short Description"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  style={{
                    boxShadow:
                      "inset 2px 2px 9px rgba(0, 0, 0, 0.1),inset -5px -5px 10px #fff",
                  }}
                  type="text"
                  defaultValue={data.rating}
                  name="rating"
                  placeholder="Rating"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button
                  style={{
                    boxShadow:
                      " 5px 5px 10px rgba(0, 0, 0, 0.1), -5px -5px 10px #fff",
                  }}
                  type="submit"
                  className="btn bg-gradient-to-r from-gray-700 to-gray-900 text-white font-bold hover:drop-shadow-xl hover:scale-105 transition-all	duration-300"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Update;
