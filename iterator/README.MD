### Iterator

#### Example of usage

```javascript
const { objectKeysIterator1, objectKeysIterator2 } = require('./iterator');

const it1 = objectKeysIterator1({a: 1, b: 2});
it1.next(); // { value: 'a', done: false }
it1.next(); // { value: 'b', done: false }
it1.next(); // { value: undefined, done: true }

const it2 = objectKeysIterator2({a: 1, b: 2});
[...it2]; // [ 'a', 'b' ]
```
