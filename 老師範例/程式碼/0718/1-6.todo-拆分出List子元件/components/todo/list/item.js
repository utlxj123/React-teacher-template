import React from 'react'

export default function Item({
  id,
  completed,
  text,
  handleToggleCompleted,
  handleRemove,
}) {
  return (
    <>
      <li>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => {
            // setTodos(toggleCompleted(todos, id))
            handleToggleCompleted(id)
          }}
        />
        {/* 切換completed狀態，呈現刪除線樣式 */}
        {completed ? <del>{text}</del> : text}
        <button
          onClick={() => {
            // setTodos(remove(todos, id))
            handleRemove(id)
          }}
        >
          刪除
        </button>
      </li>
    </>
  )
}
