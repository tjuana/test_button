import React from 'react'
import { Button } from '../../../shared/ui/Button'

interface BlinkLinkProps {
  actionUrl: string
  children?: React.ReactNode
  className?: string
}

export function BlinkLink({ actionUrl, children, className }: BlinkLinkProps) {
  const handleClick = () => {
    window.open(actionUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <Button
      variant="outline"
      onClick={handleClick}
      className={className}
      leftIcon={<span>🔗</span>}
    >
      {children || 'Open Blink Link'}
    </Button>
  )
}
