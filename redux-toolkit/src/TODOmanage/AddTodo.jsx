import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { addTodo } from "../store/Todoslice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);
  const addTododetails = (e) => {
    e.preventDefault();
    if (!input) alert("please give input");
    else {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  return (
    <>
      <div class="font-semibold text-yellow-600 text-center text-5xl font-serif mb-5">Todo List</div>
      <form onSubmit={(e) => addTododetails(e)}>
        <input
          type="text"
          value={input}
          placeholder="   Add your Todo Task Here..."
          class = "h-8 w-[250px] md:w-[400px]  bg-transparent border border-yellow-100 text-yellow-100"
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" class = "bg-yellow-600 ml-2 rounded-sm p-1 hover:text-white">Add todo</button>
      </form>
    </>
  );
}

export default AddTodo;
