import React, { useState } from "react";
import TodoItems from "./TodoItems";
import Header from "./Header";
import styles from "./todo.module.css";

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

  return (
    <>
      <Header />

      <form className={styles.todoform} onSubmit={handleSubmit}>
        <label htmlFor="todoTitle" className={styles.inputTitle}>
          Todo's Title:{" "}
        </label>
        <input
          type="text"
          id="todoTitle"
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
          value={todo.title}
          className={styles.modernInputTitle}
        />
        <br />
        <br />
        <label htmlFor="todoDescription" className={styles.inputTitle}>
          Description:{" "}
        </label>
        <textarea
          id="todoDescription"
          onChange={(e) => setTodo({ ...todo, description: e.target.value })}
          value={todo.description}
          className={styles.modernInputDescription}
        />
        <br />
        <br />
        <button type="submit" className={styles.modernButton}>
          Add
        </button>
      </form>

      {todos.length > 0 && <TodoItems todos={todos} setTodos={setTodos} />}
    </>
  );
};

export default Todo;
