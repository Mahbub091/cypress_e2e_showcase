// Import commands.js using ES2015 syntax:
import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')
require('cypress-xpath');
require('cy-verify-downloads').addCustomCommand();
import 'cypress-real-events/support';
