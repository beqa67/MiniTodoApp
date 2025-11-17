import { TODO_FILTERS, type TodoFilter } from '../constants/todoFilters'

interface FilterMessage {
  message: string
  description: string
}

export const getFilterMessage = (filterType: TodoFilter): FilterMessage => {
  switch (filterType) {
    case TODO_FILTERS.COMPLETED:
      return {
        message: 'No completed todos',
        description: 'Complete some todos to see them here',
      }
    case TODO_FILTERS.ACTIVE:
      return {
        message: 'No active todos',
        description: 'All todos are completed!',
      }
    case TODO_FILTERS.ALL:
    default:
      return {
        message: 'No todos found',
        description: 'Try changing the filter',
      }
  }
}

export const getFilterLabel = (filterType: TodoFilter): string => {
  switch (filterType) {
    case TODO_FILTERS.COMPLETED:
      return 'completed'
    case TODO_FILTERS.ACTIVE:
      return 'active'
    case TODO_FILTERS.ALL:
    default:
      return 'all'
  }
}
