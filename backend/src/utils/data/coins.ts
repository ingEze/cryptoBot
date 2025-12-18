import { CoinData } from 'src/types/types'

export const NATIVE_COINS: Record<string, Omit<CoinData, 'type'>> = {
  'bitcoin': { id: 'bitcoin', symbol: 'btc', name: 'Bitcoin' },
  'btc': { id: 'bitcoin', symbol: 'btc', name: 'Bitcoin' },
  'ethereum': { id: 'ethereum', symbol: 'eth', name: 'Ethereum' },
  'eth': { id: 'ethereum', symbol: 'eth', name: 'Ethereum' },
  'cardano': { id: 'cardano', symbol: 'ada', name: 'Cardano' },
  'ada': { id: 'cardano', symbol: 'ada', name: 'Cardano' },
  'solana': { id: 'solana', symbol: 'sol', name: 'Solana' },
  'sol': { id: 'solana', symbol: 'sol', name: 'Solana' },
  'ripple': { id: 'ripple', symbol: 'xrp', name: 'XRP' },
  'xrp': { id: 'ripple', symbol: 'xrp', name: 'XRP' },
  'dogecoin': { id: 'dogecoin', symbol: 'doge', name: 'Dogecoin' },
  'doge': { id: 'dogecoin', symbol: 'doge', name: 'Dogecoin' },
  'polkadot': { id: 'polkadot', symbol: 'dot', name: 'Polkadot' },
  'dot': { id: 'polkadot', symbol: 'dot', name: 'Polkadot' },
  'bnb': { id: 'binancecoin', symbol: 'bnb', name: 'BNB' },
  'binance': { id: 'binancecoin', symbol: 'bnb', name: 'BNB' }
}

export const KNOWN_TOKENS: Record<string, Omit<CoinData, 'type'>> = {
  'usdt': {
    id: 'tether',
    symbol: 'usdt',
    name: 'Tether',
    network: 'ethereum',
    contract: '0xdac17f958d2ee523a2206206994597c13d831ec7'
  },
  'tether': {
    id: 'tether',
    symbol: 'usdt',
    name: 'Tether',
    network: 'ethereum',
    contract: '0xdac17f958d2ee523a2206206994597c13d831ec7'
  },
  'usdc': {
    id: 'usd-coin',
    symbol: 'usdc',
    name: 'USD Coin',
    network: 'ethereum',
    contract: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
  },
  'dai': {
    id: 'dai',
    symbol: 'dai',
    name: 'Dai',
    network: 'ethereum',
    contract: '0x6b175474e89094c44da98b954eedeac495271d0f'
  },
  'shib': {
    id: 'shiba-inu',
    symbol: 'shib',
    name: 'Shiba Inu',
    network: 'ethereum',
    contract: '0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce'
  },
  'link': {
    id: 'chainlink',
    symbol: 'link',
    name: 'Chainlink',
    network: 'ethereum',
    contract: '0x514910771af9ca656af840dff83e8264ecf986ca'
  },
  'uni': {
    id: 'uniswap',
    symbol: 'uni',
    name: 'Uniswap',
    network: 'ethereum',
    contract: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984'
  },
  'matic': {
    id: 'matic-network',
    symbol: 'matic',
    name: 'Polygon',
    network: 'ethereum',
    contract: '0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0'
  },
  'wbtc': {
    id: 'wrapped-bitcoin',
    symbol: 'wbtc',
    name: 'Wrapped Bitcoin',
    network: 'ethereum',
    contract: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599'
  }
}
