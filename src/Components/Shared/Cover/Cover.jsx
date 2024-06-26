import React from "react";

const Cover = ({ img, title, pra }) => {
  return (
    <div className="mb-10">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("${img}")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60 w-1/2 h-1/2"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
            <p className="mb-5">{pra}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
