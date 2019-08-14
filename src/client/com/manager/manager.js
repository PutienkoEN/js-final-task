const EntryList = require('./entry-list');
const Entry = require('../../com/entry/entry');

module.exports = class Manager {
    constructor() {
        this.lastEntryId = 1;
        this.openList = new EntryList("open-list");
        this.doneList = new EntryList("done-list");
    }

    start() {
        this.draw()
    }

    draw() {

        const openListElement = this.openList.draw();
        const doneListElement = this.doneList.draw();

        const createEntryArea = createAddEntryArea(openListElement, doneListElement);

        const todoList = createCoreHtml();
        todoList.appendChild(createEntryArea);
        todoList.appendChild(openListElement);
        todoList.appendChild(doneListElement);

        document.body.appendChild(todoList);
    }
};

function createCoreHtml() {
    const todoList = document.createElement('div');
    todoList.id = 'todo-list';
    // todoList.addEventListener("dblclick", startEditing.bind(this));

    return todoList;
}

function createAddEntryArea(openEntryList, doneEntryList) {
    const addEntryArea = document.createElement('div');
    addEntryArea.classList.add('add-entry-area');

    const textInput = document.createElement('input');
    textInput.type = 'text';
    textInput.placeholder = 'Enter your note here...';
    textInput.classList.add('new-entry-text');

    const addEntryButton = document.createElement('button');
    addEntryButton.textContent = "ADD";
    // addEntryButton.addEventListener("click", createEntry.bind(this, textInput, openEntryList, doneEntryList));

    addEntryArea.appendChild(textInput);
    addEntryArea.appendChild(addEntryButton);

    return addEntryArea;
}
