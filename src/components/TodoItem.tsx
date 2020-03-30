import React, { useDispatch } from 'reactn'
import { TodoItemType } from '../types'

const TodoItem = ({ item }: { item: TodoItemType }) => {
  const updateItem = useDispatch('updateItem')

  const toggleDone = () => {
    const nowIs = item.isDone
    console.log('mark done', item)
    updateItem({ ...item, isDone: !nowIs })
  }

  return (
    <div>
      <span>{item.title}</span> -<span>{item.content}</span>(
      <span>{item.deadline}</span>)
      <span onClick={toggleDone}>{item.isDone ? <>☑️</> : <>⬜️</>}</span>
    </div>
  )
}
export default TodoItem
