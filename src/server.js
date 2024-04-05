const express = require('express')
const booksRoutes = require('./books/routes')

const app = express()
const port = 9000

// app.use('/api/v1', booksRoutes)
app.use('/books', booksRoutes)
app.use(express.json)

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})