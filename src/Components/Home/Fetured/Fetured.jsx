import React from "react";
import img1 from "../../../assets/home/featured.jpg";
import SectionTitle from "../../Shared/SectionTitle";
const Fetured = () => {
  return (
    //   using app.css
    <div className=" text-white my-20 featuredImg">
      <SectionTitle subHeading={"check it out"} heading={"Featured Item"} />
      <div className="md:flex justify-center items-center  py-20 my-10 pt-8 px-36">
        <div>
          {" "}
          <img src={img1} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2019</p>
          <p className="uppercase">WHERE CAN I GET SOME?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="uppercase btn-outline border-0 border-b-4 btn ">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Fetured;
