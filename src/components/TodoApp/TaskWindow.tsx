import Input from '../Common/Input/Input.tsx'

import TodoList from './TodoList.tsx'

const TaskWindow = () => {
  return (
    <div className="w-full max-w-md bg-slate-900 p-6 rounded-2xl shadow-xl space-y-6">
      <h1 className="text-2xl font-bold text-slate-100 text-center">Todo App</h1>
      <Input />
      <TodoList />
    </div>
  )
}

export default TaskWindow
