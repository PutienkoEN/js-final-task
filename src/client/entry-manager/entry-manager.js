const Entry = require('../entry/entry');

module.exports = class EntryManager {
    constructor() {
        this.entryIdCount = 1;
        this.openEntryList = null;
    }

    create() {
        const addEntryArea = document.createElement('div');
        addEntryArea.id = 'add-entry-area';

        const openEntryList = document.createElement('div');
        openEntryList.id = 'open-entry-list';
        this.openEntryList = openEntryList;

        const todoList = document.createElement('div');
        todoList.id = 'todo-list';

        todoList.appendChild(addEntryArea);
        todoList.appendChild(openEntryList);

        return todoList;
    }

    createNewEntry(entryText) {
        const entry = new Entry(this.getEntryId());

        const entryHtml = entry.create(entryText);
        this.openEntryList.appendChild(entryHtml);
    }

    getEntryId() {
        return `entry-${this.entryIdCount}`;
    }

};
