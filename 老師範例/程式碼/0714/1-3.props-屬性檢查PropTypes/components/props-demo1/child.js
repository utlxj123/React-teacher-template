import PropTypes from 'prop-types'

// 子女元件利用函式的傳入參數，得到父母元件傳入的props(屬性)，
// 之後可以在元件內使用這些值
export default function Child({ name = 'Amy', price = 0, text = 'xxx' }) {
  return (
    <>
      <h1>Child</h1>
      <p>姓名: {name}</p>
      <p>價格: {price}</p>
      <p>訊息: {text}</p>
    </>
  )
}

Child.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  text: PropTypes.string,
}

// 類別屬性(靜態屬性)語法
// Child.defaultProps = {
//   name: 'Amy',
//   text: 'xxx',
//   price: 11,
// }
