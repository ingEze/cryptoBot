import { Request, Response, NextFunction } from 'express'

export const corsConfig = {
  allowedOrigins: [
    'http://localhost:4321',
    'http://localhost:3000',
    'http://127.0.0.1:4321',
    'http://127.0.0.1:3000'
  ],

  methods: ['GET', 'PATCH', 'POST', 'DELETE', 'PUT', 'OPTIONS'],

  allowedHeaders: [
    'Content-Type',
    'Authorization',
    'X-Requested-With',
    'Accept'
  ],
  credentials: true,
  maxAge: 86400
}

export const corsMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const origin = req.headers.origin

  if (origin && corsConfig.allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin)
  }

  res.setHeader('Access-Control-Allow-Methods', corsConfig.methods.join(', '))
  res.setHeader('Access-Control-Allow-Headers', corsConfig.allowedHeaders.join(', '))
  res.setHeader('Access-Control-Allow-Credentials', corsConfig.credentials.toString())
  res.setHeader('Access-Control-Max-Age', corsConfig.maxAge.toString())

  if (req.method === 'OPTIONS') {
    res.sendStatus(204)
    return
  }

  next()
}

export const corsOptions = {
  origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void): void => {
    if (!origin) {
      return callback(null, true)
    }

    if (corsConfig.allowedOrigins.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('No permitido por CORS'))
    }
  },
  methods: corsConfig.methods,
  allowedHeaders: corsConfig.allowedHeaders,
  credentials: corsConfig.credentials,
  maxAge: corsConfig.maxAge
}
