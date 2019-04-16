var isValidDomain = require('../')

var domain = document.querySelector('#domain')
var subdomain = document.querySelector('#subdomain')
var wildcard = document.querySelector('#wildcard')
var submit = document.querySelector('#submit')
var output = document.querySelector('#output')

submit.addEventListener('click', update)
domain.addEventListener('input', update)
subdomain.addEventListener('change', update)
wildcard.addEventListener('change', update)

update()

function update(event) {
  if (event) event.preventDefault()
  output.innerHTML = String(isValidDomain(domain.value, {
    subdomain: subdomain.checked,
    wildcard: wildcard.checked,
  }))
}
