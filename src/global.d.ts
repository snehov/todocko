import 'reactn'
import { TodoListType, TodoItemType } from './types'

declare module 'reactn/default' {
  export interface Reducers {
    fetchItems: (global: State, dispatch: Dispatch) => Pick<State>
    addItem: (
      global: State,
      dispatch: Dispatch,
      item: TodoItemType,
    ) => Pick<State>
    
    updateItem: (
      global: State,
      dispatch: Dispatch,
      item: TodoItemType,
    ) => Pick<State>
  }
  export interface State {
    todoItems: TodoListType
  }
}
