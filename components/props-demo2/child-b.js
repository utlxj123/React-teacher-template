import { useState } from 'react'

export default function ChildB(props) {
  console.log(props)
  // 子女元件內部資料
  const [childBData, setChildBData] = useState('child B data')

  return (
    <>
      <h1>ChildB</h1>
      {/* 觸發事件利用事件函式，傳資料給父母 */}
      <button
        onClick={() => {
          props.setDataFromChildB(childBData)
        }}
      >
        傳資料給父母
      </button>
    </>
  )
}
