import type { FC } from 'react'
import type { ButtonProps } from './types/Button.interface'

const Button: FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-medium cursor-pointer transition-colors"
    >
      {children}
    </button>
  )
}

export default Button
