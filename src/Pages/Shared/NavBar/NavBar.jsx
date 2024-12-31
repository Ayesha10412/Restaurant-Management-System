import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const navOptions = (
    <>
      <Link to="/">Home</Link>
      <Link to="/menu">Our Menu</Link>
    </>
  );
  return (
    <div>
      <div className="navbar bg-black fixed z-10 bg-opacity-30 max-w-screen-xl ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content text-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navOptions}
            </ul>
          </div>
          <a className="font-bold text-xl text-[#FFFFFF] ">
            BISTRO BOSS <br />
            <span className=" font-semibold text-sm text-center ">
              Restaurant
            </span>{" "}
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[#ffffffea] text-sm gap-5 ">
            {navOptions}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;