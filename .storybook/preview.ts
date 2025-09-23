import type { Preview } from '@storybook/react-vite'
import '../src/index.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    docs: {
      // Show code examples by default
      source: {
        type: 'dynamic',
        excludeDecorators: true,
      },
      // Show all stories in docs
      page: null,
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    },

    // Disable storybook tests to avoid conflicts
    test: {
      disable: true
    }
  },
};

export default preview;