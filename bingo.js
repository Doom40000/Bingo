const { readFile } = require('fs');


readFile('Part1.txt', (err, data) => {
  if (err) console.error(err);

  console.log(data.toString());
});

