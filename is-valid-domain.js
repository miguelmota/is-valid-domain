(function(root) {

  function isValidDomain(v, opts) {
    if (typeof v !== 'string') return false
    if (!(opts instanceof Object)) opts = {}

    var parts = v.split('.')
    if (parts.length <= 1) return false

    var tld = parts.pop()
    var tldRegex = /^(?:xn--)?[a-zA-Z0-9]+$/gi

    if (!tldRegex.test(tld)) return false
    if (opts.subdomain == false && parts.length > 1) return false

    var isValid = parts.every(function(host, index) {
      if (opts.wildcard && index === 0 && host === '*' && parts.length > 1) return true

      var hostRegex = /^(?!:\/\/)([a-zA-Z0-9]+|[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9])$/gi;

      return hostRegex.test(host)
    })

    return isValid
  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = isValidDomain;
    }
    exports.isValidDomain = isValidDomain;
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return isValidDomain;
    });
  } else {
    root.isValidDomain = isValidDomain;
  }

})(this);