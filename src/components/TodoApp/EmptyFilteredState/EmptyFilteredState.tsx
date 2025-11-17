import type { FC } from 'react'

import { getFilterMessage } from '../../../utils/filterMessages'

import type { EmptyFilteredStateProps } from './types/EmptyFilteredState.interface'

const EmptyFilteredState: FC<EmptyFilteredStateProps> = ({ filterType }) => {
  const { message, description } = getFilterMessage(filterType)

  return (
    <div className="text-center py-12">
      <div className="text-5xl mb-4">🔍</div>
      <h3 className="text-lg font-semibold text-slate-300 mb-2">{message}</h3>
      <p className="text-slate-500 text-sm">{description}</p>
    </div>
  )
}

export default EmptyFilteredState
