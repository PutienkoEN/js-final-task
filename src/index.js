import './style.css';

const EntryManager = require('./client/entry-manager/entry-manager');

const entryManager = new EntryManager();
const entryManagerHtml = entryManager.create();

document.body.appendChild(entryManagerHtml);

entryManager.createNewEntry("First Entry");
