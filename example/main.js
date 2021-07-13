var isValidDomain = require('../')

var domain = document.querySelector('#domain')
var subdomain = document.querySelector('#subdomain')
var topLevel = document.querySelector('#topLevel')
var wildcard = document.querySelector('#wildcard')
var unicode = document.querySelector('#unicode')
var submit = document.querySelector('#submit')
var output = document.querySelector('#output')

submit.addEventListener('click', update)
domain.addEventListener('input', update)
subdomain.addEventListener('change', update)
topLevel.addEventListener('change', update)
wildcard.addEventListener('change', update)
unicode.addEventListener('change', update)

update()

function update(event) {
  if (event) event.preventDefault()
  output.innerHTML = String(isValidDomain(domain.value, {
    subdomain: subdomain.checked,
    topLevel: topLevel.checked,
    wildcard: wildcard.checked,
    allowUnicode: unicode.checked,
  }))
}
