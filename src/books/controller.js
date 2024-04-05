const pool = require('../db')
const queries = require('./queries')

const getBooks = (req, res) => {
    pool.query(queries.getBooks, (error, result) => {
        if (error) throw error
        
        res.status(200).json(result.rows)
    })
}

const getBookById = (req, res) => {
    const id = req.params.id
    
    pool.query(queries.getBookById, [id], (error, result) => {
        if (error) throw error

        res.status(200).json(result.rows)
    })
}

module.exports = {
    getBooks,
    getBookById
}