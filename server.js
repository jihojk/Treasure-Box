const express = require('express')
const app = express()
PORT = 3000

const customMiddleware = ()=>{
    console.log("middleware executed!")
}

app.use(customMiddleware)

app.get('/', (req, res) => {
    res.send("helo world")
})

app.listen(PORT, ()=>
console.log("server is running on", PORT))