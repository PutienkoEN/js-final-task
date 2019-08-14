const EntryList = require('../entry-list/entry-list');
const Entry = require('../entry/entry');
const AddEntryService = require('../add-entry/add-entry');

module.exports = class Manager {
    constructor() {
        this.openList = new EntryList("open-list");
        this.doneList = new EntryList("done-list");
        this.addEntryService = new AddEntryService(this.openList)
    }

    start() {
        this.draw()
    }

    draw() {

        const openListElement = this.openList.draw();
        const doneListElement = this.doneList.draw();

        const createEntryArea = this.addEntryService.draw();

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
