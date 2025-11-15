export const TODO_FILTERS = {
  ALL: 'all',
  COMPLETED: 'completed',
  ACTIVE: 'active',
}

export type TodoFilter = (typeof TODO_FILTERS)[keyof typeof TODO_FILTERS]

export const FILTER_OPTIONS = [
  { value: TODO_FILTERS.ALL, label: 'All' },
  { value: TODO_FILTERS.COMPLETED, label: 'Completed' },
  { value: TODO_FILTERS.ACTIVE, label: 'Active' },
]
