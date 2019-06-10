var sldMap= require('./domains/sld')

module.exports = function isValidDomain(v, opts) {
  if (typeof v !== 'string') return false
  if (!(opts instanceof Object)) opts = {}
  v = v.toLowerCase()

  var validChars = /^([a-z0-9-.*]+)$/g
  if (!validChars.test(v)) {
    return false
  }

  var sldRegex = /(.*)\.(([a-z0-9]+)(\.[a-z0-9]+))/
  var matches = v.match(sldRegex)
  var tld = null
  var parts = null
  if (matches && matches.length > 2) {
    if (sldMap[matches[2]]) {
      tld = matches[2]
      parts = matches[1].split('.')
    }
  }

  if (!parts) {
    parts = v.split('.')
    if (parts.length <= 1) return false

    tld = parts.pop()
    var tldRegex = /^(?:xn--)?(?!^\d+$)[a-z0-9]+$/gi

    if (!tldRegex.test(tld)) return false
  }

  if (opts.subdomain == false && parts.length > 1) return false

  var isValid = parts.every(function(host, index) {
    if (opts.wildcard && index === 0 && host === '*' && parts.length > 1) return true

    var hostRegex = /^(?!:\/\/)([a-z0-9]+|[a-z0-9][a-z0-9-]*[a-z0-9])$/gi;

    return hostRegex.test(host)
  })

  return isValid
}