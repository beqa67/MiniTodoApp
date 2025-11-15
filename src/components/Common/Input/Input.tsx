const Input = () => {
  return (
    <div className="flex gap-2">
      <input
        className="flex-1 px-3 py-2 rounded-xl  border bg-slate-800 text-slate-100 border-slate-700 focus:border-indigo-500 placeholder-gray-500 focus:outline-none"
        placeholder="Add a new task..."
        // onChange={(e) => setText(e.target.value)}
        // onKeyDown={(e) => e.key === "Enter" && addTodo()}
      />
      <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-medium cursor-pointer">
        Add
      </button>
    </div>
  )
}

export default Input
