

var express = require('express');
var app = express();
var http = require('http').Server(app);

                        //requete, resultat
app.get('/', function(req, res){
    res.sendFile(__dirname + '/tmpl/portfolio.html');
    
});


app.use('/css' , express.static(__dirname + '/tmpl/css'));
app.use('/js' , express.static(__dirname + '/tmpl/js'));
app.use('/img' , express.static(__dirname + '/tmpl/img'));


http.listen(1337, function(){ 
    console.log('listening on *:1337');
});




