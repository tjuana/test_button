import React from 'react'
import { buttonStyles } from '../styles/buttonStyles'

interface IconWrapperProps {
  children: React.ReactNode
  size: 'sm' | 'md' | 'lg'
}

export const IconWrapper: React.FC<IconWrapperProps> = ({ children, size }) => (
  <span className={buttonStyles.iconSizes[size]}>
    {children}
  </span>
)
