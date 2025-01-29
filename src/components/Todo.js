import React, { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
  });

  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("added todo: ", todo);
    setTodos([...todos, todo]);

    setTodo({
      title: "",
      description: "",
    });
  };

  const onClickDelete = (todoIndex) => {
    // todos.splice(todoIndex, 1);
    setTodos(todos.filter((_, index) => index !== todoIndex));
    // console.log("new todos", todos);
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
      {/* {console.log("all todos", todos)} */}

      {todos.length > 0 && <h3>All Todo's</h3>}
      {todos.map((todo, index) => {
        // console.log("map => ", todo);

        return (
          <>
            <h3 key={index}>{todo.title}</h3>
            <p>{todo.description}</p>
            <button
              onClick={() => {
                onClickDelete(index);
              }}
            >
              Delete Todo
            </button>
          </>
        );
      })}
    </>
  );
};

export default Todo;
