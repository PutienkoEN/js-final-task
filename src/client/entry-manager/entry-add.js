const Entry = require('../entry/entry');

module.exports = function createAddEntryArea(openEntryList, doneEntryList) {
    const addEntryArea = document.createElement('div');
    addEntryArea.classList.add('add-entry-area');

    const textInput = document.createElement('input');
    textInput.type = 'text';
    textInput.placeholder = 'Enter your note here...';
    textInput.classList.add('new-entry-text');

    const addEntryButton = document.createElement('button');
    addEntryButton.textContent = "ADD";
    addEntryButton.addEventListener("click", createEntry.bind(this, textInput, openEntryList, doneEntryList));

    addEntryArea.appendChild(textInput);
    addEntryArea.appendChild(addEntryButton);

    return addEntryArea;
};

function createEntry(textInput, openEntryList, doneEntryList) {
    if (!textInput.value) {
        return;
    }

    const entryId = getEntryId.bind(this)();
    const entry = new Entry(entryId);
    entry.create(textInput.value, openEntryList, doneEntryList);

    textInput.value = '';
}

function getEntryId() {
    const entryId = `entry-${this.entryIdCount}`;
    this.entryIdCount++;
    return entryId;
}
