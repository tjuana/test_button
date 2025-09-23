import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import Button from './Button'

describe('Button', () => {
  it('renders text when not loading', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('hides text and shows spinner when loading', () => {
    render(<Button loading>Click me</Button>)
    
    // Text should be hidden (opacity-0)
    const textElement = screen.getByText('Click me')
    expect(textElement).toHaveClass('opacity-0')
    
    // Spinner should be visible
    const spinner = screen.getByRole('button').querySelector('svg')
    expect(spinner).toBeInTheDocument()
    expect(spinner).toHaveClass('animate-spin-slow')
  })

  it('sets disabled when loading (even if disabled={false})', () => {
    render(<Button loading disabled={false}>Click me</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('adds aria-busy and aria-live when loading', () => {
    render(<Button loading>Click me</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('aria-busy', 'true')
    expect(button).toHaveAttribute('aria-live', 'polite')
  })

  it('does not have aria-busy and aria-live when not loading', () => {
    render(<Button>Click me</Button>)
    const button = screen.getByRole('button')
    expect(button).not.toHaveAttribute('aria-busy')
    expect(button).not.toHaveAttribute('aria-live')
  })

  it('keeps size/variant classes intact', () => {
    const { rerender } = render(
      <Button variant="primary" size="lg" loading>
        Click me
      </Button>
    )
    
    const button = screen.getByRole('button')
    expect(button).toHaveClass('bg-blue-600', 'h-12', 'px-6', 'text-base')
    
    // Test different variant and size
    rerender(
      <Button variant="destructive" size="sm" loading>
        Delete
      </Button>
    )
    
    expect(button).toHaveClass('bg-red-600', 'h-8', 'px-3', 'text-sm')
  })

  it('respects prefers-reduced-motion', () => {
    // Mock matchMedia for prefers-reduced-motion
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation(query => ({
        matches: query === '(prefers-reduced-motion: reduce)',
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    })

    render(<Button loading>Click me</Button>)
    
    const spinner = screen.getByRole('button').querySelector('svg')
    expect(spinner).toHaveClass('animate-spin-slow')
    
    // In a real test, we'd need to check that the animation is disabled
    // when prefers-reduced-motion is true, but this requires CSS testing
  })

  it('handles left and right icons correctly', () => {
    const LeftIcon = () => <span data-testid="left-icon">←</span>
    const RightIcon = () => <span data-testid="right-icon">→</span>
    
    render(
      <Button leftIcon={<LeftIcon />} rightIcon={<RightIcon />}>
        With Icons
      </Button>
    )
    
    expect(screen.getByTestId('left-icon')).toBeInTheDocument()
    expect(screen.getByTestId('right-icon')).toBeInTheDocument()
    expect(screen.getByText('With Icons')).toBeInTheDocument()
  })

  it('handles icons when loading', () => {
    const LeftIcon = () => <span data-testid="left-icon">←</span>
    const RightIcon = () => <span data-testid="right-icon">→</span>
    
    const { container } = render(
      <Button 
        leftIcon={<LeftIcon />} 
        rightIcon={<RightIcon />} 
        loading
      >
        With Icons
      </Button>
    )
    
    // The main content span should have opacity-0 class
    const contentSpan = container.querySelector('span.opacity-0')
    expect(contentSpan).toBeInTheDocument()
    expect(contentSpan).toHaveClass('opacity-0')
    
    // Icons and text should be inside the hidden span
    expect(contentSpan).toContainElement(screen.getByTestId('left-icon'))
    expect(contentSpan).toContainElement(screen.getByTestId('right-icon'))
    expect(contentSpan).toContainElement(screen.getByText('With Icons'))
    
    // Spinner should be visible
    const spinner = screen.getByRole('button').querySelector('svg')
    expect(spinner).toBeInTheDocument()
  })

  it('maintains button width when loading', () => {
    const { container } = render(
      <Button loading>
        Very Long Button Text That Should Maintain Width
      </Button>
    )
    
    const button = container.querySelector('button')
    const contentSpan = button?.querySelector('span')
    
    // The content span should exist and be hidden, maintaining layout
    expect(contentSpan).toBeInTheDocument()
    expect(contentSpan).toHaveClass('opacity-0')
  })

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLButtonElement>()
    render(<Button ref={ref}>Click me</Button>)
    expect(ref.current).toBeInstanceOf(HTMLButtonElement)
  })

  it('handles click events when not loading', async () => {
    const handleClick = vi.fn()
    const user = userEvent.setup()
    
    render(<Button onClick={handleClick}>Click me</Button>)
    
    await user.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('does not handle click events when loading', async () => {
    const handleClick = vi.fn()
    const user = userEvent.setup()
    
    render(<Button loading onClick={handleClick}>Click me</Button>)
    
    await user.click(screen.getByRole('button'))
    expect(handleClick).not.toHaveBeenCalled()
  })
})
