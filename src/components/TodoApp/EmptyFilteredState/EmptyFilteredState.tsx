import type { EmptyFilteredStateProps } from './types/EmptyFilteredState.interface'

const EmptyFilteredState = ({ filterType }: EmptyFilteredStateProps) => {
  const getMessage = () => {
    switch (filterType) {
      case 'completed':
        return 'No completed todos'
      case 'active':
        return 'No active todos'
      default:
        return 'No todos found'
    }
  }

  const getDescription = () => {
    switch (filterType) {
      case 'completed':
        return 'Complete some todos to see them here'
      case 'active':
        return 'All todos are completed!'
      default:
        return 'Try changing the filter'
    }
  }

  return (
    <div className="text-center py-12">
      <div className="text-5xl mb-4">🔍</div>
      <h3 className="text-lg font-semibold text-slate-300 mb-2">{getMessage()}</h3>
      <p className="text-slate-500 text-sm">{getDescription()}</p>
    </div>
  )
}

export default EmptyFilteredState
