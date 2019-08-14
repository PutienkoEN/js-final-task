module.exports = class Entry {
    constructor(entryId, text) {
        this.entryId = `entry-${entryId}`;
        this.text = text;
        this.checked = false;
        this.creationDate = new Date();
        this.doneDate = null;
    }
};
