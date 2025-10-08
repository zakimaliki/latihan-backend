require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 4000

const ProductRouter = require("./src/routes/productRouter")
const UserRouter = require("./src/routes/userRouter")

app.use(express.json());

app.use('/products', ProductRouter)
app.use('/user', UserRouter)


app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})