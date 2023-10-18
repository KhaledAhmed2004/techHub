import { BsGoogle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";

const SignUp = () => {
  const { googleLogin, emailSignUp } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;

    // validation
    if (password.length < 6) {
      toast.error("The password is less than 6 characters");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      toast.error("The Password don't have a capital letter");
      return;
    }
    if (!/[^a-zA-Z0-9]/.test(password)) {
      toast.error("The Password don't have a special character");
      return;
    }
    emailSignUp(email, password, name)
      .then((res) => {
        console.log(res);
        toast.success("Sign-up was successful");
        updateProfile(res.user, {
          displayName: name,
          photoURL: photoUrl,
        })
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        console.log(err.code);
        if (err.code === "auth/email-already-in-use") {
          toast.error("This email Already used.");
          return;
        }
      });
  };
  return (
    <div>
      <div className="hero min-h-[calc(100vh-64px)] bg-base-200">
        <div className="w-full md:w-[80%] hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body ">
              <h1 className="text-4xl text-center font-bold mb-5">Sign Up</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  name="photoUrl"
                  placeholder="Photo Url"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn bg-gradient-to-r from-gray-700 to-gray-900 text-white font-bold hover:drop-shadow-xl hover:scale-105 transition-all	duration-300"
                >
                  Sign Up
                </button>
                <Link
                  onClick={googleLogin}
                  className="btn mt-4 bg-gradient-to-r from-gray-700 to-gray-900 text-white font-bold hover:drop-shadow-xl hover:scale-105 transition-all	duration-300"
                >
                  <BsGoogle className="text-xl"></BsGoogle>
                </Link>
              </div>
              <p>
                Already have an Account?{" "}
                <Link
                  className="text-blue-800 font-medium underline decoration-2 underline-offset-2"
                  to="/login"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
