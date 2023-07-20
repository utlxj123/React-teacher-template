import { useState } from 'react'

export default function RegisterForm() {
  // 注意 狀態是物件時的初始值
  const [user, setUser] = useState({
    fullname: '',
    email: '',
    password: '',
    password2: '',
  })

  // 所有表單欄位共用的事件處理函式
  const handleFieldChange = (e) => {
    // {[e.target.name]: e.target.value}
    //   ^^^^^^^^^^^^^^ 計算得來的屬性名稱(Computed property names)
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names
    //console.log(e.target.name, e.target.value);
    const newUser = { ...user, [e.target.name]: e.target.value }
    setUser(newUser)
  }

  // 表單送出用的事件處理函式
  const handleSubmit = (e) => {
    // 阻擋表單預設送出行為
    e.preventDefault()

    // 對各欄位作檢查

    // FormData範例
    const formData = new FormData(e.target)

    // 用FormData的API加上欄位的name來得到資料，也能作檢查
    if (!formData.get('fullname')) {
      alert('請填寫姓名')
    }

    // 直接用狀態中的資料來檢查
    // if (!user.fullname) {
    //   alert('請填寫姓名')
    // }

    // if (!user.email) {
    //   alert('請填寫email')
    // }
  }

  return (
    <>
      <h1>註冊表單輸入與驗証</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            姓名:{' '}
            <input
              type="text"
              name="fullname"
              value={user.fullname}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div>
          <label>
            Email:{' '}
            <input
              type="text"
              name="email"
              value={user.email}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div>
          <label>
            密碼:{' '}
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div>
          <label>
            確認密碼:{' '}
            <input
              type="password"
              name="password2"
              value={user.password2}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div>
          <button type="submit">提交</button>
        </div>
      </form>
    </>
  )
}
