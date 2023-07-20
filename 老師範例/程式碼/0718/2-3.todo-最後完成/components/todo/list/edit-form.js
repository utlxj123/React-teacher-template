import { useState, useEffect } from 'react'

export default function EditForm({ text, id, handleUpdateText }) {
  // 文字輸入框用狀態
  // 初始化值，直接用來自父母元件傳入的text
  // !! 反樣式 (Anti-pattern)
  // https://zh-hant.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
  // https://vhudyma-blog.eu/react-antipatterns-props-in-initial-state/
  // 一般而言，props作為state初始值應避免，除非只需要在內部狀態初始化而已，
  // 而且之後props不會再被更動，或元件不需要再反應其它更動時
  const [inputText, setInputText] = useState('')

  useEffect(() => {
    if (text) {
      setInputText(text)
    }
  }, [text])

  return (
    <li>
      <input
        type="text"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value)
        }}
        // 改為 按下 Enter 儲存
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleUpdateText(id, inputText)
          }
        }}
        // 自動聚焦到這個文字輸入框中(跳過eslint jsx-ally檢查)
        // eslint-disable-next-line
           autoFocus
      />
      {/* <button
        onClick={() => {
          handleUpdateText(id, inputText)
        }}
      >
        儲存
      </button> */}
    </li>
  )
}
