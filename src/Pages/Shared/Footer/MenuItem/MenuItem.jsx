import React from "react";
import { BiBorderRadius } from "react-icons/bi";

const MenuItem = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div className="flex space-x-4">
      <img
        className="w-[120px]"
        style={{ borderRadius: "0 200px 200px 200px" }}
        src={image}
        alt=""
      />
      <div>
        <h3 className=" uppercase ">{name}-------</h3>
        <p className="text-[#737373] text-xs ">{recipe}</p>
      </div>
      <p className="text-[#BB8506] ">${price}</p>
    </div>
  );
};

export default MenuItem;
