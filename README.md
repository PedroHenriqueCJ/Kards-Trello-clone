Kards - Trello Clone

https://i.imgur.com/example-screenshot.png

<div align="center">

https://img.shields.io/badge/Version-1.5-blue https://img.shields.io/badge/Build-Passing-brightgreen https://img.shields.io/badge/License-MIT-green https://img.shields.io/badge/Dependencies-None-success https://img.shields.io/badge/Size-50KB-lightgrey

A sophisticated, production-ready kanban board application for professional task management.

Live Demo | Report Bug | Request Feature

</div>

📋 Table of Contents

· Overview
· Features
· Quick Start
· Architecture
· Usage
· API Reference
· Browser Support
· License

🎯 Overview

Kards is an enterprise-grade kanban board application built with pure HTML5, CSS3, and vanilla JavaScript. Designed for professional task management, it offers a seamless Trello-like experience with zero dependencies, making it lightweight, fast, and secure.

✨ Features

· Multi-Board System: Create and manage unlimited kanban boards
· Advanced Drag & Drop: Intuitive task management between cards
· Real-time Auto-save: Configurable data persistence
· Modern Dark UI: Professional interface with smooth animations
· Local Storage: Secure client-side data storage
· Responsive Design: Optimized for desktop and mobile
· Context Menus: Right-click operations for efficient workflow
· Keyboard Shortcuts: Enhanced productivity with key commands

🚀 Quick Start

Prerequisites

· Modern web browser (Chrome, Firefox, Safari, Edge)
· Local server for development (optional)

Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/kards.git
cd kards
```

1. Serve locally using any HTTP server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server

# Using PHP
php -S localhost:8000
```

1. Open http://localhost:8000 in your browser.

🏗️ Architecture

Core Components

Component Purpose
Board Management Multiple workspaces with unique configurations
Card System Flexible containers for task organization
Task Items Individual actionable items with completion tracking
Data Persistence Robust localStorage integration

Technical Stack

· Frontend: Pure HTML5, CSS3, Vanilla ES6+
· Icons: Lucide Icons (SVG)
· Fonts: Google Fonts (Be Vietnam Pro, Nunito)
· Storage: Browser localStorage API
· Build: Zero dependencies, no build process required

📋 Usage

Basic Operations

1. Create Board: Click sidebar → "Add Board..."
2. Add Card: Use "Add Card..." input at bottom of interface
3. Create Tasks: Click "+" button in any card
4. Drag & Drop: Reorder tasks within/between cards
5. Edit Content: Click on any title to modify text
6. Mark Complete: Click task text to toggle completion

Keyboard Shortcuts

Shortcut Action
Enter Confirm input/creation
Escape Cancel operations
Click + Drag Move tasks/cards

Context Menu Operations

Right-click on any card to access:

· Delete Card: Remove card and all its tasks
· Clear Card: Remove all tasks from card
· Duplicate Card: Create copy with all tasks

⚙️ Configuration

Settings Panel

Access settings via the dropdown menu (⋮) in the header:

· Auto-save: Toggle automatic saving (5s interval)
· Data Persistence: Enable/disable localStorage
· Board Limits: Support for up to 512 boards

Customization

Theming can be customized by modifying CSS variables:

```css
:root {
  --app-container: #0068FF;
  --main-color: #1f1c2e;
  --secondary-color: #4A4A4A;
  --link-color: #1f1c2e;
  --link-color-hover: #c3cff4;
  /* Additional variables... */
}
```

🔧 API Reference

Core Methods

```javascript
// Data management
saveData()          // Persist current state to localStorage
loadData()          // Initialize application from storage

// UI operations
renderBoard(board)  // Display specific board
createAlert(text)   // Show user notification
createConfirmDialog(text, callback) // Display confirmation modal
```

Event Handling

· Drag and drop operations
· Context menu interactions
· Keyboard events
· Click handlers for editing

📊 Performance

Kards is optimized for performance:

· Efficient DOM updates: Minimal reflows and repaints
· Memory management: Proper event listener cleanup
· Smooth animations: CSS transitions and transformations
· Fast load times: Minimal bundle size (~50KB)

🚦 Browser Support

Browser Minimum Version
Chrome 60+
Firefox 55+
Safari 12+
Edge 79+

📝 License

Distributed under the MIT License. See LICENSE for more information.

📞 Support

· Documentation: In-code comments and examples
· Issue Tracking: GitHub Issues
· Contributions: See CONTRIBUTING.md for guidelines

🗺️ Roadmap

· Board exporting/importing functionality
· Advanced filtering and search
· Custom themes and styling options
· Mobile application development
· Collaborative features

---

Kards - Professional task management made simple. Built with modern web standards and attention to detail.

<div align="center">

Optimize your workflow with Kards

</div>
