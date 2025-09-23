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
  loadingText?: string
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
      type = 'button',
      loadingText,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading
    
    return (
      <button
        type={type}
        className={buildButtonClasses(variant, size, className) + ' relative'}
        disabled={isDisabled}
        aria-busy={loading ? 'true' : undefined}
        ref={ref}
        {...props}
      >
        {/* Content wrapper - hidden when loading but stays in DOM for screen readers */}
        <span 
          aria-hidden={loading ? 'true' : undefined} 
          className={loading ? 'opacity-0' : ''}
        >
          <ContentWrapper
            leftIcon={leftIcon}
            rightIcon={rightIcon}
            size={size}
          >
            {children}
          </ContentWrapper>
        </span>
        
        {/* Loading spinner - absolutely centered */}
        {loading && (
          <span className="absolute inset-0 grid place-items-center">
            <LoadingSpinner size={size} aria-hidden="true" />
          </span>
        )}
        
        {/* Screen reader only loading text */}
        {loading && loadingText && (
          <span className="sr-only">{loadingText}</span>
        )}
        
        {/* Fallback screen reader text when no loadingText provided */}
        {loading && !loadingText && (
          <span className="sr-only">Loading...</span>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button