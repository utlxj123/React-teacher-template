// 從json檔案導入，導入後data會自動轉成js的資料類型格式
import data from '@/data/students.json'

export default function JsxStudents() {
  return (
    <>
      <h1>JSX中使用map呈現學生資料</h1>
      <ul>
        {data.map((v, i) => {
          return (
            <li key={v.id}>
              {v.id} / {v.name} / {v.age}
            </li>
          )
        })}
      </ul>
    </>
  )
}
