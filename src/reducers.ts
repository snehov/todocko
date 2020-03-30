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
  return global.todoItems
})

addReducer('addItem', async (global, dispatch, item: TodoItemType) => {
  console.log("item", item)
  const currentItems = global.todoItems
  const newItem = { ...item, isDone: false }
  const newList={ todoItems: [...currentItems, newItem] }
  setGlobal(newList)

  //let response = await possibleApiCall() OR
  //localStorage.setItem('items', newList);

  return true
})

addReducer(
  'updateItem',
  async (global, dispatch, updatedItem: TodoItemType) => {
    const currentList = global.todoItems
   /*  const currentItem = currentList.filter(
      i => i.itemId === updatedItem.itemId,
    )[0] */

    console.log("curerntList", currentList.filter(i => i.itemId !== updatedItem.itemId))
     /* const newList = [
      ...currentList.filter(i => i.itemId !== updatedItem.itemId)[0],
      updatedItem,
    ] */


    //setGlobal({ todoItems: newList }) 
    //let response = await possibleApiCall()
    //localStorage.setItem('items', newList);
    return true
  },
)
