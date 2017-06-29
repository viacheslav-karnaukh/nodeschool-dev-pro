const objectKeysIterator1 = function* (o) {
    const keys = Object.keys(o);
    while(keys.length) {
        yield keys.shift();
    }
};

const objectKeysIterator2 = (o) => {
    const keys = Object.keys(o);
    return {
        [Symbol.iterator]() {
            return {
                next: () => keys.length
                    ? {value: keys.shift(), done: false}
                    : {done: true}
            };
        }
    };
};

module.exports = {
    objectKeysIterator1,
    objectKeysIterator2
};
