const Entry = require('../entry/entry');
const EntryView = require('../entry/entry-view');

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

        const entryView = new EntryView(entry);
        this.openListView.addEntryElement(entryView.draw());

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
