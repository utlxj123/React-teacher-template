import { useState } from 'react'
import Parent from './parent'
import ThemeContext from '@/context/theme'

export default function Grandparent() {
  // color = 'red' | 'green'
  const [color, setColor] = useState('red')

  // 用context中的Provider元件包裹在這之下的所有子女元件，在value屬性中設定要共享的狀態
  return (
    <ThemeContext.Provider value={{ color, setColor }}>
      <h1>Grandparent</h1>
      <Parent />
    </ThemeContext.Provider>
  )
}
