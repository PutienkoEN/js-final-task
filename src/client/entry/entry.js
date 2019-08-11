module.exports = class Entry {
    constructor(entryId) {
        this.entryId = entryId;
    }

    create(textValue) {
        const checkbox = document.createElement('input');
        checkbox.classList.add('check-box');
        checkbox.type = 'checkbox';

        const text = document.createElement('span');
        text.classList.add('text');
        text.textContent = textValue;

        const creationDate = document.createElement('time');
        creationDate.classList.add('creation-date');
        creationDate.textContent = getCurrentDate();

        const div = document.createElement('div');
        div.id = this.entryId;
        div.classList.add('entry');

        div.appendChild(checkbox);
        div.appendChild(text);
        div.appendChild(creationDate);

        return div;
    }

};

function getCurrentDate() {
    const date = new Date();

    let day = topUpToTwoDigits(date.getDate());
    let month = topUpToTwoDigits(date.getMonth() + 1);
    let year = date.getFullYear();

    return `${day}.${month}.${year}`;
}

function topUpToTwoDigits(value) {
    if (value.toString().length === 1) {
        return "0" + value;
    }
    return value;
}
