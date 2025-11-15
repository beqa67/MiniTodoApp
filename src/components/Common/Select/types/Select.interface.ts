import type { TodoFilter } from '../../../../constants/todoFilters'

export interface SelectProps {
  value: TodoFilter
  onChange: (value: TodoFilter) => void
}
