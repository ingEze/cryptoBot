import { patterns } from './data/Days.js'
import { patternsPage } from './data/pages.js'

export class ExtractInfo {
  static extractDays(msg: string): { type: string, value: string } | string {
    msg = msg.toLowerCase()
    for (const p of patterns) {
      const match = msg.match(p.regex)
      if (match) {
        const n = Number(match[1])
        return (n * p.multiplier).toString()
      }
    }
    return '1'
  }

  static extractPage(msg: string): number {
    msg = msg.toLowerCase()
    for (const p of patternsPage) {
      const match = msg.match(p.regex)
      if (match) {
        return Number(match[1])
      }
    }
    return 10
  }
}
