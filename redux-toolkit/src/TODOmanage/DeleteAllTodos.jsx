import { useDispatch } from "react-redux";
import React from "react";
import { clearAllTodo } from "../store/Todoslice";
function DeleteAllTodos() {
  const dispatch = useDispatch();

  const deleteall = () => {
    dispatch(clearAllTodo());
  };

  return (
    <div>
      <button onClick={deleteall} class = "bg-yellow-600 rounded-sm mt-4 p-1 pr-7 pl-7 md:ml-[370px] ml-[218px] hover:text-white">Clear All</button>
    </div>
  );
}

export default DeleteAllTodos;
