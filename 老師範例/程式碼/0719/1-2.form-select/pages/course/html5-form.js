import { useState } from 'react'

export default function Html5Form() {
  // input-text
  const [inputText, setInputText] = useState('')
  // textarea
  const [textareaText, setTextareaText] = useState('')
  // input-password
  const [password, setPassword] = useState('')
  // show password(呈現密碼明文用，true代表要呈現)
  const [show, setShow] = useState(false)

  // radio-group
  const foodOptions = ['牛肉麵', '三明治', '排骨飯']
  const [food, setFood] = useState('') //上面的foodOptions中成員其一

  // select
  const cityOptions = ['台北市', '台中市', '高雄市']
  const [city, setCity] = useState('') //上面的cityOptions中成員其一

  return (
    <>
      <h1>可控的表單元件</h1>
      <section id="input-text">
        <h2>文字輸入框(input text)</h2>
        <input
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value)
          }}
        />
      </section>
      <section id="textarea">
        <h2>文字輸入區域(textarea)</h2>
        <textarea
          value={textareaText}
          onChange={(e) => {
            setTextareaText(e.target.value)
          }}
        />
      </section>
      <section id="input-text-password">
        <h2>補充: 文字與密碼輸入框切換(input text/password)</h2>
        <input
          type={show ? 'text' : 'password'}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
        <br />
        <label>
          <input
            type="checkbox"
            checked={show}
            onChange={(e) => {
              setShow(e.target.checked)
            }}
          />
          顯示密碼
        </label>
      </section>
      <section id="radio-group">
        <h2>選項按鈕群組(radio group)</h2>
        {foodOptions.map((v, i) => {
          return (
            <label key={i}>
              <input
                type="radio"
                value={v}
                // 用值和目前選中的food狀態來比較，決定是否呈現選中的樣子
                checked={v === food}
                onChange={(e) => {
                  // 狀態中要記錄的是每個選項按鈕被點按後的值
                  setFood(e.target.value)
                }}
              />
              {v}
            </label>
          )
        })}
      </section>
      <section id="select">
        <h2>下拉選單(select)</h2>
        <select
          value={city}
          onChange={(e) => {
            setCity(e.target.value)
          }}
        >
          <option value="">-請選擇城市-</option>
          {cityOptions.map((v, i) => {
            return (
              <option key={i} value={v}>
                {v}
              </option>
            )
          })}
        </select>
      </section>
    </>
  )
}
