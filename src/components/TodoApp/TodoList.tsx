import { useTodoContext } from '../../context/TodoContext.tsx'

import TodoItem from './TodoItem.tsx'
import EmptyState from './EmptyState/EmptyState.tsx'
import EmptyFilteredState from './EmptyFilteredState/EmptyFilteredState.tsx'
import type { TodoListProps } from './types/TodoList.interface.ts'

const TodoList = ({ filteredTodos }: TodoListProps) => {
  const { todos, filter } = useTodoContext()

  // If no todos at all, show empty state
  if (todos.length === 0) {
    return <EmptyState />
  }

  // If filtered todos is empty, show empty filtered state
  if (filteredTodos.length === 0) {
    return <EmptyFilteredState filterType={filter} />
  }

  return (
    <div>
      {filteredTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
    </div>
  )
}

export default TodoList
