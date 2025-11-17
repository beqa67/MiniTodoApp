import type { FC } from 'react'
import CloseButton from '../Common/CloseButton/CloseButton.tsx'
import Checkbox from '../Common/Checkbox/Checkbox.tsx'
import { useTodoContext } from '../../context/TodoContext.tsx'

import type { TodoItemProps } from './types/TodoItem.interface'

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  const { toggleTodo, deleteTodo } = useTodoContext()

  return (
    <div className="flex items-center w-full px-4 py-3 mb-5 rounded-xl  bg-slate-800 hover:bg-slate-700 ">
      <Checkbox checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
      <span
        className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : 'text-gray-100'}`}
      >
        {todo.text}
      </span>
      <CloseButton onClick={() => deleteTodo(todo.id)} />
    </div>
  )
}

export default TodoItem
