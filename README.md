# Button Component with Loading State

A modern React Button component with loading state functionality, built with TypeScript, Tailwind CSS, and comprehensive testing.

## Features

- ✅ **Loading State**: Spinner with smooth animation
- ✅ **Accessibility**: ARIA attributes for screen readers
- ✅ **Responsive**: Multiple sizes and variants
- ✅ **Icon Support**: Left and right icons
- ✅ **TypeScript**: Full type safety
- ✅ **Testing**: Comprehensive test suite with Vitest

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm run test

# Run tests with UI
npm run test:ui

# Build for production
npm run build

# Preview production build
npm run preview
```

## GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages:

1. **Enable GitHub Pages** in repository settings:
   - Go to Settings → Pages
   - Source: "GitHub Actions"

2. **Push to main branch** - the workflow will automatically:
   - Run tests and linting
   - Build the project
   - Deploy to GitHub Pages

3. **Access your demo** at:
   - `https://yourusername.github.io/test-button/`

The deployment workflow includes:
- ✅ Type checking
- ✅ Linting
- ✅ Testing (13 tests)
- ✅ Production build
- ✅ SPA routing support

## Usage

```tsx
import { Button } from './src/shared/ui/Button'

// Basic usage
<Button loading={isLoading} onClick={handleClick}>
  {isLoading ? 'Processing...' : 'Submit'}
</Button>

// With icons
<Button 
  loading={isLoading}
  leftIcon={<DownloadIcon />}
  rightIcon={<ArrowIcon />}
>
  Download File
</Button>

// Different variants and sizes
<Button variant="destructive" size="lg" loading={isDeleting}>
  Delete Item
</Button>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `loading` | `boolean` | `false` | Shows spinner and disables button |
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'destructive'` | `'primary'` | Button style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `leftIcon` | `React.ReactNode` | - | Icon on the left side |
| `rightIcon` | `React.ReactNode` | - | Icon on the right side |
| `disabled` | `boolean` | `false` | Disables the button |
| `children` | `React.ReactNode` | - | Button content |

## Accessibility Features

- `aria-busy="true"` when loading
- `aria-live="polite"` when loading
- Button is automatically disabled when loading
- Respects `prefers-reduced-motion` for animations
- Maintains layout width during loading state

## Testing

The component includes comprehensive tests covering:

- Loading state behavior
- Accessibility attributes
- Icon handling
- Click events
- Layout stability
- Animation preferences

Run tests with:
```bash
npm run test:run
```

## Project Structure

```
src/
├── shared/ui/Button/
│   ├── Button.tsx              # Main component
│   ├── Button.test.tsx         # Tests
│   ├── index.ts                # Exports
│   ├── styles/
│   │   └── buttonStyles.ts     # Style configurations
│   └── components/
│       ├── IconWrapper.tsx     # Icon wrapper component
│       ├── ContentWrapper.tsx  # Content wrapper component
│       └── LoadingSpinner.tsx  # Loading spinner component
├── test/
│   └── setup.ts                # Test setup
└── App.tsx                     # Demo application
```

## Technologies

- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Vitest** - Testing framework
- **Testing Library** - Component testing
- **Lucide React** - Icons