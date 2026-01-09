import { createClient } from 'redis'
import logger from '../utils/logger.js'

const REDIS_URL = process.env.REDIS_URL ?? 'redis://localhost:6379'

export const redisClient = createClient({
  url: REDIS_URL
})

redisClient.on('error', (err) => {
  logger.error('Redis error', err)
})

export async function connectRedis(): Promise<void> {
  if (!redisClient.isOpen) {
    await redisClient.connect()
    logger.info('Redis connected')
  }
}
