"use strict";

console.log("╦╔═┌─┐┬─┐┌┬┐┌─┐");
console.log("╠╩╗├─┤├┬┘ ││└─┐");
console.log("╩ ╩┴ ┴┴└──┴┘└─┘");
console.log("Alan | V1.5 2021");

/* <=================================== Elements / Variables ===================================> */
const e_mainContainer = document.getElementById('main-container');
const e_cardsContainer = document.getElementById('cards-container');

const e_sidebar = document.getElementById('sidebar');
const e_sidebarButton = document.getElementById('sidebar-button');
const e_sidebarClose = document.getElementById('sidebar-close');

const e_addCardText = document.getElementById('add-card-text');
const e_addCardButton = document.getElementById('add-card-button');

const e_boardsList = document.getElementById('boards-list');
const e_addBoardText = document.getElementById('add-board-text');
const e_addBoardButton = document.getElementById('add-board-button');

const e_autoSaveButton = document.getElementById('auto-save');
const e_saveButton = document.getElementById('save-button');
const e_settingsButton = document.getElementById('settings-button');
const e_deleteButton = document.getElementById('delete-button');

const e_cardContextMenu = document.getElementById('card-context-menu');
const e_cardContextMenuDelete = document.getElementById('card-context-menu-delete');
const e_cardContextMenuClear = document.getElementById('card-context-menu-clear');
const e_cardContextMenuDuplicate = document.getElementById('card-context-menu-duplicate');

const e_alerts = document.getElementById('alerts');

const e_title = document.getElementById('title');

// Auto save enabled as default
let autoSaveInternalId = setInterval(function (){
    saveData();
}, 5000);

var appData = {
    'boards': [],
    'settings': {
        'userName': "User",
        //[not yet] 'defaultTheme': "blue",
        'dataPersistence': true
    },
    'currentBoard': 0,  // The index of the currently open board.
    'identifier': 0
};

function currentCards() {
    return appData.boards[appData.currentBoard].cards;
}

function currentBoard() {
    return appData.boards[appData.currentBoard];
}

/* <=================================== Extensions ===================================> */
Array.prototype.move = function(from, to) {
    /* Move an item from the array to a specific index of the array. */

    this.splice(to, 0, this.splice(from, 1)[0]);
};

Array.prototype.insert = function(index, item) {
    /* Insert an item to a specific index of the array. */

    this.splice( index, 0, item );
};

/* <=================================== Utility Functions ===================================> */
function uniqueID() {
    appData.identifier += 1;
    return 'b' + appData.identifier;
}

function getMouseOverCard() {
    // The card the mouse cursor is currently over.
    return document.querySelectorAll('.parent-card:hover')[0];
}

function getMouseOverItem() {
    // The task the mouse cursor is currently over.
    return document.querySelectorAll('.parent-card > ul > li:hover')[0];
}

function getItemFromElement(element) {
    /* Get an Item object from a list item element. */

    for (let _card of currentCards()) {
        for (let _item of _card.items) {
            if (_item.id === element.id) {
                return _item;
            }
        }
    }
}

function getCardFromElement(element) {
    /* Get a Card object from a card div element. */

    return currentCards().find(e => e.id === element.id);
}

function getBoardFromId(id) {
    /* Get a board object from its unique id. */

    return appData.boards.find(_b => _b.id === id);
}

function listBoards() {
    /* List all the boards in the sidebar. */

    e_boardsList.innerHTML = '';
    for (let _board of appData.boards) {
        let _boardTitle = document.createElement('li');
        _boardTitle.innerText = _board.name;
        _boardTitle.id = _board.id;
        if (_board.id === currentBoard().id) _boardTitle.classList.add('is-active');
        _boardTitle.addEventListener('click', () => {
            renderBoard(_board);
            listBoards();
        });
        e_boardsList.appendChild(_boardTitle);
    }
}

function renderBoard(board) {
    appData.currentBoard = appData.boards.indexOf(board);
    document.title = 'Kards | ' + currentBoard().name;
    e_title.innerText = currentBoard().name;
    renderAllCards();
}

function renderAllCards() {
    /* Refreshes the whole cards container. */

    for (let _card of e_cardsContainer.querySelectorAll('.parent-card')) {
        // Remove all the cards from the cards container.
        _card.remove();
    }

    for (let _card of currentCards()) {
        // Regenerate each card.
        let _generated = _card.generateElement();
        // Put them in the container right before the last child (text box for new card).
        e_cardsContainer.insertBefore(_generated, e_cardsContainer.childNodes[e_cardsContainer.childNodes.length - 2]);
        // Update the card for event listeners and etc...
        _card.update();
    }
}

function renderCard(cardID) {
    let _card = currentCards().find(e => e.id === cardID);

    if (!_card) {
        // If card no longer exists in data. (ie: deleted but still rendered in DOM)
        // Remove it from the DOM
        let _currentCardElement = document.getElementById(cardID);
        if (_currentCardElement) {
            _currentCardElement.parentNode.removeChild(_currentCardElement);
        }
        return;
    }

    // Get current card element if it exists.
    let _currentCardElement = document.getElementById(_card.id);
    if (_currentCardElement != null) {
        let _generated = _card.generateElement();
        // Replace the card from the container.
        _currentCardElement.parentNode.replaceChild(_generated, _currentCardElement);
    } else {
        let _generated = _card.generateElement();
        // Put them in the container right before the last child (text box for new card).
        e_cardsContainer.insertBefore(_generated, e_cardsContainer.childNodes[e_cardsContainer.childNodes.length - 2]);
    }

    // Update the event listeners.
    _card.update();
}

function toggleHoverStyle(show) {
    /* Sets whether hovering over cards/items changes their colors or not. */

    if (show) {
        // Create a new style element.
        let _hoverStyle = document.createElement('style');
        _hoverStyle.id = "dragHover";

        // Card and item should turn slightly darker when move over.
        // This gives a visual feedback that makes it easier for the user to know positions during drag and drop.
        _hoverStyle.innerHTML = ".parent-card:hover {background-color: #c7cbd1;}.parent-card > ul > li:hover {background-color: #d1d1d1;}";
        document.body.appendChild(_hoverStyle);
    } else {
        // Get rid of the style element.
        // This effectively prevents the elements from turning darker on hover.
        let _hoverStyle = document.getElementById('dragHover');
        if (_hoverStyle) {
            _hoverStyle.parentNode.removeChild(_hoverStyle);
        }
    }
}

function addBoard() {
    /* Adds a new board based on the input in the sidebar. */

    let _boardTitle = e_addBoardText.value;
    if (!_boardTitle) return createAlert("Type a name for the board!");  // We don't create a board if it has no name.
    if (appData.boards.length >= 512) return createAlert("Max limit for boards reached.")  // or if there are already too many boards
    e_addBoardText.value = '';

    let _newBoard = new Board(_boardTitle, uniqueID(), {'theme': null});
    appData.boards.push(_newBoard);
    listBoards();
}

/* <=================================== Classes ===================================> */
class Item {
    constructor(title, description=null, id, parentCardId) {
        this.title = title;
        this.description = description;
        this.id = id;
        this.isDone = false;
        this.parentCardId = parentCardId;
    }

    getParentCard() {
        return document.getElementById(this.parentCardId);
    }

    check(chk=true) {
        this.isDone = chk;
        let element = document.getElementById(this.id);
        if (element) {
            if (chk) {
                element.style.textDecoration = 'line-through';
            } else {
                element.style.textDecoration = 'none';
            }
        }
    }

    // DRAG AND DROP METHODS
    handleDragStart(e) {
        // Não iniciar drag se o clique foi em um ícone de ação
        if (e.target.closest('.item-actions') || 
            e.target.tagName === 'svg' || 
            e.target.tagName === 'path') {
            e.preventDefault();
            return false;
        }
        
        e.dataTransfer.setData('text/plain', this.id);
        e.target.classList.add('dragging');
        toggleHoverStyle(true);
    }

    handleDragOver(e) {
        e.preventDefault();
        const draggingElement = document.querySelector('.dragging');
        if (draggingElement && e.target.tagName === 'LI' && e.target !== draggingElement) {
            const rect = e.target.getBoundingClientRect();
            const nextElement = (e.clientY - rect.top) / rect.height > 0.5 ? e.target.nextElementSibling : e.target;
            e.target.closest('ul').insertBefore(draggingElement, nextElement);
        }
    }

    handleDragEnd(e) {
        e.target.classList.remove('dragging');
        toggleHoverStyle(false);
        
        // Update the actual data structure
        const draggedId = e.dataTransfer.getData('text/plain');
        const draggedElement = document.getElementById(draggedId);
        if (!draggedElement) return;
        
        const draggedItem = getItemFromElement(draggedElement);
        const targetCardElement = draggedElement.closest('.parent-card');
        if (!targetCardElement) return;
        
        const targetCard = getCardFromElement(targetCardElement);
        if (draggedItem && targetCard) {
            // Remove from old position
            const oldCard = getCardFromElement(draggedItem.getParentCard());
            if (oldCard) {
                const oldIndex = oldCard.items.findIndex(item => item.id === draggedId);
                if (oldIndex !== -1) {
                    oldCard.items.splice(oldIndex, 1);
                }
            }
            
            // Add to new position
            const newIndex = Array.from(targetCardElement.querySelector('ul').children).indexOf(draggedElement);
            targetCard.items.splice(newIndex, 0, draggedItem);
            draggedItem.parentCardId = targetCard.id;
            
            // Re-render both cards if they're different
            if (oldCard && oldCard.id !== targetCard.id) {
                renderCard(oldCard.id);
            }
            renderCard(targetCard.id);
        }
    }

    update() {
        let _element = document.getElementById(this.id);
        if (!_element) return;

        // Remove old event listeners by cloning
        const newElement = _element.cloneNode(true);
        _element.parentNode.replaceChild(newElement, _element);
        _element = document.getElementById(this.id);

        // Adicione classe para identificar os botões de ação
        const actionButtons = _element.querySelectorAll('span');
        actionButtons.forEach(button => {
            button.classList.add('item-actions');
        });

        const titleElement = _element.querySelector('p.item-title');
        if (titleElement) {
            titleElement.addEventListener('click', (e) => {
                e.stopPropagation();
                if (this.isDone) {
                    this.check(false);
                } else {
                    this.check(true);
                }
            });
        }

        // Encontre e adicione event listeners aos botões
        const editButton = _element.querySelector('span:first-child');
        const deleteButton = _element.querySelector('span:last-child');
        
        if (editButton) {
            editButton.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                
                let _input = document.createElement('textarea');
                _input.value = titleElement.textContent;
                _input.classList.add('item-title');
                _input.maxLength = 256;
                titleElement.replaceWith(_input);

                let _save = () => {
                    this.title = _input.value;
                    renderCard(this.parentCardId);
                };

                _input.addEventListener('blur', _save, { once: true });
                _input.focus();
            });
        }
        
        if (deleteButton) {
            deleteButton.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                const parentCard = getCardFromElement(this.getParentCard());
                createConfirmDialog("Are you sure to delete this task?", () => parentCard.removeItem(this));
            });
        }

        // Add drag and drop events
        _element.draggable = true;
        _element.addEventListener('dragstart', this.handleDragStart.bind(this));
        _element.addEventListener('dragover', this.handleDragOver.bind(this));
        _element.addEventListener('dragend', this.handleDragEnd.bind(this));

        this.check(this.isDone);
    }
}

class Card {
    constructor(name, id, parentBoardId) {
        this.name = name;
        this.items = [];
        this.id = id;
        this.parentBoardId = parentBoardId;
    }

    addItem(item) {
        this.items.push(item);
        renderCard(this.id);
    }

    removeItem(item) {
        this.items = this.items.filter(val => val !== item);
        renderCard(this.id);
    }

    update() {
        for (let _item of this.items) {
            _item.update();
        }
    }

    renderItems() {
        let _newItemList = document.createElement('ul');
        _newItemList.id = this.id + '-ul';
        for (let _item of this.items) {
            let _newItem = document.createElement('li');
            _newItem.id = _item.id;
            _newItem.draggable = true;
            
            // Item Title
            let _newItemTitle = document.createElement('p');
            _newItemTitle.innerText = _item.title;
            _newItemTitle.classList.add('item-title', 'text-fix', 'unselectable');
            
            // Housing for the edit and delete buttons.
            let _newItemButtons = document.createElement('span');
            _newItemButtons.classList.add('item-actions'); // Adicione esta classe

            // Edit button. Allows the user to rename the item.
            let _newItemEditButton = document.createElement('span');
            _newItemEditButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>`;
            _newItemEditButton.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                
                let _input = document.createElement('textarea');
                _input.value = _newItemTitle.textContent;
                _input.classList.add('item-title');
                _input.maxLength = 256;
                _newItemTitle.replaceWith(_input);

                let _save = () => {
                    _item.title = _input.value;
                    renderCard(this.id);
                };

                _input.addEventListener('blur', _save, { once: true });
                _input.focus();
            });

            // Delete button. Allows the user to delete the item from the card.
            let _newItemDeleteButton = document.createElement('span');
            _newItemDeleteButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>`;
            _newItemDeleteButton.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                createConfirmDialog("Are you sure to delete this task?", () => this.removeItem(_item));
            });

            // Add both the buttons to the span tag.
            _newItemButtons.appendChild(_newItemEditButton);
            _newItemButtons.appendChild(_newItemDeleteButton);

            // Add the title, span tag to the item and the item itself to the list.
            _newItem.appendChild(_newItemTitle);
            _newItem.appendChild(_newItemButtons);
            _newItemList.appendChild(_newItem);
        }

        return _newItemList;
    }

    generateElement() {
        let _newCardHeader = document.createElement('span');
        let _newCardHeaderTitle = document.createElement('h2');
        _newCardHeaderTitle.id = this.id + '-h2';
        _newCardHeaderTitle.innerText = this.name;
        _newCardHeaderTitle.classList.add('text-fix', 'card-title');

        // Card title editing
        _newCardHeaderTitle.addEventListener('click', (e) => {
            e.stopPropagation();
            let _input = document.createElement('input');
            _input.value = _newCardHeaderTitle.textContent;
            _input.classList.add('card-title');
            _input.maxLength = 128;
            _newCardHeaderTitle.replaceWith(_input);

            let _save = () => {
                this.name = _input.value;
                renderCard(this.id);
            };

            _input.addEventListener('blur', _save, { once: true });
            _input.focus();
        });

        // Hamburger menu icon
        let _newCardHeaderMenu = document.createElement('span');
        _newCardHeaderMenu.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-more-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>`;
        _newCardHeaderMenu.classList.add("card-menu-icon");
        _newCardHeader.append(_newCardHeaderTitle);
        _newCardHeader.append(_newCardHeaderMenu);
        _newCardHeaderMenu.addEventListener('click', cardContextMenu_show);

        // Input area for new tasks
        let _newInput = document.createElement('input');
        _newInput.id = this.id + '-input';
        _newInput.maxLength = 256;
        _newInput.type = 'text';
        _newInput.name = "add-todo-text";
        _newInput.placeholder = "Add Task...";
        _newInput.addEventListener('keyup', (e) => {
            if (e.code === "Enter") _newButton.click();
        });

        // Add task button
        let _newButton = document.createElement('button');
        _newButton.id = this.id + '-button';
        _newButton.classList.add("plus-button");
        _newButton.innerText = '+';
        _newButton.addEventListener('click', () => {
            let _inputValue = _newInput.value;
            if (!_inputValue) return createAlert("Type a name for the item!");
            let _item = new Item(_inputValue, null, getBoardFromId(this.parentBoardId).uniqueID(), this.id);
            this.addItem(_item);
            _newInput.value = '';
        });

        let _newCard = document.createElement('div');
        _newCard.id = this.id;
        _newCard.classList.add('parent-card');
        _newCard.appendChild(_newCardHeader);

        if (this.items.length > 0) {
            let _newItemList = this.renderItems();
            _newCard.appendChild(_newItemList);
        }

        _newCard.appendChild(_newInput);
        _newCard.appendChild(_newButton);

        return _newCard;
    }
}

class Board {
    constructor(name, id, settings, identifier=0) {
        this.name = name;
        this.id = id;
        this.settings = settings;
        this.cards = [];
        this.identifier = identifier === null ? Date.now() : identifier;
    }

    uniqueID() {
        this.identifier += 1;
        return 'e' + this.identifier.toString();
    }

    addCard() {
        let _cardTitle = e_addCardText.value;
        e_addCardText.value = '';
    
        if (!_cardTitle) _cardTitle = `Untitled Card ${this.cards.length + 1}`;
    
        let _card = new Card(_cardTitle, this.uniqueID(), this.id);
        this.cards.push(_card);

        let _newCard = _card.generateElement();
        e_cardsContainer.insertBefore(_newCard, e_cardsContainer.childNodes[e_cardsContainer.childNodes.length - 2]);
        _card.update();
    }
}

/* <=================================== Card Context Menu ===================================> */
let cardContextMenu_currentCard;
const cardContextMenu_show = (e) => {
    e.stopPropagation();
    cardContextMenu_currentCard = e.target.closest('.parent-card');
    if (!cardContextMenu_currentCard) return;

    const { clientX: mouseX, clientY: mouseY } = e;
    e_cardContextMenu.style.top = mouseY + 'px';
    e_cardContextMenu.style.left = mouseX + 'px';

    e_cardContextMenu.classList.remove('visible');
    setTimeout(() => {
        e_cardContextMenu.classList.add('visible');
    });
};

const cardContextMenu_hide = (e) => {
    if (e.target.offsetParent != e_cardContextMenu && e_cardContextMenu.classList.contains('visible')) {
        e_cardContextMenu.classList.remove("visible");
    }
};

const cardContextMenu_clearCard = () => {
    createConfirmDialog('Are you sure to clear this board', () => {
        let _currentCardObject = getCardFromElement(cardContextMenu_currentCard);
        _currentCardObject.items.length = 0;
        renderCard(_currentCardObject.id);
    });
};

const cardContextMenu_deleteCard = () => {
    createConfirmDialog('Are you sure to delete this card', () => {
        let _currentCardObject = getCardFromElement(cardContextMenu_currentCard);
        currentCards().splice(currentCards().indexOf(_currentCardObject), 1);
        cardContextMenu_hide({target:{offsetParent:'n/a'}});
        renderCard(_currentCardObject.id);
    });
}

const cardContextMenu_duplicateCard = () => {
    let _currentCardObject = getCardFromElement(cardContextMenu_currentCard);
    currentBoard().addCard();
    let _cIndex = currentBoard().cards.length - 1;
    currentBoard().cards[_cIndex].items = JSON.parse(JSON.stringify(_currentCardObject.items));
    currentBoard().cards[_cIndex].name = _currentCardObject.name + ' Copy';
    renderCard(currentBoard().cards[_cIndex].id);
}

document.body.addEventListener('click', cardContextMenu_hide);
e_cardContextMenuClear.addEventListener('click', cardContextMenu_clearCard);
e_cardContextMenuDelete.addEventListener('click', cardContextMenu_deleteCard);
e_cardContextMenuDuplicate.addEventListener('click', cardContextMenu_duplicateCard);

/* <=================================== Persistent Data Storage ===================================> */
function saveData() {
    window.localStorage.setItem('kards-appData', JSON.stringify(appData));
}

function loadData() {
    let _data = window.localStorage.getItem('kards-appData');
    if (_data) {
        let _appData = JSON.parse(_data);

        appData.settings = _appData.settings;
        appData.currentBoard = _appData.currentBoard >= 0 ? _appData.currentBoard : 0;
        appData.identifier = _appData.identifier !== null ? _appData.identifier : 0;
        
        // Fill the data with boards.
        for (let _board of _appData.boards) {
            let _newBoard = new Board(_board.name, _board.id, _board.settings, _board.identifier);

            // Fill the board with cards.
            for (let _card of _board.cards) {
                let _newCard = new Card(_card.name, _card.id, _board.id);

                // Fill the cards with items.
                for (let _item of _card.items) {
                    let _newItem = new Item(_item.title, _item.description, _item.id, _card.id);
                    _newCard.items.push(_newItem);
                }
                _newBoard.cards.push(_newCard);
            }
            appData.boards.push(_newBoard);
        }

        // Generate the board.
        renderBoard(appData.boards[appData.currentBoard]);
    } else {
        appData.currentBoard = 0;
        let _defaultBoard = new Board("Untitled Board", 'b0', {'theme': null});
        appData.boards.push(_defaultBoard);
    }
    listBoards();
}

function clearData() {
    window.localStorage.clear();
}

loadData();

/* <=================================== Other Events ===================================> */
e_addCardText.addEventListener('keyup', (e) => {
    if (e.code === "Enter") currentBoard().addCard();
});

e_addCardButton.addEventListener('click', () => currentBoard().addCard());

e_addBoardText.addEventListener('keyup', (e) => {
    if (e.code === "Enter") addBoard();
});

e_addBoardButton.addEventListener('click', addBoard);

e_autoSaveButton.addEventListener('change', function (event) {
    if (this.checked) {
        autoSaveInternalId = setInterval(function (){
            saveData();
        }, 5000);
    } else {
        window.clearInterval(autoSaveInternalId);
    }
});

e_saveButton.addEventListener('click', () => {
    saveData(); 
    createAlert("Data successfully saved.");
});

e_deleteButton.addEventListener('click', () => {
    createConfirmDialog('Are you sure to delete this board?', () => {
        let _boardName = currentBoard().name;
        appData.boards.splice(appData.currentBoard, 1);
        if (appData.currentBoard !== 0) {
            appData.currentBoard--;
        }

        if (appData.boards.length === 0) {
            let _defaultBoard = new Board("Untitled Board", 'b0', {'theme': null});
            appData.boards.push(_defaultBoard);
            appData.currentBoard = 0;
        }

        listBoards();
        renderBoard(appData.boards[appData.currentBoard]);
        createAlert(`Deleted board "${_boardName}"`)
    });
});

window.onbeforeunload = function () {
    const currentData = getDataFromLocalStorage();
    if (JSON.stringify(appData) !== currentData) {
        return "You have unsaved changes. Are you sure you want to leave?";
    }
}

function getDataFromLocalStorage() {
    return window.localStorage.getItem('kards-appData');
}

/* <=================================== Sidebar ===================================> */
function toggleSidebar() {
    if (('toggled' in e_sidebar.dataset)) {
        delete e_sidebar.dataset.toggled;
        e_sidebar.style.width = "0";
        e_sidebar.style.boxShadow = "unset";
        document.removeEventListener('click', listenClickOutside);
    } else {
        e_sidebar.dataset.toggled = '';
        e_sidebar.style.width = "250px";
        e_sidebar.style.boxShadow = "100px 100px 0 100vw rgb(0 0 0 / 50%)";
        setTimeout(() => {
            document.addEventListener('click', listenClickOutside);
        }, 300);
    }
}

e_sidebarButton.addEventListener('click', toggleSidebar);
e_sidebarClose.addEventListener('click', toggleSidebar);

/* Alerts */
function createAlert(text) {
    let _e = document.createElement('div');
    let _p = document.createElement('p');
    _p.innerText = text;
    _e.classList.add('alert');
    _e.appendChild(_p);

    e_alerts.appendChild(_e);
    setTimeout(function(){
        _e.classList.add('animate-hidden');
    }, 3500);
    setTimeout(function(){
        _e.parentNode.removeChild(_e);
    }, 4500);
}

function listenClickOutside(event) {
    const _withinBoundaries = event.composedPath().includes(e_sidebar);
    if (!_withinBoundaries && e_sidebar.style.width === "250px") {
        toggleSidebar();
    }
}

function createConfirmDialog(text, onConfirm) {
    cardContextMenu_hide({target:{offsetParent:'n/a'}});

    var _modal = document.getElementById("confirm-dialog");
    var _span = document.getElementById("confirm-dialog-close");
    var _dialogText = document.getElementById('confirm-dialog-text');
    var _cancelButton = document.getElementById('confirm-dialog-cancel');
    var _confirmButton = document.getElementById('confirm-dialog-confirm');

    _modal.style.display = "block";
    _dialogText.textContent = text;

    _span.onclick = function() {
        _modal.style.display = "none";
    }
    
    _cancelButton.onclick = () => {
        _modal.style.display = "none";
    }

    _confirmButton.onclick = () => {
        _modal.style.display = "none";
        onConfirm && onConfirm();
    }

    window.onclick = (event) => {
        if (event.target === _modal) {
            _modal.style.display = "none";
        }
    }
}

// Dropdown Menu
const dropdownButton = document.getElementById('dropdown-button');
const dropdownContent = document.getElementById('dropdown-content');

dropdownButton.addEventListener('click', function(e) {
    e.stopPropagation();
    dropdownContent.classList.toggle('show');
});

document.addEventListener('click', function() {
    dropdownContent.classList.remove('show');
});

dropdownContent.addEventListener('click', function(e) {
    e.stopPropagation();
});