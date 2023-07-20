import React from 'react'
import Link from 'next/link'

export default function Login() {
  return (
    <>
      <h1>會員登入</h1>
      <button>登入</button>
      <hr />
      {/* 要用Link元件取代a連結，才能保持住狀態，不然在連結時會刷新頁面，狀態會重新初始化變為初始值 */}
      <Link href="/course/user/profile">會員資料</Link>
    </>
  )
}
