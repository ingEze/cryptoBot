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
  trust_score: number
  trade_volume_24h_btc: number
  image: string
  trust_score_rank: number
  country: string
  year_established: string
  description: string
  url: string
}

export interface TrendingData {
  type: 'trending'
  id: string | null
  name: string | null
  symbol: string | null
  rank: number | null
  image: string | null
  price: number | null
  price_btc: number | null
  market_cap: number | null
  volume_24h: number | null
  sparkline: string | null
  change_24h: number | null
  info: {
    title: string | null
    description: string | null
  } | null
}

export interface GlobalData {
  active_cryptocurrencies: number
  markets: number
  total_market_cap: {
    usd: number
    btc: number
  }
  total_volume: {
    usd: number
    btc: number
    eth: number
  }
  market_cap_percentage: {
    btc: number
    eth: number
  }
  market_cap_change_percentage_24h_usd: number
  updated_at: number
}

export type ResponseType = 'simpleInfo' | 'tokenInfo' | 'marketInfo' | 'fullInfo' | 'tickersInfo' | 'exchanges' | 'graph' | 'trending' | 'global'

export interface StructuredResponse {
  type: ResponseType
  data: any
}