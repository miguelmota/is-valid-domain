var test = require('tape');
var isValidDomain = require('../is-valid-domain');

test('is valid domain', function (t) {
  t.plan(28);

  t.equal(isValidDomain('example.com'), true);
  t.equal(isValidDomain('foo.example.com'), true);
  t.equal(isValidDomain('bar.foo.example.com'), true);
  t.equal(isValidDomain('exa-mple.co.uk'), true);
  t.equal(isValidDomain('a.com'), true);
  t.equal(isValidDomain('a.b'), true);
  t.equal(isValidDomain('foo.bar.baz'), true);
  t.equal(isValidDomain('foo-bar.ba-z.qux'), true);
  t.equal(isValidDomain('hello.world'), true);

  t.equal(isValidDomain('bar.q-ux'), false);
  t.equal(isValidDomain('exa_mple.com'), false);
  t.equal(isValidDomain('example'), false);
  t.equal(isValidDomain({}), false);
  t.equal(isValidDomain(function(){}), false);
  t.equal(isValidDomain('ex*mple.com'), false);
  t.equal(isValidDomain('@#$@#$%fd'), false);
  t.equal(isValidDomain(3434), false);
  t.equal(isValidDomain('_example.com'), false);
  t.equal(isValidDomain('-example.com'), false);
  t.equal(isValidDomain('foo._example.com'), false);
  t.equal(isValidDomain('foo.-example.com'), false);
  t.equal(isValidDomain('foo.example-.co.uk'), false);
  t.equal(isValidDomain('example-.com'), false);
  t.equal(isValidDomain('example_.com'), false);
  t.equal(isValidDomain('foo.example-.com'), false);
  t.equal(isValidDomain('foo.example_.com'), false);
  t.equal(isValidDomain('example.com-'), false);
  t.equal(isValidDomain('example.com_'), false);
});
