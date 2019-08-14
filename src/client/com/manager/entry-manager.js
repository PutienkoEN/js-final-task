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

        updateOpenEntriesStorage.call(this);
        updateLastEntryIdStorage.call(this);

    }

    changeEntryStatus(entryId) {
        const entry = this.openList.getEntry(entryId);
        if (entry) {
            changeEntry.bind(this)(entryId, this.openList, this.doneList, this.openListView, this.doneListView);
        } else {
            changeEntry.bind(this)(entryId, this.doneList, this.openList, this.doneListView, this.openListView);
        }
    }

};

function changeEntry(entryId, firstList, secondList, firstView, secondView) {
    const entry = firstList.getEntry(entryId);
    if (entry.isDone) {
        entry.finishTask();
    } else {
        entry.startTask();
    }

    secondList.addEntry(entry);
    firstList.removeEntry(entryId);

    const entryElement = firstView.getEntryElement(entryId);
    firstView.removeEntryElement(entryElement);
    secondView.addEntryElement(entryElement);

    updateOpenEntriesStorage();
    updateDoneEntriesStorage();
}

function updateOpenEntriesStorage() {
    localStorage.setItem('openEntries', JSON.stringify(this.openList));
}

function updateDoneEntriesStorage() {
    localStorage.setItem('doneEntries', JSON.stringify(this.doneList));
}

function updateLastEntryIdStorage() {
    localStorage.setItem('lastEntryId', this.lastEntryId);
}
