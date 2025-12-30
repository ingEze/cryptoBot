import { NO_COIN_DATA } from './data/noCoinDataResponses.js'

export function coinNotFound(): string {
  const max = NO_COIN_DATA.length
  const random = Math.floor(Math.random() * max)
  return NO_COIN_DATA[random]
}
