const { Router } = require('express')
const controller = require('./controller')

const router = Router();

router.get('/', controller.getBooks)
router.get('/:id', controller.getBookById)

module.exports = router