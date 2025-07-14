const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/k5-Nodemy',{
useNewurlParser: true,
useUniFiledTopology: true
})
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BlogPost = new Schema({
  author: ObjectId,
  title: String,
  body: String,
  date: Date
});