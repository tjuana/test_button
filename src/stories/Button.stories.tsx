import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../shared/ui/Button'
import { Download, Heart } from 'lucide-react'

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A modern React Button component with loading states, multiple variants, and comprehensive accessibility features. Follows UX best practices for loading states (spinner only, no visible text).',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'ghost', 'destructive'],
      description: 'Visual style variant of the button',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size of the button',
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Shows loading spinner and disables the button',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disables the button',
    },
    loadingText: {
      control: { type: 'text' },
      description: 'Text for screen readers when loading (sr-only)',
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
  parameters: {
    docs: {
      description: {
        story: 'The primary button variant - use for main actions like Submit, Save, etc.',
      },
    },
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

// Loading sizes
export const LoadingSmall: Story = {
  args: {
    children: 'Small Loading',
    size: 'sm',
    loading: true,
  },
}

export const LoadingMedium: Story = {
  args: {
    children: 'Medium Loading',
    size: 'md',
    loading: true,
  },
}

export const LoadingLarge: Story = {
  args: {
    children: 'Large Loading',
    size: 'lg',
    loading: true,
  },
}

// Loading states
export const Loading: Story = {
  args: {
    children: 'Submit',
    loading: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Loading state shows only a spinner (UX best practice). The original text is hidden but remains in DOM for screen readers.',
      },
    },
  },
}


export const LoadingSecondary: Story = {
  args: {
    children: 'Save Changes',
    variant: 'secondary',
    loading: true,
  },
}

export const LoadingOutline: Story = {
  args: {
    children: 'Cancel',
    variant: 'outline',
    loading: true,
  },
}

export const LoadingGhost: Story = {
  args: {
    children: 'Skip',
    variant: 'ghost',
    loading: true,
  },
}

export const LoadingDestructive: Story = {
  args: {
    children: 'Delete',
    variant: 'destructive',
    loading: true,
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
  render: function InteractiveDemo() {
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
        >
          Start Async Action
        </Button>
        
        <div className="text-sm text-gray-600">
          Click the button to see loading state in action
        </div>
      </div>
    )
  },
}

// Comparison: Normal vs Loading
export const NormalVsLoading: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Normal State</h3>
        <Button>Submit Form</Button>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Loading State</h3>
        <Button loading>
          Submit Form
        </Button>
      </div>
      
      <div className="text-sm text-gray-600">
        Notice how the loading button shows a spinner instead of text
      </div>
    </div>
  ),
}

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {['primary', 'secondary', 'outline', 'ghost', 'destructive'].map((variant) => (
        <div key={variant} className="space-y-3">
          <h3 className="text-sm font-medium capitalize text-gray-700">{variant}</h3>
          <div className="space-y-2 flex flex-col">
            <Button variant={variant as 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive'} size="sm">
              Small {variant}
            </Button>
            <Button variant={variant as 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive'} size="md">
              Medium {variant}
            </Button>
            <Button variant={variant as 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive'} size="lg">
              Large {variant}
            </Button>
            <Button variant={variant as 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive'} loading>
              Loading {variant}
            </Button>
          </div>
        </div>
      ))}
    </div>
  ),
}
