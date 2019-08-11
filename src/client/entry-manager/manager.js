const createEntryList = require('./entry-list');
const createAddEntryArea = require('./entry-add');
const createTodoList = require('./todo-list');

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
