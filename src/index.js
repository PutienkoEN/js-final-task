import './style.css';

const Entry = require('./client/entry/entry');

const firstEntry = new Entry();
const htmlEntry = firstEntry.create("Text");

document.body.appendChild(htmlEntry);
