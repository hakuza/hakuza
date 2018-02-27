const db = require('../db');
const queryCreator = require('../db/query.js');

module.exports = {
  compare: {
    get: function(req, res) {
      // console.log(req.query);
      // req.query = {
      //   id: courseID,
      // };
      db
        .query(queryCreator.getSimilarCourses(req.query.id))
        .then(dbResponse => {
          // console.log(dbResponse);
          res.writeHead(200);
          res.end(JSON.stringify(dbResponse));
        })
        .catch(err => {
          throw err;
        });
    },
  },
};
