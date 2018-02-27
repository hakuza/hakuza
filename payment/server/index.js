const express = require('express')
const bodyParser = require('body-parser')
const app = express();
app.set('port',3003);
app.use(express.static(__dirname + '/../public'))
app.listen(app.get('port'),()=> console.log(`listening on port ${app.get('port')}`))