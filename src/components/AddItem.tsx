import React, { useDispatch, useState } from 'reactn'
import { TodoItemType, TodoItemEmpty } from '../types'
import { getNewId } from '../utils'

const AddItem = ({ item }: { item?: TodoItemType }) => {
  const addItem = useDispatch('addItem')
  const updateItem = useDispatch('updateItem')
  const [curItem, setCurItem] = useState(item || TodoItemEmpty)

  const changeItem = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target
    const name = target.name
    let properValue
    if (target.type === 'number') {
      properValue = Number(target.value)
    } else {
      properValue = target.value
    }
    const itemChanged = { ...curItem, [name]: properValue }
    setCurItem(itemChanged)
    console.log('properValue', properValue)
  }
  const submitItem = () => {
    if (curItem.itemId === 0) {
      addItem({ ...curItem, itemId: getNewId() })
    } else {
      ///updateItem
    }
  }

  return (
    <div style={{ border: '1px solid green' }}>
      <div>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={curItem.title}
            onChange={changeItem}
          />
        </label>
      </div>
      <div>
        <label>
          Content:
          <input
            type="text"
            name="content"
            value={curItem.content}
            onChange={changeItem}
          />
        </label>
      </div>
      <div>
        <label>
          deadline:
          <input
            type="number"
            name="deadline"
            value={curItem.deadline}
            onChange={changeItem}
          />{' '}
          {/* datepickaer */}
        </label>
      </div>
      <button onClick={submitItem}>uložit</button>
    </div>
  )
}
export default AddItem
