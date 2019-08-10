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

        const textBox = document.createElement('span');
        textBox.classList.add('text-block');
        textBox.appendChild(text);

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

        textBlock.appendChild(editorArea);
    }
};

function createEditorArea(textToEdit) {
    const editorArea = document.createElement('input');
    editorArea.type = 'text';
    editorArea.value = textToEdit;

    return editorArea;
}
