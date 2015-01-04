var test = require('tape');
var isValidDomain = require('../is-valid-domain');

test('is valid domain', function (t) {
  t.plan(11);

  t.equal(isValidDomain('example.com'), true);
  t.equal(isValidDomain('foo.example.com'), true);
  t.equal(isValidDomain('bar.foo.example.com'), true);
  t.equal(isValidDomain('exa-mple.co.uk'), true);
  t.equal(isValidDomain('exa_mple.com'), false);
  t.equal(isValidDomain('example'), false);
  t.equal(isValidDomain({}), false);
  t.equal(isValidDomain(function(){}), false);
  t.equal(isValidDomain('ex*mple.com'), false);
  t.equal(isValidDomain('@#$@#$%fd'), false);
  t.equal(isValidDomain(3434), false);
});
