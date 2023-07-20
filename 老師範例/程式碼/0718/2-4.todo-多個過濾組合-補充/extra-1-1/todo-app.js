import { useState } from 'react'

import AddForm from './add-form'
// 導入資料夾的index.js可以寫為導入資料夾路徑，下面的語法相同結果
// import TodoList from './TodoList/index'
import TodoList from './todo-list'

import styles from './todo-app.module.css'

function TodoApp() {
  // todo列表用
  // 每個todo項目: ex. {id: number, text: string, completed: boolean }
  const [todos, setTodos] = useState([
    { id: 1, text: '買牛奶', completed: true },
    { id: 2, text: '學react', completed: false },
    { id: 3, text: '121212', completed: true },
    { id: 4, text: '111111', completed: false },
  ])

  // 過濾目前呈現項目用選項
  // type= 'All' | 'Active' | 'Completed'
  const [currentFilter, setCurrentFilter] = useState('All')
  const filterOptions = ['All', 'Active', 'Completed']

  // 搜尋字串
  const [searchWord, setSearchWord] = useState('')

  // 改為 (傳入todos陣列) => 依條件過濾的新陣列
  const getSearchedTodos = (todoArray) => {
    return todoArray.filter((v, i) => {
      return v.text.includes(searchWord)
    })
  }

  // 改為 (傳入todos陣列) => 依條件過濾的新陣列
  const getFilterTodos = (todoArray) => {
    if (currentFilter === 'All') return todoArray

    if (currentFilter === 'Active') {
      return todoArray.filter((v, i) => {
        return v.completed === false
      })
    }

    if (currentFilter === 'Completed') {
      return todoArray.filter((v, i) => {
        return v.completed === true
      })
    }
  }

  // 下面為處理todos state各種操作用方法
  // 新增一筆資料
  const addTodo = (text) => {
    // id產生的幾種方式:
    // 1. 用加入當下的時間微秒值(ps. 不適合多人使用系統)
    // 2. id是數字時，可求出最大值再遞增(類似資料庫中的auto increment)
    // 3. 隨機產生語法或函式庫 例如 uuid/nanoid 等函式庫

    // 先寫出要新增的物件值
    // id用時間日期物件的微秒值
    const newTodo = {
      id: Number(new Date()),
      text: text,
      completed: false,
    }

    // 三步驟(拷貝 -> 加入到新陣列中 -> 設定回state)
    setTodos([newTodo, ...todos])
  }

  // 切換某筆資料的completed值
  const toggleCompleted = (id) => {
    // 三步驟(拷貝 -> 加入到新陣列中 -> 設定回state)
    const newTodos = todos.map((v) => {
      // toggle(切換)-> true變false false變true
      if (v.id === id) return { ...v, completed: !v.completed }
      return { ...v }
    })

    setTodos(newTodos)
  }

  // 刪除某筆資料
  const deleteTodo = (id) => {
    //1, 2
    const newTodos = todos.filter((v, i) => {
      return id !== v.id
    })

    // 3
    setTodos(newTodos)
  }

  return (
    <>
      <AddForm addTodo={addTodo} />
      {/* 
        todos 改為 getFilterTodos(getSearchedTodos(todos)
        意即getSearchedTodos(todos)先作條件過濾後，
        之後回傳陣列到getFilterTodos函式中進行第二次的過濾，
        此為函式組合樣式
      */}
      <TodoList
        todos={getFilterTodos(getSearchedTodos(todos))}
        toggleCompleted={toggleCompleted}
        deleteTodo={deleteTodo}
      />
      <hr />
      <input
        type="text"
        value={searchWord}
        placeholder="搜尋"
        onChange={(e) => {
          setSearchWord(e.target.value)
        }}
      />
      <br />
      {/* 以下為過濾用按鈕 */}
      {filterOptions.map((v, i) => {
        return (
          <button
            key={i}
            className={
              currentFilter === v
                ? styles['filter-button-active']
                : styles['filter-button-normal']
            }
            onClick={() => {
              setCurrentFilter(v)
            }}
          >
            {v}
          </button>
        )
      })}
    </>
  )
}

export default TodoApp
