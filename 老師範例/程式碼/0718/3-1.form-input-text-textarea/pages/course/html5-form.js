import { useState } from 'react'

export default function Html5Form() {
  // input-text
  const [inputText, setInputText] = useState('')

  // textarea
  const [textareaText, setTextareaText] = useState('')

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
    </>
  )
}
