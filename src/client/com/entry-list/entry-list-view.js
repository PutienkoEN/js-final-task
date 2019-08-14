module.exports = class EntryListView {
    constructor(listData) {
        this.listData = listData;
        this.entryListElement = null;
    }

    addEntryElement(entryElement) {
        this.entryListElement.appendChild(entryElement);
    }

    removeEntryElement(entryId) {
        const entryElement = this.entryListElement.querySelector('#' + entryId);
        this.entryListElement.removeChild(entryElement);
    }

    draw() {
        const listNameElement = document.createElement('h3');
        listNameElement.textContent = this.listData.listName;

        const headerElement = document.createElement('div');
        headerElement.appendChild(listNameElement);

        const entryList = document.createElement('div');
        entryList.classList.add('entry-list');
        this.entryListElement = entryList;

        const entryBlock = document.createElement('div');
        entryBlock.id = `${this.listData.listName.toLowerCase()}-entry-block`;
        entryBlock.classList.add('entry-block');

        entryBlock.appendChild(headerElement);
        entryBlock.appendChild(entryList);

        return entryBlock;
    };
};
