const express = require('express')
const app = express()
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db/db.json')
const db = low(adapter)
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

db.defaults({ posts: [] })
  .write()

app.get('/', function (req, res) {
  res.send(db.get('posts').value())
})

app.post('/',function (req, res) {
    db.get('posts').push(req.body).write()
    res.sendStatus(204);
})

app.get('/health', function (req, res) {
    res.sendStatus(200);
  })

  app.get('/config', function (req, res) {
    res.json(require("./conf.json"));
  })

app.use((err,req,res,next)=>{
    console.log(err);
    res.status(500);
    res.send(err.message);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
