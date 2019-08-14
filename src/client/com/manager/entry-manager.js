const Entry = require('../entry/entry');

module.exports = class EntryManager {
    constructor(openList, openListView, doneList, doneListView) {
        this.lastEntryId = 1;
        this.openList = openList;
        this.openListView = openListView;
        this.doneList = doneList;
        this.doneListView = doneListView;
    }

    addNewEntry(text) {
        const entry = new Entry(this.lastEntryId, text);
        this.openList.addEntry(entry);
        this.openListView.addEntryElement(entry.draw());

        this.lastEntryId++;
        localStorage.setItem('lastEntryId', this.lastEntryId);
    }

    markEntryAsDone(entryId) {
        const entry = this.openList.getEntry(entryId);
        console.log(entry);
        this.doneList.addEntry(entry);

        const entryElement = this.openListView.removeEntryElement(entryId);
        this.doneListView.addEntryElement(entryElement);

    }
};
