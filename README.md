<h1 align="center">🗂️ Kards - Trello Clone</h1>


![Preview do Projeto](./Kards-Trello-clone/Screenshot.jpg)

<div align="center">

https://img.shields.io/badge/Version-1.5-blue https://img.shields.io/badge/Build-Passing-brightgreen https://img.shields.io/badge/License-MIT-green https://img.shields.io/badge/Dependencies-None-success https://img.shields.io/badge/Size-50KB-lightgrey https://img.shields.io/badge/Contributions-Welcome-brightgreen

A sophisticated, production-ready kanban board application for professional task management.

Live Demo | Report Bug | Request Feature

</div>

## 📋 Table of Contents

· Overview
· Key Features
· Quick Start
· Architecture
· Usage Guide
· API Reference
· Performance
· Browser Support
· Contributing
· License
· Support

---

## 🎯 Overview

Kards is an enterprise-grade kanban board application built with pure HTML5, CSS3, and vanilla JavaScript. Designed for professional task management, it offers a seamless Trello-like experience with zero dependencies, making it lightweight, fast, and secure.

Why Kards? - Unlike other kanban solutions, Kards is completely dependency-free, ensuring maximum performance, security, and ease of customization for development teams.

---

## ✨ Key Features

· Multi-Board System: Create and manage unlimited kanban boards with unique configurations
· Advanced Drag & Drop: Intuitive task management between cards with visual feedback
· Real-time Auto-save: Configurable data persistence with 5-second intervals
· Modern Dark UI: Professional interface with smooth animations and transitions
· Local Storage: Secure client-side data storage with no external dependencies
· Fully Responsive: Optimized experience across desktop and mobile devices
· Context Menus: Right-click operations for efficient workflow management
· Keyboard Shortcuts: Enhanced productivity with comprehensive key commands
· Customizable: Easy theming through CSS variables and modular architecture

---

## 🚀 Quick Start

Prerequisites

· Modern web browser (Chrome 60+, Firefox 55+, Safari 12+, Edge 79+)
· Local server for development (optional but recommended)

Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/kards.git
   cd kards
   ```
2. Serve locally using any HTTP server
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```
3. Open in browser Navigate to http://localhost:8000 in your preferred browser.

---

## 🏗️ Architecture

Core Components

Component Purpose Implementation
Board Management Multiple workspaces with unique configurations JavaScript Class-based system
Card System Flexible containers for task organization DOM manipulation with event delegation
Task Items Individual actionable items with completion tracking Custom data attributes and state management
Data Persistence Robust localStorage integration JSON serialization/deserialization

Technical Stack

· Frontend: Pure HTML5, CSS3, Vanilla ES6+
· Icons: Lucide Icons (SVG) for crisp rendering at any resolution
· Fonts: Google Fonts (Be Vietnam Pro, Nunito) for optimal readability
· Storage: Browser localStorage API with efficient data structures
· Build Process: Zero dependencies, no build process required

---

## 📋 Usage Guide

Basic Operations

1. Create Board: Click sidebar → "Add Board..."
2. Add Card: Use "Add Card..." input at bottom of interface
3. Create Tasks: Click "+" button in any card
4. Drag & Drop: Reorder tasks within/between cards
5. Edit Content: Click on any title to modify text
6. Mark Complete: Click task text to toggle completion status

Keyboard Shortcuts

Shortcut Action Description
Enter Confirm input/creation Applies to all input fields
Escape Cancel operations Closes modals and cancels edits
Click + Drag Move tasks/cards Intuitive drag and drop interface

Context Menu Operations

Right-click on any card to access powerful context menu options:

· Delete Card: Remove card and all its tasks (with confirmation)
· Clear Card: Remove all tasks from card while preserving the card itself
· Duplicate Card: Create identical copy with all tasks intact

---

## ⚙️ Configuration

Settings Panel

Access settings via the dropdown menu (⋮) in the header:

· Auto-save: Toggle automatic saving (5-second interval)
· Data Persistence: Enable/disable localStorage functionality
· Board Limits: Support for up to 512 individual boards

Customization

Theming can be customized by modifying CSS variables in the :root selector:

```css
:root {
  --app-container: #0068FF;
  --main-color: #1f1c2e;
  --secondary-color: #4A4A4A;
  --link-color: #1f1c2e;
  --link-color-hover: #c3cff4;
  --projects-section: #fff;
  --message-box-hover: #fafcff;
  /* Additional customizable variables... */
}
```

## 🔧 API Reference

Core Methods

```javascript
// Data management
saveData()          // Persist current state to localStorage
loadData()          // Initialize application from storage

// UI operations
renderBoard(board)  // Display specific board with all cards
createAlert(text)   // Show user notification with auto-dismiss
createConfirmDialog(text, callback) // Display confirmation modal
```

Event Handling

· Drag and drop operations: Full HTML5 Drag and Drop API implementation
· Context menu interactions: Custom right-click handling with prevention of browser defaults
· Keyboard events: Comprehensive keyboard support for accessibility
· Click handlers: Efficient event delegation for dynamic content

---

## 📊 Performance

Kards is meticulously optimized for performance:

· Efficient DOM updates: Minimal reflows and repaints through strategic rendering
· Memory management: Proper event listener cleanup and garbage collection
· Smooth animations: CSS transitions and transformations for 60fps performance
· Fast load times: Minimal bundle size (~50KB) with instant initialization

---

## 🚦 Browser Support

Browser Minimum Version Support Level
Chrome 60+ ✅ Fully Supported
Firefox 55+ ✅ Fully Supported
Safari 12+ ✅ Fully Supported
Edge 79+ ✅ Fully Supported

---
## 🤝 Contributing

We welcome contributions from the community! Please see our Contributing Guidelines for details.

1. Fork the repository
2. Create a feature branch (git checkout -b feature/amazing-feature)
3. Commit your changes (git commit -m 'Add amazing feature')
4. Push to the branch (git push origin feature/amazing-feature)
5. Open a Pull Request

Development Setup

```bash
# Install live server (optional)
npm install -g live-server

# Run development server
live-server --port=8000
```

---

## 🗺️ Roadmap

· Board exporting/importing functionality (JSON format)
· Advanced filtering and search across all boards
· Custom themes and styling options with theme editor
· Mobile application development with React Native
· Collaborative features with real-time synchronization
· Plugin system for extending functionality
· Integration API for third-party services
· Advanced analytics with productivity insights

---

Kards - Professional task management made simple. Built with modern web standards and attention to detail.

<div align="center">

Optimize your workflow with Kards

⬆ Back to Top

</div>
