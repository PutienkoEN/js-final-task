module.exports = class Entry {
    constructor(entryId, text) {
        this.entryId = entryId;
        this.text = text;
        this.checked = false;
        this.creationDate = new Date();
        this.doneDate = null;
        this.entryView = new EntryView(this);
    }

    draw() {
        return this.entryView.draw()
    }
};

class EntryView {
    constructor(entryData) {
        this.entryData = entryData;
    }

    draw() {
        const checkbox = document.createElement('input');
        checkbox.classList.add('check-box');
        checkbox.type = 'checkbox';
        checkbox.checked = this.entryData.checked;
        // checkbox.addEventListener("change", function (event) {
        //     moveEntryToAnotherList.call(null, event, openEntryList, doneEntryList);
        // });

        const text = document.createElement('span');
        text.classList.add('text');
        text.textContent = this.entryData.text;

        const creationDateElement = document.createElement('time');
        creationDateElement.classList.add('creation-date');
        creationDateElement.textContent = formatDate(this.entryData.creationDate);

        const doneDateElement = document.createElement('time');
        doneDateElement.classList.add('done-date');

        const dates = document.createElement('div');
        dates.classList.add('dates');

        dates.appendChild(creationDateElement);
        dates.appendChild(doneDateElement);

        const removeIcon = document.createElement('i');
        removeIcon.classList.add("fa");
        removeIcon.classList.add("fa-trash");

        const remove = document.createElement('i');
        remove.classList.add('remove');
        remove.classList.add('hidden');

        remove.appendChild(removeIcon);

        const entry = document.createElement('div');
        entry.id = this.entryData.entryId;
        entry.classList.add('entry');

        entry.appendChild(checkbox);
        entry.appendChild(text);
        entry.appendChild(dates);
        entry.appendChild(remove);

        entry.addEventListener("mouseover", () => remove.classList.remove('hidden'));
        entry.addEventListener("mouseleave", () => remove.classList.add('hidden'));

        // remove.addEventListener("click", () => entry.parentNode.removeChild(entry));

        return entry;
    }
}

function formatDate(date) {
    if (!date) {
        return '';
    }

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
