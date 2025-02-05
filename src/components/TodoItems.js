import React from "react";
import styles from "./todoItems.module.css";

const TodoItems = ({ todos, setTodos }) => {
  const handleClick = (selectedTodo) => {
    setTodos(
      todos.map((todo) =>
        todo.title === selectedTodo.title
          ? { ...todo, status: !todo.status }
          : todo
      )
    );
  };

  const deleteTodo = (todoIndex) => {
    setTodos(todos.filter((_, index) => index !== todoIndex));
  };

  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.status) - Number(b.status));

  return (
    <>
      <div className={styles.list}>
        {sortedTodos.map((todo, index) => (
          <div key={index}>
            <div className={styles.todoData}>
              <span
                className={todo.status ? styles.completedTodo : ""}
                onClick={() => handleClick(todo)}
              >
                {todo.title}
              </span>
              <span>
                <button
                  className={styles.deleteButton}
                  onClick={() => deleteTodo(index)}
                >
                  x
                </button>
              </span>
            </div>
            <p>{todo.description}</p>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
};

export default TodoItems;
