(function(root) {

  function isValidDomain(v) {
    if (typeof v !== 'string') return false

    var parts = v.split('.')
    if (parts.length <= 1) return false

    var tld = parts.pop()
    var tldRegex = /^[a-zA-Z0-9]+$/gi

    if (!tldRegex.test(tld)) return false

    var isValid = parts.every(function(host) {
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