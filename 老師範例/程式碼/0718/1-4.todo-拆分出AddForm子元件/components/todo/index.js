import { useState } from 'react'
import AddForm from './add-form'

export default function TodoIndex() {
  // 定義待辨事項狀態，每個成員 todo = { id:number, text:string, completed:bool }
  // !!重要!! 資料一定要有id，因為key要用id才可以作新增、修改、刪除，這是react中map時需要的
  const [todos, setTodos] = useState([
    { id: 1, text: '買牛奶', completed: false },
    { id: 2, text: '學react', completed: true },
  ])

  // 新增todo(純粹函式(pure function)，只處理狀態改變)
  const add = (todos, text) => {
    // 仿照資料庫遞增id的作法(id需要有規則和都是數字才可以)
    // 取出所有id為陣列
    const ids = todos.map((v) => v.id)
    // 得到陣列中最大值，之後加1(ids中沒資料時，預設為1)
    const newId = ids.length > 0 ? Math.max(...ids) + 1 : 1

    // 建立新的todo物件
    const newTodo = {
      id: newId,
      text: text,
      completed: false,
    }

    // 回傳新的todos狀態
    return [newTodo, ...todos]
  }

  // 切換完成狀態(completed)(純粹函式(pure function)，只處理狀態改變)
  const toggleCompleted = (todos, id) => {
    return todos.map((v) => {
      // 如果有比對到v.id是id，作切換布林值的動作
      if (v.id === id) return { ...v, completed: !v.completed }
      else return { ...v }
    })
  }

  // 移除todo (純粹函式(pure function)，只處理狀態改變)
  const remove = (todos, id) => {
    //如果有比對到v.id是id，就作移除該成員
    return todos.filter((v) => v.id !== id)
  }

  // 專門設計給拆分出AddForm子元件用的處理函式
  const handleAdd = (inputText) => {
    setTodos(add(todos, inputText))
  }

  return (
    <>
      <AddForm handleAdd={handleAdd} />
      <hr />
      <ul>
        {todos.map((v) => {
          return (
            <li key={v.id}>
              <input
                type="checkbox"
                checked={v.completed}
                onChange={() => {
                  setTodos(toggleCompleted(todos, v.id))
                }}
              />
              {/* 切換completed狀態，呈現刪除線樣式 */}
              {v.completed ? <del>{v.text}</del> : v.text}
              <button
                onClick={() => {
                  setTodos(remove(todos, v.id))
                }}
              >
                刪除
              </button>
            </li>
          )
        })}
      </ul>
    </>
  )
}
