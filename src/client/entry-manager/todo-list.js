const createEditorArea = require('./entry-edit');

module.exports = function createTodoList() {
    const todoList = document.createElement('div');
    todoList.id = 'todo-list';
    todoList.addEventListener("dblclick", startEditing.bind(this));

    return todoList;
};

function startEditing(event) {
    if (!event.target.classList.contains('text')) {
        return;
    }

    const textElement = event.target.parentElement.querySelector('.text');
    const inputElement = createEditorArea(textElement);
    inputElement.focus();

    window.addEventListener("keyup", function (event) {
        if (validKey(event)) {
            applyChanges(event, inputElement, textElement);
            exitEditMode(inputElement, textElement);
        }
    })
}

function validKey(event) {
    return event.which === 27 || event.which === 13;
}

function applyChanges(event, inputElement, textElement) {
    if (event.which === 13) {
        textElement.textContent = inputElement.value;
    }
}

function exitEditMode(input, textArea) {
    input.remove();
    textArea.classList.remove('hidden');
}
