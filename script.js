var express = require('express');
var app = express();


app.get('/ancient_places', function(req, res) {

  res.send("hello world");
});

app.listen(3000, function(){
  console.log('App is running!');
});
