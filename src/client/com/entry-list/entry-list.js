module.exports = class EntryList {
    constructor(listName) {
        this.listName = listName;
        this.entries = getEntries(listName);
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

function getEntries(storeId) {
    const entries = localStorage.getItem(this.listName);
    return entries ? entries : [];
}
