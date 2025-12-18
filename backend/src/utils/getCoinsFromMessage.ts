import { CoinData } from '../types/types.js'
import { KNOWN_TOKENS, NATIVE_COINS } from './data/coins.js'

export function getCoinFromMsg(msg: string): CoinData | null {
  if (!msg) return null

  const lowerMsg = msg.toLowerCase()
  for (const [keyword, tokenData] of Object.entries(KNOWN_TOKENS)) {
    const regex = new RegExp(`\\b${keyword}\\b`, 'i')
    if (regex.test(lowerMsg)) {
      return {
        ...tokenData,
        type: 'token'
      }
    }
  }

  for (const [keyword, coinData] of Object.entries(NATIVE_COINS))  {
    const regex = new RegExp(`\\b${keyword}\\b`, 'i')
    if (regex.test(lowerMsg)) {
      return {
        ...coinData,
        type: 'coin'
      }
    }
  }

  return null
}
