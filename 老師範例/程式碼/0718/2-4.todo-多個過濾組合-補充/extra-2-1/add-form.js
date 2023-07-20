import { useState } from 'react'

function AddForm({ addTodo }) {
  const [inputValue, setInputValue] = useState('')

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value)
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            addTodo(inputValue)

            // 清空文字輸入框
            setInputValue('')
          }
        }}
      />
      <button
        onClick={() => {
          addTodo(inputValue)

          // 清空文字輸入框
          setInputValue('')
        }}
      >
        新增
      </button>
    </>
  )
}

export default AddForm
