import { Router } from 'express'
import { botController } from 'src/controller/bot.controller.js'

const msgRouter = Router()

msgRouter.post('/message', botController)

export default msgRouter
