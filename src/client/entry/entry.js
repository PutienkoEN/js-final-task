module.exports = class Entry {
    constructor(entryId) {
        this.entryId = entryId;
    }

    create(textValue, openEntryList, doneEntryList) {
        const checkbox = document.createElement('input');
        checkbox.classList.add('check-box');
        checkbox.type = 'checkbox';
        checkbox.addEventListener("change", function (event) {
            moveEntryToAnotherList.call(null, event, openEntryList, doneEntryList);
        });

        const text = document.createElement('span');
        text.classList.add('text');
        text.textContent = textValue;

        const creationDate = document.createElement('time');
        creationDate.classList.add('creation-date');
        creationDate.textContent = getCurrentDate();

        const doneDate = document.createElement('time');
        doneDate.classList.add('done-date');

        const dates = document.createElement('div');
        dates.classList.add('dates');

        dates.appendChild(creationDate);
        dates.appendChild(doneDate);

        const div = document.createElement('div');
        div.id = this.entryId;
        div.classList.add('entry');

        div.appendChild(checkbox);
        div.appendChild(text);
        div.appendChild(dates);

        openEntryList.appendChild(div);
    }

};

function moveEntryToAnotherList(event, openEntryList, doneEntryList) {
    const checkbox = event.target;
    const entry = checkbox.parentElement;

    if (checkbox.checked) {
        moveToList(entry, doneEntryList, getCurrentDate());
    } else {
        moveToList(entry, openEntryList, '')
    }
}

function moveToList(entry, entryList, date) {
    entryList.insertBefore(entry, entryList.firstChild);
    const done = entry.querySelector('.done-date');
    done.textContent = date;
}

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
