<h1 align="center">🗂️ Kards - Trello Clone</h1>

<p align="center">
  <i>A lightweight, production-ready kanban board for professional task management.</i>
</p>

<p align="center">
  <img src="./Kards-Trello-clone/Screenshot.jpg" alt="Preview do Projeto" width="700"/>
</p>

<p align="center">
  <a href="https://img.shields.io/badge/Version-1.5-blue"><img src="https://img.shields.io/badge/Version-1.5-blue" alt="Version"></a>
  <a href="https://img.shields.io/badge/Build-Passing-brightgreen"><img src="https://img.shields.io/badge/Build-Passing-brightgreen" alt="Build Status"></a>
  <a href="https://img.shields.io/badge/License-MIT-green"><img src="https://img.shields.io/badge/License-MIT-green" alt="License"></a>
  <a href="https://img.shields.io/badge/Dependencies-None-success"><img src="https://img.shields.io/badge/Dependencies-None-success" alt="Dependencies"></a>
  <a href="https://img.shields.io/badge/Size-50KB-lightgrey"><img src="https://img.shields.io/badge/Size-50KB-lightgrey" alt="Size"></a>
  <a href="https://img.shields.io/badge/Contributions-Welcome-brightgreen"><img src="https://img.shields.io/badge/Contributions-Welcome-brightgreen" alt="Contributions"></a>
</p>

<p align="center">
  <a href="#demo">Live Demo</a> • 
  <a href="#report-bug">Report Bug</a> • 
  <a href="#request-feature">Request Feature</a>
</p>

---

## 📋 Table of Contents
- [Overview](#-overview)
- [Key Features](#-key-features)
- [Quick Start](#-quick-start)
- [Architecture](#-architecture)
- [Usage Guide](#-usage-guide)
- [Configuration](#-configuration)
- [API Reference](#-api-reference)
- [Performance](#-performance)
- [Browser Support](#-browser-support)
- [Contributing](#-contributing)
- [License](#-license)
- [Support](#-support)

---

## 🎯 Overview

Kards é um **kanban board enterprise-grade** construído com **HTML5, CSS3 e JavaScript puro**. Ideal para gerenciamento de tarefas profissional, ele oferece uma experiência **similar ao Trello**, porém **100% sem dependências**, garantindo performance máxima, segurança e personalização fácil.

> **Por que Kards?**  
> Diferente de outras soluções, Kards não depende de bibliotecas externas. É **leve, rápido e seguro**, perfeito para equipes de desenvolvimento que buscam **eficiência e customização total**.

---

## ✨ Key Features

- **Multi-Board System:** Crie e gerencie múltiplos boards com configurações únicas.
- **Advanced Drag & Drop:** Reorganize tarefas de forma intuitiva com feedback visual.
- **Real-time Auto-save:** Salve automaticamente os dados a cada 5 segundos.
- **Modern Dark UI:** Interface profissional com animações suaves.
- **Local Storage:** Armazenamento seguro no cliente, sem backend.
- **Fully Responsive:** Design otimizado para desktop e mobile.
- **Context Menus:** Operações rápidas com clique direito.
- **Keyboard Shortcuts:** Produtividade aprimorada com atalhos completos.
- **Customizable:** Personalize facilmente cores e layout via CSS variables.

---

## 🚀 Quick Start

**Prerequisites**

- Navegador moderno (Chrome 60+, Firefox 55+, Safari 12+, Edge 79+)
- Servidor local opcional (recomendado)

**Installation**

```bash
git clone https://github.com/yourusername/kards.git
cd kards

Serve localmente

# Python
python -m http.server 8000

# Node.js
npx http-server

# PHP
php -S localhost:8000

Abra http://localhost:8000 no navegador.


---

🏗️ Architecture

Component	Purpose	Implementation

Board Management	Múltiplos workspaces	Classes JavaScript
Card System	Contêiner flexível para tarefas	DOM + Event Delegation
Task Items	Tarefas individuais com status de conclusão	Atributos customizados + State
Data Persistence	Integração robusta com localStorage	JSON serialization/deserialization


Stack Técnica

Frontend: HTML5, CSS3, JavaScript ES6+

Ícones: Lucide Icons (SVG)

Fontes: Google Fonts (Be Vietnam Pro, Nunito)

Armazenamento: localStorage

Build: Zero dependências



---

📋 Usage Guide

Operações Básicas

1. Criar Board: Clique na sidebar → "Add Board..."


2. Adicionar Card: Input "Add Card..." no final da interface


3. Criar Tarefas: Clique no "+" dentro de qualquer card


4. Drag & Drop: Reordenar tarefas/cards


5. Editar Conteúdo: Clique no título para modificar


6. Marcar como Concluído: Clique no texto da tarefa



Atalhos de Teclado

Atalho	Ação

Enter	Confirmar criação/edição
Escape	Cancelar operação
Click+Drag	Mover tarefas/cards


Menu de Contexto (Clique Direito)

Delete Card: Remove card + tarefas

Clear Card: Remove todas tarefas mantendo o card

Duplicate Card: Cria cópia idêntica



---

⚙️ Configuration

Settings Panel

Acesse via dropdown (⋮) no header:

Auto-save: On/Off

Data Persistence: Ativar/Desativar

Board Limits: Até 512 boards


Customização via CSS

:root {
  --app-container: #0068FF;
  --main-color: #1f1c2e;
  --secondary-color: #4A4A4A;
  --link-color: #1f1c2e;
  --link-color-hover: #c3cff4;
  --projects-section: #fff;
  --message-box-hover: #fafcff;
}


---

🔧 API Reference

// Data
saveData()          // Salva estado atual no localStorage
loadData()          // Carrega estado do storage

// UI
renderBoard(board)  // Renderiza board específico
createAlert(text)   // Notificação com auto-dismiss
createConfirmDialog(text, callback) // Modal de confirmação

Eventos

Drag & Drop: HTML5 DnD API

Context Menu: Custom right-click

Keyboard: Full accessibility support

Click Handlers: Event delegation



---

📊 Performance

DOM eficiente: Minimiza reflows e repaints

Memory management: Cleanup de event listeners

Animações suaves: CSS transitions/transformations 60fps

Fast load: Bundle leve (~50KB)



---

🚦 Browser Support

Browser	Minimum Version	Support

Chrome	60+	✅ Fully Supported
Firefox	55+	✅ Fully Supported
Safari	12+	✅ Fully Supported
Edge	79+	✅ Fully Supported



---

🛠️ Contributing

Contribuições são bem-vindas!
Siga o padrão GitHub Fork → Branch → PR.


---

📄 License

MIT License © Pedro Henrique Cerqueira de Jesus


---

<div align="center">
⬆ Back to Top
</div>
```
