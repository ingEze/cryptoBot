export const LEVELS = {
  simpleInfo: [
    // Basic price - español
    'precio', 'cotización', 'valor', 'valor actual', 'cuánto vale',
    'hoy', 'último precio', 'costo', 'precio actual', 'cotiza',
    'vale', 'está', 'cuánto cuesta', 'cuánto está', 'a cuánto',
    'cuánto está valiendo', 'cuánto cambió', 'está subiendo',
    'está bajando', 'vale la pena', 'se disparó', 'se desplomó',
    'price', 'pricing', 'cost', 'value', 'worth', 'rate',

    // Price variations
    'cuál es el precio', 'dame el precio', 'precio de', 'valor de',
    'cotización actual', 'cotización de hoy', 'precio hoy',
    'precio ahora', 'cuánto vale ahora', 'valor ahora',
    'what is the price', 'give me the price', 'price of',
    'current price', 'today price', 'price now',

    // Real-time price
    'precio real', 'tiempo real', 'precio live', 'live price',
    'precio en vivo', 'cotización en vivo', 'real time',
    'actualizado', 'última actualización', 'last update',
    'precio instantáneo', 'instant price',

    // Informal queries - español
    'a cuánto anda', 'cómo está', 'cuánto sale', 'en cuánto está',
    'precio actual de', 'valoración', 'tasación', 'evaluación',
    'cuánto me sale', 'qué precio tiene', 'precio del', 'precio para',
    'dame la cotización', 'consultar precio', 'ver precio',
    'checkear precio', 'revisar precio', 'mirar precio',

    // Informal queries - inglés
    'how much', 'how much is', 'whats the price', 'what\'s the price',
    'give me price', 'check price', 'show price', 'price check',

    // Specific currency/fiat
    'precio en dólares', 'precio en usd', 'valor en pesos',
    'cuánto en', 'convertir', 'conversión', 'equivale',
    'en dólares', 'en pesos', 'en euros', 'en btc', 'en eth',
    'dollar price', 'usd price', 'convert to', 'conversion',
    'equivalencia', 'cuánto equivale', 'precio convertido',

    // Simple technical terms
    'quote', 'rate', 'spot price', 'current rate', 'market price',
    'trading price', 'asking price', 'bid price', 'offer price',
    'último', 'last', 'close', 'cierre', 'apertura', 'open',

    // Movement questions
    'subió o bajó', 'va subiendo', 'va bajando', 'movimiento',
    'cambió mucho', 'varió', 'fluctuó', 'se movió',
    'up or down', 'going up', 'going down', 'movement',

    // Quick checks
    'rápido', 'quick', 'fast check', 'cotización rápida',
    'precio urgente', 'necesito el precio', 'urgente',
    'comprar', 'vender', 'buy', 'sell'
  ],

  tokenInfo: [
    // Basic tokens
    'token', 'contrato', 'contract', 'address', 'dirección',
    'smart contract', 'token address', 'contract address',
    'dirección del contrato', 'contract info', 'info del token',
    'datos del token', 'token data', 'token details',

    // Supply information
    'supply circulante', 'circulante', 'circulating supply',
    'total supply', 'suministro total', 'suministro circulante',
    'max supply', 'máximo suministro', 'supply máximo',
    'cuántos tokens hay', 'cantidad de tokens', 'tokens en circulación',
    'cuántos en circulación', 'how many tokens', 'token amount',

    // Burning
    'quema', 'burn', 'quemado', 'burned', 'burning',
    'tokens quemados', 'cuánto se quemó', 'quema de tokens',
    'burn rate', 'tasa de quema', 'deflacionario', 'deflationary',

    // Emission and minting
    'emisión nueva', 'mint', 'minting', 'acuñar', 'emisión',
    'nuevos tokens', 'inflación', 'inflation', 'inflacionario',
    'emisión programada', 'scheduled emission', 'tasa de emisión',

    // Vesting and locks
    'vesting', 'bloqueado', 'bloqueos', 'locked', 'locks',
    'token desbloqueado', 'unlock', 'unlocking', 'desbloqueo',
    'calendario de vesting', 'vesting schedule', 'cliff',
    'tokens bloqueados', 'cuánto está bloqueado', 'lock period',

    // Token standards
    'erc20', 'bep20', 'erc-20', 'bep-20', 'trc20', 'trc-20',
    'erc721', 'erc-721', 'erc1155', 'nft token', 'fungible',
    'no fungible', 'standard', 'estándar', 'tipo de token',
    'token type', 'token standard',

    // Balance and holdings
    'balance', 'saldo', 'cantidad', 'tengo', 'holdings',
    'mis tokens', 'mi balance', 'cuánto tengo', 'posesión',
    'wallet', 'billetera', 'cartera', 'my balance', 'balance of',
    'cuántos tengo', 'cantidad en wallet',

    // Blockchain and networks
    'ethereum', 'binance smart chain', 'bsc', 'polygon', 'matic',
    'red', 'network', 'blockchain', 'chain', 'mainnet', 'eth',
    'testnet', 'layer 2', 'l2', 'sidechain', 'solana', 'sol',
    'avalanche', 'avax', 'fantom', 'arbitrum', 'optimism',
    'en qué red', 'qué blockchain', 'which network', 'which chain',

    // Technical information
    'ficha', 'moneda token', 'tokenomics', 'supply',
    'burned', 'quemados', 'acuñar', 'distribución',
    'distribution', 'asignación', 'allocation',
    'tokenómica', 'economía del token', 'token economy',

    // Smart contracts
    'código', 'verificado', 'verified', 'audit', 'auditoría',
    'contrato inteligente', 'deploy', 'deployment', 'auditado',
    'seguro', 'secure', 'código verificado', 'verified contract',
    'explorador', 'explorer', 'etherscan', 'bscscan',
    'ver contrato', 'see contract', 'contract code'
  ],

  marketInfo: [
    // General market
    'mercado', 'market', 'trading', 'comercio', 'negociación',
    'bolsa', 'bourse', 'marketplace', 'market data', 'datos de mercado',
    'estado del mercado', 'market status', 'market condition',

    // Dominance and flows
    'dominancia', 'dominance', 'btc dominance', 'eth dominance',
    'capital entrando', 'capital saliendo', 'money flow',
    'flujo', 'flow', 'inflow', 'outflow', 'flujo de capital',
    'supply shock', 'demanda', 'oferta', 'supply and demand',
    'oferta y demanda', 'pressure', 'presión',

    // Rankings and positions
    'ranking', 'rank', 'posición', 'lugar', 'puesto',
    'clasificación', 'mejores', 'top', 'position', 'ranking de',
    'en qué lugar', 'qué posición', 'where ranked', 'rank by',
    'top 10', 'top 100', 'lista de', 'leaderboard',

    // Market capitalization
    'capitalización', 'market cap', 'marketcap', 'cap',
    'capitalización de mercado', 'valor de mercado', 'mcap',
    'fully diluted', 'fdv', 'diluted market cap', 'diluted valuation',
    'market value', 'valorización', 'valoración de mercado',
    'cap total', 'total cap', 'cuánto vale el proyecto',

    // Price movements
    'subió', 'bajó', 'sube', 'baja', 'aumentó', 'cayó',
    'pump', 'dump', 'pumping', 'dumping', 'rally', 'rallying',
    'crash', 'dip', 'correction', 'corrección', 'caída', 'fall',
    'moon', 'mooning', 'to the moon', 'explota', 'exploding',
    'se está yendo', 'disparado', 'desplome', 'colapso',

    // Percentages and variations
    'porcentaje', 'variación', 'cambio', 'diferencia', 'percent',
    'ganancia', 'pérdida', 'profit', 'loss', 'pnl', 'p&l',
    'rendimiento', 'performance', 'returns', 'roi', 'retorno',
    'cuánto subió', 'cuánto bajó', 'variación 24h', '24h change',
    'cambio semanal', 'weekly change', 'cambio mensual', 'monthly',
    'cambio anual', 'yearly change', 'ytd', 'año a la fecha',

    // Volume
    'volumen', 'volume', 'liquidez', 'liquidity', 'vol',
    'volumen de trading', 'trading volume', 'trade volume',
    'volumen 24h', '24h volume', 'turnover', 'movimiento',
    'volumen diario', 'daily volume', 'volumen total', 'total volume',
    'cuánto se tradea', 'how much trading', 'activity', 'actividad',

    // Trends
    'tendencia', 'trend', 'bullish', 'bearish', 'alcista',
    'bajista', 'bull', 'bear', 'momentum', 'movimiento',
    'dirección', 'sentimiento', 'sentiment', 'mood', 'ánimo del mercado',
    'neutral', 'lateral', 'sideways', 'ranging', 'consolidation',
    'consolidando', 'estancado', 'flat',

    // Statistics
    'estadísticas', 'stats', 'datos', 'data', 'métricas',
    'metrics', 'números', 'cifras', 'análisis', 'analysis',
    'indicators', 'indicadores', 'señales', 'signals',
    'información de mercado', 'market info', 'market data',

    // Comparisons
    'vs', 'versus', 'comparar', 'compare', 'contra',
    'mejor que', 'peor que', 'dominio', 'dominance',
    'market share', 'participación', 'participación de mercado',
    'comparación', 'comparison', 'frente a', 'against',
    'diferencia entre', 'difference between',

    // All-time highs/lows
    'ath', 'all time high', 'máximo histórico', 'record',
    'atl', 'all time low', 'mínimo histórico', 'récord',
    'nuevo máximo', 'new high', 'nuevo mínimo', 'new low',
    'cerca del ath', 'near ath', 'lejos del ath', 'far from ath'
  ],

  fullInfo: [
    // General information
    'detalles', 'info', 'información', 'completo', 'todo',
    'full', 'complete', 'detallado', 'resumen', 'overview',
    'qué es', 'que es', 'información completa', 'full info',
    'todo sobre', 'all about', 'información detallada',
    'cuéntame de', 'cuéntame sobre', 'tell me about',
    'explícame', 'explain', 'dime todo', 'tell me everything',

    // Founders and team
    'fundadores', 'founders', 'quién creó', 'who created',
    'creador', 'creator', 'equipo fundador', 'founding team',
    'quién lo hizo', 'who made it', 'behind', 'detrás de',

    // Key dates
    'fechas clave', 'key dates', 'timeline', 'cronología',
    'lanzamiento', 'release', 'launch', 'cuándo salió',
    'when launched', 'fecha de lanzamiento', 'launch date',
    'cuándo se creó', 'when created', 'origen', 'beginning',

    // Investors and partners
    'inversores', 'investors', 'partners', 'socios',
    'alianzas', 'partnerships', 'colaboraciones', 'collaborations',
    'quién invirtió', 'who invested', 'funding', 'financiamiento',
    'respaldo', 'backing', 'sponsors', 'patrocinadores',

    // Roadmap
    'roadmap futuro', 'future roadmap', 'próximos pasos', 'next steps',
    'qué viene', 'what\'s next', 'planes', 'plans', 'planning',
    'futuro del proyecto', 'project future', 'upcoming',

    // Competition
    'competidores', 'competencia', 'competitors', 'competition',
    'rivales', 'rivals', 'alternativas', 'alternatives',
    'similar a', 'similar to', 'parecido a', 'like',

    // History
    'historial', 'historia', 'history', 'histórico',
    'pasado', 'timeline', 'línea de tiempo', 'trayectoria',
    'evolución', 'desarrollo', 'evolution', 'development',
    'cómo empezó', 'how it started', 'origen', 'origins',

    // Project
    'proyecto', 'project', 'iniciativa', 'plataforma',
    'ecosistema', 'sistema', 'red', 'protocol', 'protocolo',
    'dapp', 'aplicación', 'platform', 'sistema',

    // Description
    'descripción', 'description', 'qué es', 'para qué sirve',
    'explicación', 'sobre', 'about', 'acerca de',
    'detalles del proyecto', 'summary', 'intro', 'introduction',
    'qué hace', 'what does it do', 'utilidad', 'utility',
    'función', 'function', 'propósito', 'purpose',

    // Documentation
    'whitepaper', 'white paper', 'papel blanco', 'documento',
    'documentación', 'docs', 'technical paper', 'litepaper',
    'yellowpaper', 'gitbook', 'wiki', 'documentation',
    'documentos técnicos', 'technical docs', 'papers',

    // Links and resources
    'enlaces', 'links', 'sitio web', 'website', 'página',
    'web oficial', 'official site', 'página oficial',
    'recursos', 'sources', 'fuentes', 'resources',
    'dónde encontrar más', 'where to find more',

    // Social media
    'twitter', 'telegram', 'discord', 'reddit', 'github',
    'medium', 'blog', 'social', 'redes sociales', 'socials',
    'comunidad', 'community', 'forum', 'foro', 'chat',
    'canal', 'channel', 'grupo', 'group',

    // Team
    'equipo', 'team', 'ceo', 'cto', 'cfo',
    'developers', 'desarrolladores', 'creadores', 'devs',
    'líderes', 'advisors', 'asesores', 'board',
    'quién está detrás', 'who is behind', 'core team',

    // Technology
    'blockchain', 'tecnología', 'technology', 'tech', 'stack',
    'consensus', 'consenso', 'algorithm', 'algoritmo',
    'features', 'características', 'specs', 'especificaciones',
    'cómo funciona', 'how it works', 'arquitectura', 'architecture',

    // Use and utility
    'uso', 'utilidad', 'use case', 'caso de uso', 'casos de uso',
    'aplicación', 'application', 'función', 'propósito',
    'objetivo', 'goal', 'misión', 'visión', 'vision',
    'para qué sirve', 'what is it for', 'qué puedo hacer',
    'what can i do', 'benefits', 'beneficios'
  ],

  tickersInfo: [
    // Tickers
    'tickers', 'ticker', 'símbolo', 'symbol', 'par',
    'pair', 'trading pair', 'par de trading', 'pares',
    'símbolo de trading', 'trading symbol', 'ticker symbol',

    // Exchange-specific prices
    'exchanges con mejor precio', 'best price exchange',
    'dónde tiene más volumen', 'where most volume',
    'mejor liquidez', 'best liquidity', 'más líquido',
    'mejor par', 'best pair', 'par más líquido',
    'exchanges disponibles', 'available exchanges',
    'precio según exchange', 'price by exchange',
    'precio por exchange', 'exchange prices',

    // Quotes
    'cotizaciones', 'quotes', 'pricing', 'precios',
    'listado de precios', 'price list', 'lista de cotizaciones',
    'todas las cotizaciones', 'all quotes',

    // General exchanges
    'intercambios', 'exchanges', 'casas de cambio',
    'plataformas', 'platforms', 'bolsas', 'markets',
    'mercados', 'trading platforms',

    // Exchange queries
    'precio exchange', 'precio en', 'cotización en',
    'lista de exchanges', 'exchanges list', 'dónde comprar',
    'dónde tradear', 'where to buy', 'available on',
    'where to trade', 'dónde conseguir', 'where to get',
    'en qué exchange', 'which exchange', 'qué exchange',

    // Volume on exchanges
    'volumen exchange', 'volume by exchange', 'liquidez por exchange',
    'trading volume exchange', 'más volumen', 'mayor liquidez',
    'exchange con más volumen', 'highest volume exchange',
    'dónde se tradea más', 'where traded most',

    // Exchange comparison
    'mejor exchange', 'mejor precio', 'arbitraje',
    'arbitrage', 'diferencia de precio', 'spread',
    'comparar exchanges', 'compare prices', 'price difference',
    'diferencias entre exchanges', 'oportunidad de arbitraje',
    'arbitrage opportunity',

    // Market types
    'spot', 'futures', 'margin', 'perpetual', 'swap',
    'opciones', 'options', 'derivatives', 'derivados',
    'mercado spot', 'spot market', 'futuros', 'contratos',

    // Order book
    'order book', 'libro de órdenes', 'profundidad',
    'depth', 'bid', 'ask', 'spread', 'orders', 'órdenes',
    'compra', 'venta', 'buy orders', 'sell orders',

    // Specific pairs
    'usdt', 'usdc', 'btc pair', 'eth pair', 'busd', 'dai',
    'stable', 'stablecoin', 'fiat pair', 'par con btc',
    'par con eth', 'par con usdt', 'contra usdt', 'vs usdt',
    'trading against', 'contra', 'versus'
  ],

  exchanges: [
    // Major CEX
    'binance', 'coinbase', 'kraken', 'bitfinex', 'huobi',
    'okx', 'bybit', 'kucoin', 'gate.io', 'gate', 'mexc',
    'crypto.com', 'gemini', 'bitstamp', 'bittrex',

    // Fees and costs
    'fees', 'comisiones', 'tarifas', 'costos', 'costs',
    'cuánto cobran', 'how much fees', 'fee structure',
    'estructura de comisiones', 'trading fees', 'taker', 'maker',

    // Security and regulation
    'seguridad', 'regulación', 'kyc', 'seguro', 'secure',
    'confiable', 'trustworthy', 'regulado', 'regulated',
    'licencia', 'license', 'compliance', 'cumplimiento',

    // Exchange features
    'ordrebook', 'profundidad del mercado', 'market depth',
    'confianza', 'trust', 'trust score', 'ranking exchange',
    'volumen del exchange', 'exchange volume', 'exchanges',
    'exchange', 'liquidez del exchange', 'exchange liquidity',

    // Decentralized exchanges
    'uniswap', 'pancakeswap', 'sushiswap', 'dex',
    'exchange descentralizado', 'decentralized exchange',
    'swap', 'dexes', 'amm', 'automated market maker',
    'curve', 'balancer', '1inch', 'raydium', 'jupiter',

    // Regional exchanges - Latam
    'bitso', 'ripio', 'buenbit', 'letsbit', 'satoshitango',
    'buda', 'cryptomkt', 'mercado bitcoin', 'mercadobitcoin',
    'bitinka', 'cryptomarket', 'orionx',

    // Exchange information
    'exchange info', 'info del exchange', 'datos exchange',
    'información del exchange', 'exchange data',
    'reviews', 'reseñas', 'opiniones', 'reviews',

    // Listings
    'listado', 'listed', 'lista en', 'available',
    'disponible en', 'trading on', 'markets', 'mercados',
    'dónde está listado', 'where listed', 'listing',
    'está en', 'is on', 'se puede comprar en',

    // CEX vs DEX
    'centralizado', 'descentralizado', 'cex', 'dex',
    'custodial', 'non-custodial', 'self-custody',
    'custodia', 'sin custodia', 'tus llaves',
    'diferencia cex dex', 'cex vs dex'
  ],

  graph: [
    // Basic graph terms
    'graficos', 'gráficos', 'grafico', 'gráfico', 'chart', 'charts',
    'gráfica', 'plot', 'plotting', 'visualización',

    // View/show commands
    'ver gráfico', 'mostrar gráfico', 'show chart', 'display chart',
    'dame el gráfico', 'gráfico de', 'chart of', 'graph of',
    'ver chart', 'mostrar chart', 'visualizar',

    // Time periods
    '24h', '24 horas', '7 días', '7d', 'semana', 'week',
    'mes', 'month', '30d', '30 días', 'año', 'year',
    '1y', 'histórico', 'history chart', 'all time',
    'desde siempre', 'máximo tiempo', 'max',

    // Chart types
    'velas', 'candlestick', 'candles', 'línea', 'line',
    'barras', 'bars', 'área', 'area', 'ohlc',

    // Indicators on chart
    'con indicadores', 'indicators', 'with rsi', 'con rsi',
    'con macd', 'con sma', 'con ema', 'medias móviles',
    'moving averages', 'volumen en gráfico', 'volume chart',

    // Comparisons
    'comparar gráfico', 'compare charts', 'vs en gráfico',
    'gráfico comparativo', 'comparison chart'
  ],

  trending: [
    // Trending terms
    'trending', 'tendencia', 'moda', 'populares', 'viral', 'mas buscadas',
    'más buscadas', 'hot', 'caliente', 'de moda', 'en tendencia',
    'qué está subiendo', 'what\'s trending', 'qué es trending',

    // Gainers and losers
    'top gainers', 'top losers', 'ganadores', 'perdedores',
    'más ganadores', 'más perdedores', 'biggest gainers',
    'biggest losers', 'winners', 'losers',

    // Movement terms
    'en alza', 'destacadas', 'top hoy', 'explosivas',
    'mas buscadas', 'most searched', 'más vistas',
    'populares hoy', 'popular today', 'hoy trending',
    'trending today', 'hot coins', 'monedas calientes',

    // Social trends
    'trending en twitter', 'trending on twitter',
    'más mencionadas', 'most mentioned', 'hype',
    'con más hype', 'más comentadas', 'buzz',

    // Volume and activity
    'más activas', 'most active', 'mayor actividad',
    'highest activity', 'más volumen hoy', 'volume leaders',

    // Time-specific
    'trending ahora', 'trending now', 'right now',
    'en este momento', 'ahora mismo', 'actualmente',

    // Movers
    'movers', 'grandes movimientos', 'big movers',
    'mayores cambios', 'biggest changes', 'shakers'
  ],

  global: [
    // Global market
    'mercado global', 'global market', 'crypto market',
    'mercado cripto', 'cryptocurrency market',
    'market general', 'general market',

    // Total market cap
    'total market cap', 'capitalización total', 'cap total',
    'market cap total', 'valoración total', 'total valuation',
    'cuánto vale todo', 'total value', 'valor total del mercado',

    // Dominance
    'dominancia', 'dominance', 'btc dominance', 'eth dominance',
    'dominancia de bitcoin', 'bitcoin dominance',
    'dominancia de ethereum', 'ethereum dominance',
    'market share', 'participación de mercado',

    // Market state
    'cómo está el mercado', 'estado del mercado', 'panorama',
    'resumen del mercado', 'market overview', 'market summary',
    'how is the market', 'market status', 'market condition',
    'estado general', 'overview general', 'situación del mercado',

    // Sentiment
    'sentimiento del mercado', 'market sentiment',
    'fear and greed', 'miedo y codicia', 'índice de miedo',
    'fear index', 'greed index', 'sentiment index',

    // Volume
    'volumen global', 'global volume', 'volumen total',
    'total volume', 'volumen del mercado', 'market volume',
    '24h volume', 'volumen 24h global',

    // DeFi specific
    'defi market', 'mercado defi', 'defi cap', 'tvl',
    'total value locked', 'valor total bloqueado',
    'defi dominance', 'dominancia defi',

    // Altcoins
    'altcoins', 'altseason', 'temporada de alts',
    'mercado de altcoins', 'altcoin market',

    // Trends
    'tendencia del mercado', 'market trend',
    'hacia dónde va', 'where is going', 'dirección del mercado',
    'market direction', 'bull market', 'bear market',
    'mercado alcista', 'mercado bajista'
  ]
}
