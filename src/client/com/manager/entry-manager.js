const Entry = require('../entry/entry');
const EntryView = require('../entry/entry-view');
const EntryList = require('../entry-list/entry-list');
const EntryListView = require('../entry-list/entry-list-view');

module.exports = class EntryManager {
    constructor() {
        this.lastEntryId = 1;
        this.openList = new EntryList("open-list");
        this.openListView = new EntryListView(this.openList);
        this.doneList = new EntryList("done-list");
        this.doneListView = new EntryListView(this.doneList);
    }

    addNewEntry(text) {
        const entry = new Entry(this.lastEntryId, text);
        this.openList.addEntry(entry);

        const entryView = new EntryView(entry, this.changeEntryStatus.bind(this), this.removeEntryForId.bind(this));
        this.openListView.addEntryElement(entryView.draw());

        updateLastEntryId.call(this);

        this.openList.updateStorage();
    }

    changeEntryStatus(entryId) {
        const entry = this.openList.getEntry(entryId);
        if (entry) {
            changeEntry.bind(this)(entryId, this.openList, this.doneList, this.openListView, this.doneListView);
        } else {
            changeEntry.bind(this)(entryId, this.doneList, this.openList, this.doneListView, this.openListView);
        }
    }

    removeEntryForId(entryId) {
        if (this.openList.containsEntry(entryId)) {
            removeEntry(entryId, this.openList, this.openListView)
        } else if (this.doneList.containsEntry(entryId)) {
            removeEntry(entryId, this.doneList, this.doneListView)
        }
    }

};

function removeEntry(entryId, entriesList, entriesView) {
    entriesList.removeEntry(entryId);

    const entryElement = entriesView.getEntryElement(entryId);
    entriesView.removeEntryElement(entryElement);

    entriesList.updateStorage();
}

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

    firstList.updateStorage();
    secondList.updateStorage();
}

function updateLastEntryId() {
    this.lastEntryId++;
    localStorage.setItem('lastEntryId', this.lastEntryId);
}
