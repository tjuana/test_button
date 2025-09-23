import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../shared/ui/Button'
import { Download, Heart, Trash2, Loader2 } from 'lucide-react'

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'ghost', 'destructive'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    loading: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Basic stories
export const Primary: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
  },
}

export const Outline: Story = {
  args: {
    children: 'Button',
    variant: 'outline',
  },
}

export const Ghost: Story = {
  args: {
    children: 'Button',
    variant: 'ghost',
  },
}

export const Destructive: Story = {
  args: {
    children: 'Button',
    variant: 'destructive',
  },
}

// Size variants
export const Small: Story = {
  args: {
    children: 'Small',
    size: 'sm',
  },
}

export const Medium: Story = {
  args: {
    children: 'Medium',
    size: 'md',
  },
}

export const Large: Story = {
  args: {
    children: 'Large',
    size: 'lg',
  },
}

// Loading states
export const Loading: Story = {
  args: {
    children: 'Loading...',
    loading: true,
  },
}

export const LoadingWithText: Story = {
  args: {
    children: 'Submit',
    loading: true,
    loadingText: 'Processing your request...',
  },
}

export const LoadingSecondary: Story = {
  args: {
    children: 'Save Changes',
    variant: 'secondary',
    loading: true,
  },
}

export const LoadingDestructive: Story = {
  args: {
    children: 'Delete',
    variant: 'destructive',
    loading: true,
    loadingText: 'Deleting item...',
  },
}

// With icons
export const WithLeftIcon: Story = {
  args: {
    children: 'Download',
    leftIcon: <Download className="h-4 w-4" />,
  },
}

export const WithRightIcon: Story = {
  args: {
    children: 'Like',
    rightIcon: <Heart className="h-4 w-4" />,
  },
}

export const WithBothIcons: Story = {
  args: {
    children: 'Action',
    leftIcon: <Download className="h-4 w-4" />,
    rightIcon: <Heart className="h-4 w-4" />,
  },
}

// Loading with icons
export const LoadingWithIcons: Story = {
  args: {
    children: 'Download File',
    leftIcon: <Download className="h-4 w-4" />,
    rightIcon: <Heart className="h-4 w-4" />,
    loading: true,
    loadingText: 'Downloading file...',
  },
}

// Disabled states
export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
}

export const DisabledLoading: Story = {
  args: {
    children: 'Disabled Loading',
    disabled: true,
    loading: true,
  },
}

// Form types
export const Submit: Story = {
  args: {
    children: 'Submit Form',
    type: 'submit',
  },
}

export const Reset: Story = {
  args: {
    children: 'Reset',
    type: 'reset',
  },
}

// Interactive demo
export const Interactive: Story = {
  render: () => {
    const [loading, setLoading] = React.useState(false)
    
    const handleClick = async () => {
      setLoading(true)
      await new Promise(resolve => setTimeout(resolve, 2000))
      setLoading(false)
    }
    
    return (
      <div className="space-y-4">
        <Button 
          onClick={handleClick}
          loading={loading}
          loadingText="Processing request..."
        >
          {loading ? 'Processing...' : 'Start Async Action'}
        </Button>
        
        <div className="text-sm text-gray-600">
          Click the button to see loading state in action
        </div>
      </div>
    )
  },
}

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {['primary', 'secondary', 'outline', 'ghost', 'destructive'].map((variant) => (
        <div key={variant} className="space-y-3">
          <h3 className="text-sm font-medium capitalize text-gray-700">{variant}</h3>
          <div className="space-y-2 flex flex-col">
            <Button variant={variant as any} size="sm">
              Small {variant}
            </Button>
            <Button variant={variant as any} size="md">
              Medium {variant}
            </Button>
            <Button variant={variant as any} size="lg">
              Large {variant}
            </Button>
            <Button variant={variant as any} loading>
              Loading {variant}
            </Button>
          </div>
        </div>
      ))}
    </div>
  ),
}
