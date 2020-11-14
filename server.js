var express = require('express');

var app = express();

app.get('/', function(rew, res){
    res.sendfile(_dirname + '/views/index.html');
});

app.listen(9000);

console.log("Prueba", app.settings.env);