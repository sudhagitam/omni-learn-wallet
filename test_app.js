// Automated Unit & Integration Test Suite for OmniLearn App
const fs = require('fs');
const path = require('path');

console.log('=== RUNNING OMNILEARN APPLICATION UNIT TESTS ===\n');

const htmlPath = path.join(__dirname, 'index.html');
const html = fs.readFileSync(htmlPath, 'utf8');

let passCount = 0;
let failCount = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`[PASS] ${message}`);
    passCount++;
  } else {
    console.error(`[FAIL] ${message}`);
    failCount++;
  }
}

// Test 1: Check Navigation Tabs and View Sections Consistency
const requiredViews = [
  'voice-view',
  'sat-view',
  'k12-view',
  'tech-view',
  'expense-view',
  'devotion-view',
  'chores-view'
];

requiredViews.forEach(viewId => {
  assert(html.includes(`id="${viewId}"`), `View section #${viewId} exists in DOM`);
});

// Test 2: Check Navigation Buttons map to View IDs
const requiredTabs = [
  'tab-voice',
  'tab-sat',
  'tab-k12',
  'tab-tech',
  'tab-expense',
  'tab-devotion',
  'tab-chores'
];

requiredTabs.forEach(tabId => {
  assert(html.includes(`id="${tabId}"`), `Navigation button #${tabId} exists in DOM`);
});

// Test 3: Check Essential JS Functions
const requiredFunctions = [
  'switchView',
  'setRole',
  'toggleRoleModal',
  'toggleSpeech',
  'stopSpeech',
  'setSpeed',
  'loadAudioText',
  'convertCurrency',
  'checkAnswer'
];

requiredFunctions.forEach(fnName => {
  assert(html.includes(`function ${fnName}`), `JavaScript function ${fnName}() is defined`);
});

// Test 4: Check Currency Converter Inputs
assert(html.includes('id="usd-input"'), 'Currency converter input #usd-input exists');
assert(html.includes('id="inr-result"'), 'Currency result output #inr-result exists');

// Test 5: Check Role Switcher Elements
assert(html.includes('id="role-modal"'), 'Role switcher modal #role-modal exists');
assert(html.includes('id="current-user-badge"'), 'Header user badge #current-user-badge exists');

console.log(`\n=== TEST SUMMARY: ${passCount} Passed, ${failCount} Failed ===`);

if (failCount > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
