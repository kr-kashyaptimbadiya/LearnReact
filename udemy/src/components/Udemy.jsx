import React from "react";

function Udemy() {
  return (
    <div className="w-full h-100 border border-gray-100 relative p-4">
      <img
        src="https://media.istockphoto.com/id/1500285927/photo/young-woman-a-university-student-studying-online.webp?b=1&s=170667a&w=0&k=20&c=w6oDn8-ru4jZhnnEt8AI6KdlgCJIgaaEZ4IMV50DnsQ="
        alt=""
        className="h-[200px] w-full object-cover bg-no-repeat  bg-bottom"
      />
      <div className=" absolute bg-white top-10 left-8 p-4 flex flex-col items-start justify-center shadow-lg h-30">
        <h2 className="text-2xl font-bold mb-2"> Hi Guys Welcome</h2>
        <h3>Look at this Project!! Let's Go</h3>
        <h3>The goal is to learn without stres</h3>
      </div>
    </div>
  );
}
export default Udemy;
