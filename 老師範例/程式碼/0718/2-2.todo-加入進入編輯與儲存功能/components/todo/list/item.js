// 導入css modules樣式
import styles from '../todo.module.css'

export default function Item({
  id,
  completed,
  text,
  handleToggleCompleted,
  handleToggleEditing,
  handleRemove,
}) {
  return (
    <>
      {/* 以completed狀態來切換呈現樣式 */}
      <li className={completed ? styles.completed : styles.active}>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => {
            // setTodos(toggleCompleted(todos, id))
            handleToggleCompleted(id)
          }}
        />
        {text}
        <button
          onClick={() => {
            handleToggleEditing(id)
          }}
        >
          編輯
        </button>
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
