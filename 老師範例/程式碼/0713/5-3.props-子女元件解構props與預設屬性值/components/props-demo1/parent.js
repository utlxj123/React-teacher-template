import Child from './child'

export default function Parent() {
  return (
    <>
      <h1>Parent</h1>
      {/* Parent元件渲染了Child，所以是Child的父母元件，才能建立P-C的關係 */}
      {/* 在父母與子女元件中以props(屬性)的方式傳遞值，值可以是各種JS合法值，包含物件、陣列、函式 */}
      <Child text="今天開始學react" name="Eddy" price={100} />
      <Child text="今天會下雨" name="May" price={9} />
    </>
  )
}
