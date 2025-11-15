import { useState } from 'react'

import { useTodoContext } from '../../../context/TodoContext'
import { TODO_FILTERS } from '../../../constants/todoFilters.ts'

const Input = () => {
  const [text, setText] = useState('')
  const { addTodo, setFilter } = useTodoContext()

  const handleAddTodo = () => {
    if (text.trim()) {
      addTodo(text.trim())
      setText('')
    }
    setFilter(TODO_FILTERS.ALL)
  }

  return (
    <div className="flex gap-2">
      <input
        className="flex-1 px-3 py-2 rounded-xl  border bg-slate-800 text-slate-100 border-slate-700 focus:border-indigo-500 placeholder-gray-500 focus:outline-none"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleAddTodo()}
      />
      <button
        onClick={handleAddTodo}
        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-medium cursor-pointer"
      >
        Add
      </button>
    </div>
  )
}

export default Input
