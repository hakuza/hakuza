const express = require("express");
const app = express();

app.use(express.static("./public"));

app.get("/description", (response, request) => {});

app.listen(3001, () => {
  console.log("Listening on port 3001");
});
