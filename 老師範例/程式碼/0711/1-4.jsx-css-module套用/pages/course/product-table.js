import data from '@/data/products.json'

import styles from '@/styles/product-table.module.css'

// 每筆資料的物件樣子
// {
// "id": 1,
// "picture": "https://via.placeholder.com/150.png",
// "stock": 5,
// "name": "iPhone 12 Pro",
// "price": 25000,
// "tags": "蘋果,大螢幕"
// }

export default function ProductTable() {
  return (
    <>
      <table className={styles['my-table']}>
        <thead>
          <tr className={styles['my-tr']}>
            <th className={styles['my-th']}>ID</th>
            <th className={styles['my-th']}>圖片</th>
            <th className={styles['my-th']}>名稱</th>
            <th className={styles['my-th']}>價格</th>
          </tr>
        </thead>
        <tbody>
          {data.products.map((v, i) => {
            return (
              <tr key={v.id} className={styles['my-tr']}>
                <td className={styles['my-td']}>{v.id}</td>
                <td className={styles['my-td']}>
                  <img src={v.picture} />
                </td>
                <td className={styles['my-td']}>{v.name}</td>
                <td className={styles['my-td']}>{v.price}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
