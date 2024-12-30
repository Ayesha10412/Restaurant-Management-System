import { Parallax } from "react-parallax";

const Cover = ({ img, title, des }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="The menu"
      strength={-200}
    >
      <div className="hero h-[650px] ">
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
    </Parallax>
  );
};

export default Cover;
