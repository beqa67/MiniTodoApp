import type { TodoFilter } from '../../../../constants/todoFilters'

export interface TodoStatsProps {
  totalCount: number
  filteredCount: number
  filterType: TodoFilter
}
