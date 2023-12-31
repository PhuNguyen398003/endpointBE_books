const express = require('express')
const app = express()

let books = {
      "1": {"author": "Chinua Achebe","title": "Things Fall Apart", "reviews": {} },
      "2": {"author": "Hans Christian Andersen","title": "Fairy tales", "reviews": {} },
      "3": {"author": "Dante Alighieri","title": "The Divine Comedy", "reviews": {} },
      "4": {"author": "Unknown","title": "The Epic Of Gilgamesh", "reviews": {} },
      "5": {"author": "Unknown","title": "The Book Of Job", "reviews": {"test" : "abc"} },
      "6": {"author": "Unknown","title": "One Thousand and One Nights", "reviews": {} },
      "7": {"author": "Unknown","title": "Nj\u00e1l's Saga", "reviews": {} },
      "8": {"author": "Jane Austen","title": "Pride and Prejudice", "reviews": {} },
      "9": {"author": "Honor\u00e9 de Balzac","title": "Le P\u00e8re Goriot", "reviews": {} },
      "10": {"author": "Samuel Beckett","title": "Molloy, Malone Dies, The Unnamable, the trilogy", "reviews": {} }
}

app.get( "/" , (req , res) => {
      res.status(200).json({ "message" : "Enndpoint online" })
} )


app.get( "/bookslist" , (req , res) => {
      const dataBooks = JSON.stringify(books)
      res.status(200).json({ "message" : "Received BooksList" , "data" : dataBooks })
} )

const PORT = 4000

app.listen( PORT , ()  => console.log(`BOOKS Server runnning on PORT : ${PORT}`))
