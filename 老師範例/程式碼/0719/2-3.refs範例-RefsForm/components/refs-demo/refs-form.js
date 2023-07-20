import { useRef } from 'react'

export default function RefsForm() {
  // 1. 宣告ref給要使用的不可控表單元件
  // inputRef = { current: null }
  const inputRef = useRef(null)

  return (
    <>
      <h2>Refs Form</h2>
      {/* 2. 在要使用的表單元件上加入ref */}
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          // 3.使用時，用inputRef.current可以得到表單元件的實體物件(參照值)
          inputRef.current.focus()
        }}
      >
        聚焦(focus)
      </button>
      <button
        onClick={() => {
          inputRef.current.blur()
        }}
      >
        失焦(blur)
      </button>
      <button
        onClick={() => {
          console.log(inputRef.current.value)
        }}
      >
        獲得值
      </button>
    </>
  )
}
