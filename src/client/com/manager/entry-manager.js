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

        const entryView = new EntryView(entry, this);
        this.openListView.addEntryElement(entryView.draw());

        this.lastEntryId++;
        this.updateOpenEntriesStorage();
        this.updateLastEntryIdStorage();

    }

    markEntryAsDone(entryId) {
        const entry = this.openList.getEntry(entryId);
        entry.finishTask();

        this.doneList.addEntry(entry);
        this.openList.removeEntry(entryId);

        const entryElement = this.openListView.getEntryElement(entryId);
        this.openListView.removeEntryElement(entryElement);
        this.doneListView.addEntryElement(entryElement);

        this.updateOpenEntriesStorage();
        this.updateDoneEntriesStorage();
    }

    markEntryAsOpen(entryId) {
        const entry = this.doneList.getEntry(entryId);
        entry.startTask();

        this.openList.addEntry(entry);
        this.doneList.removeEntry(entryId);

        const entryElement = this.doneListView.getEntryElement(entryId);
        this.doneListView.removeEntryElement(entryElement);
        this.openListView.addEntryElement(entryElement);

        this.updateOpenEntriesStorage();
        this.updateDoneEntriesStorage();
    }

    updateOpenEntriesStorage() {
        localStorage.setItem('openEntries', JSON.stringify(this.openList));
    }

    updateDoneEntriesStorage() {
        localStorage.setItem('doneEntries', JSON.stringify(this.doneList));
    }

    updateLastEntryIdStorage() {
        localStorage.setItem('lastEntryId', this.lastEntryId);
    }

};

