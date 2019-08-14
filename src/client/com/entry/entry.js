module.exports = class Entry {
    constructor(entryId, text) {
        this.entryId = `entry-${entryId}`;
        this.text = text;
        this.isDone = false;
        this.creationDate = new Date();
        this.doneDate = null;
    }

    done() {
        this.isDone = true;
    }

    open() {
        this.isDone = false;
    }
};
