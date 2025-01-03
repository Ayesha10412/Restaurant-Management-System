import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");
  // const [menu, setMenu] = useState([]);

  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularItems = data.filter((item) => item.category === "popular");
  //       setMenu(popularItems);
  //     });
  // }, []);
  return (
    <section className="mt-80  ">
      <SectionTitle heading="FROM OUR MENU" subHeading="Check it out" />
      <div className="grid grid-cols-2 gap-6">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <button className="btn btn-outline border-0 border-b-4 mt-4 items-center">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
