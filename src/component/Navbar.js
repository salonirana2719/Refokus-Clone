import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="max-w-screen-xl py-6 mx-auto   flex items-center justify-between border-b-[1px] border-zinc-700">
      <div className="nleft flex items-center">
        {/* <img src='' alt=''/> */}
        refokus
        <div className="links flex gap-14 ml-20">
          {["Home", "Works", "Culture", "", "New"].map((elem, index) =>
            elem.length === 0 ? (
              <span    className="w-[2px] h-8 bg-zinc-800">

              </span>
            ) : (
              <a className="text-sm flex items-center gap-1" href="#">
                {index === 1 && (
                  <span
                  key={index}
                    style={{ boxShadow: "0 0 0.25em #00ff19" }}
                    className="inline-block w-1 h-1 rounded-full bg-green-500"
                  ></span>
                )}
                {elem}{" "}
              </a>
            )
          )}
        </div>
      </div>
      <Button />
    </div>
  );
};

export default Navbar;
