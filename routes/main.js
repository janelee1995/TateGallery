var app = module.parent.exports.app;

var Artists = require('../models/artists.js');
var Artworks = require('../models/artworks.js');



app.post('/explore', function (req, res) {
  id = req.body.id;
  Artists.find({'fc':id}).limit(1).exec(function (err, result) {
    res.send({ results: result });
});
});

app.get('/explore', function(req, res){
  var count = Artworks.count().exec(function (err, count) {
    var images = [];
  	var random = Math.floor(Math.random() * count);
  	Artworks.find({"thumbnailUrl": { $ne : null}}).limit(6000).skip(random).exec(function (err, result) {

          var keys = Object.keys(result); //  returns an array whose elements are strings corresponding to the properties found directly upon object
          var n = keys.length; //get length of array
             for(int = 0; int < 8; int++){ // loop through to find 8 random objects
               var index = Math.floor(Math.random() * n); // random number
               var randomKey = keys[index];
               var image = result[randomKey];
               if (typeof image == 'undefined'){
                 var image = result[randomKey];
                 return false;
               }
               else{
               images.push(image); // push each object to
              }
            }
       res.render('explore', { title: 'Artwork', artworks: images, page_heading: 'Tate Gallery'});
  		})
      })
    });


app.get('/gallery', function(req, res){
    res.render('gallery', {title: 'Gallery',page_heading: 'Tate Gallery'});
});

app.post('/gallery', function(req, res){
    id = req.body.id;
    Artworks.find({'thumbnailUrl': {$ne : null},'all_artists':new RegExp(id, "i")}).exec(function (err, result) {
    res.send({ results: result });
});

});
