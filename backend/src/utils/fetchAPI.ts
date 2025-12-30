import axios, { AxiosResponse } from 'axios'
import { redisClient } from '../config/redis.js'

export async function fetchAPI(endpoint: string, params?: object): Promise<AxiosResponse> {
  const API_KEY = process.env.API_KEY
  if (!API_KEY) throw new Error('API_KEY is required')

  const cacheKey = buildCacheKey(endpoint, params)

  const cached = await redisClient.get(cacheKey)

  if (cached) {
    return JSON.parse(cached)
  }

  const response = await axios.get(`https://api.coingecko.com/api/v3${endpoint}`, {
    params,
    headers: {
      'x-cg-demo-api-key': API_KEY
    }
  })

  const data = response.data
  await redisClient.set(
    cacheKey,
    JSON.stringify(data),
    {
      expiration: {
        type: 'EX',
        value: getTTLByEndpoint(endpoint)
      }
    })

  return data
}

function buildCacheKey(endpoint: string, params?: object): string {
  return `api:${endpoint}:${JSON.stringify(params)}`
}

function getTTLByEndpoint(endpoint: string): number {
  if (endpoint.includes('/simple/price')) return 30
  if (endpoint.includes('/coins/markets')) return 60
  if (endpoint.includes('/exchanges')) return 60 * 60
  if (endpoint.includes('/global')) return 300
  if (endpoint.includes('/search/trending')) return 120

  return 60
}
