module.exports = class AddEntryService {
    constructor(openList) {
        this.lastEntryId = 1;
        this.openList = openList;
        this.entryManagerView = new EntryManagerView(this)
    }

    draw() {
        return this.entryManagerView.draw();
    }
};

class EntryManagerView {
    constructor(data) {
        this.data = data;
    }

    draw() {
        const addEntryArea = document.createElement('div');
        addEntryArea.classList.add('add-entry-area');

        const textInput = document.createElement('input');
        textInput.type = 'text';
        textInput.placeholder = 'Enter your note here...';
        textInput.classList.add('new-entry-text');

        const addEntryButton = document.createElement('button');
        addEntryButton.textContent = "ADD";
        // addEntryButton.addEventListener("click", createEntry.bind(this, textInput, openEntryList, doneEntryList));

        addEntryArea.appendChild(textInput);
        addEntryArea.appendChild(addEntryButton);

        return addEntryArea;
    }

}
