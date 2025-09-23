import { useState } from 'react'
import { Button } from './shared/ui/Button'
import { Download, Heart, Trash2 } from 'lucide-react'

function App() {
  const [loading, setLoading] = useState(false)

  const handleAsyncAction = async () => {
    setLoading(true)
    // Simulate async operation
    await new Promise(resolve => setTimeout(resolve, 2000))
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Button Component Demo
          </h1>
          <p className="text-gray-600">
            Testing the loading state functionality
          </p>
        </div>

        {/* Loading State Demo */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Loading State</h2>
          <div className="flex flex-wrap gap-4">
            <Button loading={loading} onClick={handleAsyncAction}>
              {loading ? 'Processing...' : 'Start Async Action'}
            </Button>
            
            <Button variant="secondary" loading={loading}>
              Secondary Loading
            </Button>
            
            <Button variant="outline" loading={loading}>
              Outline Loading
            </Button>
          </div>
        </div>

        {/* Variants Demo */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Variants</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
        </div>

        {/* Sizes Demo */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Sizes</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </div>

        {/* Icons Demo */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">With Icons</h2>
          <div className="flex flex-wrap gap-4">
            <Button leftIcon={<Download className="h-4 w-4" />}>
              Download
            </Button>
            <Button rightIcon={<Heart className="h-4 w-4" />} variant="secondary">
              Like
            </Button>
            <Button 
              leftIcon={<Trash2 className="h-4 w-4" />} 
              variant="destructive"
            >
              Delete
            </Button>
          </div>
        </div>

        {/* Loading with Icons Demo */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Loading with Icons</h2>
          <div className="flex flex-wrap gap-4">
            <Button 
              loading={loading}
              leftIcon={<Download className="h-4 w-4" />}
            >
              Download File
            </Button>
            <Button 
              loading={loading}
              rightIcon={<Heart className="h-4 w-4" />}
              variant="secondary"
            >
              Save Changes
            </Button>
          </div>
        </div>

        {/* Disabled States */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Disabled States</h2>
          <div className="flex flex-wrap gap-4">
            <Button disabled>Disabled</Button>
            <Button loading>Loading (Auto-disabled)</Button>
            <Button disabled loading>Disabled + Loading</Button>
          </div>
        </div>

        {/* Accessibility Info */}
        <div className="bg-blue-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-blue-900">
            Accessibility Features
          </h2>
          <ul className="space-y-2 text-blue-800">
            <li>• <code>aria-busy="true"</code> when loading</li>
            <li>• <code>aria-live="polite"</code> when loading</li>
            <li>• Button is disabled when loading</li>
            <li>• Respects <code>prefers-reduced-motion</code></li>
            <li>• Maintains layout width during loading</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App