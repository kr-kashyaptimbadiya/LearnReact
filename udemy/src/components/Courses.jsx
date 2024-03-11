import React from "react";
import Course from "./Course";
import data from "../data.json";

function Courses() {
  return (
    <div className="flex flex-col items-start mx-8 space-y-3 mt-14 mb-8">
      <h2 className="text-4xl font-bold">A broad selection of courses</h2>
      <h3 className="text-xl">
        Choose from 183,000 online video courses with new addition published
        every month
      </h3>
      <div className="text-xs lg:text-xl flex space-x-4 ml-1 font-bold text-gray-500 cursor-pointer">
        <h3>Python</h3>
        <h3>Excel</h3>
        <h3>Web Devlopment</h3>
        <h3 className="text-black">Javasctipt</h3>
        <h3>Data science</h3>
        <h3>Aws Certification</h3>
        <h3>Drawing</h3>
      </div>
      <div className="text-left w-full border border-gray-300 p-7">
        <h2 className="text-2xl font-bold mb-2">
          Expand Your Career Opportunities with Kashyap
        </h2>
        <h3>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est<br/>
          excepturi impedit beatae earum eos, qui placeat, voluptatum corporis<br/>
          amet explicabo ad nulla hic? Ipsa itaque mollitia pariatur architecto<br/>
          excepturi maiores.
        </h3>
        <button className="border border-black font-bold text-sm p-2 mt-4 mb-8">
          Code
        </button>
        <div className="flex gap-4 flex-wrap lg:flex-nowrap">
          {data.map((item) => (
            <div className="h-60 w-60" key={item.id}>
              <Course item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Courses;
