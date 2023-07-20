import { useState } from 'react'

export default function Menu() {
  const [itemText, setItemText] = useState('')
  const items = ['首頁', '關於我們', '產品']

  return (
    <>
      <ul>
        {items.map((v, i) => {
          return (
            <li key={i} className={itemText === v ? 'active' : ''}>
              <a
                href="#"
                onClick={() => {
                  setItemText(v)
                }}
              >
                {v}
              </a>
            </li>
          )
        })}
      </ul>
    </>
  )
}
