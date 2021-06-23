const express = require('express')
const path = require("path");
const controller = require('./src/controller/controller.js');//le fichier


const app = express();
const port = process.env.PORT || 3050;

const static = path.join(__dirname + "/pages");

app.use(express.static(static));
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended : true}))

app.get('/', function(req, res) {
   
    res.sendFile(static + '/first.html');
    
});

app.get('/g', function(req, res) {
    req.body.action = "list"
    
    controller.controller(req, res, (err, result) => {
        if (err) {
            console.log("ERROR")
        } else {
            res.header('Content-type', 'application/json');
            res.header('Charset', 'utf8');
            console.log(result)
            res.send(JSON.stringify(result))
        }
    })
});

app.post('/g', function(req, res) {
    console.log(`ACTION ${req.body.action}`)
    console.log(`VALUE ${req.body.requestValue}`)
    controller.controller(req, res, (err, result) => {
        if (err) {
            console.log("ERROR")
        } else {
            res.header('Content-type', 'application/json');
            res.header('Charset', 'utf8');
            console.log(result)
            res.send(JSON.stringify(result))
        }
    })
});


app.listen(port, () => {
    console.log("Express is up on port " + port)
});