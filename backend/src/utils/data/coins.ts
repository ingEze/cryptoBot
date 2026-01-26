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
  'binance': { id: 'binancecoin', symbol: 'bnb', name: 'BNB' },
  'litecoin': { id: 'litecoin', symbol: 'ltc', name: 'Litecoin' },
  'ltc': { id: 'litecoin', symbol: 'ltc', name: 'Litecoin' },
  'avalanche': { id: 'avalanche-2', symbol: 'avax', name: 'Avalanche' },
  'avax': { id: 'avalanche-2', symbol: 'avax', name: 'Avalanche' },
  'cosmos': { id: 'cosmos', symbol: 'atom', name: 'Cosmos' },
  'atom': { id: 'cosmos', symbol: 'atom', name: 'Cosmos' },
  'monero': { id: 'monero', symbol: 'xmr', name: 'Monero' },
  'xmr': { id: 'monero', symbol: 'xmr', name: 'Monero' },
  'stellar': { id: 'stellar', symbol: 'xlm', name: 'Stellar' },
  'xlm': { id: 'stellar', symbol: 'xlm', name: 'Stellar' },
  'tron': { id: 'tron', symbol: 'trx', name: 'TRON' },
  'trx': { id: 'tron', symbol: 'trx', name: 'TRON' },
  'algorand': { id: 'algorand', symbol: 'algo', name: 'Algorand' },
  'algo': { id: 'algorand', symbol: 'algo', name: 'Algorand' },
  'near': { id: 'near', symbol: 'near', name: 'NEAR Protocol' },
  'aptos': { id: 'aptos', symbol: 'apt', name: 'Aptos' },
  'apt': { id: 'aptos', symbol: 'apt', name: 'Aptos' },
  'sui': { id: 'sui', symbol: 'sui', name: 'Sui' },
  'hedera': { id: 'hedera-hashgraph', symbol: 'hbar', name: 'Hedera' },
  'hbar': { id: 'hedera-hashgraph', symbol: 'hbar', name: 'Hedera' },
  'optimism': { id: 'optimism', symbol: 'op', name: 'Optimism' },
  'op': { id: 'optimism', symbol: 'op', name: 'Optimism' },
  'arbitrum': { id: 'arbitrum', symbol: 'arb', name: 'Arbitrum' },
  'arb': { id: 'arbitrum', symbol: 'arb', name: 'Arbitrum' },
  'filecoin': { id: 'filecoin', symbol: 'fil', name: 'Filecoin' },
  'fil': { id: 'filecoin', symbol: 'fil', name: 'Filecoin' },
  'vechain': { id: 'vechain', symbol: 'vet', name: 'VeChain' },
  'vet': { id: 'vechain', symbol: 'vet', name: 'VeChain' },
  'eos': { id: 'eos', symbol: 'eos', name: 'EOS' },
  'iota': { id: 'iota', symbol: 'miota', name: 'IOTA' },
  'miota': { id: 'iota', symbol: 'miota', name: 'IOTA' },
  'fantom': { id: 'fantom', symbol: 'ftm', name: 'Fantom' },
  'ftm': { id: 'fantom', symbol: 'ftm', name: 'Fantom' },
  'kaspa': { id: 'kaspa', symbol: 'kas', name: 'Kaspa' },
  'kas': { id: 'kaspa', symbol: 'kas', name: 'Kaspa' },
  'injective': { id: 'injective-protocol', symbol: 'inj', name: 'Injective' },
  'inj': { id: 'injective-protocol', symbol: 'inj', name: 'Injective' }
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
  },
  'pepe': {
    id: 'pepe',
    symbol: 'pepe',
    name: 'Pepe',
    network: 'ethereum',
    contract: '0x6982508145454ce325ddbe47a25d4ec3d2311933'
  },
  'aave': {
    id: 'aave',
    symbol: 'aave',
    name: 'Aave',
    network: 'ethereum',
    contract: '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9'
  },
  'mkr': {
    id: 'maker',
    symbol: 'mkr',
    name: 'Maker',
    network: 'ethereum',
    contract: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2'
  },
  'crv': {
    id: 'curve-dao-token',
    symbol: 'crv',
    name: 'Curve DAO',
    network: 'ethereum',
    contract: '0xd533a949740bb3306d119cc777fa900ba034cd52'
  },
  'snx': {
    id: 'havven',
    symbol: 'snx',
    name: 'Synthetix',
    network: 'ethereum',
    contract: '0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f'
  },
  'grt': {
    id: 'the-graph',
    symbol: 'grt',
    name: 'The Graph',
    network: 'ethereum',
    contract: '0xc944e90c64b2c07662a292be6244bdf05cda44a7'
  },
  'sand': {
    id: 'the-sandbox',
    symbol: 'sand',
    name: 'The Sandbox',
    network: 'ethereum',
    contract: '0x3845badade8e6dff049820680d1f14bd3903a5d0'
  },
  'mana': {
    id: 'decentraland',
    symbol: 'mana',
    name: 'Decentraland',
    network: 'ethereum',
    contract: '0x0f5d2fb29fb7d3cfee444a200298f468908cc942'
  },
  'axs': {
    id: 'axie-infinity',
    symbol: 'axs',
    name: 'Axie Infinity',
    network: 'ethereum',
    contract: '0xbb0e17ef65f82ab018d8edd776e8dd940327b28b'
  },
  'imx': {
    id: 'immutable-x',
    symbol: 'imx',
    name: 'Immutable X',
    network: 'ethereum',
    contract: '0xf57e7e7c23978c3caec3c3548e3d615c346e79ff'
  },
  'ldo': {
    id: 'lido-dao',
    symbol: 'ldo',
    name: 'Lido DAO',
    network: 'ethereum',
    contract: '0x5a98fcbea516cf06857215779fd812ca3bef1b32'
  },
  'frax': {
    id: 'frax',
    symbol: 'frax',
    name: 'Frax',
    network: 'ethereum',
    contract: '0x853d955acef822db058eb8505911ed77f175b99e'
  },
  'comp': {
    id: 'compound-governance-token',
    symbol: 'comp',
    name: 'Compound',
    network: 'ethereum',
    contract: '0xc00e94cb662c3520282e6f5717214004a7f26888'
  },
  'ftm-erc20': {
    id: 'fantom',
    symbol: 'ftm',
    name: 'Fantom (ERC20)',
    network: 'ethereum',
    contract: '0x4e15361fd6b4bb609fa63c81a2be19d873717870'
  },
  'ape': {
    id: 'apecoin',
    symbol: 'ape',
    name: 'ApeCoin',
    network: 'ethereum',
    contract: '0x4d224452801aced8b2f0aebe155379bb5d594381'
  },
  'rpl': {
    id: 'rocket-pool',
    symbol: 'rpl',
    name: 'Rocket Pool',
    network: 'ethereum',
    contract: '0xd33526068d116ce69f19a9ee46f0bd304f21a51f'
  },
  '1inch': {
    id: '1inch',
    symbol: '1inch',
    name: '1inch',
    network: 'ethereum',
    contract: '0x111111111117dc0aa78b770fa6a738034120c302'
  },
  'blur': {
    id: 'blur',
    symbol: 'blur',
    name: 'Blur',
    network: 'ethereum',
    contract: '0x5283d291dbcf85356a21ba090e6db59121208b44'
  },
  'floki': {
    id: 'floki',
    symbol: 'floki',
    name: 'FLOKI',
    network: 'ethereum',
    contract: '0xcf0c122c6b73ff809c693db761e7baebe62b6a2e'
  },
  'weth': {
    id: 'weth',
    symbol: 'weth',
    name: 'Wrapped Ether',
    network: 'ethereum',
    contract: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
  }
}
