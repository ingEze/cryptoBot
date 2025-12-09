import app from './app.js'
import dotenv from 'dotenv'
import { createServer } from 'http'
import { Server } from 'socket.io'
import logger from './utils/logger.js'
import { botService } from './service/bot.service.js'
import { corsOptions } from './utils/cors.js'

dotenv.config()

const PORT = process.env.PORT || 3000

const httpServer = createServer(app)
const io = new Server(httpServer, { cors: corsOptions })

io.on('connection', (socket) => {
  socket.on('message', async(msg: string) => {
    const response = await botService(String(msg))
    socket.emit('response', response)
  })

  socket.on('disconnect', () => socket.id)
})

httpServer.listen(PORT, () => {
  logger.info(`Server running on ${process.env.APP_URL}:${PORT}`)
})
