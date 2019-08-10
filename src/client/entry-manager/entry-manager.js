module.exports = class EntryManager {
    constructor() {
        this.entries = []
    }

    create() {
        const addEntryArea = document.createElement('div');
        addEntryArea.id = 'add-entry-area';

        const openEntryList = document.createElement('div');
        openEntryList.id = 'open-entry-list';

        const todoList = document.createElement('div');
        todoList.id = 'todo-list';

        todoList.appendChild(addEntryArea);
        todoList.appendChild(openEntryList);

        return todoList;
    }


};
