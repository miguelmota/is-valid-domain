var fs = require('fs')
var path = require('path')
var csv = fs.readFileSync(path.resolve(__dirname, 'second_level_domains.csv'))

var lines = csv.toString('utf8').split('\n')
var list = {}
for (var i = 0; i < lines.length; i++) {
  if (!lines[i]) continue
  var domain = lines[i].split(',')[1].trim().substr(1)
  list[domain] = true
}

fs.writeFileSync(path.resolve(__dirname, 'sld.json'), JSON.stringify(list))
console.log('done')
