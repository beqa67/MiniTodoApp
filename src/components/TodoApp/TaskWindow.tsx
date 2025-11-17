import { useMemo, useState } from 'react'

import Input from '../Common/Input/Input.tsx'
import Button from '../Common/Button/Button.tsx'
import Select from '../Common/Select/Select.tsx'
import { useTodoContext } from '../../context/TodoContext.tsx'
import { FILTER_OPTIONS, TODO_FILTERS } from '../../constants/todoFilters.ts'

import TodoStats from './TodoStats/TodoStats.tsx'
import TodoList from './TodoList.tsx'

const TaskWindow = () => {
  const [text, setText] = useState('')
  const { todos, filter, setFilter, addTodo } = useTodoContext()

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case TODO_FILTERS.COMPLETED:
        return todos.filter((todo) => todo.completed)
      case TODO_FILTERS.ACTIVE:
        return todos.filter((todo) => !todo.completed)
      case TODO_FILTERS.ALL:
      default:
        return todos
    }
  }, [todos, filter])

  const handleAddTodo = () => {
    if (text) {
      addTodo(text.trim())
      setText('')
      setFilter(TODO_FILTERS.ALL)
    }
  }

  return (
    <div className="w-full max-w-xl h-[700px] max-h-[calc(100vh-3rem)] bg-slate-900 p-6 rounded-2xl shadow-xl flex flex-col">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-slate-100 text-center">Todo App</h1>
        <div className="flex gap-2">
          <Input value={text} onChange={setText} onEnter={handleAddTodo} />
          <Button onClick={handleAddTodo}>Add</Button>
        </div>
        {todos.length > 0 && (
          <div className="flex gap-3 items-center justify-between">
            <div className="w-36">
              <Select value={filter} onChange={setFilter} options={FILTER_OPTIONS} />
            </div>
            <TodoStats
              totalCount={todos.length}
              filteredCount={filteredTodos.length}
              filterType={filter}
            />
          </div>
        )}
      </div>
      <div className="flex-1 overflow-y-auto scrollbar-custom pr-2 mt-6">
        <TodoList filteredTodos={filteredTodos} />
      </div>
    </div>
  )
}

export default TaskWindow
