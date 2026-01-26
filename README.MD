# 💰 CryptoBot - Tu Asistente de Criptomonedas

Un bot web conversacional inteligente diseñado para consultar información sobre criptomonedas en tiempo real. Interactúa de forma natural para obtener datos del mercado, información de tokens y análisis de precios utilizando la API de CoinGecko.

## 🚀 ¿Qué es CryptoBot?

CryptoBot es una aplicación fullstack que te permite consultar información sobre criptomonedas de manera conversacional. En lugar de navegar por portales complejos, simplemente chatea con el bot y obtén respuestas instantáneas sobre precios, datos de tokens y movimientos del mercado.

El bot entiende un amplio rango de consultas en español e inglés, desde preguntas simples sobre precios hasta consultas técnicas sobre información de tokens.

## 🏗️ Arquitectura

El proyecto está dividido en dos secciones principales:

### Backend
- **Tecnología**: TypeScript, Node.js
- **API**: Conexión con CoinGecko para datos de criptomonedas
- **Comunicación**: WebSockets en tiempo real
- **Base de datos**: Redis para caché y sesiones

### Frontend
- **Tecnología**: Astro, TypeScript
- **Interfaz**: Componentes interactivos para chatbot
- **Estilos**: CSS moderno y responsive
- **Comunicación**: WebSockets para mensajería en tiempo real

## 💬 Casos de Uso - Ejemplos de Consultas

El bot está entrenado para reconocer y responder a diferentes tipos de consultas. Aquí encontrarás ejemplos reales que puedes usar:

### 📊 Consultas de Precios Simples

Obtén el precio actual de cualquier criptomoneda de forma rápida y directa:

```
Usuario: "¿Cuál es el precio de Bitcoin?"
Bot: Obtiene el precio actual de BTC desde CoinGecko

Usuario: "¿Cuánto vale el Ethereum ahora?"
Bot: Muestra el precio actual de ETH en tiempo real

Usuario: "Precio de ADA"
Bot: Retorna el valor actual de Cardano

Usuario: "¿Cuánto está Solana?"
Bot: Consulta el precio de SOL

Usuario: "XRP, ¿cuánto cuesta?"
Bot: Muestra el precio de Ripple
```

**Monedas nativas disponibles:**
- Bitcoin (BTC)
- Ethereum (ETH)
- Cardano (ADA)
- Solana (SOL)
- Ripple (XRP)
- Dogecoin (DOGE)
- Polkadot (DOT)
- BNB (Binance Coin)

### 🔄 Consultas sobre Variaciones de Precio

Pregunta sobre cambios y movimientos en el mercado:

```
Usuario: "¿Subió o bajó Bitcoin hoy?"
Bot: Analiza la variación del precio de BTC

Usuario: "¿Ethereum va subiendo?"
Bot: Verifica la tendencia actual

Usuario: "¿Qué tal está moviéndose Solana?"
Bot: Proporciona información sobre la volatilidad
```

### 🪙 Información de Tokens

Accede a datos técnicos sobre tokens específicos:

```
Usuario: "¿Cuántos tokens de Tether hay en circulación?"
Bot: Supply circulante de USDT

Usuario: "Datos de USDC"
Bot: Información del contrato inteligente de USD Coin

Usuario: "¿Cuál es el contrato de Shiba Inu?"
Bot: Proporciona la dirección del contrato de SHIB

Usuario: "Token info de LINK"
Bot: Detalles técnicos de Chainlink

Usuario: "¿Cuál es el supply máximo de DAI?"
Bot: Información sobre el suministro total de DAI
```

## Criptomonedas Soportadas

### 🪙 Monedas Nativas
- Bitcoin (BTC)
- Ethereum (ETH)
- Cardano (ADA)
- Solana (SOL)
- XRP (XRP)
- Dogecoin (DOGE)
- Polkadot (DOT)
- BNB (BNB)
- Litecoin (LTC)
- Avalanche (AVAX)
- Cosmos (ATOM)
- Monero (XMR)
- Stellar (XLM)
- TRON (TRX)
- Algorand (ALGO)
- NEAR Protocol (NEAR)
- Aptos (APT)
- Sui (SUI)
- Hedera (HBAR)
- Optimism (OP)
- Arbitrum (ARB)
- Filecoin (FIL)
- VeChain (VET)
- EOS (EOS)
- IOTA (MIOTA)
- Fantom (FTM)
- Kaspa (KAS)
- Injective (INJ)

### 💎 Tokens ERC-20 (Ethereum)

**Stablecoins:**
- Tether (USDT)
- USD Coin (USDC)
- Dai (DAI)
- Frax (FRAX)

**DeFi:**
- Chainlink (LINK)
- Uniswap (UNI)
- Aave (AAVE)
- Maker (MKR)
- Curve DAO (CRV)
- Synthetix (SNX)
- Compound (COMP)
- Lido DAO (LDO)
- Rocket Pool (RPL)
- 1inch (1INCH)

**Gaming & Metaverso:**
- The Sandbox (SAND)
- Decentraland (MANA)
- Axie Infinity (AXS)
- ApeCoin (APE)
- Immutable X (IMX)

**Memecoins:**
- Shiba Inu (SHIB)
- Pepe (PEPE)
- FLOKI (FLOKI)

**Infraestructura:**
- Polygon (MATIC)
- The Graph (GRT)
- Blur (BLUR)

**Wrapped Assets:**
- Wrapped Bitcoin (WBTC)
- Wrapped Ether (WETH)
- Fantom ERC-20 (FTM)

**Total:** 28 monedas nativas + 29 tokens ERC-20 = **57 criptomonedas**

---

### 🔍 Consultas Informales

El bot también entiende preguntas coloquiales:

```
Usuario: "A cuánto anda Bitcoin?"
Bot: Precio actual de BTC

Usuario: "Cómo está Ethereum?"
Bot: Estado actual y datos de ETH

Usuario: "Cuánto vale la pena Solana?"
Bot: Información sobre el precio de SOL

Usuario: "¿En cuánto está el Dogecoin?"
Bot: Precio actual de DOGE

Usuario: "Bitcoin se disparó?"
Bot: Análisis sobre el movimiento de precio
```

### ⚡ Consultas en Inglés

Por supuesto, el bot también entiende perfectamente el inglés:

```
Usuario: "What is the price of Bitcoin?"
Bot: Current BTC price

Usuario: "How much is Ethereum?"
Bot: ETH current value

Usuario: "Give me the price of Solana"
Bot: SOL price information

Usuario: "Token address of Chainlink"
Bot: LINK contract details
```

## 🎯 Niveles de Respuesta

El bot clasifica automáticamente las consultas en 9 niveles de complejidad, proporcionando información precisa según tus necesidades:

### 🟢 Nivel 1: Simple Info
**Preguntas sobre precios básicos y cotizaciones rápidas**

Ideal para consultas urgentes cuando necesitas información al instante:
- Precio actual en tiempo real
- Cotizaciones express
- Conversiones rápidas entre monedas
- Chequeos simples del mercado
- Movimientos básicos (subió/bajó)

**Ejemplos:** *"precio de bitcoin"*, *"cuánto vale eth"*, *"btc en dólares"*

---

### 🔵 Nivel 2: Token Info
**Información técnica avanzada sobre tokens**

Detalles completos sobre la tokenómica y aspectos técnicos:
- Suministro circulante, total y máximo
- Direcciones de contratos inteligentes
- Estándares de token (ERC-20, BEP-20, etc.)
- Datos de quema (burning) y emisión
- Cronogramas de vesting y bloqueos
- Redes blockchain soportadas
- Información de auditorías y verificación

**Ejemplos:** *"contrato de USDT"*, *"supply de ADA"*, *"tokens quemados de SHIB"*

---

### 📊 Nivel 3: Market Info
**Análisis completo del mercado y estadísticas**

Métricas clave para entender el mercado:
- Capitalización de mercado (market cap)
- Volumen de trading 24h
- Ranking y posición en el mercado
- Variaciones porcentuales (24h, 7d, 30d)
- Máximos y mínimos históricos (ATH/ATL)
- Tendencias alcistas/bajistas
- Dominancia de mercado
- Indicadores y señales

**Ejemplos:** *"market cap de Solana"*, *"volumen de BTC"*, *"ranking de Cardano"*

---

### 📖 Nivel 4: Full Info
**Información exhaustiva del proyecto**

Todo lo que necesitas saber sobre el proyecto:
- Descripción completa del proyecto
- Equipo fundador y desarrolladores
- Historia y cronología
- Whitepaper y documentación técnica
- Casos de uso y utilidad
- Roadmap y planes futuros
- Inversores y partners
- Tecnología y arquitectura
- Links oficiales y redes sociales
- Competidores y alternativas

**Ejemplos:** *"qué es Polkadot"*, *"equipo de Ethereum"*, *"whitepaper de Chainlink"*

---

### 💹 Nivel 5: Tickers Info
**Pares de trading y cotizaciones por exchange**

Información detallada sobre dónde y cómo se tradea:
- Símbolos de trading (tickers)
- Pares disponibles (BTC/USDT, ETH/USD, etc.)
- Listado de exchanges que soportan la moneda
- Precio por exchange específico
- Mejor precio y liquidez
- Volumen por exchange
- Oportunidades de arbitraje
- Spreads y diferencias de precio
- Order book y profundidad

**Ejemplos:** *"precio de BTC en Binance"*, *"mejores exchanges para SOL"*, *"arbitraje de ETH"*

---

### 🏦 Nivel 6: Exchanges
**Información sobre plataformas de intercambio**

Detalles completos sobre exchanges:
- Características de cada exchange
- Comisiones y fees (maker/taker)
- Seguridad y regulación
- Comparativas CEX vs DEX
- Exchanges regionales (Latam: Bitso, Ripio, Buenbit, etc.)
- Listados y disponibilidad
- Reviews y reputación
- Tipos de mercado (spot, futures, margin)

**Ejemplos:** *"fees de Binance"*, *"exchanges en Argentina"*, *"Uniswap vs Pancakeswap"*

---

### 📈 Nivel 7: Graph
**Visualización de gráficos y análisis técnico**

Gráficos interactivos del comportamiento del precio:
- Gráficos de precio en diferentes períodos
- Tipos de chart (velas, líneas, área)
- Indicadores técnicos (RSI, MACD, SMA, EMA)
- Comparativas visuales
- Análisis histórico
- Volumen en gráfico

**Ejemplos:** *"gráfico de BTC 7 días"*, *"chart de ETH con RSI"*, *"Bitcoin vs Ethereum gráfico"*

---

### 🔥 Nivel 8: Trending
**Tendencias y monedas del momento**

Las criptos más populares y activas:
- Monedas en tendencia ahora
- Top gainers (mayores subidas)
- Top losers (mayores caídas)
- Más buscadas y mencionadas
- Trending en redes sociales
- Monedas con mayor volumen
- Hype y buzz del mercado
- Big movers del día

**Ejemplos:** *"trending crypto hoy"*, *"top gainers"*, *"monedas más activas"*

---

### 🌍 Nivel 9: Global
**Panorama completo del mercado cripto**

Vista macro del ecosistema cripto:
- Capitalización total del mercado
- Volumen global 24h
- Dominancia BTC/ETH
- Estado general del mercado
- Sentimiento del mercado (Fear & Greed Index)
- Market overview y resumen
- DeFi TVL (Total Value Locked)
- Tendencias bull/bear market
- Altseason indicators

**Ejemplos:** *"cómo está el mercado"*, *"dominancia de Bitcoin"*, *"fear and greed index"*

---

## 🤖 Clasificación Inteligente

El bot analiza tu mensaje y detecta automáticamente:
- **Keywords específicas** de cada nivel
- **Contexto de la consulta** para mayor precisión
- **Combinaciones de niveles** cuando es necesario

Puedes hacer preguntas en **español** o **inglés**, y de manera formal o informal. El bot entiende múltiples formas de expresar la misma consulta.

**Ejemplos válidos:**
- *"precio btc"* → Simple Info
- *"cuánto vale bitcoin ahora"* → Simple Info
- *"contrato de USDT en Ethereum"* → Token Info
- *"dónde comprar Solana"* → Tickers Info + Exchanges
- *"quién creó Cardano"* → Full Info
- *"cómo está el mercado crypto"* → Global

## 🔌 Integración con CoinGecko

CryptoBot utiliza la API gratuita de CoinGecko para obtener:
- Precios en tiempo real
- Datos históricos
- Información de tokens
- Datos de mercado completos

La integración es transparente: haces la pregunta, el bot consulta CoinGecko y te devuelve la respuesta de forma clara y conversacional.

## 💻 Stack Tecnológico

### Backend
- **TypeScript** - Tipado fuerte
- **Node.js** - Runtime
- **WebSockets** - Comunicación en tiempo real
- **Redis** - Cache y sesiones
- **CoinGecko API** - Datos de criptomonedas

### Frontend
- **Astro** - Framework estático/dinámico
- **TypeScript** - Desarrollo tipado
- **CSS Moderno** - Estilos responsivos
- **WebSockets** - Comunicación bidireccional

## 🎨 Características Principales

✨ **Conversación Natural** - Entiende múltiples formas de hacer la misma pregunta

🌍 **Multiidioma** - Soporta español e inglés de forma nativa

⚡ **Tiempo Real** - Precios actualizados constantemente

🔒 **Datos Precisos** - Información directa de CoinGecko

📱 **Responsive** - Funciona en cualquier dispositivo

🚀 **Rápido** - Respuestas instantáneas con caché inteligente

## 🛠️ Desarrollo

El proyecto está organizado para facilitar la extensión:

```
backend/
├── src/
│   ├── service/     - Lógica de negocio
│   ├── config/      - Configuración
│   ├── utils/       - Utilidades y datos
│   └── types/       - Definiciones de tipos

frontend/
├── src/
│   ├── components/  - Componentes Astro
│   ├── pages/       - Páginas
│   ├── scripts/     - Lógica del cliente
│   └── styles/      - Estilos CSS
```

## 🚀 Empezando

El bot está listo para usar. Simplemente abre la interfaz y comienza a hacer preguntas sobre criptomonedas. El sistema detectará automáticamente el tipo de consulta y proporcionará la respuesta más relevante.

**Tip**: Puedes hacer preguntas de formas muy diversas. El bot entiende desde consultas simples hasta preguntas más específicas sobre datos técnicos de tokens.

---

**Potencia tu conocimiento sobre criptomonedas con CryptoBot** 🚀💎
