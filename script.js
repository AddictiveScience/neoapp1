var express = require('express');
var app = express();
var cypher = require('cypher-stream')('bolt://34.228.185.57/', 'neo4j', 'Gateway2');

var data = '';

app.get('/ancient_places', function(req, res) {
  cypher('match (ancient_places:AncientPlaces) return ancient_places')
  .on('data', function(result) {
    data += JSON.stringify(result);
  })
  .on('end', function() {
    console.log("DATA");
    console.log(data);
    res.send(data);
    data = '';
  });
});

app.listen(3000, function(){
  console.log('App is running!');
});
