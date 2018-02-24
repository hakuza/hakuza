const db = require('../db/index.js');
const query = require('./query.js');

// const sendQuery = function(query) {
//   return new Promise((resolve, reject) => {
//     db.connection.query(query, function(err, result) {
//       if (err) reject(err);
//       resolve(result);
//     });
//   });
// }

// exports.query = sendQuery;