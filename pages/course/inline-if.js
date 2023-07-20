import { useState } from 'react'

export default function InlineIf() {
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
      <hr />
      {/* && 前面的運算要能運算出布林值，此語法才會穩固 */}
      {!!count && <h2>訊息:目前計數為 {count}</h2>}
      {Boolean(count) && <h2>訊息:目前計數為 {count}</h2>}
      {count !== 0 && <h2>訊息:目前計數為 {count}</h2>}
      {count > 0 && <h2>訊息:目前計數為 {count}</h2>}
    </>
  )
}
