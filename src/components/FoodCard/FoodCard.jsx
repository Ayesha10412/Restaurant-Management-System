import React from "react";

const FoodCard = ({ item }) => {
  const { name, image, recipe, price } = item;
  const handleAddToCart = (food) => {
    console.log(food);
  };
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-4 rounded-sm ">
          {" "}
          ${price}
        </p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>

          <div className="card-actions justify-center mt-3">
            <button
              onClick={() => handleAddToCart(item)}
              className="btn btn-outline border-0 border-b-4 border-[#BB8506] text-[#BB8506]  text-sm px-4 mt-2  "
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
