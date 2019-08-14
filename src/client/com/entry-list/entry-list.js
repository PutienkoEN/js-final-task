module.exports = class EntryList {
    constructor(listName) {
        this.listName = listName;
        this.entries = [];
        this.entryListView = new EntryListView()
    }

    addEntry(entry) {
        this.entries.unshift(entry);
        const entryHtml = entry.draw();
        this.entryListView.addEntry(entryHtml);
    }

    draw() {
        return this.entryListView.draw(this.listName)
    }

};

class EntryListView {
    constructor() {
        this.entryListElement = null;
    }

    addEntry(entryElement) {
        this.entryListElement.appendChild(entryElement);
    }

    draw(listName) {
        const listNameElement = document.createElement('h3');
        listNameElement.textContent = listName;

        const headerElement = document.createElement('div');
        headerElement.appendChild(listNameElement);

        const entryList = document.createElement('div');
        entryList.classList.add('entry-list');
        this.entryListElement = entryList;

        const entryBlock = document.createElement('div');
        entryBlock.id = `${listName.toLowerCase()}-entry-block`;
        entryBlock.classList.add('entry-block');

        entryBlock.appendChild(headerElement);
        entryBlock.appendChild(entryList);

        return entryBlock;
    };
}
