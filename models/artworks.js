var mongoose = require('mongoose');
var random = require('mongoose-simple-random');

/*module.exports = mongoose.model('Artworks',{
	title: String,
	thumbnailUrl: String,
	width:String,
	height:String,
	all_artists:String
});*/

var ArtworksSchema = mongoose.Schema({
	title: String,
	thumbnailUrl: { type: String, unique: true },
	width:String,
	height:String,
	all_artists:String,

})


var Artworks = module.exports = mongoose.model('Artworks', ArtworksSchema);





/*var schema = new mongoose.Schema({
	title: String,
	thumbnailUrl: String,
	width:String,
	height:String,
	all_artists:String
});
var Artworks = mongoose.model('Artworks', schema);

/*module.exports.find = function(count, callback){
	Artworks.count().exec(function (err, count) {

	  // Get a random entry
	  var random = Math.floor(Math.random() * count)

	  // Again query all users but only fetch one offset by our random #
	  Artworks.find({}).limit(8).skip(random).exec(
	    function (err, result) {

	      console.log(result)

	    })
	})
}



module.exports = {
    Artworks: Artworks
};
*/

/*var mongoose = require('mongoose');


var s = mongoose.Schema({
title: String,
thumbnailUrl: String,
width:String,
height:String,
all_artists:String
});
s.plugin(random);

Artworks = mongoose.model('Artworks', s);

Artworks.findRandom({}, {}, {limit: 8}, function(err, results) {
  if (!err) {
    console.log(results); // 8 elements
  }
});*/
