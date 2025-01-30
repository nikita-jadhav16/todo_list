import React from "react";

const TodoItems = ({ todo }) => {
  return (
    <>
      <h3>Todo's List</h3>
      <h1>{todo.title}</h1>
      <p>{todo.description}</p>
    </>
  );
};

export default TodoItems;
