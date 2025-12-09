export const LEVELS = {
  simpleInfo: [
    // Basic price
    'precio', 'cotización', 'valor', 'valor actual', 'cuánto vale',
    'hoy', 'último precio', 'costo', 'precio actual', 'cotiza',
    'vale', 'está', 'cuánto cuesta', 'cuánto está', 'a cuánto',
    'cuánto está valiendo', 'cuánto cambió', 'está subiendo',
    'está bajando', 'vale la pena', 'se disparó', 'se desplomó',

    // Price variations
    'cuál es el precio', 'dame el precio', 'precio de', 'valor de',
    'cotización actual', 'cotización de hoy', 'precio hoy',
    'precio ahora', 'cuánto vale ahora', 'valor ahora',

    // Real-time price
    'precio real', 'tiempo real', 'precio live', 'live price',
    'precio en vivo', 'cotización en vivo', 'real time',

    // Informal queries
    'a cuánto anda', 'cómo está', 'cuánto sale', 'en cuánto está',
    'precio actual de', 'valoración', 'tasación', 'evaluación',

    // Specific currency/fiat
    'precio en dólares', 'precio en usd', 'valor en pesos',
    'cuánto en', 'convertir', 'conversión', 'equivale',

    // Simple technical terms
    'quote', 'rate', 'spot price', 'current rate', 'market price',
    'trading price', 'asking price', 'bid price'
  ],

  tokenInfo: [
    // Basic tokens
    'token', 'contrato', 'contract', 'address', 'dirección',
    'smart contract', 'token address', 'contract address',
    'supply circulante',
    'quema', 'burn', 'quemado',
    'emisión nueva',
    'vesting', 'bloqueado', 'bloqueos',
    'token desbloqueado', 'unlock',

    // Token standards
    'erc20', 'bep20', 'erc-20', 'bep-20', 'trc20', 'trc-20',
    'erc721', 'erc-721', 'erc1155', 'nft token', 'fungible',

    // Balance and holdings
    'balance', 'saldo', 'cantidad', 'tengo', 'holdings',
    'mis tokens', 'mi balance', 'cuánto tengo', 'posesión',

    // Blockchain and networks
    'ethereum', 'binance smart chain', 'bsc', 'polygon',
    'red', 'network', 'blockchain', 'chain', 'mainnet',
    'testnet', 'layer 2', 'l2', 'sidechain',

    // Technical information
    'ficha', 'moneda token', 'tokenomics', 'supply',
    'circulante', 'total supply', 'max supply', 'burned',
    'quemados', 'mint', 'acuñar', 'emisión',

    // Smart contracts
    'código', 'verificado', 'verified', 'audit', 'auditoría',
    'contrato inteligente', 'deploy', 'deployment'
  ],

  marketInfo: [
    // General market
    'mercado', 'market', 'trading', 'comercio', 'negociación',
    'bolsa', 'bourse', 'marketplace', 'dominancia', 'dominance', 'btc dominance',
    'capital entrando', 'capital saliendo',
    'flujo', 'flow', 'inflow', 'outflow',
    'supply shock', 'demanda', 'oferta',

    // Rankings and positions
    'ranking', 'rank', 'posición', 'lugar', 'puesto',
    'clasificación', 'mejores',

    // Market capitalization
    'capitalización', 'market cap', 'marketcap', 'cap',
    'capitalización de mercado', 'valor de mercado', 'mcap',
    'fully diluted', 'fdv', 'diluted market cap',

    // Price movements
    'subió', 'bajó', 'sube', 'baja', 'aumentó', 'cayó',
    'pump', 'dump', 'pumping', 'dumping', 'rally',
    'crash', 'dip', 'correction', 'corrección',

    // Percentages and variations
    'porcentaje', 'variación', 'cambio', 'diferencia',
    'ganancia', 'pérdida', 'profit', 'loss', 'pnl',
    'rendimiento', 'performance', 'returns', 'roi',

    // Volume
    'volumen', 'volume', 'liquidez', 'liquidity',
    'volumen de trading', 'trading volume', 'vol',
    'volumen 24h', 'turnover', 'movimiento',

    // Trends
    'tendencia', 'trend', 'bullish', 'bearish', 'alcista',
    'bajista', 'bull', 'bear', 'momentum', 'movimiento',
    'dirección', 'sentimiento', 'sentiment',

    // Statistics
    'estadísticas', 'stats', 'datos', 'data', 'métricas',
    'metrics', 'números', 'cifras', 'análisis',
    'indicators', 'indicadores', 'señales',

    // Comparisons
    'vs', 'versus', 'comparar', 'compare', 'contra',
    'mejor que', 'peor que', 'dominio', 'dominance',
    'market share', 'participación'
  ],

  fullInfo: [
    // General information
    'detalles', 'info', 'información', 'completo', 'todo',
    'full', 'complete', 'detallado', 'resumen', 'overview',
    'qué es', 'que es', 'fundadores',
    'fechas clave',
    'lanzamiento', 'release',
    'inversores', 'partners',
    'roadmap futuro',
    'competidores', 'competencia',

    // History
    'historial', 'historia', 'history', 'histórico',
    'pasado', 'timeline', 'línea de tiempo', 'trayectoria',
    'evolución', 'desarrollo',

    // Project
    'proyecto', 'project', 'iniciativa', 'plataforma',
    'ecosistema', 'sistema', 'red', 'protocol', 'protocolo',

    // Description
    'descripción', 'description', 'qué es', 'para qué sirve',
    'explicación', 'sobre', 'about', 'acerca de',
    'detalles del proyecto', 'summary', 'intro',

    // Documentation
    'whitepaper', 'white paper', 'papel blanco', 'documento',
    'documentación', 'docs', 'technical paper', 'litepaper',
    'yellowpaper', 'gitbook', 'wiki',

    // Links and resources
    'enlaces', 'links', 'sitio web', 'website', 'página',
    'web oficial', 'official site', 'página oficial',
    'recursos', 'sources', 'fuentes',

    // Social media
    'twitter', 'telegram', 'discord', 'reddit', 'github',
    'medium', 'blog', 'social', 'redes sociales',
    'comunidad', 'community', 'forum', 'foro',

    // Team
    'fundadores', 'founders', 'equipo', 'team', 'ceo',
    'developers', 'desarrolladores', 'creadores',
    'líderes', 'advisors', 'asesores', 'board',

    // Technology
    'blockchain', 'tecnología', 'technology', 'tech',
    'consensus', 'consenso', 'algorithm', 'algoritmo',
    'features', 'características', 'specs', 'especificaciones',

    // Roadmap
    'roadmap', 'hoja de ruta', 'plan', 'planning',
    'futuro', 'próximos pasos', 'updates', 'actualizaciones',
    'releases', 'lanzamientos', 'milestones',

    // Use and utility
    'uso', 'utilidad', 'use case', 'caso de uso',
    'aplicación', 'application', 'función', 'propósito',
    'objetivo', 'goal', 'misión', 'visión'
  ],

  tickersInfo: [
    // Tickers
    'tickers', 'ticker', 'símbolo', 'symbol', 'par',
    'pair', 'trading pair', 'par de trading', 'exchanges con mejor precio',
    'dónde tiene más volumen',
    'mejor liquidez',
    'mejor par',
    'exchanges disponibles',
    'precio según exchange',

    // Quotes
    'cotizaciones', 'quotes', 'pricing', 'precios',
    'listado de precios', 'price list',

    // General exchanges
    'intercambios', 'exchanges', 'casas de cambio',
    'plataformas', 'platforms', 'bolsas',

    // Exchange queries
    'precio exchange', 'precio en', 'cotización en',
    'lista de exchanges', 'exchanges list', 'dónde comprar',
    'dónde tradear', 'where to buy', 'available on',

    // Volume on exchanges
    'volumen exchange', 'volume by exchange', 'liquidez por exchange',
    'trading volume exchange', 'más volumen', 'mayor liquidez',

    // Exchange comparison
    'mejor exchange', 'mejor precio', 'arbitraje',
    'arbitrage', 'diferencia de precio', 'spread',
    'comparar exchanges', 'compare prices',

    // Market types
    'spot', 'futures', 'margin', 'perpetual', 'swap',
    'opciones', 'options', 'derivatives', 'derivados',

    // Order book
    'order book', 'libro de órdenes', 'profundidad',
    'depth', 'bid', 'ask', 'spread', 'orders',

    // Specific pairs
    'usdt', 'usdc', 'btc pair', 'eth pair', 'busd',
    'stable', 'stablecoin', 'fiat pair'
  ],

  exchanges: [
    // Major exchanges
    'binance', 'coinbase', 'kraken', 'bitfinex', 'huobi',
    'okx', 'bybit', 'kucoin', 'gate.io', 'mexc', 'fees', 'comisiones', 'tarifas',
    'seguridad', 'regulación', 'kyc',
    'ordrebook', 'profundidad del mercado',
    'confianza', 'trust',

    // Decentralized exchanges
    'uniswap', 'pancakeswap', 'sushiswap', 'dex',
    'exchange descentralizado', 'decentralized exchange',
    'swap', 'dexes', 'amm', 'automated market maker',

    // Regional exchanges
    'bitso', 'ripio', 'buenbit', 'letsbit', 'satoshitango',
    'buda', 'cryptomkt', 'mercado bitcoin',

    // Exchange information
    'exchange info', 'info del exchange', 'datos exchange',
    'volumen del exchange', 'ranking exchange',
    'confianza', 'trust score', 'seguridad',

    // Listings
    'listado', 'listed', 'lista en', 'available',
    'disponible en', 'trading on', 'markets',

    // CEX vs DEX
    'centralizado', 'descentralizado', 'cex', 'dex',
    'custodial', 'non-custodial', 'self-custody'
  ],

  graph: [
    'graficos', 'gráficos', 'grafico', 'chart', ' gráfica ', 'plot',
    'ver gráfico', 'mostrar gráfico'
  ]
}
