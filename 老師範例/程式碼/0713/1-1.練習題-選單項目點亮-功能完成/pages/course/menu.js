import { useState } from 'react'

export default function Menu() {
  const [itemText, setItemText] = useState('首頁')

  return (
    <>
      <ul>
        <li className={itemText === '首頁' ? 'active' : ''}>
          <a
            href="#"
            onClick={() => {
              setItemText('首頁')
            }}
          >
            首頁
          </a>
        </li>
        <li className={itemText === '關於我們' ? 'active' : ''}>
          <a
            href="#"
            onClick={() => {
              setItemText('關於我們')
            }}
          >
            關於我們
          </a>
        </li>
        <li className={itemText === '產品' ? 'active' : ''}>
          <a
            href="#"
            onClick={() => {
              setItemText('產品')
            }}
          >
            產品
          </a>
        </li>
      </ul>
    </>
  )
}
