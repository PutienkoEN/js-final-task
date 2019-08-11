module.exports = function createEntryList(listName) {
    const entryList = document.createElement('div');
    entryList.id = `${listName.toLowerCase()}-entry-list`;
    entryList.classList.add('entry-list');

    const listNameElement = document.createElement('h3');
    listNameElement.textContent = listName;

    const headerElement = document.createElement('div');
    headerElement.appendChild(listNameElement);

    entryList.appendChild(headerElement);

    return entryList;
};
