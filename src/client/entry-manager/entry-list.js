module.exports = function createEntryList(listName) {

    const listNameElement = document.createElement('h3');
    listNameElement.textContent = listName;

    const headerElement = document.createElement('div');
    headerElement.appendChild(listNameElement);

    const entryList = document.createElement('div');
    entryList.classList.add('entry-list');

    const entryBlock = document.createElement('div');
    entryBlock.id = `${listName.toLowerCase()}-entry-block`;
    entryBlock.classList.add('entry-block');

    entryBlock.appendChild(headerElement);
    entryBlock.appendChild(entryList);

    return entryBlock;
};
