import { useState } from 'react'

export default function TodoIndex() {
  // 定義文字輸入用的狀態
  const [inputText, setInputText] = useState('')
  // 為了要修正中文輸入法的用Enter組字用的信號狀態
  const [isCompositing, setIsCompositing] = useState(false)

  // 定義待辨事項狀態，每個成員 todo = { id:number, text:string, completed:bool }
  // !!重要!! 資料一定要有id，因為key要用id才可以作新增、修改、刪除，這是react中map時需要的
  const [todos, setTodos] = useState([
    { id: 1, text: '買牛奶', completed: false },
    { id: 2, text: '學react', completed: true },
  ])

  // 建立新todo
  // 純粹函式(pure function)，只處理狀態改變
  const add = (todos, text) => {
    // 仿照資料庫遞增id的作法(id需要有規則和都是數字才可以)
    // 取出所有id為陣列
    const ids = todos.map((v) => v.id)
    // 得到陣列中最大值，之後加1(預設為1)
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

  // 切換完成狀態(completed)
  // 如果有比對到v.id是id，作切換布林值的動作
  // 純粹函式(pure function)，只處理狀態改變
  const toggleCompleted = (todos, id) => {
    return todos.map((v) => {
      if (v.id === id) return { ...v, completed: !v.completed }
      else return { ...v }
    })
  }

  return (
    <>
      <input
        type="text"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value)
        }}
        // 開關中文輸入法組字期間
        onCompositionStart={() => setIsCompositing(true)}
        onCompositionEnd={() => setIsCompositing(false)}
        onKeyDown={(e) => {
          // 要在不是中文輸入法組字期間，按下Enter才加入到待辨事項
          // 有值時(不是空白才能加入)
          if (e.key === 'Enter' && !isCompositing && inputText) {
            // 新增一筆todo
            setTodos(add(todos, inputText))
            // 清空文字輸入框
            setInputText('')
          }
        }}
      />
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
            </li>
          )
        })}
      </ul>
    </>
  )
}
