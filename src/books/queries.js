const getBooks = 'SELECT * FROM bookshelf;'
const getBookById = 'SELECT * FROM bookshelf WHERE id=$1;'

module.exports = {
    getBooks,
    getBookById
}