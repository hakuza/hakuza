var express = require("express");
var router = express.Router();
var rp = require("request-promise");

router.get("/", function(req, res) {
  async function getReviews() {
    var options = {
      method: "GET",
      uri: "https://www.udemy.com/api-2.0/courses",
      headers: {
        Authorization:
          "Basic TzhFUjFwSXdseFVmSTB1MHgxYXhyUEFtWEp4V3lOWWJxWXdpVmZ1Njoyc0EyNGxoSzBKRWdvNFlsRjd4c3pmYnZPV0M3UzZlSDJwcTVSWm8zZTdHTjdEY3JHSkZoNFcyckdsNXJ4N2ZCMlpPaFJHQ2tIU21WQjM0NlEyVVk3blZObzUzUVNMaWlWVXlzWTlOWE9ZdzZ4Uk43NEVMOE5SYW5haDJuUU42Tw==",
        Accept: "application/json, text/plain, */*"
      }
    };
    try {
      console.log(JSON.parse(await rp(options)));
      res.send(await rp(options));
    } catch (err) {
      console.log(err);
    }
  }
  getReviews();
});

module.exports = router;
