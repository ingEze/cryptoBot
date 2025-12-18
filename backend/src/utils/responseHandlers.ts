/* eslint-disable @typescript-eslint/no-explicit-any */
import { LevelType } from '../types/types.js'

interface SimpleInfoResponse {
  type: 'simpleInfo'
  data: {
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
}

interface TokenInfoResponse {
  type: 'tokenInfo'
  data: {
    id: string
      usd: number
      usd_market_cap: number
      usd_24h_vol: number
      usd_24h_change: number
      last_updated_at: number
    }
}

interface MarketInfoResponse {
  type: 'marketInfo'
  data: {
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
}

interface FullInfoResponse {
  type: 'fullInfo'
  data: {
    name: string
    symbol: string
    description: string
    image: string
    prices: Array<{
      currency: string
      price: number | string
    }>
    tickers: {
      top: Array<{
        base: string
        target: string
        market: string
      }>
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
}

interface TickersInfoResponse {
  type: 'tickersInfo'
  data: Array<{
    base: string
    target: string
    market: string
    last: number
    volume: number
    trust_score: string
    trade_url: string
  }>
}

interface ExchangesResponse {
  type: 'exchanges'
  data: Array<{
    name: string
    trust_score: number
    trade_volume_24h_btc: number
    image: string
    trust_score_rank: number
    country: string
    year_established: string
    description: string
    url: string
  }>
}

interface GraphInfoResponse {
  type: 'graph'
  data: {
    timestamp: number
    price: number
    market_cap: number
    total_volume: number
  }
}

interface TrendingData {
  id: string | null
  name: string | null
  symbol: string | null
  rank: number | null
  image: string | null
  price: number | null
  price_btc: number | null
  market_cap: string | number | null
  volume_24h: string | number | null
  sparkline: string | null
  change_24h: number | null
  info: {
    title: string | null
    description: string | null
  } | null
}

interface TrendingResponse {
  type: 'trending'
  data: TrendingData
}

interface GlobalInfoResponse {
  type: 'global'
  data: {
    market_cap_change_percentage_24h_usd: number
    active_cryptocurrencies: number
    markets: number
    updated_at: number
    total_volume: {
      [key: string]: unknown
    }
    total_market_cap: {
      [key: string]: unknown
    }
    market_cap_percentage: {
      [key: string]: unknown
    }
  }
}

type ResponseData =
  | SimpleInfoResponse
  | TokenInfoResponse
  | MarketInfoResponse
  | FullInfoResponse
  | TickersInfoResponse
  | ExchangesResponse
  | GraphInfoResponse
  | TrendingResponse
  | GlobalInfoResponse

export const responseHandlers: Record<LevelType, (data: any) => string> = {
  simpleInfo: (data): string => {
    const id = Object.keys(data)[0]
    const info = data[id]

    const response: SimpleInfoResponse = {
      type: 'simpleInfo',
      data: {
        id,
        name: info.name,
        prices: {
          usd: info.usd ?? 0,
          market_cap: info.usd_market_cap ?? 0,
          volume_24h: info.usd_24h_vol ?? 0,
          change_24h: info.usd_24h_change ?? 0
        },
        last_updated: new Date(info.last_updated_at * 1000)
      }
    }

    return JSON.stringify(response)
  },

  tokenInfo: (data): string => {
    const id = Object.keys(data)[0]
    const info = data[id]

    const response: TokenInfoResponse = {
      type: 'tokenInfo',
      data: {
        id: id,
        usd: info.usd,
        usd_market_cap: info.usd_market_cap,
        usd_24h_vol: info.usd_24h_vol,
        usd_24h_change: info.usd_24h_change,
        last_updated_at: info.last_updated_at
      }
    }
    return JSON.stringify(response)
  },

  marketInfo: (data): string => {
    if (!Array.isArray(data) || data.length === 0) {
      return JSON.stringify({ type: 'error', message: 'No hay información de mercado disponible' })
    }

    const token = data[0]

    const response: MarketInfoResponse = {
      type: 'marketInfo',
      data: {
        id: token.id,
        symbol: token.symbol,
        name: token.name,
        image: token.image,
        prices: {
          current: token.current_price ?? 0,
          high_24h: token.high_24h ?? 0,
          low_24h: token.low_24h ?? 0
        },
        market: {
          cap: token.market_cap ?? 0,
          rank: token.market_cap_rank ?? 0,
          volume_24h: token.total_volume ?? 0
        }
      }
    }

    return JSON.stringify(response)
  },

  fullInfo: (data): string => {
    const prices = Object.entries(data.market_data.current_price).map(([currency, price]) => ({
      currency: currency.toUpperCase(),
      price: typeof price === 'number' ? price : String(price)
    }))

    const topTickers = (data.tickers.topTickers || []).slice(0, 5).map((t: any) => ({
      base: t.base || 'N/A',
      target: t.target || 'N/A',
      market: t.market || 'N/A'
    }))

    const response: FullInfoResponse = {
      type: 'fullInfo',
      data: {
        name: data.name,
        symbol: data.symbol,
        description: data.description?.en?.slice(0, 300) ?? 'No disponible',
        image: data.image,
        prices,
        tickers: {
          top: topTickers,
          avgPriceUsd: data.tickers.avgPriceUsd ?? 0,
          totalVolumeUsd: data.tickers.totalVolumeUsd ?? 0
        },
        links: {
          homepage: data.links.homepage || [],
          whitepaper: data.links.whitepaper || [],
          blockchain: data.links.blockchain_site || []
        },
        last_updated: data.last_updated
      }
    }

    return JSON.stringify(response)
  },

  tickersInfo: (data): string => {
    const tickers = data.map((t: any) => ({
      base: t.base,
      target: t.target,
      market: t.market,
      last: t.last ?? 0,
      volume: t.volume ?? 0,
      trust_score: t.trust_score,
      trade_url: t.trade_url
    }))

    const response: TickersInfoResponse = {
      type: 'tickersInfo',
      data: tickers
    }

    return JSON.stringify(response)
  },

  exchanges: (data): string => {
    const exchanges = data.map((ex: any) => ({
      id: ex.id,
      name: ex.name,
      trust_score: ex.trust_score,
      trade_volume_24h_btc: ex.trade_volume_24h_btc,
      image: ex.image,
      trust_score_rank: ex.trust_score_rank,
      year_established: ex.year_established,
      description: ex.description,
      url: ex.url
    }))

    const response: ExchangesResponse = {
      type: 'exchanges',
      data: exchanges
    }

    return JSON.stringify(response)
  },

  graph: (data): string => {
    const response: GraphInfoResponse = {
      type: 'graph',
      data: {
        timestamp: data.timestamp,
        price: data.price,
        market_cap: data.market_cap,
        total_volume: data.total_volume
      }
    }
    return JSON.stringify(response)
  },

  trending: (data): string => {
    const coins = data.coins.map((item: any) => ({
      id: item.id ?? null,
      name: item.name ?? null,
      symbol: item.symbol ?? null,
      rank: item.rank,
      image: item.image ?? null,
      price: item.price ?? null,
      price_btc: item.price_btc ?? null,
      market_cap: item.market_cap ?? null,
      volume_24h: item.volume_24h ?? null,
      sparkline: item.sparkline ?? null,
      change_24h: item.change_24h ?? null,
      info: item.inf ?? null
        ? {
          title: item.info.title ?? null,
          description: item.info.description ?? null
        }
        : null
    }))

    const response: TrendingResponse = {
      type: 'trending',
      data: coins
    }

    return JSON.stringify(response)
  },

  global: (data): string => {
    const totalVolume = Object.entries(data.total_volume)
      .sort(([, a], [, b]) => (b as number) - (a as number))

    const totalMarketCap = Object.entries(data.total_market_cap)
      .sort(([, a], [, b]) => (b as number) - (a as number))

    const marketCapPercentage = Object.entries(data.market_cap_percentage)
      .sort(([, a], [, b]) => (b as number) - (a as number))
      .slice(0, 5)

    const response: GlobalInfoResponse = {
      type: 'global',
      data: {
        market_cap_change_percentage_24h_usd: data.market_cap_change_percentage_24h_usd,
        active_cryptocurrencies: data.active_cryptocurrencies,
        markets: data.markets,
        total_volume: Object.fromEntries(totalVolume),
        total_market_cap: Object.fromEntries(totalMarketCap),
        market_cap_percentage: Object.fromEntries(marketCapPercentage),
        updated_at: data.updated_at
      }
    }

    return JSON.stringify(response)
  }
}

export type {
  ResponseData,
  SimpleInfoResponse,
  TokenInfoResponse,
  MarketInfoResponse,
  FullInfoResponse,
  TickersInfoResponse,
  ExchangesResponse,
  GraphInfoResponse,
  TrendingResponse,
  GlobalInfoResponse
}
