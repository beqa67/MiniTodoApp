import type { TodoFilter } from '../../constants/todoFilters'

export interface Todo {
  id: string
  text: string
  completed: boolean
}

export interface TodoContextType {
  todos: Todo[]
  filter: TodoFilter
  addTodo: (text: string) => void
  toggleTodo: (id: string) => void
  deleteTodo: (id: string) => void
  setFilter: (filter: TodoFilter) => void
}
