import React, { useState } from "react";
import TodoItems from "./TodoItems";
import Header from "./Header";

const Todo = () => {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
  });

  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);

    setTodo({
      title: "",
      description: "",
    });
  };

  const onClickDelete = (todoIndex) => {
    setTodos(todos.filter((_, index) => index !== todoIndex));
  };

  return (
    <>
      <Header />

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

      {todos.length > 0 &&
        todos.map((todo, index) => <TodoItems key={index} todo={todo} />)}

      {/* {todos.length > 0 && <h3>All Todo's</h3>}
      {todos.map((todo, index) => {
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
      })} */}
    </>
  );
};

export default Todo;
