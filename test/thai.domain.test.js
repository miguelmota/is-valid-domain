var test = require('tape')
var isValidDomain = require('../')
var sldMap = require('../data/sldMap.json')

test('is valid domain', function (t) {
  t.plan(5)
  t.equal(isValidDomain('universal-acceptance-test.international'), true)
  t.equal(isValidDomain('universal-acceptance-test.icu'), true)
  t.equal(isValidDomain('ยูเอทดสอบ.ไทย'), true)
  t.equal(isValidDomain('ทีเอชนิค.องค์กร.ไทย'), true)
  t.equal(isValidDomain('เราไม่ทิ้งกัน.com'), true)
})
