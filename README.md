<h1 align="center"> Kards - Trello Clone</h1>

https://img.shields.io/badge/Kards-v1.5-0068FF?style=for-the-badge&logo=trello&logoColor=white https://img.shields.io/badge/Licença-MIT-green?style=for-the-badge https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge&logo=javascript https://img.shields.io/badge/Persistência-LocalStorage-blue?style=for-the-badge&logo=html5

## 📋 Visão Geral do Projeto

Kards é uma aplicação web sofisticada para gerenciamento de tarefas baseada na metodologia Kanban. Desenvolvida com tecnologias modernas, oferece uma experiência intuitiva e altamente produtiva para organização de projetos e fluxos de trabalho.

---

## ✨ Características Principais

· Interface Drag-and-Drop Intuitiva: Arraste e solte cartões entre colunas com feedback visual
· Múltiplos Quadros de Projeto: Organize diferentes projetos em quadros separados
· Persistência de Dados Avançada: Sistema de auto-save com backup no localStorage
· Design Responsivo e Acessível: Interface adaptável que funciona em desktop e mobile
· Tema Escuro Elegante: Modo escuro com paleta de cores cuidadosamente selecionada
· Menu Contextual Contextual: Ações rápidas com clique direito para gestão eficiente
· Sistema de Notificações: Alertas e confirmações para ações importantes
· Personalização Avançada: Variáveis CSS para customização completa da aparência




## Pré-requisitos

Navegadores suportados:

· Chrome 60+
· Firefox 55+
· Safari 12+
· Edge 79+

Instalação

1. Clone o repositório
   ```bash
   git clone https://github.com/seu-usuario/kards.git
   cd kards
   ```
2. Instalação com npm (opcional para desenvolvimento)
   ```bash
   npm install
   ```
3. Abrir a aplicação
   · Abra o arquivo index.html em seu navegador
   · Ou utilize um servidor local para desenvolvimento:
   ```bash
   # Com Python
   python -m http.server 8000
   
   # Com Node.js
   npx http-server
   ```

## Utilização Rápida

1. Criar seu primeiro quadro:
   · Clique no menu de navegação (☰)
   · Insira um nome no campo "Novo Quadro"
   · Clique em "+" ou pressione Enter
2. Adicionar cartões:
   · Use o campo de texto abaixo do título do quadro
   · Clique em "+" ou pressione Enter para confirmar
3. Gerenciar tarefas:
   · Clique para marcar/desmarcar tarefas
   · Arraste para reorganizar itens
   · Use o ícone de lixeira para excluir

---

## 🛠️ Tecnologias Utilizadas

· HTML5: Estrutura semântica e acessível
· CSS3: Variáveis CSS, Flexbox, Grid, Animações e Transições
· JavaScript ES6+: Módulos, Classes, LocalStorage API
· Google Fonts: Be Vietnam Pro e Nunito para tipografia moderna

---

## 📁 Estrutura do Projeto

```
kards/
├── index.html          # Ponto de entrada da aplicação
├── style.css           # Estilos e variáveis de design
├── script.js           # Lógica principal da aplicação
├── components/         # Componentes personalizados (futuro)
├── assets/             # Imagens e ícones
└── README.md           # Documentação
```
---

## ⚙️ Funcionalidades

Gestão de Quadros

· Criação e exclusão de quadros múltiplos
· Navegação entre quadros com persistência de estado
· Personalização de quadros individuais

Sistema de Cartões

· Cartões arrastáveis entre colunas
· Edição inline de títulos e descrições
· Duplicação de cartões com um clique
· Menu contextual com ações rápidas

Gestão de Tarefas

· Marcação de tarefas como concluídas
· Reordenamento por drag-and-drop
· Exclusão com confirmação
· Labels e metadados personalizáveis

Sistema de Persistência

· Auto-save configurável (padrão: 5 segundos)
· Backup manual sob demanda
· Prevenção de perda de dados com confirmação de saída

Interface de Usuário

· Design responsivo para todos os dispositivos
· Tema escuro com variáveis CSS customizáveis
· Animações e transições suaves
· Feedback visual para todas as interações

---

## 🔌 API e Estrutura de Dados

Estrutura do Objeto Principal

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

Eventos do Sistema

O Kards implementa um barramento de eventos para comunicação entre componentes:

```javascript
// Publicar evento
eventBus.publish({
  type: 'ADD_CARD', 
  laneId: 'lane1', 
  card: {id: "C1", title: "Nova Tarefa"}
});

// Tipos de eventos suportados
// ADD_CARD, UPDATE_CARD, REMOVE_CARD, MOVE_CARD
// ADD_LANE, UPDATE_LANE, REMOVE_LANE, MOVE_LANE
```

---

## 🎨 Personalização

Variáveis de Tema CSS

Personalize a aparência do Kards modificando as variáveis CSS:

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

Componentes Customizáveis

Substitua componentes padrão por implementações personalizadas:

```javascript
const components = {
  GlobalStyle: CustomGlobalStyle,
  LaneHeader: CustomLaneHeader,
  Card: CustomCard,
  AddCardLink: CustomAddCardLink,
  NewCardForm: CustomNewCardForm,
  NewLaneForm: CustomNewLaneForm
};

// Inicializar com componentes customizados
const board = new Board({
  data,
  components,
  // ... outras opções
});
```

---

## 🧩 Desenvolvimento

Estrutura de Classes

```javascript
// Classe principal do aplicativo
class KardsApp {
  constructor() {
    this.data = null;
    this.eventBus = new EventBus();
    this.components = {};
  }
  
  // Métodos principais
  init() {}
  loadData() {}
  saveData() {}
  render() {}
}

// Classe para gestão de quadros
class BoardManager {
  createBoard() {}
  deleteBoard() {}
  switchBoard() {}
  updateBoard() {}
}

// Classe para gestão de cartões
class CardManager {
  createCard() {}
  updateCard() {}
  deleteCard() {}
  moveCard() {}
}
```

Padrões de Desenvolvimento

· Arquitetura: Component-based architecture
· Gerenciamento de Estado: Centralized state container
· Persistência: LocalStorage with serialization/deserialization
· Eventos: Pub/Sub pattern for component communication

--- 

## 🚀 Deploy

Deploy em Produção

1. Otimize os assets:
   ```bash
   # Minificar CSS
   npm install -g cssnano
   cssnano style.css style.min.css
   
   # Minificar JavaScript
   npm install -g uglify-js
   uglifyjs script.js -o script.min.js -c -m
   ```
2. Substitua no HTML:
   ```html
   <link rel="stylesheet" href="style.min.css">
   <script src="script.min.js"></script>
   ```
3. Implante em seu servidor:
   · Todos os arquivos necessários estão contidos na pasta do projeto
   · Não há dependências externas além das fonts do Google
