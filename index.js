import express from 'express'
import 'dotenv/config'
import helmet from 'helmet'
import morgan from 'morgan'
import cors from 'cors'
import ProductRouter from './src/routes/productRouter.js'
import UserRouter from './src/routes/userRouter.js'

const app = express()
const port = process.env.PORT || 4000

app.use(helmet())
app.use(cors())
app.use(express.json());
app.use(morgan('dev'))


app.use('/products', ProductRouter)
app.use('/user', UserRouter)


app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})