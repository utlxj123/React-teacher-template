import { useState } from 'react'

export default function Counter() {
  // [獲得值的變數, 設定值的方法] = useState(初始值)
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount(count - 1)
        }}
      >
        -
      </button>
    </>
  )
}
