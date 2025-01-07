import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { FaUtensils } from "react-icons/fa6";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddItems = () => {
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log(res.data);
  };

  return (
    <div>
      <SectionTitle
        heading="add an items"
        subHeading="What's new"
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6 ">
            <label className="label">
              <span className="label-text">Recipe Name</span>
            </label>
            <input
              {...register("name")}
              type="text"
              placeholder="name"
              className="input input-bordered w-full "
            />
          </div>

          <div className=" w-full flex gap-2  justify-center ">
            <div className="form-control w-full mt-3">
              <label className="label">
                <select
                  {...register("category")}
                  className="select select-bordered w-full max-w-md  mt-4"
                >
                  <option disabled selected>
                    Select a Category?
                  </option>
                  <option value="salad">Salad</option>
                  <option value="pizza">Pizza</option>
                  <option value="soup">Soup</option>
                  <option value="dessert">Dessert</option>
                  <option value="drinks">Drinks</option>
                </select>
              </label>
            </div>

            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                {...register("price")}
                type="text"
                placeholder="price"
                className="input input-bordered w-full max-w-md"
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe details</span>
            </label>

            <textarea
              {...register("details")}
              className="textarea textarea-bordered"
              placeholder="Bio"
            ></textarea>
          </div>

          <div className="flex flex-col justify-start">
            <input
              {...register("image")}
              type="file"
              className="file-input w-full max-w-xs my-3 "
            />
          </div>
          <button className="btn btn-neutral ">
            ADD ITEM
            <FaUtensils></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
