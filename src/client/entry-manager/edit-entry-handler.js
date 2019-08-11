module.exports = function startEditing(entryId) {
    const entry = document.getElementById(entryId);
    const text = entry.querySelector('.text');

    const editorArea = createEditorArea(text.textContent);
    editorArea.addEventListener("keyup", function (event) {
        applyChanges(event, editorArea, text)
    });

    text.classList.add('hidden');
    entry.insertBefore(editorArea, text);
    editorArea.focus();
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
