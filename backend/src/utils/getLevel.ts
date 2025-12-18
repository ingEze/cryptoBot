import { LevelType } from '../types/types.js'
import { LEVELS } from './data/levels.js'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getLevel(msg: string, coinData: any): LevelType {
  const lowerMsg = msg.toLowerCase()

  for (const level of ['global', 'trending', 'exchanges']) {
    const keywords = LEVELS[level as keyof typeof LEVELS]
    if (keywords.some((word: string) => lowerMsg.includes(word))) {
      return level as LevelType
    }
  }

  if (!coinData) {
    return 'simpleInfo'
  }

  const hasTokenKeywords = LEVELS.tokenInfo.some((word: string) => lowerMsg.includes(word))

  if (hasTokenKeywords && coinData?.type === 'token' || coinData?.type === '' && coinData?.network && coinData?.contract) {
    return 'tokenInfo'
  }

  for (const level in LEVELS) {
    if (level === 'tokenInfo') continue

    const keywords = LEVELS[level as keyof typeof LEVELS]
    if (keywords.some((word: string) => lowerMsg.includes(word))) {
      return level as LevelType
    }
  }

  return 'simpleInfo'
}

export function dontNeedCoinInfo(msg: string): boolean {
  if (!msg) return false
  const lowerMsg = msg.toLowerCase()
  const isGlobal = LEVELS.global.some(keyword => lowerMsg.includes(keyword))
  const isTrending = LEVELS.trending.some(keyword => lowerMsg.includes(keyword))
  const isExchanges = LEVELS.exchanges.some(keyword => lowerMsg.includes(keyword))

  return isGlobal || isTrending || isExchanges
}
