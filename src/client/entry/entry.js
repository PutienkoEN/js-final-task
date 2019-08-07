module.exports = class Entry {
    constructor(text) {
        this.text = text;
        this.creationDate = new Date();
        this.done = false;
        this.resolveDate = null;
    }

    begin() {
        this.done = false;
        this.resolveDate = null;
    }

    complete() {
        this.done = true;
        this.resolveDate = new Date();
    }

    create() {
        const labelForCheckbox = document.createElement('label');
        labelForCheckbox.setAttribute('for', 'check-box-1');

        const checkbox = document.createElement('input');
        checkbox.id = 'check-box-1';
        checkbox.type = 'checkbox';

        const text = document.createElement('span');
        text.id = 'note-text-1';
        text.textContent = this.text;

        const div = document.createElement('div');
        div.id = 'entry-1';

        div.appendChild(labelForCheckbox);
        div.appendChild(checkbox);
        div.appendChild(text);

        return div;
    }
};
