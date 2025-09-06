# Kards - Trello Clone

<p align="center">
  <img width="1521" height="575" alt="Kards App Screenshot" src="https://github.com/user-attachments/assets/5d1d97fb-6e49-4046-9e31-57c0a2262b41" />
</p>

## 📋 Project Overview

>>> Kards is a sophisticated web-based task management application built on the Kanban methodology. Developed with modern technologies, it offers an intuitive and highly productive experience for project organization and workflow management.

---

## ✨ Key Features

- Intuitive Drag-and-Drop Interface: Drag and drop cards between columns with visual feedback
- Multiple Project Boards: Organize different projects in separate boards
- Advanced Data Persistence: Auto-save system with localStorage backup
- Responsive & Accessible Design: Adaptive interface that works on desktop and mobile
- Elegant Dark Theme: Dark mode with carefully selected color palette
- Contextual Menu: Quick actions with right-click for efficient management
- Notification System: Alerts and confirmations for important actions
- Advanced Customization: CSS variables for complete appearance customization

## 🛠️ Tech Stack

- HTML5: Semantic and accessible structure
- CSS3: CSS variables, Flexbox, Grid, Animations and Transitions
- JavaScript ES6+: Modules, Classes, LocalStorage API
- Google Fonts: Be Vietnam Pro and Nunito for modern typography

---

## 📁 Project Structure

```
kards/
├── index.html          # Application entry point
├── style.css           # Design styles and variables
├── script.js           # Main application logic
├── components/         # Custom components (future)
├── assets/             # Images and icons
└── README.md           # Documentation
```

---

## 🚀 Quick Start

Prerequisites

Supported browsers:

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

Installation

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/kards.git
   cd kards
   ```
2. Optional npm installation (for development)
   ```bash
   npm install
   ```
3. Open the application
   - Open the index.html file in your browser
   · Or use a local server for development:
   ```bash
   # With Python
   python -m http.server 8000
   
   # With Node.js
   npx http-server
   ```

Quick Usage Guide

1. Create your first board:
   - Click the navigation menu (☰)
   - Enter a name in the "New Board" field
   - Click "+" or press Enter
2. Add cards:
   - Use the text field below the board title
   - Click "+" or press Enter to confirm
3. Manage tasks:
   - Click to mark/unmark tasks
   - Drag to reorganize items
   - Use the trash icon to delete

---

## ⚙️ Features

Board Management

- Creation and deletion of multiple boards
- Navigation between boards with state persistence
- Individual board customization

Card System

- Draggable cards between columns
- Inline editing of titles and descriptions
- One-click card duplication
- Context menu with quick actions

Task Management

- Marking tasks as completed
- Reordering via drag-and-drop
- Deletion with confirmation
- Customizable labels and metadata

Persistence System

- Configurable auto-save (default: 5 seconds)
- Manual backup on demand
- Data loss prevention with exit confirmation

User Interface

- Responsive design for all devices
- Dark theme with customizable CSS variables
- Smooth animations and transitions
- Visual feedback for all interactions

---

## 🔌 API & Data Structure

Main Object Structure

```javascript
{
  "boards": [
    {
      "id": "string",
      "name": "string",
      "settings": {
        "colorTheme": "string",
        "collapsed": "boolean"
      },
      "cards": [
        {
          "id": "string",
          "name": "string",
          "items": [
            {
              "id": "string",
              "title": "string",
              "description": "string",
              "isDone": "boolean",
              "labels": ["array"],
              "dueDate": "timestamp"
            }
          ]
        }
      ]
    }
  ],
  "currentBoard": "number",
  "settings": {
    "userName": "string",
    "defaultTheme": "string",
    "autoSave": "boolean",
    "dataPersistence": "boolean"
  },
  "identifier": "number"
}
```

System Events

Kards implements an event bus for component communication:

```javascript
// Publish event
eventBus.publish({
  type: 'ADD_CARD', 
  laneId: 'lane1', 
  card: {id: "C1", title: "New Task"}
});

// Supported event types
// ADD_CARD, UPDATE_CARD, REMOVE_CARD, MOVE_CARD
// ADD_LANE, UPDATE_LANE, REMOVE_LANE, MOVE_LANE
```

---

## 🎨 Customization

CSS Theme Variables

Customize Kards' appearance by modifying CSS variables:

```css
:root {
  --app-container: #0068FF;
  --main-color: #1f1c2e;
  --secondary-color: #4A4A4A;
  --link-color: #1f1c2e;
  --link-color-hover: #c3cff4;
  --link-color-active: #FFFFFF;
  --link-color-active-bg: #1f1c2e;
  --projects-section: #fff;
  --message-box-hover: #fafcff;
  --message-box-border: #e9ebf0;
  --more-list-bg: #161a1d;
  --more-list-bg-hover: #00FF68;
  --more-list-shadow: rgba(209, 209, 209, 0.4);
  --button-bg: #1f1c24;
  --search-area-bg: #fff;
  --star: #1ff1c2e;
  --message-btn: #fff;
}
```

Custom Components

Replace default components with custom implementations:

```javascript
const components = {
  GlobalStyle: CustomGlobalStyle,
  LaneHeader: CustomLaneHeader,
  Card: CustomCard,
  AddCardLink: CustomAddCardLink,
  NewCardForm: CustomNewCardForm,
  NewLaneForm: CustomNewLaneForm
};

// Initialize with custom components
const board = new Board({
  data,
  components,
  // ... other options
});
```

---

## 🧩 Development

Class Structure

```javascript
// Main application class
class KardsApp {
  constructor() {
    this.data = null;
    this.eventBus = new EventBus();
    this.components = {};
  }
  
  // Main methods
  init() {}
  loadData() {}
  saveData() {}
  render() {}
}

// Board management class
class BoardManager {
  createBoard() {}
  deleteBoard() {}
  switchBoard() {}
  updateBoard() {}
}

// Card management class
class CardManager {
  createCard() {}
  updateCard() {}
  deleteCard() {}
  moveCard() {}
}
```

Development Patterns

· Architecture: Component-based architecture
· State Management: Centralized state container
· Persistence: LocalStorage with serialization/deserialization
· Events: Pub/Sub pattern for component communication

---

## 🚀 Deployment

Production Deployment

1. Optimize assets:
   ```bash
   # Minify CSS
   npm install -g cssnano
   cssnano style.css style.min.css
   
   # Minify JavaScript
   npm install -g uglify-js
   uglifyjs script.js -o script.min.js -c -m
   ```
2. Replace in HTML:
   ```html
   <link rel="stylesheet" href="style.min.css">
   <script src="script.min.js"></script>
   ```
3. Deploy to your server:
   · All required files are contained in the project folder
   · No external dependencies beyond Google Fonts

