export interface SelectOption<T = string> {
  value: T
  label: string
}

export interface SelectProps<T = string> {
  value: T
  onChange: (value: T) => void
  options: readonly SelectOption<T>[]
}
