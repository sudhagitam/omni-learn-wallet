# OmniLearn & Family Suite - AI Agent Guidelines & Architecture Map

> **Token Optimization Rules**: AI assistants working on this repository MUST follow these guidelines to minimize context token usage and optimize execution speed.

## 📐 Project Architecture at a Glance
- **Framework**: Self-contained Single Page Application (Vanilla HTML5 / CSS3 Glassmorphism / Modern JS).
- **Primary Entry Point**: `index.html` (UI Views + State Management).
- **Test Suite**: `test_app.js` (Run `node test_app.js` to execute unit tests).
- **Target Repository**: `https://github.com/sudhagitam/omni-learn-wallet`

---

## 🗂️ Module Index & Responsibilities

| Module / View ID | Component Purpose | Dependencies |
| :--- | :--- | :--- |
| `#voice-view` | Hands-Free PDF & Document-to-Voice Driving Reader | Web Speech API (`window.speechSynthesis`) |
| `#sat-view` | Digital SAT Practice Quiz & Vocab Cards | College Board / Khan Academy Links |
| `#k12-view` | NCERT India & Florida B.E.S.T. Standards Reader | NCERT ePathshala & CPALMS Links |
| `#tech-view` | Adult Tech Code Playground (PyTorch, AWS, GCP, Java) | Copy-to-Clipboard API |
| `#expense-view` | Family Wallet & Live Exchange Rate Converter | `https://open.er-api.com/v6/latest/USD` |
| `#devotion-view` | Family Devotion & Telugu Christian Song Lyrics | Telugu Lyrics & Bible Gateway Portals |
| `#chores-view` | Family Chores, Allowance Gamification & Meals | Local State Storage |

---

## ⚡ Token-Saving Guidelines for AI Models

1. **Targeted Editing**:
   - When modifying a single tab, edit ONLY the target section instead of re-writing the entire codebase.
2. **Run Tests First**:
   - Run `node test_app.js` before making structural edits to ensure all 27 core DOM IDs and JS functions remain preserved.
3. **API Caching**:
   - Store API responses in `localStorage` or global memory (`globalLiveInrRate`) to prevent redundant network and token calls.
