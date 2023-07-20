import { useState } from 'react'

const initialProducts = [
  {
    id: 0,
    name: '小熊餅乾',
    count: 1,
  },
  {
    id: 1,
    name: '巧克力豆餅乾',
    count: 5,
  },
  {
    id: 2,
    name: '小老板海苔',
    count: 2,
  },
]

export default function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts)

  // 找到符合id的商品物件，把count屬性 +value
  const updateCount = (id, value) => {
    const newProducts = products.map((v, i) => {
      if (v.id === id) return { ...v, count: v.count + value }
      else return { ...v }
    })

    setProducts(newProducts)
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button
            onClick={() => {
              updateCount(product.id, 1)
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              updateCount(product.id, -1)
            }}
          >
            –
          </button>
        </li>
      ))}
    </ul>
  )
}
