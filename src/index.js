import './style.css';

const Entry = require('./client/entry/entry');

const entry = new Entry("Test");
const entry2 = entry.create();

document.body.appendChild(entry2);
