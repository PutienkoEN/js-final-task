module.exports = class EntryList {
    constructor(listName) {
        this.listName = listName;
        this.entries = getEntriesFromStore(listName);
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

    containsEntry(entryId) {
        return this.entries.findIndex(entry => entry.entryId === entryId) !== -1;
    }

    updateStorage() {
        localStorage.setItem(this.listName, JSON.stringify(this));
    }
};

function getEntriesFromStore(storeId) {
    const self = localStorage.getItem(storeId);
    const entries = self ? JSON.parse(self).entries : [];

    entries
        .filter(entry => entry.creationDate !== null)
        .forEach(entry => entry.creationDate = new Date(entry.creationDate));

    entries
        .filter(entry => entry.doneDate !== null)
        .forEach(entry => entry.doneDate = new Date(entry.doneDate));

    return entries;
}
