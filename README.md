# whaty

is it truthy or falsy

### example

`npm i whaty`

```javascript
const whaty = require('whaty');

// inString
console.log(whaty.inString(true)); // 'truthy'
console.log(whaty.inString(NaN)); // 'falsy'

// inBoolean
console.log(whaty.inBoolean(true)); // true
console.log(whaty.inBoolean(NaN)); // false
```

## api

`whaty.inString(thing) returns String`
`whaty.inBoolean(thing) returns Boolean`
