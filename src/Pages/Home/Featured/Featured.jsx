import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImage from "../../../assets/home/featured.jpg";
import "./featured.css";
const Featured = () => {
  return (
    <div className=" featured-item pt-8 my-20 text-[#FFFFFF] ">
      <SectionTitle subHeading="Check it Out" heading="Featured Item" />
      <div className="md:flex flex justify-center items-center pb-32 pt-20 px-36">
        <div>
          <img className="w-[300px] " src={featuredImage} alt="" />
        </div>
        <div className="md:ml-10">
          <p className="">March 27, 2025</p>
          <p className=" uppercase ">Where can i get some?</p>
          <p className=" text-xs mt-2 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Consectetur, nam a. Doloremque dolore corrupti, nihil <br /> quos
            libero magnam fuga aliquam.
          </p>
          <button className="btn btn-outline text-white mt-2 ">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
