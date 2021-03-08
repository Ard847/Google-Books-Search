const express = require('express');
const port = process.env.PORT || 3001;
const mongoose = require("mongoose");
const book = require("./model")
const app = express();
const cors = require('cors');
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


 


/* const connect = async() => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/books", { useNewUrlParser: true, useUnifiedTopology: true});
    console.log("DB connect")
  } catch (error) {
    console.log('Error on app launch:', error);
    process.exit(1);
  }
}; */

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/books", { useNewUrlParser: true, useUnifiedTopology: true});
 

app.get("/api/books", async (req,res) => {
  book.find().then( books => {
    res.json(books);
  }).catch(err => {
    res.status(404).json(err);
  });
})

app.post("/api/books", async (req,res) => {
   const bookSaved = req.body.books
  book.create(bookSaved).then( bookSaved => {
    res.json(bookSaved);
  }).catch(err => {
    res.status(404).json(err);
  });   
})

app.delete("/api/books/:id", async (req,res) => {
  const id = req.params.id
  book.findByIdAndDelete(id, function (err) {
    if(err) console.log(err);
    console.log("Successful deletion");
  });
})

app.listen(port, () => {
  console.log('CRA server running on port', port);
});