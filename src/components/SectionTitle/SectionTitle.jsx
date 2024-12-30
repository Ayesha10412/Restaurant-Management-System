const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="my-8 md:w-4/12 mx-auto text-center  ">
      <span className="text-[#D99904]  ">--- {subHeading} ---</span>
      <h3 className="uppercase text-3xl  text-[#151515] ">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
