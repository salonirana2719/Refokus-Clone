import React from "react";

const Work = () => {
  var image = [
    {
      url: "https://cdn.dribbble.com/userupload/15985856/file/original-2e4669ab5bdddec9b1a5d7c5f469b991.png?resize=400x300&vertical=center",
      top: "47%",
      left: "47%",
      isActive: true,
    },

    {
      url: "https://cdn.dribbble.com/userupload/11830160/file/original-cf8f48ebaf3ae625368686d490c978a7.png?resize=400x300&vertical=center",
      top: "55%",
      left: "45%",
      isActive: false,
    },

    {
      url: "https://cdn.dribbble.com/userupload/14502904/file/original-b7274b940a1fefe1765f033afe2c02bc.png?crop=0x398-3072x2702&resize=400x300&vertical=center",
      top: "46%",
      left: "54%",
      isActive: false,
    },

    {
      url: "https://cdn.dribbble.com/userupload/15783347/file/original-97b2e395add18776b5a706d5c163c073.jpg?resize=400x300&vertical=center",
      top: "54%",
      left: "49%",
      isActive: false,
    },

    {
      url: "https://cdn.dribbble.com/userupload/15321107/file/original-7a869b495d3076aad53fba6770877456.png?resize=400x300&vertical=center",
      top: "47%",
      left: "53%",
      isActive: false,
    },

    {
      url: "https://cdn.dribbble.com/userupload/15156277/file/original-c8cee295087d2129a3ada283fee7a5eb.png?resize=400x300&vertical=center",
      top: "60%",
      left: "52% ",
      isActive: false,
    },
  ];

  return (
    <div className="w-full mt-10 ">
      <div className="max-w-screen-xl relative  mx-auto">
        <h1 className="text-[30vw] text-center leading-none font-medium tracking-tight select-none">
          Work
        </h1>
        <div className="absolute top-0 w-full h-full ">
          {image.map(
            (elem, index) =>
              elem.isActive && (
                <img
                  className="absolute w-60 rounded-lg translate-x-[-50%] translate-y-[-50%] "
                  src={elem.url}
                  style={{ top: elem.top, left: elem.left }}
                  alt="img"
                  key={index}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
