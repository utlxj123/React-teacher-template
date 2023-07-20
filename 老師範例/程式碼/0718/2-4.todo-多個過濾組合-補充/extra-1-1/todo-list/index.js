import React from 'react'

import TodoItem from './todo-item'

function TodoList({ todos, toggleCompleted, deleteTodo }) {
  return (
    <>
      <ul>
        {todos.map((v, i) => {
          // 先解構，可以少寫v.id, v.xxx...
          const { id, completed, text } = v

          return (
            <TodoItem
              // key值要加在map的回調函式回傳才是正確位置
              key={id}
              id={id}
              completed={completed}
              text={text}
              toggleCompleted={toggleCompleted}
              deleteTodo={deleteTodo}
            />
          )
        })}
      </ul>
    </>
  )
}

export default TodoList
