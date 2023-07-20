import { useState } from 'react'
import ChildB from './child-b'
import ChildA from './child-a'

export default function Parent() {
  // 父母元件必需要先定義一組狀態，專門讓子女B元件傳遞資料到父母來
  // 讓子女A得到資料
  const [dataFromChildB, setDataFromChildB] = useState('')

  return (
    <>
      <h1>Parent</h1>
     
      {/* 利用props傳遞，設定狀態的方法 */}
      <ChildB setDataFromChildB={setDataFromChildB} />
       {/* 利用props傳遞得到的狀態 */}
      <ChildA dataFromChildB={dataFromChildB} />
    </>
  )
}
