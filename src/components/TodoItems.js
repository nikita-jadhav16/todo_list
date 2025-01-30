import React from "react";

const TodoItems = ({ todo }) => {
  return (
    <>
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
      <button>Delete Todo</button>
    </>
  );
};

export default TodoItems;
