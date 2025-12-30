/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from 'axios'
import { Ticker, TickerSimplificado } from '../types/types.js'
import { tickers } from './tickers.js'

export function sanitizeResponse(level: string, response: any): AxiosResponse {
  let sanitize

  switch (level) {
  case 'simpleInfo':
  case 'tokenInfo': {
    const id = Object.keys(response)[0]
    const info = response[id]
    sanitize = {
      [id]: {
        id: info.id,
        name: info.name,
        usd: info.usd,
        usd_market_cap: info.usd_market_cap,
        usd_24h_vol: info.usd_24h_vol,
        usd_24h_change: info.usd_24h_change,
        last_updated_at: info.last_updated_at
      }
    }
    break
  }

  case 'marketInfo': {
    const result = response.map((data: any) => {
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
      Object.entries(response.market_data.current_price)
        .filter(([key]) => allowedCurrentPrice.includes(key))
    )

    const tickersArray: Ticker[] = response.tickers ?? []
    const tickersData = tickers(tickersArray)

    sanitize = {
      name: response.name,
      description: response.description,
      symbol: response.symbol,
      links: {
        homepage: response.links.homepage ?? [],
        whitepaper: response.links.whitepaper ?? [],
        blockchain_site: response.links.blockchain_site ?? []
      },
      image: response.image.small,
      market_data: {
        current_price
      },
      last_updated: response.last_updated,
      tickers: {
        topTickers: tickersData.topTickers,
        avgPriceUsd: tickersData.avgPriceUsd,
        totalVolumeUsd: tickersData.totalVolumeUsd
      }
    }
    break
  }

  case 'tickersInfo': {
    const tickers: TickerSimplificado[] = response.tickers.map((t: any) => ({
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

  case 'exchanges':
    sanitize = response
    break

  case 'graph': {
    const {
      prices,
      market_caps,
      total_volumes
    } = response

    const comnined = prices.map(([timestamp, price]: [number, number], i: number) => ({
      timestamp,
      price,
      market_cap: market_caps[i][1],
      total_volume: total_volumes[i][1]
    }))

    sanitize = comnined
    break
  }

  case 'trending': {
    const coins = response.coins.map(({ item }: any) => {
      const d = item.data

      return {
        id: item.id,
        name: item.name,
        symbol: item.symbol,
        rank: item.market_cap_rank,
        image: item.small,
        price: d?.price ?? null,
        price_btc: Number(item.price_btc ?? null),
        market_cap: d?.market_cap ?? null,
        volume_24h: d?.total_volume ?? null,
        sparkline: d?.sparkline ?? null,
        change_24h: d?.price_change_percentage_24h?.usd ?? null,
        info: d?.content
          ? {
            title: d.content.title ?? null,
            description: d.content.description ?? null
          }
          : null
      }
    })
    sanitize = { coins }
    break
  }

  case 'global': {
    const totalVolume = Object.entries(response.data.total_volume)
      .sort(([, a], [, b]) => (b as number) - (a as number))

    const totalMarketCap = Object.entries(response.data.total_market_cap)
      .sort(([, a], [, b]) => (b as number) - (a as number))

    const marketCapPercentage = Object.entries(response.data.market_cap_percentage)
      .sort(([, a], [, b]) => (b as number) - (a as number))
      .slice(0, 5)

    sanitize = {
      market_cap_change_percentage_24h_usd: response.data.market_cap_change_percentage_24h_usd,
      active_cryptocurrencies: response.data.active_cryptocurrencies,
      markets: response.data.markets,
      total_volume: Object.fromEntries(totalVolume),
      total_market_cap: Object.fromEntries(totalMarketCap),
      market_cap_percentage: Object.fromEntries(marketCapPercentage),
      updated_at: response.data.updated_at
    }
  }
  }
  return sanitize
}

