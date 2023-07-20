export default function JsxMap() {
  const users = ['Eddy', 'May', 'Bob']

  // 解說用的另一個陣列
  //   const displayUsers = users.map((v, i) => {
  //     return <li key={i}>{v}</li>
  //   })

  return (
    <>
      <h1>JSX中使用陣列map方法範例</h1>
      {/* 並不需要額外宣告一個陣列 */}
      {/* <ul>{displayUsers}</ul> */}
      {/* key值是必要的，不可重覆。 */}
      {/* 使用陣列索引(index)作為key實際為反樣式(anti-pattern) */}
      {/* 唯一能使用索引作為key的情況，只有靜態資料(應用執行過程完全不會變) */}
      {/* key值的選擇: 
        1. 資料來自資料庫，用資料庫的主鍵當key值
        2. 資料由應用中執行產生key要用的值，使用uuid或nanoid函式庫來產生key值。(但不可以在渲染時產生，應在建立時產生key)
        3. 自己寫的隨機數或日期物件轉整數
      */}

      <ul>
        {users.map((v, i) => {
          return <li key={i}>{v}</li>
        })}
      </ul>
    </>
  )
}
