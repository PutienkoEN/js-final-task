const EntryView = require('../entry/entry-view');

module.exports = class EntryListView {
    constructor(listData) {
        this.listData = listData;
        this.entryListElement = null;
    }

    getEntryElement(entryId) {
        return this.entryListElement.querySelector('#' + entryId);
    }

    addEntryElement(entryElement) {
        this.entryListElement.appendChild(entryElement);
    }

    removeEntryElement(entryElement) {
        this.entryListElement.removeChild(entryElement);
    }

    draw() {
        const listNameElement = document.createElement('h3');
        listNameElement.textContent = this.listData.listName;

        const headerElement = document.createElement('div');
        headerElement.appendChild(listNameElement);

        const entryList = document.createElement('div');
        entryList.classList.add('entry-list');
        console.log(this.listData.entries);
        this.listData.entries.forEach(entry => entryList.appendChild(createEntryView(entry)));

        this.entryListElement = entryList;

        const entryBlock = document.createElement('div');
        entryBlock.id = `${this.listData.listName.toLowerCase()}-entry-block`;
        entryBlock.classList.add('entry-block');

        entryBlock.appendChild(headerElement);
        entryBlock.appendChild(entryList);

        return entryBlock;
    };
};

function createEntryView(entryData) {
    return new EntryView(entryData).draw();
}
