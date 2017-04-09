var mongoose = require('mongoose');

module.exports = mongoose.model('Artists',{
  birthYear:Number,
  fc: String,
  gender: String,
  id: String,
  mda:String,
  startLetter: String,
  totalWorks: Number,
  url: String,
});
