const express = require('express');
const port = process.env.PORT || 3001;
const mongoose = require("mongoose");
const book = require("./model")
const app = express();
let cors = require('cors')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

const books = {
  authors: "Suzanne Collins",
  description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
  image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
  link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api",
  title: "The Hunger Games",
}


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
    book.find({title : req.body.tile}).then( books => {
      res.json(books);
    }).catch(err => {
      res.status(404).json(err);
    });
})

app.post("/api/books", async (req,res) => {
  book.create(books).then( books => {
    res.json(books);
  }).catch(err => {
    res.status(404).json(err);
  });
})

app.delete("/api/books/:id", async (req,res) => {
  res.json({Answer : books})
})

app.listen(port, () => {
  console.log('CRA server running on port', port);
});