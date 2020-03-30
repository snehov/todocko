import React, { useGlobal } from 'reactn'
import { TodoItemType } from '../types'
import TodoItem from './TodoItem'
import AddItem from './AddItem'

const TodoList = () => {
  const [items] = useGlobal('todoItems')
  return (
    <div>
      <h2>Add item here</h2>
      <AddItem />
      <h2>todolist here</h2>
      {items.map((item: TodoItemType) => (
        <TodoItem key={item.itemId} item={item} />
      ))}
    </div>
  )
}
export default TodoList
