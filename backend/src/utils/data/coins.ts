export const coins = {
  bitcoin: {
    id: 'bitcoin',
    aliases: ['bitcoin', 'btc', 'bitcoinn', 'bitcon', 'bit coin', 'satoshi', 'sats', 'btc coin', 'bitcoin core', 'xbt'],
    type: 'coin',
    network: null,
    contract: null
  },
  ethereum: {
    id: 'ethereum',
    aliases: ['ethereum', 'eth', 'etherum', 'ehterum', 'ether', 'ethérium', 'etéreo', 'vitalik coin', 'ethereum classic', 'etc'],
    type: 'coin',
    network: null,
    contract: null
  },
  tether: {
    id: 'tether',
    aliases: ['tether', 'usdt', 'tether usd', 'usdt coin', 'dolar tether', 'teter', 'tehter', 'stable coin usdt', 'usdt token'],
    type: 'token',
    network: 'ethereum',
    contract: '0xdac17f958d2ee523a2206206994597c13d831ec7'
  },
  'usd-coin': {
    id: 'usd-coin',
    aliases: ['usdc', 'usd coin', 'circle usdc', 'usdc token', 'dolar usdc', 'centre usdc', 'usdc stablecoin'],
    type: 'token',
    network: 'ethereum',
    contract: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
  },
  binancecoin: {
    id: 'binancecoin',
    aliases: ['bnb', 'binance coin', 'binance', 'bnb coin', 'binance chain', 'bsc coin', 'build and build'],
    type: 'coin',
    network: null,
    contract: null
  },
  ripple: {
    id: 'ripple',
    aliases: ['xrp', 'ripple', 'ripple coin', 'riple', 'xrp coin', 'xrp token', 'ripple labs'],
    type: 'coin',
    network: null,
    contract: null
  },
  cardano: {
    id: 'cardano',
    aliases: ['cardano', 'ada', 'cardano coin', 'ada coin', 'cardano token', 'charles coin'],
    type: 'coin',
    network: null,
    contract: null
  },
  solana: {
    id: 'solana',
    aliases: ['solana', 'sol', 'sol coin', 'solana coin', 'solana token', 'anatoly coin'],
    type: 'coin',
    network: null,
    contract: null
  },
  polkadot: {
    id: 'polkadot',
    aliases: ['polkadot', 'dot', 'dot coin', 'polkadot coin', 'polka dot', 'gavin coin'],
    type: 'coin',
    network: null,
    contract: null
  },
  dogecoin: {
    id: 'dogecoin',
    aliases: ['dogecoin', 'doge', 'doge coin', 'dogecoin meme', 'shiba coin', 'elon coin', 'dogo', 'dogge'],
    type: 'coin',
    network: null,
    contract: null
  },
  avalanche: {
    id: 'avalanche-2',
    aliases: ['avalanche', 'avax', 'avax coin', 'avalanche coin', 'ava coin', 'avax token'],
    type: 'coin',
    network: null,
    contract: null
  },
  polygon: {
    id: 'matic-network',
    aliases: ['polygon', 'matic', 'matic network', 'polygon matic', 'matic coin', 'polygon coin', 'pol'],
    type: 'coin',
    network: null,
    contract: null
  },
  chainlink: {
    id: 'chainlink',
    aliases: ['chainlink', 'link', 'link coin', 'chainlink coin', 'chain link', 'sergey coin', 'oracle coin'],
    type: 'token',
    network: 'ethereum',
    contract: '0x514910771af9ca656af840dff83e8264ecf986ca'
  },
  litecoin: {
    id: 'litecoin',
    aliases: ['litecoin', 'ltc', 'ltc coin', 'litecoin coin', 'lite coin', 'silver bitcoin', 'charlie coin'],
    type: 'coin',
    network: null,
    contract: null
  },
  tron: {
    id: 'tron',
    aliases: ['tron', 'trx', 'trx coin', 'tron coin', 'tron token', 'justin coin'],
    type: 'coin',
    network: null,
    contract: null
  },
  stellar: {
    id: 'stellar',
    aliases: ['stellar', 'xlm', 'stellar lumens', 'xlm coin', 'stellar coin', 'lumens'],
    type: 'coin',
    network: null,
    contract: null
  },
  monero: {
    id: 'monero',
    aliases: ['monero', 'xmr', 'xmr coin', 'monero coin', 'privacy coin', 'monero token'],
    type: 'coin',
    network: null,
    contract: null
  },
  'cosmos-hub': {
    id: 'cosmos',
    aliases: ['cosmos', 'atom', 'cosmos hub', 'atom coin', 'cosmos coin', 'cosmos token'],
    type: 'coin',
    network: null,
    contract: null
  },
  'internet-computer': {
    id: 'internet-computer',
    aliases: ['internet computer', 'icp', 'icp coin', 'dfinity', 'internet computer coin', 'dfinity icp'],
    type: 'coin',
    network: null,
    contract: null
  },
  shiba: {
    id: 'shiba-inu',
    aliases: ['shiba', 'shiba inu', 'shib', 'shiba coin', 'shiba token', 'shiba inu coin', 'shiba inu token', 'doge killer', 'shib coin'],
    type: 'token',
    network: 'ethereum',
    contract: '0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE'
  },
  pepe: {
    id: 'pepe',
    aliases: ['pepe', 'pepecoin', 'pepe coin', 'pepe token', 'pepe meme', 'pepe the frog', 'pepecoin token'],
    type: 'token',
    network: 'ethereum',
    contract: '0x6982508145454Ce325dDbE47a25d4ec3d2311933'
  },
  uniswap: {
    id: 'uniswap',
    aliases: ['uniswap', 'uni', 'uni coin', 'uni token', 'uniswap token', 'uniswap coin', 'unicorn'],
    type: 'token',
    network: 'ethereum',
    contract: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984'
  },
  dai: {
    id: 'dai',
    aliases: ['dai', 'dai coin', 'dai token', 'dai stablecoin', 'makerdao', 'maker dai', 'sai'],
    type: 'token',
    network: 'ethereum',
    contract: '0x6b175474e89094c44da98b954eedeac495271d0f'
  },
  'wrapped-bitcoin': {
    id: 'wrapped-bitcoin',
    aliases: ['wbtc', 'wrapped bitcoin', 'wrapped btc', 'wbtc token', 'bitcoin wrapped', 'wbtc coin'],
    type: 'token',
    network: 'ethereum',
    contract: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599'
  },
  aave: {
    id: 'aave',
    aliases: ['aave', 'aave coin', 'aave token', 'lend', 'aave protocol', 'ghost aave'],
    type: 'token',
    network: 'ethereum',
    contract: '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9'
  },
  'the-sandbox': {
    id: 'the-sandbox',
    aliases: ['sandbox', 'sand', 'sand coin', 'sand token', 'the sandbox', 'sandbox token', 'metaverse sand'],
    type: 'token',
    network: 'ethereum',
    contract: '0x3845badade8e6dff049820680d1f14bd3903a5d0'
  },
  decentraland: {
    id: 'decentraland',
    aliases: ['decentraland', 'mana', 'mana coin', 'mana token', 'decentraland token', 'metaverse mana'],
    type: 'token',
    network: 'ethereum',
    contract: '0x0f5d2fb29fb7d3cfee444a200298f468908cc942'
  },
  'axie-infinity': {
    id: 'axie-infinity',
    aliases: ['axie infinity', 'axs', 'axs coin', 'axs token', 'axie', 'axie infinity token', 'axies'],
    type: 'token',
    network: 'ethereum',
    contract: '0xbb0e17ef65f82ab018d8edd776e8dd940327b28b'
  },
  apecoin: {
    id: 'apecoin',
    aliases: ['apecoin', 'ape', 'ape coin', 'ape token', 'bored ape', 'bayc coin', 'apecoin token'],
    type: 'token',
    network: 'ethereum',
    contract: '0x4d224452801aced8b2f0aebe155379bb5d594381'
  },
  'render-token': {
    id: 'render-token',
    aliases: ['render', 'rndr', 'render token', 'rndr token', 'render coin', 'rndr coin'],
    type: 'token',
    network: 'ethereum',
    contract: '0x6de037ef9ad2725eb40118bb1702ebb27e4aeb24'
  },
  'injective-protocol': {
    id: 'injective-protocol',
    aliases: ['injective', 'inj', 'inj coin', 'inj token', 'injective protocol', 'injective token'],
    type: 'coin',
    network: null,
    contract: null
  },
  optimism: {
    id: 'optimism',
    aliases: ['optimism', 'op', 'op coin', 'op token', 'optimism token', 'layer 2 op', 'op mainnet'],
    type: 'token',
    network: 'ethereum',
    contract: '0x4200000000000000000000000000000000000042'
  },
  arbitrum: {
    id: 'arbitrum',
    aliases: ['arbitrum', 'arb', 'arb coin', 'arb token', 'arbitrum token', 'layer 2 arb', 'arb one'],
    type: 'token',
    network: 'ethereum',
    contract: '0x912ce59144191c1204e64559fe8253a0e49e6548'
  }
}
