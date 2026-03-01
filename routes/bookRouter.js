const {Router} = require('express')
const {getBookById} = require('../controllers/bookController')
const bookRouter = Router()

bookRouter.get('/', (req,res) => res.send('all books'))
bookRouter.get('/:bookId', getBookById)

module.exports = bookRouter