import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'nx run event-planning-front:serve',
        production: 'nx run event-planning-front:preview',
      },
      ciWebServerCommand: 'nx run event-planning-front:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
