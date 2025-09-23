// Button style configurations
export const buttonStyles = {
  base: 'inline-flex items-center justify-center rounded-md font-medium transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  
  variants: {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
    outline: 'border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50',
    ghost: 'text-gray-700 hover:bg-gray-100',
    destructive: 'bg-red-600 text-white hover:bg-red-700'
  },
  
  sizes: {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4 text-sm',
    lg: 'h-12 px-6 text-base'
  },
  
  iconSizes: {
    sm: 'h-4 w-4',
    md: 'h-4 w-4',
    lg: 'h-5 w-5'
  }
} as const

// Helper function to build button classes
export const buildButtonClasses = (
  variant: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive',
  size: 'sm' | 'md' | 'lg',
  className: string
): string => {
  return [
    buttonStyles.base,
    buttonStyles.variants[variant],
    buttonStyles.sizes[size],
    className
  ].join(' ')
}
