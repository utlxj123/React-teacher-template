import { useState } from 'react'

export default function TodoIndex() {
  // 定義文字輸入用的狀態
  const [inputText, setInputText] = useState('')
  // 為了要修正中文輸入法的用Enter組字用的信號狀態
  const [isCompositing, setIsCompositing] = useState(false)

  // 定義待辨事項狀態，每個成員 todo = { id, text }
  // 資料一定要有id，因為key要用id才可以作新增、修改、刪除，這是react中map時需要的
  const [todos, setTodos] = useState([
    { id: 1, text: '買牛奶' },
    { id: 2, text: '學react' },
  ])

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
            // 用時間日期物件轉毫秒整數值作為id
            const newTodo = { id: Number(new Date()), text: inputText }
            // 設定到todos狀態
            setTodos([newTodo, ...todos])
            // 清空文字輸入框
            setInputText('')
          }
        }}
      />
      <hr />
      <ul>
        {todos.map((v) => {
          return <li key={v.id}>{v.text}</li>
        })}
      </ul>
    </>
  )
}
