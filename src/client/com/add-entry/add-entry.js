const Entry = require('../entry/entry');

module.exports = class EntryManager {
    constructor(openList) {
        this.lastEntryId = 1;
        this.openList = openList;
    }

    addNewEntry(text) {
        const entry = new Entry(this.lastEntryId, text);
        this.openList.addEntry(entry);
        this.lastEntryId++;
    }

};
