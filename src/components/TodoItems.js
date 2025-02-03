import React from "react";
import styles from "./todoItem.module.css";

const TodoItems = ({ todo }) => {
  return (
    <>
      <div>
        <div className={styles.todoData}>
          {todo.title}
          <span>
            <button className={styles.deleteButton}>x</button>
          </span>
        </div>
        <p>{todo.description}</p>
        <hr />
      </div>
    </>
  );
};

export default TodoItems;
