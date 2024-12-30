import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <div className="text-[#FFFFFF]   px-8 py-6 bg-[#1F2937]  ">
        {/* top */}
        <div className="flex justify-between m-32 ">
          {/* left */}
          <div className="flex flex-col items-center text-center   ">
            <h3 className="text-xl mb-2 ">CONTACT US</h3>
            <p className="text-xs mb-1 ">
              123 ABS Street, Uni 21, Bangladesh
              <p className="text-xs mb-1">+88 123456789</p>
              <p className="text-xs mb-1">Mon - Fri: 08:00 - 22:00</p>
              <p className="text-xs ">Sat - Sun: 10:00 - 23:00</p>
            </p>
          </div>
          {/* right */}
          <div className=" ">
            <h3 className="text-xl mb-2">Follow US</h3>
            <p className="text-xs">Join us on social media</p>
            <div className="flex gap-5 items-center  text-xl mt-2 ">
              <FaFacebook></FaFacebook>
              <FaInstagram></FaInstagram>
              <FaTwitter></FaTwitter>
            </div>
          </div>
        </div>
        {/* bottom */}
      </div>
      <div className=" bg-[#151515] p-4 text-center ">
        <p className="text-[#FFFFFF] text-sm ">
          Copyright ©2024 CulinaryCloud. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
