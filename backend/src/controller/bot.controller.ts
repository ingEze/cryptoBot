import { Request, Response, NextFunction } from 'express'
import { botService }  from 'src/service/bot.service.js'

export const botController = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { msg } = req.body
    if (!msg) {
      res.status(400).json({
        success: false,
        message: 'El mensaje no puede estar vacío',
        level: 'error',
        data: {}
      })
    }
    const response = await botService(String(msg))
    res.status(200).json({
      success: true,
      message: response.message,
      level: response.level,
      data: response.data
    })
  } catch (err) {
    next(err)
  }
}
