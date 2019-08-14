const Entry = require('../entry/entry');
const EntryListView = require('../entry-list/entry-list-view');

module.exports = class EntryManager {
    constructor(openList, openListView) {
        this.lastEntryId = 1;
        this.openList = openList;
        this.openListView = openListView;
    }

    addNewEntry(text) {
        const entry = new Entry(this.lastEntryId, text);
        this.openList.addEntry(entry);
        this.openListView.addEntry(entry.draw());

        this.lastEntryId++;
        localStorage.setItem('lastEntryId', this.lastEntryId);
    }

};
