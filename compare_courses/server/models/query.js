const _ = require('lodash');

exports.insert = (item) => 
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
`

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