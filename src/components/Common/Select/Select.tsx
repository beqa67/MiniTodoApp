import type { SelectProps } from './types/Select.interface'
import { FILTER_OPTIONS } from '../../../constants/todoFilters'

const Select = ({ value, onChange }: SelectProps) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as typeof value)}
      className="w-full mb-4 px-4 py-2 rounded-xl border bg-slate-800 text-slate-100 border-slate-700 focus:border-indigo-500 focus:outline-none cursor-pointer"
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
