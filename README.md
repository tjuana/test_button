# Button Component Library + Blink Actions

A modern React Button component library with comprehensive Storybook documentation, built with TypeScript, Tailwind CSS, and extensive testing. Now includes **Blink Actions** integration for Solana transactions.

## 🚀 Live Demo

**Storybook Documentation**: https://tjuana.github.io/test_button

## ✨ Features

### Button Component Library
- ✅ **27 Storybook Stories** - Complete component showcase
- ✅ **Loading State** - Spinner with smooth animation (UX best practices)
- ✅ **Accessibility** - ARIA attributes for screen readers
- ✅ **5 Variants** - primary, secondary, outline, ghost, destructive
- ✅ **3 Sizes** - sm, md, lg
- ✅ **Icon Support** - Left and right icons
- ✅ **TypeScript** - Full type safety
- ✅ **45 Tests** - Comprehensive test coverage
- ✅ **CI/CD** - Automated deployment to GitHub Pages

### Blink Actions Integration
- ✅ **Solana Wallet Integration** - Phantom, Solflare support
- ✅ **Express Server** - Action endpoints for transaction creation
- ✅ **BlinkButton Component** - Local and link modes
- ✅ **Donate Action** - Example SOL donation transaction
- ✅ **Devnet Support** - Ready for testing

## 🛠️ Development

### Quick Start (Blink Actions)

1. **Install Phantom Wallet** and enable Devnet:
   - Install [Phantom](https://phantom.app/) browser extension
   - Go to Settings → Developer Settings → Change Network → Devnet
   - Get test SOL from [Solana Faucet](https://faucet.solana.com/)

2. **Setup Environment**:
   ```bash
   # Copy environment files
   cp server/.env.example server/.env
   cp .env.example .env
   
   # Edit server/.env and set your DONATION_ADDRESS
   # (your Phantom wallet address on devnet)
   ```

3. **Install and Run**:
   ```bash
   # Install dependencies
   npm install
   
   # Start both client and server
   npm run dev
   ```

4. **Test Blink Actions**:
   - Open http://localhost:5173 (или 5174, если 5173 занят)
   - Click "Connect" to connect your wallet
   - **Get test SOL**: Go to [Solana Faucet](https://faucet.solana.com/) and request SOL for your wallet
   - Click "Donate 0.01 SOL (Local)" to test local transaction
   - Click "Open Blink Link" to test Action URL

### Development Commands

```bash
# Start both client and server
npm run dev

# Start only client (Vite)
npm run dev:client

# Start only server (Express)
npm run dev:server

# Start Storybook (recommended for component development)
npm run storybook

# Run all tests
npm run test:run

# Run tests with UI
npm run test:ui

# Type checking
npm run type-check

# Linting
npm run lint

# Build Storybook for production
npm run build-storybook
```

## 🚀 Deployment

### GitHub Pages (Automatic)

This project automatically deploys to GitHub Pages on every push to `main`:

1. **Enable GitHub Pages** in repository settings:
   - Go to Settings → Pages
   - Source: "GitHub Actions"

2. **Push to main branch** - the CI/CD pipeline will:
   - Run quality checks (type-check, lint, tests)
   - Build Storybook
   - Deploy to GitHub Pages

3. **Access your Storybook** at:
   - **Live Demo**: https://tjuana.github.io/test_button

### CI/CD Pipeline Features

- ✅ **Quality Checks**: TypeScript, ESLint, 45 tests
- ✅ **Storybook Build**: Complete component documentation
- ✅ **Automatic Deployment**: GitHub Pages integration
- ✅ **SPA Routing**: 404.html for proper navigation
- ✅ **Environment Management**: github-pages environment

## 📖 Storybook Stories

The component library includes **27 comprehensive stories**:

### Basic Variants
- Primary, Secondary, Outline, Ghost, Destructive

### Sizes
- Small, Medium, Large
- Loading states for each size

### Loading States
- Loading (spinner only - UX best practice)
- Loading with different variants
- Loading with icons
- Disabled loading

### Icon Support
- Left icon, Right icon, Both icons
- Loading with icons

### Interactive Examples
- Interactive demo with async actions
- Normal vs Loading comparison
- All variants showcase

## 💻 Usage

```tsx
import { Button } from './src/shared/ui/Button'

// Basic usage
<Button loading={isLoading} onClick={handleClick}>
  Submit
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

// With loading text for screen readers
<Button loading loadingText="Processing your request...">
  Submit
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

## Blink Actions

This project includes a complete Blink Actions implementation for Solana:

### Server Endpoints

- `GET /health` - Health check
- `GET /api/actions/donate` - Action metadata
- `POST /api/actions/donate` - Create unsigned transaction

### Client Components

- `BlinkButton` - Component with local and link modes
- `actionsClient` - Utilities for transaction creation and sending

### Usage Example

```tsx
import { BlinkButton } from './src/features/blink/BlinkButton'

// Local mode - creates transaction via POST and signs with wallet
<BlinkButton action="donate" amount="0.01" mode="local">
  Donate 0.01 SOL (Local)
</BlinkButton>

// Link mode - opens Blink Action URL
<BlinkButton action="donate" amount="0.01" mode="link">
  Open Blink Link
</BlinkButton>
```

### Environment Variables

**Client (.env)**:
```
VITE_SOLANA_RPC=https://api.devnet.solana.com
VITE_ACTION_BASE_URL=http://localhost:8787
```

**Server (server/.env)**:
```
PORT=8787
RPC_URL=https://api.devnet.solana.com
DONATION_ADDRESS=<YOUR_DEVNET_ADDRESS>
ACTION_BASE_URL=http://localhost:8787
```

## Technologies

- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Vitest** - Testing framework
- **Testing Library** - Component testing
- **Lucide React** - Icons
- **Express** - Action server
- **Solana Web3.js** - Blockchain integration
- **@solana/wallet-adapter** - Wallet integration