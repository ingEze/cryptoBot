/* eslint-disable @typescript-eslint/no-explicit-any */
import { LevelType } from 'src/types/types.js'
import { responseHandlers, sanitizeResponse } from './index.js'

export function buildResponse(level: LevelType, rawResponse: any, userMsg?: string): string {
  const sanitized = sanitizeResponse(level, rawResponse)

  const handler = responseHandlers[level]
  if (!handler) {
    return '❌ No puedo procesar ese nivel de información'
  }

  let response = handler(sanitized)

  if (level === 'tokenInfo' && userMsg) {
    const networks = ['bsc', 'eth', 'ethereum', 'polygon', 'avax', 'arbitrum', 'optimism', 'solana', 'matic', 'bnb']
    const lowerMsg = userMsg.toLowerCase()

    const isProbablyNetwork = networks.some(net => lowerMsg.includes(net)) ||
      lowerMsg.includes('chain') ||
      lowerMsg.includes('network') ||
      lowerMsg.includes('red')

    if (isProbablyNetwork) {
      const parsed = JSON.parse(response)
      parsed.warning = userMsg.trim()
      response = JSON.stringify(parsed)
    }
  }
  return response
}
