var test = require('tape');
var isValidDomain = require('../is-valid-domain');

test('is valid domain', function (t) {
  t.plan(40);

  t.equal(isValidDomain('example.com'), true);
  t.equal(isValidDomain('example.com:0'), false);
  t.equal(isValidDomain('example.com:'), false);
  t.equal(isValidDomain('example.com:string'), false);
  t.equal(isValidDomain('foo.example.com'), true);
  t.equal(isValidDomain('foo.example.com:1234'), true);
  t.equal(isValidDomain('foo.example.com:65564'), false);
  t.equal(isValidDomain('bar.foo.example.com'), true);
  t.equal(isValidDomain('bar.foo.example.com:7171'), true);
  t.equal(isValidDomain('exa-mple.co.uk'), true);
  t.equal(isValidDomain('exa-mple.co.uk:7171'), true);
  t.equal(isValidDomain('a.com'), true);
  t.equal(isValidDomain('a.com:7171'), true);
  t.equal(isValidDomain('a.b'), true);
  t.equal(isValidDomain('a.b:7171'), true);
  t.equal(isValidDomain('foo.bar.baz'), true);
  t.equal(isValidDomain('foo.bar.baz:7171'), true);
  t.equal(isValidDomain('foo-bar.ba-z.qux'), true);
  t.equal(isValidDomain('foo-bar.ba-z.qux:7171'), true);
  t.equal(isValidDomain('hello.world'), true);
  t.equal(isValidDomain('hello.world:7171'), true);

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
