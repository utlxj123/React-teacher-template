# 多個過濾條件說明

## 流程

### 1. 單一個 todos 的 state

- 簡單的條件過濾可以這樣作，但如果有"排序"、"分頁"或，需要複雜判斷，或會破壞原本整個資料陣列全部結構，此作法不適合
- 各條件寫為`(傳入todos陣列) => 依條件過濾的新陣列`
- 原本 todos 不會被改變

```text
條件3(條件2(條件1(todos)))  之後 `map` 出來呈現
```

範例:

詳見範例`2-5.練習題-todo-多個過濾組合-補充-1`中`TodoApp.js`檔案

### 2-1. 使用兩個 state + 多個過濾函式

> 註:

- todos: 所有原本的待辨事項(原始資料)
- todosDisplay: 呈現用的待辨事項

```
todos -> (條件1) -> newTodos1 -> (條件2) ->newTodos2 -> ...
```

範例:

詳見範例`2-6.練習題-todo-多個過濾組合-補充-2-1`中`TodoApp.js`檔案

說明:

- 可用於各種複雜情況，或有先後次序的條件過濾，除了過濾外，如排序、分頁…等都能使用
- 需搭配`useEffect`使用
- 各條件改寫為`(傳入todos陣列, 條件狀態) => 依條件過濾的新陣列`
- 經過各條件後過濾 todos 資料陣列，之後設定到 todosDisplay 中

### 2-2. 使用兩個 state + 多個判斷函式

> 僅過濾可行，但如果有"排序"、"分頁"或破壞原本整個資料陣列全部結構，此作法不適合

- todos: 所有原本的待辨事項(原始資料)
- todosDisplay: 呈現用的待辨事項
- 各條件寫為判斷函式，產生與目前所有資料項目對應的 boolean 陣列(如下範例)
- 最後一個 filter 中的 callback 判斷函式中，作各判斷`&&`運算組合後，決定是否呈現於網頁上
- 需搭配`useEffect`使用
- 經過各條件後過濾 todos 資料陣列，之後設定到 todosDisplay 中

```
todos.filter( (v,i) => 條件1[i] && 條件2[i] && ...
```

詳見範例`2-7.練習題-todo-多個過濾組合-補充-2-2`中`TodoApp.js`檔案

範例: 切換不同類型呈現、搜尋條件

```jsx
// 條件1: (a) => Array<true|false>
const typeFilter = (currentFilter, todoArray) => {
  return todoArray.map((v, i) => {
    switch (currentFilter) {
      case 'Active':
        return !v.completed
      case 'Completed':
        return v.completed
      case 'All':
      default:
        return true
    }
  })
}

// 條件2: (a) => Array<true|false>
const searchFilter = (searchWord, todoArray) => {
  return todoArray.map((v, i) => {
    return v.text.includes(searchWord)
  })
}
```
