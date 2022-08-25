// Import commands.js using ES2015 syntax:
import './commands';
import "cypress-real-events/support";

// Alternatively you can use CommonJS syntax:
// require('./commands')
require('cypress-xpath');
require('cy-verify-downloads').addCustomCommand();

