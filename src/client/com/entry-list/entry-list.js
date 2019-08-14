module.exports = class EntryList {
    constructor(listName) {
        this.listName = listName;
        this.entries = [];
    }

    addEntry(entry) {
        this.entries.unshift(entry);
    }
};
