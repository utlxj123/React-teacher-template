import React from 'react'
import Item from './item'

export default function List({ todos, handleRemove, handleToggleCompleted }) {
  return (
    <>
      <ul>
        {todos.map((v) => {
          const { id, completed, text } = v
          return (
            <Item
              key={id}
              id={id}
              completed={completed}
              text={text}
              handleToggleCompleted={handleToggleCompleted}
              handleRemove={handleRemove}
            />
          )
        })}
      </ul>
    </>
  )
}
