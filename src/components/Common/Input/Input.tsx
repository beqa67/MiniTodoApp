import type { FC } from 'react'
import type { InputProps } from './types/Input.interface'

const Input: FC<InputProps> = ({ value, onChange, onEnter, placeholder = 'Add a new task...' }) => {
  return (
    <input
      className="flex-1 px-3 py-2 rounded-xl border bg-slate-800 text-slate-100 border-slate-700 focus:border-indigo-500 placeholder-gray-500 focus:outline-none"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={(e) => e.key === 'Enter' && onEnter?.()}
    />
  )
}

export default Input
