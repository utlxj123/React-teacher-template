import ChildB from './child-b'
import ChildA from './child-a'

export default function Parent() {
  return (
    <>
      <h1>Parent</h1>
      <ChildB />
      <ChildA />
    </>
  )
}
