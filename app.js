const express = require("express")
const app = express()

app.get('/', (req, rep) => rep.send('Hello, world!!!'))

const PORT = 3000

app.get('/:username/messages', (req, res) => {
    console.log(req.params)
    res.end();
})

app.get('/:username/messages/:messageId', (req, res) => {
    console.log(req.params)
    res.end();
})

app.get('/messages', (req, res) =>{
    res.send('This route will not be reached because because the previous routes path matches first')

})

app.get('/{*splat}', (req, res) =>{
    res.send('/{*} is a great way to catch all otherwise unmatched paths, e.g. for custom 404 error handling.')

})

app.listen(PORT, (error) => {
    if (error){
        throw error
    }
    console.log(`My first Express app - Listening on port ${PORT}!`)
})