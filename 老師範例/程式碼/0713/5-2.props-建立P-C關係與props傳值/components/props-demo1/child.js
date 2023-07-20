// 子女元件利用函式的傳入參數，得到父母元件傳入的props(屬性)，
// 之後可以在元件內使用這些值
export default function Child(props) {
  console.log(props)
  return (
    <>
      <h1>Child</h1>
      <p>姓名: {props.name}</p>
      <p>價格: {props.price}</p>
      <p>訊息: {props.text}</p>
    </>
  )
}
