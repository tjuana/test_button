import React from 'react'
import { buildButtonClasses } from './styles/buttonStyles'
import { ContentWrapper } from './components/ContentWrapper'
import { LoadingSpinner } from './components/LoadingSpinner'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = '',
      variant = 'primary',
      size = 'md',
      loading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading
    
    return (
      <button
        className={buildButtonClasses(variant, size, className)}
        disabled={isDisabled}
        aria-busy={loading ? 'true' : undefined}
        aria-live={loading ? 'polite' : undefined}
        ref={ref}
        {...props}
      >
        <div className="relative flex items-center justify-center w-full">
          <ContentWrapper
            leftIcon={leftIcon}
            rightIcon={rightIcon}
            size={size}
            loading={loading}
          >
            {children}
          </ContentWrapper>
          
          {loading && <LoadingSpinner size={size} />}
        </div>
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button