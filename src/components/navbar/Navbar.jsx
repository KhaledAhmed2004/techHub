import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut();
  };

  const navLinks = (
    <>
      <li className="navLink">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "underline font-medium decoration-2"
              : "font-medium"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="navLink">
        <NavLink
          to="/addProduct"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "underline font-medium decoration-2"
              : "font-medium"
          }
        >
          Add Product
        </NavLink>
      </li>
      <li className="navLink">
        <NavLink
          to="/myCart"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "underline font-medium decoration-2"
              : "font-medium"
          }
        >
          My Cart
        </NavLink>
      </li>
    </>
  );
  return (
    <nav className="navbar bg-[#f5f5f7] shadow-md rounded-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <img className="h-10 mr-2" src="https://i.ibb.co/yg0sxnN/logo.png" />
        <a className="normal-case text-xl font-medium">TechHub</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-4 px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end gap-2">
        {user ? (
          // <Link
          //   onClick={handleLogout}
          //   to="/login"
          //   className="px-[22.5px] btn bg-gradient-to-r from-gray-700 to-gray-900 text-white font-bold hover:drop-shadow-xl hover:scale-105 transition-all	duration-300"
          // >
          //   sign Out
          // </Link>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {/* <img src="https://i.ibb.co/vcQZhpc/1921098.png" /> */}
                {/* <img src={user?.photoURL} /> */}
                <img
                  src={
                    user?.photoURL
                      ? user?.photoURL
                      : "https://i.ibb.co/vcQZhpc/1921098.png"
                  }
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box"
            >
              <li>
                <a className="justify-between">{user?.displayName}</a>
              </li>
              <li>
                <a className="w-ful break-words">{user?.email}</a>
              </li>
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <Link
              to="/login"
              className="px-[22.5px] btn bg-gradient-to-r from-gray-700 to-gray-900 text-white font-bold hover:drop-shadow-xl hover:scale-105 transition-all	duration-300"
            >
              Login
            </Link>
            {/* <Link
              to="/signUp"
              className="btn bg-gradient-to-r from-gray-700 to-gray-900 text-white font-bold hover:drop-shadow-xl hover:scale-105 transition-all	duration-300"
            >
              Sign Up
            </Link> */}
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
