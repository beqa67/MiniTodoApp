import type { CheckboxProps } from './types/Checkbox.interface'

const Checkbox = ({ checked, onChange }: CheckboxProps) => {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="w-5 h-5 rounded-md bg-emerald-500 mr-3 cursor-pointer"
    />
  )
}
export default Checkbox
