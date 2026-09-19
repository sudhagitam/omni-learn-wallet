/**
 * Granular Unit Test Suite for OmniLearn & Family Suite
 * Tests every single module (1 through 8) + RBAC Security System
 */

const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'index.html');
const htmlContent = fs.readFileSync(htmlPath, 'utf8');

let passCount = 0;
let failCount = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  [PASS] ${message}`);
    passCount++;
  } else {
    console.error(`  [FAIL] ${message}`);
    failCount++;
  }
}

console.log("\n========================================================");
console.log("=== OMNILEARN FULL GRANULAR MODULE UNIT TEST SUITE ===");
console.log("========================================================\n");

// ---------------------------------------------------------
// MODULE 1: SECURE FAMILY DOCUMENT LOCKER & GOOGLE DRIVE
// ---------------------------------------------------------
console.log("--- MODULE 1: Family Document Locker & Google Drive ---");
assert(htmlContent.includes('id="locker-view"'), "#locker-view container section exists");
assert(htmlContent.includes('id="tab-locker"'), "#tab-locker navigation button exists");
assert(htmlContent.includes('id="gdrive-folder-status"'), "#gdrive-folder-status cloud badge exists");
assert(htmlContent.includes('id="locker-search-input"'), "#locker-search-input search box exists");
assert(htmlContent.includes('id="locker-file-input"'), "#locker-file-input upload input exists");
assert(htmlContent.includes('function saveToGoogleDrive('), "saveToGoogleDrive() JS function defined");
assert(htmlContent.includes('function syncAllDocsToGoogleDrive('), "syncAllDocsToGoogleDrive() JS function defined");
assert(htmlContent.includes('function handleLockerUpload('), "handleLockerUpload() JS function defined");
assert(htmlContent.includes('function filterLockerDocs('), "filterLockerDocs() JS function defined");

// ---------------------------------------------------------
// MODULE 2: DIGITAL SAT PREPARATION & INBUILT PRACTICE EXAMS
// ---------------------------------------------------------
console.log("\n--- MODULE 2: Digital SAT Prep & Inbuilt Practice Tests ---");
assert(htmlContent.includes('id="sat-view"'), "#sat-view container section exists");
assert(htmlContent.includes('id="tab-sat"'), "#tab-sat navigation button exists");
assert(htmlContent.includes('id="sat-score-count"'), "#sat-score-count live score counter exists");
assert(htmlContent.includes('class="quiz-card sat-cat-card math-algebra"'), "SAT practice question card exists");
assert(htmlContent.includes('id="q1-exp"'), "#q1-exp Desmos explanation container exists");
assert(htmlContent.includes('function switchSatCategory('), "switchSatCategory() JS function defined");
assert(htmlContent.includes('function checkSatAnswer('), "checkSatAnswer() JS function defined");
assert(htmlContent.includes('function resetSatScore('), "resetSatScore() JS function defined");

// ---------------------------------------------------------
// MODULE 3: K-12 SCHOOL LEARNING COMPANION
// ---------------------------------------------------------
console.log("\n--- MODULE 3: K-12 School Learning Companion ---");
assert(htmlContent.includes('id="k12-view"'), "#k12-view container section exists");
assert(htmlContent.includes('id="tab-k12"'), "#tab-k12 navigation button exists");
assert(htmlContent.includes('NCERT Grade 6 Science Chapter Summary'), "NCERT Grade 6 Science summary exists");
assert(htmlContent.includes('https://epathshala.nic.in/'), "NCERT ePathshala official portal link exists");
assert(htmlContent.includes('https://www.cpalms.org/'), "Florida CPALMS official portal link exists");

// ---------------------------------------------------------
// MODULE 4: ADULT TECH & CLOUD ENGINEER ACADEMY
// ---------------------------------------------------------
console.log("\n--- MODULE 4: Adult Tech & Cloud Code Lab ---");
assert(htmlContent.includes('id="tech-view"'), "#tech-view container section exists");
assert(htmlContent.includes('id="tab-tech"'), "#tab-tech navigation button exists");
assert(htmlContent.includes('class="code-box"'), "PyTorch interactive code box exists");
assert(htmlContent.includes('Copy PyTorch Script'), "One-Click Copy PyTorch script button exists");
assert(htmlContent.includes('https://pytorch.org/docs/'), "PyTorch Official Documentation link exists");
assert(htmlContent.includes('https://aws.amazon.com/documentation/'), "AWS Cloud Architecture Hub link exists");

// ---------------------------------------------------------
// MODULE 5: FAMILY DEVOTION & TELUGU CHRISTIAN SONGS
// ---------------------------------------------------------
console.log("\n--- MODULE 5: Family Devotion & Telugu Song Lyrics ---");
assert(htmlContent.includes('id="devotion-view"'), "#devotion-view container section exists");
assert(htmlContent.includes('id="tab-devotion"'), "#tab-devotion navigation button exists");
assert(htmlContent.includes('Psalm 23:1'), "Daily scripture verse (Psalm 23:1) exists");
assert(htmlContent.includes('q=telugu+christian+songs+lyrics'), "Telugu Christian Songs Lyrics verified portal link exists");
assert(htmlContent.includes('q=andhra+christian+keerthanalu+lyrics'), "Andhra Christian Keerthanalu verified portal link exists");

// ---------------------------------------------------------
// MODULE 6: HANDS-FREE PDF DRIVING VOICE READER
// ---------------------------------------------------------
console.log("\n--- MODULE 6: Hands-Free PDF Driving Audio Reader ---");
assert(htmlContent.includes('id="voice-view"'), "#voice-view container section exists");
assert(htmlContent.includes('id="tab-voice"'), "#tab-voice navigation button exists");
assert(htmlContent.includes('id="audio-title"'), "#audio-title heading exists");
assert(htmlContent.includes('id="audio-status"'), "#audio-status label exists");
assert(htmlContent.includes('id="play-icon"'), "#play-icon audio player icon exists");
assert(htmlContent.includes('id="pdf-file-input"'), "#pdf-file-input document loader exists");
assert(htmlContent.includes('function toggleSpeech('), "toggleSpeech() Web Speech API function defined");
assert(htmlContent.includes('function stopSpeech('), "stopSpeech() JS function defined");

// ---------------------------------------------------------
// MODULE 7: FAMILY WALLET & LIVE EXCHANGE API
// ---------------------------------------------------------
console.log("\n--- MODULE 7: Family Wallet & Live Exchange API ---");
assert(htmlContent.includes('id="expense-view"'), "#expense-view container section exists");
assert(htmlContent.includes('id="tab-expense"'), "#tab-expense navigation button exists");
assert(htmlContent.includes('id="usd-input"'), "#usd-input USD currency input exists");
assert(htmlContent.includes('id="inr-result"'), "#inr-result INR converted result exists");
assert(htmlContent.includes('function convertCurrency('), "convertCurrency() JS function defined");
assert(htmlContent.includes('function fetchLiveCurrencyRate('), "fetchLiveCurrencyRate() API function defined");

// ---------------------------------------------------------
// MODULE 8: FAMILY CHORES & TASK TRACKER
// ---------------------------------------------------------
console.log("\n--- MODULE 8: Family Chores & Task Tracker ---");
assert(htmlContent.includes('id="chores-view"'), "#chores-view container section exists");
assert(htmlContent.includes('id="tab-chores"'), "#tab-chores navigation button exists");
assert(htmlContent.includes('Today\'s Family Tasks'), "Today's Family Tasks header exists");

// ---------------------------------------------------------
// GLOBAL SYSTEM SUITE: RBAC SECURITY & ROLE SWITCHER
// ---------------------------------------------------------
console.log("\n--- GLOBAL SYSTEM: RBAC Security & Profile Switcher ---");
assert(htmlContent.includes('id="role-modal"'), "#role-modal switcher modal exists");
assert(htmlContent.includes('id="current-user-badge"'), "#current-user-badge header badge exists");
assert(htmlContent.includes('id="current-user-name"'), "#current-user-name profile label exists");
assert(htmlContent.includes('function setRole('), "setRole() RBAC security function defined");
assert(htmlContent.includes('function toggleRoleModal('), "toggleRoleModal() JS function defined");
assert(htmlContent.includes('function switchView('), "switchView() tab navigation function defined");

console.log("\n========================================================");
console.log(`=== TEST SUMMARY: ${passCount} Passed, ${failCount} Failed ===`);
console.log("========================================================\n");

if (failCount > 0) {
  process.exit(1);
}
