import React from "react";
import styles from "./footer.module.css";

const Footer = ({ todos }) => {
  const totalTodos = todos.length;
  const completedTodo = todos.filter((todo) => todo.status).length;

  return (
    <>
      <div className={styles.footer}>
        <span className={styles.footerText}>
          Completed Todos: {completedTodo}
        </span>
        <span className={styles.footerText}>Total Todos: {totalTodos}</span>
      </div>
    </>
  );
};

export default Footer;
