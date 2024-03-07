import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { removeTodo } from "../store/Todoslice";
import { MdOutlineDeleteForever } from "react-icons/md";
function DeleteTodo() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const deletesingle = (id) => {
    dispatch(removeTodo(id));
  };
  return (
    <>
      <ul className=" list-none ml-2">
        {todos.map((todo, id) => (
          <li key={id} className="text-yellow-600 font-medium border-b border-gray-200 flex items-center justify-between py-4">{todo} 
            <MdOutlineDeleteForever onClick={deletesingle} className="text-yellow-100 size-5 ml-10 mt-1"/>
          </li>
        ))}
      </ul>
    </>
  );
}

export default DeleteTodo;
