//require statements
let express = require('express')

//declare a nrew express app
let app = express()

//Declare routes 
app.get('/', (req, res) => {
    res.send('Home page stub')
})

//Pick a port for it to listen on 
app.listen(3000, () => {
    console.log('ready to rock and roll!')
}) 