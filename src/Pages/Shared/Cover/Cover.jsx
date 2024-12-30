const Cover = ({ img, title, des }) => {
  return (
    <div
      className="hero h-[700px] "
      style={{
        backgroundImage: `url( "${img}" )`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-2 text-5xl font-bold uppercase text-[#FFFFFF] ">
            {title}
          </h1>
          <p className="mb-5">{des}</p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
