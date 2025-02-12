import express from 'express'
import router from './router'
import { connectDB } from './config/db'

const app = express()
connectDB()
//Leer datos desde los formularios
app.use(express.json())

app.use('/', router)


export default app