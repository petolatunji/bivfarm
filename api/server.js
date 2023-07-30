import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import userRoute from './routes/userRoute.js'
import authRoute from './routes/authRoute.js'

const app = express()
dotenv.config()

mongoose.set('strictQuery', true)

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO)
    console.log('connected to DB')
  } catch (error) {
    console.log(error)
  }
}

//middlewares
app.use(cors({ origin: 'http://localhost:3000', credentials: true }))
app.use(express.json())
app.use(cookieParser())

app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)

//Error management
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500
  const errorMessage = err.message || 'Something went wrong!'

  return res.status(errorStatus).send(errorMessage)
})

app.listen(8800, () => {
  connect()
  console.log('backend server connected')
})
