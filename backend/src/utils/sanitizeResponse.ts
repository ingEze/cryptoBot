/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from 'axios'
import { Ticker, TickerSimplificado } from '../types/types.js'
import { tickers } from './tickers.js'

export function sanitizeResponse(level: string, response: AxiosResponse): AxiosResponse {
  let sanitize

  switch (level) {
  case 'simpleInfo':
  case 'tokenInfo': {
    const id = Object.keys(response.data)[0]
    const info = response.data[id]
    sanitize = {
      [id]: {
        name: id,
        usd: info.usd,
        usd_market_cap: info.usd_market_cap,
        usd_24h_vol: info.usd_24h_vol,
        usd_24h_change: info.usd_24h_change,
        last_updated_at: info.last_updated_at
      }
    }
  }
    break

  case 'marketInfo': {
    const result = response.data.map((data: any) => {
      return {
        id: data.id,
        symbol: data.symbol,
        name: data.name,
        image: data.image,
        current_price: data.current_price,
        market_cap: data.market_cap,
        market_cap_rank: data.market_cap_rank,
        total_volume: data.total_volume,
        high_24h: data.high_24h,
        low_24h: data.low_24h
      }
    })
    sanitize = result
    break
  }

  case 'fullInfo': {
    const allowedCurrentPrice = ['ars', 'eur', 'usd', 'eth', 'btc']
    const current_price = Object.fromEntries(
      Object.entries(response.data.market_data.current_price)
        .filter(([key]) => allowedCurrentPrice.includes(key))
    )

    const tickersArray: Ticker[] = response.data.tickers ?? []
    const tickersData = tickers(tickersArray)

    sanitize = {
      name: response.data.name,
      description: response.data.description,
      symbol: response.data.symbol,
      links: {
        homepage: response.data.links.homepage ?? [],
        whitepaper: response.data.links.whitepaper ?? [],
        blockchain_site: response.data.links.blockchain_site ?? []
      },
      image: response.data.image.small,
      market_data: {
        current_price
      },
      last_updated: response.data.last_updated,
      tickers: {
        topTickers: tickersData.topTickers,
        avgPriceUsd: tickersData.avgPriceUsd,
        totalVolumeUsd: tickersData.totalVolumeUsd
      }
    }
    break
  }

  case 'tickersInfo': {
    const tickers: TickerSimplificado[] = response.data.tickers.map((t: any) => ({
      base: t.base,
      target: t.target,
      market: t.market.name,
      last: t.last,
      volume: t.volume,
      converted_last: t.converted_last,
      converted_volume: t.converted_volume,
      trust_score: t.trust_score,
      trade_url: t.trade_url
    }))

    const topTickers = tickers
      .sort((a, b) => b.volume - a.volume)
      .slice(0, 10)

    sanitize = topTickers
    break
  }

  case 'exchange':
    sanitize = response.data
    break

  case 'graph': {
    const {
      prices,
      market_caps,
      total_volumes
    } = response.data

    const comnined = prices.map(([timestamp, price]: [number, number], i: number) => ({
      timestamp,
      price,
      market_cap: market_caps[i][1],
      total_volume: total_volumes[i][1]
    }))

    sanitize = comnined
  }
  }
  return sanitize
}

