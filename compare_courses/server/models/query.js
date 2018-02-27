const _ = require('lodash');

exports.insertCourse = item =>
  `
    INSERT INTO courses (
      title, 
      avg_rating, 
      num_subs, 
      price, 
      thumbnail_url,
      updated_at,
      description
    )
    VALUES (
      "${_.escape(item.title)}",
      "${item.avg_rating}",
      "${item.num_subscribers}",
      "${item.price}",
      "${item.image_125_H}",
      "${item.created}",
      "${_.escape(item.description)}"
    )
  `;

exports.insertSimilar = (course1_id, course2_id) =>
  `
    INSERT INTO similar_courses
    VALUES (${course1_id}, ${course2_id})
  `;

// exports.insert = (item) =>
// `
//   INSERT INTO courses (
//     title,
//     avg_rating,
//     num_subs,
//     price,
//     thumbnail_url,
//     updated_at
//   )
//   VALUES (
//     "${item.title}",
//     "${item.avg_rating}",
//     "${item.num_subscribers}",
//     "${item.price}",
//     "${item.image_125_H}",
//     "${item.created}"
//   )
// `
