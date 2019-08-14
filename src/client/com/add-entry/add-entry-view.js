module.exports = class AddEntryView {
    constructor(entryManager) {
        this.textInput = null;
        this.entryManager = entryManager;
    }

    draw() {
        const addEntryArea = document.createElement('div');
        addEntryArea.classList.add('add-entry-area');

        const textInput = document.createElement('input');
        textInput.type = 'text';
        textInput.placeholder = 'Enter your note here...';
        textInput.classList.add('new-entry-text');
        this.textInput = textInput;

        const addEntryButton = document.createElement('button');
        addEntryButton.textContent = "ADD";
        addEntryButton.addEventListener("click", function () {
            this.entryManager.addNewEntry(this.textInput.value);
        }.bind(this));

        addEntryArea.appendChild(textInput);
        addEntryArea.appendChild(addEntryButton);

        return addEntryArea;
    }

};
