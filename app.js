const express = require("express")
const app = express()
const authorRouter = require('./routes/authorRouter')
const bookRouter = require('./routes/bookRouter')
const indexRouter = require('./routes/indexRouter')


app.use('/authors',authorRouter)
app.use('/books', bookRouter)
app.use('/', indexRouter)
// app.get('/', (req, rep) => rep.send('Hello, world!!!'))

app.use((err, req, res, next) => {
    console.error(err)
    res.status(err.statusCode || 500).send(err.message)
})

const PORT = 3000

// app.get('/:username/messages', (req, res) => {
//     console.log(req.params)
//     res.end();
// })

// app.get('/:username/messages/:messageId', (req, res) => {
//     console.log(req.params)
//     res.end();
// })

// app.get('/messages', (req, res) =>{
//     res.send('This route will not be reached because because the previous routes path matches first')

// })

// app.get('/{*splat}', (req, res) =>{
//     res.send('/{*} is a great way to catch all otherwise unmatched paths, e.g. for custom 404 error handling.')

// })

app.listen(PORT, (error) => {
    if (error){
        throw error
    }
    console.log(`My first Express app - Listening on port ${PORT}!`)
})