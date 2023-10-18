import { useContext } from "react";
import { BsGoogle } from "react-icons/bs";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const { googleLogin, emailLogin } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    emailLogin(email, password)
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
        toast.error(err.code);
        return;
      });
  };

  return (
    <div className="hero min-h-[calc(100vh-64px)] bg-base-200">
      <div className="w-full md:w-[80%] hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body ">
            <h1 className="text-4xl text-center font-bold mb-5">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
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
                name="password"
                type="password"
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
                Login
              </button>
              <Link
                onClick={googleLogin}
                className="btn mt-4 bg-gradient-to-r from-gray-700 to-gray-900 text-white font-bold hover:drop-shadow-xl hover:scale-105 transition-all	duration-300"
              >
                <BsGoogle className="text-xl"></BsGoogle>
              </Link>
            </div>
            <p>
              Don't have any Account?{" "}
              <Link
                className="text-blue-800 font-medium underline decoration-2 underline-offset-2"
                to="/signUp"
              >
                SignUp
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
