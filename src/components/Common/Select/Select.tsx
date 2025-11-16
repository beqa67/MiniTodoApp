import type { SelectProps } from './types/Select.interface'
import { FILTER_OPTIONS } from '../../../constants/todoFilters'

const Select = ({ value, onChange }: SelectProps) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as typeof value)}
      className="w-full text-slate-100 focus:outline-none cursor-pointer bg-transparent border-b-2 border-slate-700 focus:border-indigo-500 pb-1 transition-colors"
    >
      {FILTER_OPTIONS.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}
export default Select
