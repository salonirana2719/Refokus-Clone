import React from "react";
import Button from "./Button";

const Product = ({elem}) => {
  return (
    <div className="w-full py-20   text-white ">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between bg-slate-500  p-8">
        <h1 className="text-6xl capitalize font-medium" >{elem.title}</h1>
        <div className="details w-1/3 ">
          <p className="mb-10">
          {elem.description}
          </p>
      <div className="flex items-center gap-5">
      {elem.live && <Button/>}
         {elem.case && < Button title="Case study"/>}

      </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
