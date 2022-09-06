const express = require('express')
const v1UsersRouter = require("./v1/routes/users")
const bodyParser = require('body-parser')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use("/api/v1", v1UsersRouter)

app.listen(PORT, ()=>{console.log(`🚀Server listening on port ${PORT}`)})