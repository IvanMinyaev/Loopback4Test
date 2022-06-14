const fs = require('fs');
const iconv = require('iconv-lite');
const csv = require('csv-parser');

// module.exports = function getDataFoo() {
    let waybillsList = [];
    fs.readFile('1.csv', null, function read(err, data) {
        if (err) {
            throw err;
        }
        const file = iconv.decode(Buffer.from(data), 'win1251').toString();
        fs.writeFile('convertedFile.csv', file, function () {
            fs.createReadStream('convertedFile.csv')
                .pipe(csv({ separator: ';', headers: ["id", "shipId", "departurePlace", "crew", "passangers"] }))
                .on('data', (data) => waybillsList.push(data))
                .on('end', () => {
                  console.log(waybillsList);
                // return waybillsList;
            });
        });
    });
// };
