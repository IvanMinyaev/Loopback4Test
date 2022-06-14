const fs = require('fs');
const iconv = require('iconv-lite');
const csv = require('csv-parser');

let results = [];
fs.readFile('1.csv', null, function read(err, data) {
if (err) {
throw err;
}
const file = iconv.decode(Buffer.from(data), 'win1251').toString();
fs.writeFile('readingFile.csv', file, function () {
fs.createReadStream('readingFile.csv')
.pipe(csv({ separator: ';', headers: ["id", "createDate", "reviewPeriod", "incomingNumber", "outgoingNumber", "applicantStatus", "applicantId", "shipId", "departurePlace", "departureLon", "departureLat", "destinationPlace", "destinationLon", "destinationLat", "routeDescription", "etaNsr", "etdNsr", "crew", "passangers", "shipOwnerName", "towedObject", "cargoTypeId", "hazardClassId", "weight", "weightDangerous", "shipName", "imo", "registerNumber", "applicantName", "statusName", "statusNameEn", "sendDate", "userId", "isCurrentUserOwner", "acceptDate", "endDate", "rejectDate"] }))
.on('data', (data) => results.push(data))
.on('end', () => {
console.log(results);
});
});
});
