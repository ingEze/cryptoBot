import express from 'express'
import msgRouter from './routes/message.routes.js'
import { errorHandler } from './middlewares/errorHandler.js'
import { corsMiddleware } from './utils/cors.js'

const app = express()
app.use(express.json())
app.use(corsMiddleware)

app.use('/api', msgRouter)

app.use(errorHandler)

export default app
