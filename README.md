# is-valid-domain

> Validate domain name in JavaScript

## Demo

[https://lab.miguelmota.com/is-valid-domain](https://lab.miguelmota.com/is-valid-domain)

## Install

```bash
npm install is-valid-domain
```

## Usage

```javascript
const isValidDomain = require('is-valid-domain')

isValidDomain('example.com') // true
isValidDomain('foo.example.com') // true
isValidDomain('bar.foo.example.com') // true
isValidDomain('exa-mple.co.uk') // true
isValidDomain('xn--80ak6aa92e.com') // true
isValidDomain('_dnslink.ipfs.io') // true
isValidDomain('exa_mple.com') // false
isValidDomain('-example.co.uk') // false
isValidDomain('example') // false
isValidDomain('ex*mple.com') // false
isValidDomain('*.example.com') // false
isValidDomain('*.com') // false
isValidDomain(3434) // false

isValidDomain('foo.example.com', {subdomain: true}) // true
isValidDomain('foo.example.com', {subdomain: false}) // false
isValidDomain('*.example.com', {wildcard: false}) // false
isValidDomain('*.example.com', {wildcard: true}) // true
isValidDomain('*.example.com', {subdomain: false, wildcard: true}) // false
```

view more [examples](./test/test.js)

## Test

```bash
npm test
```

## Contributing

Adding new domains:

- Add second level domain to `data/second_level_domains.csv`
- Run `npm run generate` to generate JSON map file
- Run `npm test`

## License

[MIT](LICENSE)
