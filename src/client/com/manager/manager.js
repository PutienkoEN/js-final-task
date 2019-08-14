const EntryList = require('../entry-list/entry-list');
const EntryManager = require('./entry-manager');
const AddEntryView = require('../add-entry/add-entry-view');

module.exports = class Manager {
    constructor() {
        this.openList = new EntryList("open-list");
        this.doneList = new EntryList("done-list");
        this.entryManager = new EntryManager(this.openList)
    }

    start() {
        this.draw()
    }

    draw() {

        const openListElement = this.openList.draw();
        const doneListElement = this.doneList.draw();

        const addEntryView = new AddEntryView(this.entryManager);
        const createEntryArea = addEntryView.draw();

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

//
// draw()
// {
//     const addEntryView = new AddEntryView(addNewEntry.bind(this))
//     return addEntryView.draw();
// }
