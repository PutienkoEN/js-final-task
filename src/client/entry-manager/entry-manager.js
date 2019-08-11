const createAddEntryArea = require('../entry-manager/add-entry-area');
const startEditing = require('../entry-manager/edit-entry-handler');

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
        todoList.addEventListener("dblclick", editEntry);

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

function editEntry(event) {
    if (!event.target.classList.contains('text')) {
        return;
    }

    startEditing(event.target.parentElement.id);
}
