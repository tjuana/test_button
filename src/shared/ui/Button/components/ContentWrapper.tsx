import React from 'react'
import { IconWrapper } from './IconWrapper'

interface ContentWrapperProps {
  children: React.ReactNode
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  size: 'sm' | 'md' | 'lg'
}

export const ContentWrapper: React.FC<ContentWrapperProps> = ({ 
  children, 
  leftIcon, 
  rightIcon, 
  size, 
}) => (
  <span className="flex items-center gap-2">
    {leftIcon && <IconWrapper size={size}>{leftIcon}</IconWrapper>}
    {children}
    {rightIcon && <IconWrapper size={size}>{rightIcon}</IconWrapper>}
  </span>
)
