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
    </div>
  );
};

export default MenuCategory;
