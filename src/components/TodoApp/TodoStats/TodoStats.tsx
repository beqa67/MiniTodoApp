import type { TodoStatsProps } from './types/TodoStats.interface'

const TodoStats = ({ totalCount, filteredCount, filterType }: TodoStatsProps) => {
  const getFilterLabel = () => {
    switch (filterType) {
      case 'completed':
        return 'completed'
      case 'active':
        return 'active'
      default:
        return 'all'
    }
  }

  return (
    <div className="whitespace-nowrap">
      <p className="text-sm text-slate-400">
        Showing <span className="text-indigo-400 font-semibold">{filteredCount}</span> of{' '}
        <span className="text-slate-300 font-semibold">{totalCount}</span> {getFilterLabel()}{' '}
        {totalCount === 1 ? 'todo' : 'todos'}
      </p>
    </div>
  )
}

export default TodoStats
