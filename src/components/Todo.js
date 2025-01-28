import React, { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("added todo: ", todo);
    setTodo({
      title: "",
      description: "",
    });
  };

  return (
    <>
      <h3>Todo's</h3>

      <form onSubmit={handleSubmit}>
        <label htmlFor="todoTitle">Todo's Title: </label>
        <input
          type="text"
          id="todoTitle"
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
          value={todo.title}
        />
        <br />
        <br />
        <label htmlFor="todoDescription">Description: </label>
        <textarea
          id="todoDescription"
          onChange={(e) => setTodo({ ...todo, description: e.target.value })}
          value={todo.description}
        />
        <br />
        <br />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default Todo;
