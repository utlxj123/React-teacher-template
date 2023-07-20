export default function ChildA(props) {
  return (
    <>
      <h1>ChildA</h1>
      <p>來自Parent(父母元件)的資料: {props.pData}</p>
    </>
  )
}
