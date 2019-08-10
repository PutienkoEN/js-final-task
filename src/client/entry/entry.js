module.exports = class Entry {
    constructor(entryId) {
        this.entryId = entryId;
    }

    create(textValue) {
        const checkbox = document.createElement('input');
        checkbox.classList.add('check-box');
        checkbox.type = 'checkbox';

        const labelForCheckbox = document.createElement('label');
        labelForCheckbox.appendChild(checkbox);

        const text = document.createElement('span');
        text.classList.add('text');
        text.textContent = textValue;

        const creationDate = document.createElement('span');
        creationDate.classList.add('creation-date');
        creationDate.textContent = getCurrentDate();

        const textBox = document.createElement('span');
        textBox.classList.add('text-block');
        textBox.appendChild(text);
        textBox.appendChild(creationDate);

        const div = document.createElement('div');
        div.id = this.entryId;

        div.appendChild(labelForCheckbox);
        div.appendChild(textBox);

        return div;
    }

    startEditing() {
        const entry = document.getElementById(this.entryId);
        const textBlock = entry.querySelector('.text-block');
        const text = textBlock.querySelector('.text');

        const editorArea = createEditorArea(text.textContent);
        editorArea.addEventListener("keyup", function (event) {
            applyChanges(event, editorArea, text)
        });

        text.classList.add('hidden');
        textBlock.appendChild(editorArea);
    }
};

function createEditorArea(textToEdit) {
    const editorArea = document.createElement('input');
    editorArea.type = 'text';
    editorArea.value = textToEdit;

    return editorArea;
}

function applyChanges(event, input, textArea) {
    if (event.which === 27) {
        exitEditMode(input, textArea);
    }

    if (event.which === 13) {
        textArea.textContent = input.value;
        exitEditMode(input, textArea);
    }
}

function exitEditMode(input, textArea) {
    input.remove();
    textArea.classList.remove('hidden');
}

function getCurrentDate() {
    const date = new Date();
    return `${date.getHours()}:${date.getMinutes()}`;
}
