const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="my-8 md:w-4/12 mx-auto text-center  ">
      <span className="text-[#D99904] p-2 border-b-4 border-gray-200 ">
        --- {subHeading} ---
      </span>
      <h3 className="uppercase text-3xl p-2 border-b-4 border-gray-200 text-[#151515] ">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
