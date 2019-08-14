module.exports = class EntryList {
    constructor(listName) {
        this.listName = listName;
        this.entries = [];
    }

    addEntry(entry) {
        this.entries.push(entry);
    }

    getEntry(entryId) {
        return this.entries.find(entry => entry.entryId === entryId);
    }

    removeEntry(entryId) {
        this.entries = this.entries.filter(entry => entry.entryId !== entryId);
    }
};
