import { useState } from 'react'
import ChildA from './child-a'

export default function Parent() {
  const [pData, setPData] = useState('parent data')

  return (
    <>
      <h1>Parent</h1>
      <ChildA pData={pData} />
    </>
  )
}
