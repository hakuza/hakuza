const express = require('express')
const app = express();

app.use(express.static('./public'));

app.listen(3005, () => console.log('listening on port 3005'));