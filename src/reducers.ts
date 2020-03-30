import { setGlobal, addReducer } from 'reactn'
import { TodoListType, TodoItemType } from './types'

const sampleItem: TodoItemType = {
  itemId: 1,
  title: 'první zkušební',
  content: 'zde obsah',
  deadline: 1585561626,
  isDone: false,
}
setGlobal({ todoItems: [sampleItem] })

addReducer('fetchItems', async (global, dispatch) => {
  //let response = await possibleApiCall()  OR
  //localstorage.getItem('items')
  return { todoItems: global.todoItems }
})

addReducer('addItem', async (global, dispatch, item: TodoItemType) => {
  console.log('addItem', item)
  const currentItems = global.todoItems
  const newItem = { ...item, isDone: false }
  const newList = [...currentItems, newItem]
  console.log('newlist', newList)

  //let response = await possibleApiCall() OR
  //localStorage.setItem('items', newList);

  return { todoItems: newList }
})

addReducer(
  'updateItem',
  async (global, dispatch, updatedItem: TodoItemType) => {
    const currentList = global.todoItems
    const restOfList = currentList.filter(i => i.itemId !== updatedItem.itemId)
    console.log('rest', restOfList)
    let newList
    if (restOfList.length === 0) {
      newList = [updatedItem]
    } else {
      newList = [
        { ...currentList.filter(i => i.itemId !== updatedItem.itemId)[0] },
        updatedItem,
      ]
    }
    console.log('newlist', newList)
    //let response = await possibleApiCall()
    //localStorage.setItem('items', newList);
    return { todoItems: newList }
  },
)
