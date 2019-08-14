const EntryList = require('../entry-list/entry-list');
const EntryManager = require('./entry-manager');
const AddEntryView = require('../add-entry/add-entry-view');
const EntryListView = require('../entry-list/entry-list-view');

module.exports = class Manager {
    constructor() {
        this.entryManager = new EntryManager()
    }

    start() {
        const addEntryView = new AddEntryView(this.entryManager);
        const createEntryArea = addEntryView.draw();

        const todoList = createCoreHtml();

        todoList.appendChild(createEntryArea);
        todoList.appendChild(this.entryManager.openListView.draw());
        todoList.appendChild(this.entryManager.doneListView.draw());

        document.body.appendChild(todoList);
    }
};

function createCoreHtml() {
    const todoList = document.createElement('div');
    todoList.id = 'todo-list';
    return todoList;
}
