import React from "react";
import Line from "../../assets/Line 9.png";
import Product from "../../assets/product.svg";
import Coding from "../../assets/coding.svg";
import Copy from "../../assets/copyrating.svg";
function About() {
  return (
    <div>
      <div className="experiens flex flex-wrap  justify-between items-center">
        <div className="expo-title">
          <h3 className="text-white text-4xl font-semibold w-96">
            7+ years experience working
          </h3>
        </div>
        <div className="services ">
          <span className="text-[#019211] font-medium text-lg flex items-center gap-6">
            {" "}
            <img src={Line} alt="" /> Services
          </span>
          <p className="text-[#808080] w-80">
            Discover the best services I offer, designed to ensure the success
            of your project.
          </p>
        </div>
      </div>
      <div className="card-wrapper justify-center flex flex-wrap gap-4 mt-20">
        <div className="card  w-[22.5rem] pt-14 pb-10  px-8 bg-zinc-800">
          <img src={Product} alt="" />
          <h3 className="mt-4 text-white text-2xl">Product design</h3>
          <p className="mt-4 text-[#808080]">
            I offer innovative and attention-grabbing product design services.
            From initial ideation to implementation.
          </p>
        </div>
        <div className="card w-[22.5rem]  pt-14 pb-10  px-8 bg-zinc-800">
          <img src={Coding} alt="" />
          <h3 className="mt-4 text-white text-2xl">Frontend develop</h3>
          <p className="mt-4 text-[#808080]">
            Specialize in responsive and interactive front-end development. With
            a deep understanding of HTML, CSS, and JS.
          </p>
        </div>
        <div className="card  w-[22.5rem] pt-14 pb-10  px-8 bg-zinc-800">
          <img src={Copy} alt="" />
          <h3 className="mt-4 text-white text-2xl">Brand strategy</h3>
          <p className="mt-4 text-[#808080]">
            I help design strong and captivating brand strategies. Through
            thorough research and market analysis.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
