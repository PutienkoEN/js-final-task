const Entry = require('../entry/entry');

module.exports = class EntryManager {
    constructor() {
        this.entryIdCount = 1;
        this.openEntryList = null;
    }

    create() {
        const addEntryArea = this.createAddEntryArea();

        const openEntryList = document.createElement('div');
        openEntryList.classList.add('open-entry-list');
        this.openEntryList = openEntryList;

        const todoList = document.createElement('div');
        todoList.id = 'todo-list';

        todoList.appendChild(addEntryArea);
        todoList.appendChild(openEntryList);

        return todoList;
    }

    createAddEntryArea() {
        const addEntryArea = document.createElement('div');
        addEntryArea.classList.add('add-entry-area');

        const textInput = document.createElement('input');
        textInput.type = 'text';
        textInput.classList.add('new-entry-text');

        const addEntryButton = document.createElement('button');
        addEntryButton.textContent = "ADD";
        addEntryButton.addEventListener("click", createEntry.bind(this, textInput));

        addEntryArea.appendChild(textInput);
        addEntryArea.appendChild(addEntryButton);

        return addEntryArea;
    }
};

function createEntry(textInput) {
    if (!textInput.value) {
        return;
    }

    const entryId = getEntryId.bind(this)();
    const newEntryHtml = createNewEntry(textInput.value, entryId);
    textInput.value = '';
    this.openEntryList.appendChild(newEntryHtml);
}

function createNewEntry(entryText, entryId) {
    const entry = new Entry(entryId);
    return entry.create(entryText);
}

function getEntryId() {
    const entryId = `entry-${this.entryIdCount}`;
    this.entryIdCount++;
    return entryId;
}
