export interface SimpleInfoData {
  id: string
  name: string
  prices: {
    usd: number
    market_cap: number
    volume_24h: number
    change_24h: number
  }
  last_updated: Date
}

export interface TokenInfoData {
  id: string
  symbol: string
  name: string
  current_price_usd: number
}

export interface MarketInfoData {
  id: string
  symbol: string
  name: string
  image: string
  prices: {
    current: number
    high_24h: number
    low_24h: number
  }
  market: {
    cap: number
    rank: number
    volume_24h: number
  }
}

export interface FullInfoData {
  name: string
  symbol: string
  description: string
  image: string
  prices: Array<{ currency: string; price: number | string }>
  tickers: {
    top: Array<{ base: string; target: string; market: string }>
    avgPriceUsd: number
    totalVolumeUsd: number
  }
  links: {
    homepage: string[]
    whitepaper: string[]
    blockchain: string[]
  }
  last_updated: string
}

export interface TickersInfoData {
  base: string
  target: string
  market: string
  last: number
  volume: number
  trust_score: string
  trade_url: string
}

export interface ExchangeData {
  name: string
  trust_rank: number
}

export type ResponseType = 'simpleInfo' | 'tokenInfo' | 'marketInfo' | 'fullInfo' | 'tickersInfo' | 'exchanges' | 'graph'

export interface StructuredResponse {
  type: ResponseType
  data: any
}