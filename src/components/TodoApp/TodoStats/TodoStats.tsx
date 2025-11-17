import type { FC } from 'react'
import type { TodoStatsProps } from './types/TodoStats.interface'
import { getFilterLabel } from '../../../utils/filterMessages'

const TodoStats: FC<TodoStatsProps> = ({ totalCount, filteredCount, filterType }) => {
  return (
    <div className="whitespace-nowrap">
      <p className="text-sm text-slate-400">
        Showing <span className="text-indigo-400 font-semibold">{filteredCount}</span> of{' '}
        <span className="text-slate-300 font-semibold">{totalCount}</span> {getFilterLabel(filterType)}{' '}
        {totalCount === 1 ? 'todo' : 'todos'}
      </p>
    </div>
  )
}

export default TodoStats
