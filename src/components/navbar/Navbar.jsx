import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li className="navLink">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="navLink">
        <NavLink
          to="/addProduct"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline" : ""
          }
        >
          Add Product
        </NavLink>
      </li>
      <li className="navLink">
        <NavLink to="/yes">Yes</NavLink>
      </li>
      <li className="">
        <NavLink to="/yes">Yes</NavLink>
      </li>
    </>
  );
  return (
    <nav className="navbar bg-base-100 shadow-md">
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
        <a className="normal-case text-xl">TechHub</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-4 px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <Link
          to="/login"
          className="btn bg-gradient-to-r from-gray-700 to-gray-900 text-white font-bold hover:drop-shadow-xl hover:scale-105 transition-all	duration-300"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
