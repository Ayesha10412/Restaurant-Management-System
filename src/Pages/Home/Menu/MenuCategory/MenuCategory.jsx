import { Link } from "react-router-dom";
import Cover from "../../../Shared/Cover/Cover";
import MenuItem from "../../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <div className="pt-8">
      {title && (
        <Cover
          img={coverImg}
          title={title}
          des={"Would you like to try a dish?"}
        ></Cover>
      )}
      <div className="grid grid-cols-2 gap-6 my-16 ">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`} className="flex items-center justify-center">
        <button className="btn btn-outline border-0 border-b-4  text-sm px-4 mt-2  ">
          Order your Favorite Food
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
