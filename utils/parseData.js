const parse = require('csv-parse/lib/sync')
const fs = require('fs');


const parseData = () => {
const input = fs.readFileSync('data.csv', 'utf8');
const records = parse(input, {
  columns: true,
  skip_empty_lines: true
})
fs.writeFileSync('data.json', JSON.stringify(records));
}

module.exports = {parseData: parseData};
