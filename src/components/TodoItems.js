import React from "react";
import styles from "./todoItem.module.css";

const TodoItems = ({ todos, setTodos }) => {
  const deleteTodo = (todoIndex) => {
    setTodos(todos.filter((_, index) => index !== todoIndex));
  };

  return (
    <>
      <div className={styles.list}>
        {todos.map((todo, index) => (
          <div key={index}>
            <div className={styles.todoData}>
              {todo.title}
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
