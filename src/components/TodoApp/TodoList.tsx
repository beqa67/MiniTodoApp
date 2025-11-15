import Select from '../Common/Select/Select.tsx'

import TodoItem from './TodoItem.tsx'

const TodoList = () => {
  return (
    <div>
      <Select />
      <TodoItem />
      <TodoItem />
    </div>
  )
}

export default TodoList
