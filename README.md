# is-valid-domain

Validate domain name

# Install

```bash
npm install is-valid-domain
```

# Usage

```javascript
var isValidDomain = require('is-valid-domain');

isValidDomain('example.com') // true
isValidDomain('foo.example.com') // true
isValidDomain('bar.foo.example.com') // true
isValidDomain('exa-mple.co.uk') // true
isValidDomain('exa_mple.com') // false
isValidDomain('-example.co.uk') // false
isValidDomain('example') // false
isValidDomain('ex*mple.com') // false
isValidDomain(3434) // false
```

view more [examples](./test/is-valid-domain.js)

# License

MIT
