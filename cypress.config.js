const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const preprocessor = require('@badeball/cypress-cucumber-preprocessor');
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild');

const setupNodeEvents = async (on, config) => {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on(
    'file:preprocessor',
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    }),
  );
  return config;
};

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 5000,
  chromeWebSecurity: false,
  
  e2e: {
    testIsolation: false,
    hideXHRInCommandLog: true,
    setupNodeEvents,
    specPattern: '**/*.feature',
    baseUrl: 'https://cornerstone-light-demo.mybigcommerce.com',
    excludeSpecPattern: ['*.js'],
  },
});