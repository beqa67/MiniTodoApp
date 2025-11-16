import TaskWindow from './components/TodoApp/TaskWindow.tsx'
import { TodoProvider } from './context/TodoContext.tsx'

function App() {
  return (
    <TodoProvider>
      <div className="min-h-screen bg-slate-950 text-slate-100 flex justify-center p-6">
        <TaskWindow />
      </div>
    </TodoProvider>
  )
}

export default App
