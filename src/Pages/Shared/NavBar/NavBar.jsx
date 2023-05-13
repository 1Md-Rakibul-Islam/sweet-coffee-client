import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaBox,
  FaHome,
  FaMailBulk,
  FaRegEnvelope,
  FaShoppingCart,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import Brand from "../../../Components/Brand";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [openNav, setOpenNav] = useState(false);

  const [openPopup, setOpenPopup] = useState(false);

  const handelLogOut = () => {
    logOut().then().catch();
  };

  const navItems = ["About"];

  return (
    <nav
      className={`w-full fixed bg-black md:px-10 px-2 py-2 z-50  ${
        openNav && "inset-0 bg-white/20 bg-opacity-25 -blur-sm"
      }`}
    >
      <div className="flex gap-3 justify-between items-center">
        <Brand />
        <div className="md:block hidden w-auto">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-4 md:mt-0 md:border-0 ">
            <li>
              <Link to="/">Home</Link>
            </li>
            {navItems.map((navItem) => (
              <li>
                <Link to={`${navItem}`}>{navItem}</Link>
              </li>
            ))}
            <li>
              <button>My Order</button>
            </li>
            {user?.email ? (
              <li onClick={() => handelLogOut()}>Logout</li>
            ) : (
              <>
                <Link to={"/login"}>
                  <li>Login</li>{" "}
                </Link>
                <Link to={"/signup"}>
                  <li>Register</li>
                </Link>
              </>
            )}
          </ul>
        </div>

        <div className="flex items-center space-x-5">
          <FaShoppingCart className="text-2xl" />
          <div className="flex items-center md:space-x-0 space-x-5 rounded-full p-2 border-2 border-slate-400">
            <button onClick={() => setOpenNav(true)}>
              <FaBars className="text-xl md:hidden block" />
            </button>
            <img
              className="w-[30px] h-[30px] rounded-full"
              src={user?.photoURL}
              alt=""
            />
          </div>
        </div>
      </div>

      <div
        className={`absolute ${
          openNav
            ? "z-50 block transdiv transition-opacity duration-1000"
            : "hidden"
        } z-50 bg-white md:w-[380px] w-[300px] h-[100vh] top-0 right-0`}
      >
        <div className="p-10">
          <div onClick={() => setOpenNav(false)} className="mb-10">
            <FaTimes className="text-3xl cursor-pointer absolute right-4 top-4" />
          </div>
          <div className="mt-4">
            <li>
              {" "}
              <FaBox className="text-xl text-slate-0" /> Dashboard
            </li>
            {user?.email ? (
              <li onClick={() => handelLogOut()}> Logout</li>
            ) : (
              <>
                <Link to={"/login"}>
                  <li> Login</li>{" "}
                </Link>
                <Link to={"/signup"}>
                  <li> Register</li>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
