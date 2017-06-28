const COUNTER_START_FROM = 0;
let instance = null;

class SingletonCounter {
    constructor(count = COUNTER_START_FROM) {
        if(instance) {
            return instance;
        }
        instance = this;
        this.count = count;
    }

    inc() {
        return ++this.count;
    }

    dec() {
        return --this.count;
    }
}

module.exports = SingletonCounter;
