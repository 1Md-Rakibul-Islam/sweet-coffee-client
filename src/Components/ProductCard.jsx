import React from "react";

import { Link } from "react-router-dom";

const productCard = ({ product }) => {
  // console.log(product);
  const { _id, productTitle, image, discription, price } = product;

  return (
    <div>
      {/* <Link to={`/product/details/${_id}`}> */}
      <div class="backdrop-blur-2xl bg-rose-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img class="rounded-t-lg w-full h-96" src={image} alt="" />
        <div class="p-5">
          <div className="flex justify-between items-center">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {productTitle}
          </h5>
          <span className="text-3xl text-black">{price}Tk</span>
          </div>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {discription?.length > 120
              ? discription?.slice(1, 120) + "....."
              : discription}
          </p>

          <div className="flex gap-2 justify-center">

            <button class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      {/* </Link> */}
    </div>
  );
};

export default productCard;
