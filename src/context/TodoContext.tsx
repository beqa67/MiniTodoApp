import { createContext, type ReactNode, useContext, useState } from 'react'

import type { TodoFilter } from '../constants/todoFilters'
import { TODO_FILTERS } from '../constants/todoFilters'

import type { Todo, TodoContextType } from './types/TodoContext.interface'

const TodoContext = createContext<TodoContextType | undefined>(undefined)

export const useTodoContext = () => {
  const context = useContext(TodoContext)
  if (!context) {
    throw new Error('useTodoContext must be used within a TodoProvider')
  }
  return context
}

interface TodoProviderProps {
  children: ReactNode
}

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [filter, setFilter] = useState<TodoFilter>(TODO_FILTERS.ALL)

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    }
    setTodos((prev) => [newTodo, ...prev])
  }

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    )
  }

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const value: TodoContextType = {
    todos,
    filter,
    addTodo,
    toggleTodo,
    deleteTodo,
    setFilter,
  }

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}
