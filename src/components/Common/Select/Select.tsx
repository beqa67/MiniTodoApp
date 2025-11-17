import type { SelectProps } from './types/Select.interface'

const Select = <T extends string>({ value, onChange, options }: SelectProps<T>) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as T)}
      className="w-full text-slate-100 focus:outline-none cursor-pointer bg-transparent border-b-2 border-slate-700 focus:border-indigo-500 pb-1 transition-colors"
    >
      {options?.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}
export default Select
