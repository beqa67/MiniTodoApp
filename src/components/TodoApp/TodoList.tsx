import type { FC } from 'react'
import { useTodoContext } from '../../context/TodoContext.tsx'

import TodoItem from './TodoItem.tsx'
import EmptyState from './EmptyState/EmptyState.tsx'
import EmptyFilteredState from './EmptyFilteredState/EmptyFilteredState.tsx'
import type { TodoListProps } from './types/TodoList.interface.ts'

const TodoList: FC<TodoListProps> = ({ filteredTodos }) => {
  const { todos, filter } = useTodoContext()

  if (todos.length === 0) {
    return <EmptyState />
  }

  if (filteredTodos.length === 0) {
    return <EmptyFilteredState filterType={filter} />
  }

  return (
    <div>
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  )
}

export default TodoList
