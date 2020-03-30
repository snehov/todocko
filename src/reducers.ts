import { setGlobal, addReducer } from 'reactn'
import { TodoItemType } from './types'

const sampleItem: TodoItemType = {
  itemId: 1,
  title: 'první zkušební',
  content: 'zde obsah',
  deadline: 1585561626,
  isDone: false,
}
setGlobal({ todoItems: [] })

addReducer(
  'fetchItems',
  /* async */ (global, dispatch) => {
    //let response = await possibleApiCall()  OR
    let items = global.todoItems
    if (items.length === 0) {
      items = JSON.parse(localStorage.getItem('todoItems') || '[]')
    }
    items = items.length > 0 ? items : [sampleItem]
    return { todoItems: items }
  },
)

addReducer(
  'addItem',
  /* async */ (global, dispatch, item: TodoItemType) => {
    //let response = await possibleApiCall()
    const currentItems = global.todoItems
    const newItem = { ...item, isDone: false }
    const newList = [...currentItems, newItem]

    localStorage.setItem('todoItems', JSON.stringify(newList))

    return { todoItems: newList }
  },
)

addReducer(
  'updateItem',
  /* async */ (global, dispatch, updatedItem: TodoItemType) => {
    //let response = await possibleApiCall()
    const currentList = global.todoItems
    const restOfList = currentList.filter(i => i.itemId !== updatedItem.itemId)
    let newList
    if (restOfList.length === 0) {
      newList = [updatedItem]
      console.log('0')
    } else {
      newList = [...restOfList, updatedItem]
    }

    localStorage.setItem('todoItems', JSON.stringify(newList))
    return { todoItems: newList }
  },
)
