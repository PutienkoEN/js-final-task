module.exports = class Entry {
    constructor(entryId, text) {
        this.entryId = `entry-${entryId}`;
        this.text = text;
        this.isDone = false;
        this.creationDate = new Date();
        this.doneDate = null;
    }

    finishTask() {
        this.isDone = true;
        this.doneDate = new Date();
    }

    startTask() {
        this.isDone = false;
        this.doneDate = null;
    }
};
