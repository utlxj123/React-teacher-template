import ThemeContext from '@/context/theme'
import { useContext } from 'react'

export default function ChildB() {
  // 使用useContext傳入ThemeContext，讀取其中記錄的color與setColor
  const { color, setColor } = useContext(ThemeContext)

  return (
    <>
      <h1>ChildB</h1>
      <div style={{ color: color }}>Hello</div>
      <button
        onClick={() => {
          setColor('red')
        }}
      >
        red
      </button>
      <button
        onClick={() => {
          setColor('green')
        }}
      >
        green
      </button>
    </>
  )
}
