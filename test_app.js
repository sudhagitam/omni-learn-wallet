/**
 * Automated Unit Test Runner for OmniLearn & Family Suite
 * Asserts all 8 interactive workable modules, DOM elements, JS functions, inputs, and buttons.
 */

const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'index.html');
const htmlContent = fs.readFileSync(htmlPath, 'utf8');

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

console.log("=== RUNNING OMNILEARN APPLICATION UNIT TESTS ===");

// 1. Verify View Sections Exist in DOM
assert(htmlContent.includes('id="locker-view"'), "View section #locker-view exists in DOM");
assert(htmlContent.includes('id="voice-view"'), "View section #voice-view exists in DOM");
assert(htmlContent.includes('id="sat-view"'), "View section #sat-view exists in DOM");
assert(htmlContent.includes('id="k12-view"'), "View section #k12-view exists in DOM");
assert(htmlContent.includes('id="tech-view"'), "View section #tech-view exists in DOM");
assert(htmlContent.includes('id="expense-view"'), "View section #expense-view exists in DOM");
assert(htmlContent.includes('id="devotion-view"'), "View section #devotion-view exists in DOM");
assert(htmlContent.includes('id="chores-view"'), "View section #chores-view exists in DOM");

// 2. Verify Navigation Buttons Exist
assert(htmlContent.includes('id="tab-locker"'), "Navigation button #tab-locker exists in DOM");
assert(htmlContent.includes('id="tab-voice"'), "Navigation button #tab-voice exists in DOM");
assert(htmlContent.includes('id="tab-sat"'), "Navigation button #tab-sat exists in DOM");
assert(htmlContent.includes('id="tab-k12"'), "Navigation button #tab-k12 exists in DOM");
assert(htmlContent.includes('id="tab-tech"'), "Navigation button #tab-tech exists in DOM");
assert(htmlContent.includes('id="tab-expense"'), "Navigation button #tab-expense exists in DOM");
assert(htmlContent.includes('id="tab-devotion"'), "Navigation button #tab-devotion exists in DOM");
assert(htmlContent.includes('id="tab-chores"'), "Navigation button #tab-chores exists in DOM");

// 3. Verify Module-Specific Interactive Elements
assert(htmlContent.includes('id="gdrive-folder-status"'), "Locker Google Drive status badge exists");
assert(htmlContent.includes('id="sat-score-count"'), "SAT Practice Score counter #sat-score-count exists");
assert(htmlContent.includes('id="pdf-file-input"'), "PDF Driving Voice file input #pdf-file-input exists");
assert(htmlContent.includes('id="usd-input"'), "Currency converter input #usd-input exists");
assert(htmlContent.includes('id="inr-result"'), "Currency result output #inr-result exists");
assert(htmlContent.includes('id="locker-search-input"'), "Locker search input #locker-search-input exists");
assert(htmlContent.includes('id="role-modal"'), "Role switcher modal #role-modal exists");

// 4. Verify Essential JavaScript Scope Functions
assert(htmlContent.includes('function switchView('), "JavaScript function switchView() is defined");
assert(htmlContent.includes('function setRole('), "JavaScript function setRole() is defined");
assert(htmlContent.includes('function saveToGoogleDrive('), "JavaScript function saveToGoogleDrive() is defined");
assert(htmlContent.includes('function syncAllDocsToGoogleDrive('), "JavaScript function syncAllDocsToGoogleDrive() is defined");
assert(htmlContent.includes('function toggleSpeech('), "JavaScript function toggleSpeech() is defined");
assert(htmlContent.includes('function checkSatAnswer('), "JavaScript function checkSatAnswer() is defined");
assert(htmlContent.includes('function convertCurrency('), "JavaScript function convertCurrency() is defined");
assert(htmlContent.includes('function fetchLiveCurrencyRate('), "JavaScript function fetchLiveCurrencyRate() is defined");

console.log(`\n=== TEST SUMMARY: ${passCount} Passed, ${failCount} Failed ===\n`);

if (failCount > 0) {
  process.exit(1);
}
