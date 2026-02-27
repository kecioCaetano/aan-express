const authors = [
    {id: 1, name: 'Brian'},
    {id: 2, name: 'Christian'},
    {id: 3, name: 'Jason'},
    {id: 4, name: 'Kecio'}
]

async function getAuthorById(authorId){
    return authors.find(author => author.id = authorId)
}

module.exports = {getAuthorById}