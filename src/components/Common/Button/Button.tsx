import type { ButtonProps } from './types/Button.interface'

const Button = ({ onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="group rounded-full p-2 hover:bg-rose-500 transition-colors cursor-pointer"
    >
      <svg
        className="w-5 h-5 text-gray-600 group-hover:text-gray-100"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  )
}
export default Button
