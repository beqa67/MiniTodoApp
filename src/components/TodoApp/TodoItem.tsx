import Button from '../Common/Button/Button.tsx'
import Checkbox from '../Common/Checkbox/Checkbox.tsx'

const TodoItem = () => {
  const checked = false

  return (
    <div className="flex items-center w-full px-4 py-3 mb-5 rounded-xl  bg-slate-800 hover:bg-slate-700 ">
      <Checkbox />
      <span
        className={`flex-1 ${checked ? 'line-through text-gray-500' : 'text-gray-100'}`}
      >
        text
      </span>
      <Button />
    </div>
  )
}

export default TodoItem
