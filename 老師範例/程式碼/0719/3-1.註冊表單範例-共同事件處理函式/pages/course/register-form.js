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

  return (
    <>
      <h1>註冊表單輸入與驗証</h1>
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
        <button>提交</button>
      </div>
    </>
  )
}
