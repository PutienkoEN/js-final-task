const createEntryList = require('../entry-manager/create-entry-list');
const createAddEntryArea = require('../entry-manager/add-entry-area');
const createTodoList = require('../entry-manager/create-todo-list');

module.exports = class EntryManager {
    constructor() {
        this.entryIdCount = 1;
    }

    create() {
        const openEntryList = createEntryList('Open');
        const doneEntryList = createEntryList('Done');

        const addEntryArea = createAddEntryArea.call(this, openEntryList);

        const todoList = createTodoList.call(this);

        todoList.appendChild(addEntryArea);
        todoList.appendChild(openEntryList);
        todoList.appendChild(doneEntryList);

        return todoList;
    }

};
