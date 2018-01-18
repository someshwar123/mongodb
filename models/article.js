let mongoose = require('mongoose');


let articleSchema = mongoose.Schema({
  city: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }
});

let Article = module.exports = mongoose.model('Article', articleSchema);