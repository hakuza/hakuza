const rp = require("request-promise");
const Review = require("./database/index.js");

async function getCourses() {
  let data = "";
  let courseReview = [];
  let options = {
    method: "GET",
    uri: `https://www.udemy.com/api-2.0/courses/?page_size=100`,
    headers: {
      Authorization:
        "Basic TzhFUjFwSXdseFVmSTB1MHgxYXhyUEFtWEp4V3lOWWJxWXdpVmZ1Njoyc0EyNGxoSzBKRWdvNFlsRjd4c3pmYnZPV0M3UzZlSDJwcTVSWm8zZTdHTjdEY3JHSkZoNFcyckdsNXJ4N2ZCMlpPaFJHQ2tIU21WQjM0NlEyVVk3blZObzUzUVNMaWlWVXlzWTlOWE9ZdzZ4Uk43NEVMOE5SYW5haDJuUU42Tw==",
      Accept: "application/json, text/plain, */*"
    }
  };
  try {
    data = JSON.parse(await rp(options));
  } catch (err) {
    console.log(err);
  }
  for (var i = 0; i < data.results.length; i++) {
    async function getReviews(id) {
      let options = {
        method: "GET",
        uri: `https://www.udemy.com/api-2.0/courses/${id}/reviews/?fields[course_review]=@all`,
        headers: {
          Authorization:
            "Basic TzhFUjFwSXdseFVmSTB1MHgxYXhyUEFtWEp4V3lOWWJxWXdpVmZ1Njoyc0EyNGxoSzBKRWdvNFlsRjd4c3pmYnZPV0M3UzZlSDJwcTVSWm8zZTdHTjdEY3JHSkZoNFcyckdsNXJ4N2ZCMlpPaFJHQ2tIU21WQjM0NlEyVVk3blZObzUzUVNMaWlWVXlzWTlOWE9ZdzZ4Uk43NEVMOE5SYW5haDJuUU42Tw==",
          Accept: "application/json, text/plain, */*"
        }
      };
      let review;
      try {
        review = JSON.parse(await rp(options));
      } catch (err) {
        console.log(err);
      }
      var storage = {};
      storage.courseId = id;
      storage.reviews = review.results;
      var reviewList = new Review.Review(storage);
      reviewList
        .save(function(err) {
          if (err) {
            console.log(err);
          } else {
            console.log("saved!");
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
    getReviews(data.results[i].id);
  }
}

getCourses().then(err => {
  if (err) {
    console.log(err);
  } else {
    null;
  }
});

module.exports.getCourses = getCourses;
