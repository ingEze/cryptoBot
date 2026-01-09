import { createServer } from 'http'
import { Server } from 'socket.io'
import logger from '../utils/logger.js'
import { botService } from '../service/bot.service.js'
import { connectRedis } from '../config/redis.js'

async function bootstrap(): Promise<void> {
  const PORT = Number(process.env.PORT) || 3000
  try {
    await connectRedis()

    const httpServer = createServer()
    const io = new Server(httpServer, {
      cors: {
        origin: process.env.FRONTEND_URL,
        methods: ['GET', 'POST'],
        credentials: true
      }
    })

    io.on('connection', (socket) => {
      socket.on('message', async(msg: string) => {
        try {
          const response = await botService(String(msg))
          socket.emit('response', response)
        } catch (err) {
          logger.error(err)
          socket.emit('response', {
            success: false,
            message: 'Ocurrió un error procesando tu mensaje'
          })
        }
      })

      socket.on('disconnect', () => socket.id)
    })

    httpServer.listen(PORT, '0.0.0.0', () => {
      logger.info(`Server running on port ${PORT}`)
    })

  } catch (err) {
    logger.error('Error during bootstrap', err)
    process.exit(1)
  }
}

export default bootstrap
