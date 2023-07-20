import { useState } from 'react'
import ChildB from './child-b'

export default function Parent() {
  //父母元件必需要先定義一組狀態，專門讓子女B元件傳遞資料到父母來
  const [dataFromChildB, setDataFromChildB] = useState('')

  return (
    <>
      <h1>Parent</h1>
      <p>來自ChildB的內部資料:{dataFromChildB}</p>
      {/* 利用props傳遞，設定狀態的方法 */}
      <ChildB setDataFromChildB={setDataFromChildB} />
    </>
  )
}
