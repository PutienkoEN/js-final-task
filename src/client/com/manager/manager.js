const EntryList = require('../entry-list/entry-list');
const EntryManager = require('./entry-manager');
const AddEntryView = require('../add-entry/add-entry-view');
const EntryListView = require('../entry-list/entry-list-view');

module.exports = class Manager {
    constructor() {
        this.openList = new EntryList("open-list");
        this.openListView = new EntryListView(this.openList);
        this.doneList = new EntryList("done-list");
        this.doneListView = new EntryListView(this.doneList);
        this.entryManager = new EntryManager(this.openList, this.openListView, this.doneList, this.doneListView)
    }

    start() {
        this.draw()
    }

    draw() {
        const addEntryView = new AddEntryView(this.entryManager);
        const createEntryArea = addEntryView.draw();

        const todoList = createCoreHtml();
        todoList.appendChild(createEntryArea);
        todoList.appendChild(this.openListView.draw());
        todoList.appendChild(this.doneListView.draw());


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
