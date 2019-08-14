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
        this.openListView.addEntry(entry.draw());

        this.lastEntryId++;
        localStorage.setItem('lastEntryId', this.lastEntryId);
    }

};
