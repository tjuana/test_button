import React from 'react'
import { Loader2 } from 'lucide-react'
import { buttonStyles } from '../styles/buttonStyles'

interface LoadingSpinnerProps {
  size: 'sm' | 'md' | 'lg'
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size }) => (
  <div className="absolute inset-0 flex items-center justify-center">
    <Loader2 className={`${buttonStyles.iconSizes[size]} animate-spin-slow`} />
  </div>
)
