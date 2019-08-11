import './style.css';

const EntryManager = require('./client/entry-manager/manager');

const entryManager = new EntryManager();
const entryManagerHtml = entryManager.create();

document.body.appendChild(entryManagerHtml);
