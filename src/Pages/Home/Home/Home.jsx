import React from "react";
import { Link } from "react-router-dom";
import Banner from "./Banner";
import Products from "../../Products/Products";
import { FaExternalLinkAlt } from "react-icons/fa";

// https://i.ibb.co/GvqQXZz/bg.jpg
// https://i.ibb.co/n07XcFS/bg-regis.jpg
// https://i.ibb.co/TPc5F3p/footerimg.jpg
// https://i.ibb.co/LJVwS6H/footerimg.jpg
// https://i.ibb.co/R7wvt1W/kopi-kita.jpg
// https://i.ibb.co/zmxwT5f/machine.png

const Home = () => {
  return (
    <div className="min-h-screen">
      <Banner />
      <Products />
      <Link to={'/products'}>
      See More
      </Link>
    </div>
  );
};

export default Home;
