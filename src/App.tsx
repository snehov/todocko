import React, { useEffect, useDispatch } from 'reactn'
import TodoList from './components/TodoList'
import './reducers'
import './App.css'

const App = () => {
  const fetchItems = useDispatch('fetchItems')
  useEffect(() => {
    fetchItems()
  }, [fetchItems])
  return (
    <div className="App">
      <h1>todoapp</h1>
      <TodoList />
    </div>
  )
}

export default App
