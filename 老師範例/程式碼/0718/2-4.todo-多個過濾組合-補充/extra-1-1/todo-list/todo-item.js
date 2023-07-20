import React from 'react'
import styles from '../todo-app.module.css'

function TodoItem({ id, completed, text, toggleCompleted, deleteTodo }) {
  // 解構，改為在傳入參數時寫
  //const { id, completed, text, toggleCompleted, deleteTodo } = props

  return (
    <>
      <li className={completed ? styles['completed'] : styles['not-completed']}>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleCompleted(id)}
        />
        {text}
        <button onClick={() => deleteTodo(id)}>刪除</button>
      </li>
    </>
  )
}

export default TodoItem
