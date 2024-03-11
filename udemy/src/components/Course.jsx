import React from "react";
import { StarIcon } from "@heroicons/react/outline";

function Course({ item }) {
  return (
    <div className="flex flex-col items-start space-y-[1px]">
      <img
        src="https://media.istockphoto.com/id/1500285927/photo/young-woman-a-university-student-studying-online.webp?b=1&s=170667a&w=0&k=20&c=w6oDn8-ru4jZhnnEt8AI6KdlgCJIgaaEZ4IMV50DnsQ="
        alt=""
        className="h-32 w-full"
      />
      <h2 className="font-bold text-md pt-1">{item.Title}</h2>
      <h2 className="text-xs text-gray-700">{item.Username}</h2>
      <div className="flex space-x-1">
        <h3 className="text-orange-800 font-bold text-sm">{item.vote}</h3>
        <div className="flex items-center">
          <StarIcon className="w-4 text-orange-400"></StarIcon>
          <StarIcon className="w-4 text-orange-400"></StarIcon>
          <StarIcon className="w-4 text-orange-400"></StarIcon>
          <StarIcon className="w-4 text-orange-400"></StarIcon>
          <StarIcon className="w-4 text-orange-400"></StarIcon>
        </div>
        <h3 className="text-xs">{item.students}</h3>
      </div>
      <div className="flex space-x-4 items-center">
        <h3 className="text-black font-bold ">{item.price}</h3>
        <h3 className="text-gray-800 text-sm line-through">{item.oldprice}</h3>
      </div>
    </div>
  );
}
export default Course;
