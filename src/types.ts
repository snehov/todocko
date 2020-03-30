export type TodoItemType = {
  itemId: number
  title: string
  content: string
  deadline: number // timestamp
  isDone: boolean
}
export type TodoListType = Array<TodoItemType>

export const TodoItemEmpty: TodoItemType = {
  itemId: 0,
  title: '',
  content: '',
  deadline: 0,
  isDone: false,
}
