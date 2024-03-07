import React from "react";
import AddTodo from "./AddTodo";
import DeleteAllTodos from "./DeleteAllTodos";
import DeleteTodo from "./DeleteTodo";
function Tododetails() {
  return (
    <div>
      <AddTodo />
      <DeleteTodo />
      <DeleteAllTodos />
    </div>
  );
}

export default Tododetails;
