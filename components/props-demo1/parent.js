import Child from './child'

export default function Parent() {
  const oa = {
    text: '今天開始學react',
    name: 'Eddy',
    price: 100,
  }

  const abc = 'xxxx'
  const total = 100

  const product = {
    name: '小熊餅干',
    cat: '零食',
    price: 100,
    aa: 1,
    ab: 2,
    ac: 3,
  }

  return (
    <>
      <h1>Parent</h1>
      {/* Parent元件渲染了Child，所以是Child的父母元件，才能建立P-C的關係 */}
      {/* 在父母與子女元件中以props(屬性)的方式傳遞值，值可以是各種JS合法值，包含物件、陣列、函式 */}
      {/* 以下兩者同義 */}
      {/* <Child text="今天開始學react" name="Eddy" price={100} />
      <Child {...oa} /> */}
      {/* 以下兩者同義 */}
      {/* <Child abc total />
      <Child abc={true} total={true} /> */}
      {/* 以下才是真的要傳10和11行的常數值進子女元件的語法 */}
      {/* <Child abc={abc} total={total} /> */}
      {/* 以下示範不好的作法，直接傳物件值到props */}
      {/* 因為react的元件的重新渲染，是會淺比較props的改變，如果傳遞物件會造成不論如何，子女元件必定會重新渲染，有可能會造成效能問題 */}
      <Child product={product} />
    </>
  )
}
