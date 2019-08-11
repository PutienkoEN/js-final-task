const createAddEntryArea = require('../entry-manager/add-entry-area');
const createEditorArea = require('../entry-manager/edit-entry-handler');

module.exports = class EntryManager {
    constructor() {
        this.entryIdCount = 1;
        this.openEntryList = null;
    }

    create() {
        const addEntryArea = createAddEntryArea.bind(this)();

        const openEntryList = this.createOpenEntryList();
        this.openEntryList = openEntryList;

        const todoList = document.createElement('div');
        todoList.id = 'todo-list';
        todoList.addEventListener("dblclick", startEditing.bind(this));

        todoList.appendChild(addEntryArea);
        todoList.appendChild(openEntryList);

        return todoList;
    }

    createOpenEntryList() {
        const openEntryList = document.createElement('div');
        openEntryList.id = 'open-entry-list';
        openEntryList.classList.add('entry-list');

        return openEntryList;
    }
};

function startEditing(event) {
    if (!event.target.classList.contains('text')) {
        return;
    }

    console.log(event.target);
    const textElement = event.target.parentElement.querySelector('.text');
    const inputElement = createEditorArea(textElement);
    inputElement.focus();

    window.addEventListener("keyup", function (event) {
        if (validKey(event)) {
            applyChanges(event, inputElement, textElement);
            exitEditMode(inputElement, textElement);
        }
    })
}

function validKey(event) {
    return event.which === 27 || event.which === 13;
}

function applyChanges(event, inputElement, textElement) {
    if (event.which === 13) {
        textElement.textContent = inputElement.value;
    }
}

function exitEditMode(input, textArea) {
    input.remove();
    textArea.classList.remove('hidden');
}

//
//
// editorArea.addEventListener("keyup", function (event) {
//     applyChanges(event, editorArea, text)
// });
