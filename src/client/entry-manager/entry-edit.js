module.exports = function createEditorArea(text) {
    text.classList.add('hidden');

    const editorArea = createInput(text.textContent);
    text.parentElement.insertBefore(editorArea, text);

    return editorArea;
};

function createInput(textToEdit) {
    const editorArea = document.createElement('input');
    editorArea.type = 'text';
    editorArea.value = textToEdit;

    return editorArea;
}
