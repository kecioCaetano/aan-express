const db = require('../db')

async function getBookById(req, res){

    const {bookId} = req.params;

    try{
        const book = await db.getBookById(Number(bookId))
        if(!book){
            res.status(404).send('Book not found.')
            return
        }
        res.send(`Book name: ${book.title}`)
    }catch(error){
        console.error('Error retrieving book:', error)
        res.status(500).send('Internal server error')
    }
}

module.exports = {getBookById}