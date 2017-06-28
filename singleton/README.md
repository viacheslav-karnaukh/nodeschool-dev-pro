### SingletonCounter

#### Example of usage
```javascript
const Counter = require('./singleton');
const c1 = new Counter();
const c2 = new Counter();
const OneMoreCounter = require('./singleton');
const c3 = new OneMoreCounter();

c1 === c2; // true
c1 === c3; // true

c1.inc(); // 1
c1.inc(); // 2
c3.inc(); // 3
c2.dec(); // 2
```
