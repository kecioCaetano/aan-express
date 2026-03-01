const authors = [
    {id: 1, name: 'Brian'},
    {id: 2, name: 'Christian'},
    {id: 3, name: 'Jason'},
    {id: 4, name: 'Kecio'}
]

const books = [
    {id:123, title: 'Aaaa aaa'},
    {id:321, title: 'Bbbb bbb'},
    {id:213, title: 'Cccc ccc'}
]

async function getAuthorById(authorId){
    return authors.find(author => author.id = authorId)
}

async function getBookById(bookId){
    return books.find(book => book.id = bookId)
}

module.exports = {getAuthorById, getBookById}