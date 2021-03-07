const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  authors: String,
  description : String,
  image: String,
  link : String,
  title :String,
});


const Book = mongoose.model("Books", BookSchema);

module.exports = Book;
