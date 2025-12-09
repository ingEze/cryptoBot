export interface CoinData {
  name: string
  symbol: string
  description: string
  image: string
  links: {
    homepage: string[]
    whitepaper: string
  }
  market_data: {
    current_price: {
      usd: number
      eur: number
      ars: number
    }
    market_cap: {
      usd: number
    }
    total_volume: {
      usd: number
    }
    price_change_percentage_24h: number
    price_change_percentage_7d: number
    price_change_percentage_30d: number
  }
  tickers: {
    topTickers: Array<{
      market: string
      volume: number
    }>
    avgPriceUsd: number
    totalVolumeUsd: number
  }
  last_updated: string
}

export interface DetectIntentResult {
  intent: string
  coin: string | null
}

export interface GenerateResponseResult {
  text: string
  showData?: boolean
}

export interface GraphDataPoint {
  timestamp: number
  price: number
  market_cap: number
  total_volume: number
}

export interface GraphData {
  data: GraphDataPoint[]
  coinName?: string
}
