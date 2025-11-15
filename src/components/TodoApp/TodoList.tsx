import { useMemo } from 'react'

import Select from '../Common/Select/Select.tsx'
import { useTodoContext } from '../../context/TodoContext.tsx'
import { TODO_FILTERS } from '../../constants/todoFilters.ts'

import TodoItem from './TodoItem.tsx'

const TodoList = () => {
  const { todos, filter, setFilter } = useTodoContext()

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

  return (
    <div>
      {todos?.length ? <Select value={filter} onChange={setFilter} /> : null}

      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  )
}

export default TodoList
