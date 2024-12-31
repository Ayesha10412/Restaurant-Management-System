import React from "react";
import bistroImg from "../../assets/home/chef-service.jpg";
const Bistro = () => {
  return (
    <div className=" mx-auto mt-20 mr-60 border-2 border-red-600">
      <div className="absolute bg-opacity-40 bg-slate-500  w-[85%] mx-auto ">
        <img className="w-full" src={bistroImg} alt="" />
      </div>
      <div className=" bg-[#FFFFFF]  relative -bottom-32 left-14 px-40 py-12 text-center">
        <h3 className="text-3xl text-black">Bistro Boss</h3>
        <p className="text-gray-500  mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </div>
  );
};

export default Bistro;
