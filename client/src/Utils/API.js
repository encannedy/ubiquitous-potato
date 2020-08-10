import axios from "./node_modules/axios";

export default {
  getBook: function (query) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id).then(result => result.data);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData).then(result => result.data),
    res.status(200).json({book:"book add succesful"}).catch(err => {
   res.status (400).send({book: "book save fail"});
 });
  },
  // Get the saved a books from the database
  savedBooks: function () {
    return axios.get("/api/books").then(result => result.data);
  }
};