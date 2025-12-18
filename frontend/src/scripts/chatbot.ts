import type { ExchangeData, FullInfoData, GlobalData, MarketInfoData, SimpleInfoData, StructuredResponse, TickersInfoData, TrendingData } from "../types/chatbot"
import type { GraphData, GraphDataPoint } from "../types/data"

export function addMessage(text: string, type: string, container: HTMLElement | null): void {
  if (!container) return
  
  const messageDiv = document.createElement('div')
  messageDiv.className = `message ${type} chat-message`
  
  const time = new Date().toLocaleTimeString()
  
  let formattedContent = text
  
  if (type === 'bot') {
    try {
      const parsed: StructuredResponse = JSON.parse(text)
      formattedContent = formatResponse(parsed)
    } catch (parseError) {
      try {
        const jsonMatch = text.match(/\{[\s\S]*\}/)
        if (jsonMatch) {
          const parsed: StructuredResponse = JSON.parse(jsonMatch[0])
          formattedContent = formatResponse(parsed)
        } else {
          formattedContent = `<p style="margin: 0;">${text}</p>`
        }
      } catch (secondError) {
        formattedContent = `<p style="margin: 0; white-space: pre-wrap; font-family: monospace; font-size: 0.75rem; color: #fca5a5;">${text}</p>`
      }
    }
  } else {
    formattedContent = `<p style="margin: 0;">${text}</p>`
  }
  
  messageDiv.innerHTML = `
    <div class="message-bubble ${type}">
      <div class="message-text">${formattedContent}</div>
      <p class="message-time">${time}</p>
    </div>
  `
  
  container.appendChild(messageDiv)
  container.scrollTop = container.scrollHeight
}

function formatResponse(response: StructuredResponse): string {
  switch (response.type) {
    case 'simpleInfo':
      return formatSimpleInfo(response.data)
    case 'tokenInfo':
      return formatTokenInfo(response.data)
    case 'marketInfo':
      return formatMarketInfo(response.data)
    case 'fullInfo':
      return formatFullInfo(response.data)
    case 'tickersInfo':
      return formatTickersInfo(response.data)
    case 'exchanges':
      return formatExchanges(response.data)
    case 'trending':
      return formatTrending(response.data)
    case 'global':
      return formatGlobal(response.data)
    case 'graph': {
      return formatGraphPlaceholder(response.data)
    }
    default:
      return '<p style="margin: 0;">No puedo procesar este tipo de información</p>'
  }
}

function formatGraphPlaceholder(data: GraphData): string {
  return `
    <div class="crypto-info-container">
      <div class="crypto-header">
        <h3>📊 Gráfico Generado</h3>
      </div>
      <p style="margin: 1rem 0; color: #6b7280;">
        El gráfico se ha generado correctamente. Puedes verlo en el panel lateral.
      </p>
    </div>
  `
}

function formatSimpleInfo(data: SimpleInfoData): string {
  const changeEmoji = data.prices.change_24h >= 0 ? '📈' : '📉'
  const changeColor = data.prices.change_24h >= 0 ? '#10b981' : '#ef4444'
  
  return `
    <div class="crypto-info-container">
      <div class="crypto-header">
        <h3>📌 Información de ${data.id}</h3>
      </div>
      
      <div class="crypto-section">
        <h4 class="section-title">💵 Precio y Mercado</h4>
        <div class="info-grid">
          <div class="info-item">
            <span class="info-label">Precio actual</span>
            <span class="info-value">$${data.prices.usd.toLocaleString()}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Market Cap</span>
            <span class="info-value">$${data.prices.market_cap.toLocaleString()}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Volumen 24h</span>
            <span class="info-value">$${data.prices.volume_24h.toLocaleString()}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Cambio 24h</span>
            <span class="info-value" style="color: ${changeColor};">
              ${changeEmoji} ${data.prices.change_24h.toFixed(2)}%
            </span>
          </div>
        </div>
      </div>

      <div class="crypto-footer">
        <p>🕐 Última actualización: ${new Date(data.last_updated).toLocaleString('es-AR')}</p>
        <p class="help-text">¿Necesitas que te ayude con algo más?</p>
      </div>
    </div>
  `
}

function formatTokenInfo(data: any): string {
  const warningHTML = data.warning ? `
    <div class="warning-card">
      <div class="warning-icon">⚠️</div>
      <div class="warning-content">
        <p class="warning-title">Nota Importante</p>
        <p class="warning-text">
          Parece que buscaste información sobre una <strong>blockchain/network</strong> 
          en lugar de una criptomoneda específica. Si querías consultar el precio de un token, 
          intenta con: <strong>btc</strong>, <strong>sol</strong>, <strong>usdt</strong>, etc.
        </p>
      </div>
    </div>
  ` : ''

  const priceValue = data.usd ?? 0
  const hasPrice = priceValue > 0
  const marketCap = data.usd_market_cap ?? 0
  const volume24h = data.usd_24h_vol ?? 0
  const change24h = data.usd_24h_change ?? 0
  
  const isPositive = change24h >= 0
  const changeIcon = isPositive ? '📈' : '📉'
  const changeColor = isPositive ? '#10b981' : '#ef4444'
  const changeSign = isPositive ? '+' : ''
  
  const lastUpdated = data.last_updated_at 
    ? new Date(data.last_updated_at * 1000).toLocaleString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    : 'N/A'
  
  const isContract = data.id && data.id.startsWith('0x') && data.id.length === 42
  
  let displayName = "Token Desconocido"
  let displaySymbol = "TOKEN"
  
  if (data.name) {
    displayName = data.name
    displaySymbol = data.symbol ? data.symbol.toUpperCase() : data.name.substring(0, 4).toUpperCase()
  } else if (isContract) {
    displayName = "Contrato ERC-20"
    displaySymbol = data.id.substring(2, 6).toUpperCase()
  } else if (data.symbol) {
    displaySymbol = data.symbol.toUpperCase()
    displayName = data.symbol.toUpperCase()
  }
  
  const displayId = isContract
    ? `${data.id.substring(0, 6)}...${data.id.substring(data.id.length - 4)}`
    : data.id ?? "N/A"
  
  const fullId = data.id ?? "N/A"

  return `
    ${warningHTML}
    <div class="crypto-info-container token-info-card">
      <div class="crypto-header-gradient">
        <div class="header-icon">💎</div>
        <h3>Información del Token</h3>
      </div>

      <div class="token-main-info">
        <div class="token-identity">
          <div class="token-symbol-badge">${displaySymbol}</div>
          <div class="token-name-section">
            <span class="token-name">${displayName}</span>
            <span class="token-id" title="${fullId}">${isContract ? 'Contract: ' : 'ID: '}${displayId}</span>
          </div>
        </div>

        ${hasPrice ? `
          <div class="token-price-highlight">
            <span class="price-label">Precio Actual</span>
            <span class="price-amount">$${priceValue.toLocaleString('en-US', { 
              minimumFractionDigits: 2, 
              maximumFractionDigits: priceValue < 1 ? 8 : 2 
            })}</span>
            ${change24h !== 0 ? `
              <div class="price-change" style="color: ${changeColor}; display: flex; align-items: center; gap: 0.5rem; margin-top: 0.5rem; font-size: 1rem; font-weight: 600;">
                <span>${changeIcon}</span>
                <span>${changeSign}${change24h.toFixed(2)}%</span>
                <span style="font-size: 0.75rem; color: #9ca3af; font-weight: 400;">(24h)</span>
              </div>
            ` : ''}
          </div>
        ` : `
          <div class="no-price-notice">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <span>Precio no disponible</span>
          </div>
        `}
      </div>

      <div class="token-details-grid">
        ${hasPrice ? `
          <div class="detail-card highlight">
            <div class="detail-icon">💵</div>
            <div class="detail-content">
              <span class="detail-label">Precio USD</span>
              <span class="detail-value price">$${priceValue.toLocaleString('en-US', { 
                minimumFractionDigits: 2, 
                maximumFractionDigits: priceValue < 1 ? 8 : 2 
              })}</span>
            </div>
          </div>
        ` : ''}

        ${marketCap > 0 ? `
          <div class="detail-card">
            <div class="detail-icon">🏦</div>
            <div class="detail-content">
              <span class="detail-label">Cap. de Mercado</span>
              <span class="detail-value">$${marketCap >= 1e9 
                ? (marketCap / 1e9).toFixed(2) + 'B' 
                : marketCap >= 1e6 
                  ? (marketCap / 1e6).toFixed(2) + 'M'
                  : marketCap.toLocaleString('en-US', { maximumFractionDigits: 0 })
              }</span>
            </div>
          </div>
        ` : ''}

        ${volume24h > 0 ? `
          <div class="detail-card">
            <div class="detail-icon">📊</div>
            <div class="detail-content">
              <span class="detail-label">Volumen 24h</span>
              <span class="detail-value">$${volume24h >= 1e9 
                ? (volume24h / 1e9).toFixed(2) + 'B' 
                : volume24h >= 1e6 
                  ? (volume24h / 1e6).toFixed(2) + 'M'
                  : volume24h.toLocaleString('en-US', { maximumFractionDigits: 0 })
              }</span>
            </div>
          </div>
        ` : ''}

        ${change24h !== 0 ? `
          <div class="detail-card" style="border-left-color: ${changeColor};">
            <div class="detail-icon">${changeIcon}</div>
            <div class="detail-content">
              <span class="detail-label">Cambio 24h</span>
              <span class="detail-value" style="color: ${changeColor};">${changeSign}${change24h.toFixed(2)}%</span>
            </div>
          </div>
        ` : ''}

        ${isContract ? `
          <div class="detail-card">
            <div class="detail-icon">📄</div>
            <div class="detail-content">
              <span class="detail-label">Dirección Contrato</span>
              <span class="detail-value" style="font-family: 'Courier New', monospace; font-size: 0.75rem; word-break: break-all;" title="${fullId}">${displayId}</span>
            </div>
          </div>
          
          <div class="detail-card">
            <div class="detail-icon">⛓️</div>
            <div class="detail-content">
              <span class="detail-label">Red</span>
              <span class="detail-value">Ethereum</span>
            </div>
          </div>
        ` : `
          <div class="detail-card">
            <div class="detail-icon">🆔</div>
            <div class="detail-content">
              <span class="detail-label">Identificador</span>
              <span class="detail-value" style="font-family: 'Courier New', monospace; font-size: 0.8rem;">${displayId}</span>
            </div>
          </div>
        `}

        <div class="detail-card">
          <div class="detail-icon">🕐</div>
          <div class="detail-content">
            <span class="detail-label">Actualización</span>
            <span class="detail-value" style="font-size: 0.8rem;">${lastUpdated}</span>
          </div>
        </div>
      </div>

      ${isContract ? `
        <div style="margin: 1rem 1.25rem 0; padding: 0.875rem; background: rgba(59, 130, 246, 0.1); border-left: 3px solid #3b82f6; border-radius: 6px;">
          <p style="margin: 0; font-size: 0.85rem; color: #93c5fd; display: flex; align-items: center; gap: 0.5rem;">
            <span>ℹ️</span>
            <span>Puedes ver este contrato en <a href="https://etherscan.io/token/${fullId}" target="_blank" rel="noopener noreferrer" style="color: #60a5fa; text-decoration: underline;">Etherscan</a></span>
          </p>
        </div>
      ` : ''}

      <div class="token-footer">
        <p>💡 <strong>Tip:</strong> Pregunta por gráficos históricos, comparaciones con otros tokens o análisis de mercado.</p>
        ${isContract && !data.name ? `
          <p style="margin-top: 0.5rem; font-size: 0.8rem; color: #fbbf24;">
            ⚠️ Información limitada disponible. Verifica siempre el contrato antes de interactuar.
          </p>
        ` : ''}
      </div>
    </div>
  `
}

function formatMarketInfo(data: MarketInfoData): string {
  return `
    <div class="crypto-info-container">
      <div class="crypto-header-with-icon">
        <img src="${data.image}" alt="${data.name}" class="coin-icon" />
        <h3>📊 ${data.name} (${data.symbol.toUpperCase()})</h3>
      </div>
      
      <div class="crypto-section">
        <h4 class="section-title">💵 Precio</h4>
        <div class="info-grid">
          <div class="info-item">
            <span class="info-label">Actual</span>
            <span class="info-value">$${data.prices.current.toLocaleString()}</span>
          </div>
          <div class="info-item">
            <span class="info-label">High 24h</span>
            <span class="info-value">$${data.prices.high_24h.toLocaleString()}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Low 24h</span>
            <span class="info-value">$${data.prices.low_24h.toLocaleString()}</span>
          </div>
        </div>
      </div>

      <div class="crypto-section">
        <h4 class="section-title">📈 Mercado</h4>
        <div class="info-grid">
          <div class="info-item">
            <span class="info-label">Market Cap</span>
            <span class="info-value">$${data.market.cap.toLocaleString()}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Ranking</span>
            <span class="info-value">#${data.market.rank}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Volumen 24h</span>
            <span class="info-value">$${data.market.volume_24h.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  `
}

function formatFullInfo(data: FullInfoData): string {
  const pricesHTML = data.prices
    .map(p => `
      <div class="price-item">
        <span class="currency-label">${p.currency}</span>
        <span class="currency-value">${typeof p.price === 'number' ? p.price.toLocaleString() : p.price}</span>
      </div>
    `)
    .join('')

  const tickersHTML = data.tickers.top
    .filter(t => t.base !== 'N/A' && t.market !== 'N/A')
    .slice(0, 5)
    .map((t, i) => `
      <div class="ticker-item-inline">
        <span class="ticker-number">${i + 1}.</span>
        <span class="ticker-pair">${t.base}/${t.target}</span>
        <span class="ticker-exchange">en ${t.market}</span>
      </div>
    `)
    .join('')

  const hasValidTickers = data.tickers.top.some(t => t.base !== 'N/A' && t.market !== 'N/A')

  const linksHTML = []
  if (data.links.homepage[0]) {
    linksHTML.push(`<a href="${data.links.homepage[0]}" target="_blank" class="crypto-link">🏠 Homepage</a>`)
  }
  if (data.links.whitepaper[0]) {
    linksHTML.push(`<a href="${data.links.whitepaper[0]}" target="_blank" class="crypto-link">📄 Whitepaper</a>`)
  }
  data.links.blockchain.slice(0, 2).forEach(link => {
    linksHTML.push(`<a href="${link}" target="_blank" class="crypto-link">⛓️ Explorer</a>`)
  })

  return `
    <div class="crypto-info-container full-info">
      <div class="crypto-header-with-icon">
        <img src="${data.image}" alt="${data.name}" class="coin-icon" />
        <h3>📘 ${data.name}</h3>
      </div>
      
      <div class="crypto-section">
        <h4 class="section-title">📝 Descripción</h4>
        <p class="description-text">${data.description}...</p>
      </div>

      <div class="crypto-section">
        <h4 class="section-title">💵 Precios Actuales</h4>
        <div class="prices-grid">
          ${pricesHTML}
        </div>
      </div>

      ${hasValidTickers ? `
        <div class="crypto-section">
          <h4 class="section-title">📈 Resumen de Tickers</h4>
          <div class="tickers-inline-list">
            ${tickersHTML}
          </div>
          <div class="ticker-stats">
            <div class="stat-inline">
              <span class="stat-label">Precio promedio USD:</span>
              <span class="stat-value">$${data.tickers.avgPriceUsd.toLocaleString()}</span>
            </div>
            <div class="stat-inline">
              <span class="stat-label">Volumen total USD:</span>
              <span class="stat-value">$${data.tickers.totalVolumeUsd.toLocaleString()}</span>
            </div>
          </div>
        </div>
      ` : ''}

      ${linksHTML.length > 0 ? `
        <div class="crypto-section">
          <h4 class="section-title">🔗 Links</h4>
          <div class="links-grid">
            ${linksHTML.join('')}
          </div>
        </div>
      ` : ''}

      <div class="crypto-footer">
        <p>🕐 Última actualización: ${new Date(data.last_updated).toLocaleString('es-AR')}</p>
        <p class="help-text">¿Necesitas más información?</p>
      </div>
    </div>
  `
}

function formatTickersInfo(data: TickersInfoData[]): string {
  const tickersHTML = data
    .map((t, i) => {
      const trustScoreClass = t.trust_score.includes('green') 
        ? 'ticker-stat-value green'
        : 'ticker-stat-value red'
      
      const trustIcon = t.trust_score.includes('green') ? '✅' : '⚠️'
      
      return `
      <div class="ticker-card-enhanced">
        <div class="ticker-rank-badge-top">#${i + 1}</div>
        
        <div class="ticker-card-header-enhanced">
          <div class="ticker-pair-section">
            <div class="ticker-pair-main">${t.base}/${t.target}</div>
            <div class="ticker-market-badge">${t.market}</div>
          </div>
        </div>
        
        <div class="ticker-card-body-enhanced">
          <div class="ticker-stat-enhanced highlight">
            <div class="stat-icon-wrapper">💰</div>
            <div class="stat-content-wrapper">
              <span class="stat-label-enhanced">Último Precio</span>
              <span class="stat-value-enhanced price">$${t.last.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 8 })}</span>
            </div>
          </div>
          
          <div class="ticker-stat-enhanced">
            <div class="stat-icon-wrapper">📊</div>
            <div class="stat-content-wrapper">
              <span class="stat-label-enhanced">Volumen 24h</span>
              <span class="stat-value-enhanced">${t.volume.toLocaleString('en-US', { maximumFractionDigits: 2 })}</span>
            </div>
          </div>
          
          <div class="ticker-stat-enhanced">
            <div class="stat-icon-wrapper">${trustIcon}</div>
            <div class="stat-content-wrapper">
              <span class="stat-label-enhanced">Trust Score</span>
              <span class="${trustScoreClass}">${t.trust_score}</span>
            </div>
          </div>
        </div>
        
        <div class="ticker-card-footer-enhanced">
          <a href="${t.trade_url}" target="_blank" class="ticker-link-enhanced">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            Ir al Exchange
          </a>
        </div>
      </div>
    `
    })
    .join('')

  return `
    <div class="crypto-info-container tickers-info-wrapper">
      <div class="tickers-header-wrapper">
        <div class="tickers-header-icon">📈</div>
        <div class="tickers-header-content">
          <h3>Top ${data.length} Tickers por Volumen</h3>
          <p>Los pares de trading más activos del mercado</p>
        </div>
      </div>
      <div class="tickers-grid-enhanced">
        ${tickersHTML}
      </div>
    </div>
  `
}

function formatExchanges(data: ExchangeData[]): string {
  const exchangesHTML = data
    .map((ex) => {
      const fullStars = Math.floor(ex.trust_score / 2)
      const hasHalfStar = ex.trust_score % 2 !== 0
      const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)
      
      const starsHTML = `
        ${'<span class="trust-star star-filled">★</span>'.repeat(fullStars)}
        ${hasHalfStar ? '<span class="trust-star star-filled">☆</span>' : ''}
        ${'<span class="trust-star star-empty">☆</span>'.repeat(emptyStars)}
      `
      
      const volumeBTC = ex.trade_volume_24h_btc
      const volumeFormatted = volumeBTC >= 1000 
        ? `${(volumeBTC / 1000).toFixed(2)}K`
        : volumeBTC.toFixed(2)
      
      return `
        <div class="exchange-card">
          <div class="exchange-card-header">
            <div class="exchange-logo-wrapper">
              ${ex.image 
                ? `<img src="${ex.image}" alt="${ex.name}" class="exchange-logo" onerror="this.style.display='none';this.nextElementSibling.style.display='block';" />
                   <span class="exchange-logo-fallback" style="display: none;">${ex.name.substring(0, 2).toUpperCase()}</span>`
                : `<span class="exchange-logo-fallback">${ex.name.substring(0, 2).toUpperCase()}</span>`
              }
            </div>
            
            <div class="exchange-info">
              <div class="exchange-name-row">
                <span class="exchange-name">${ex.name}</span>
                <span class="exchange-rank-badge">#${ex.trust_score_rank}</span>
              </div>
              <div class="exchange-country">
                <span>🌍</span>
                <span>${ex.country || 'Global'}</span>
                ${ex.year_established ? `
                  <span class="exchange-year-badge">
                    <span>📅</span>
                    <span>${ex.year_established}</span>
                  </span>
                ` : ''}
              </div>
            </div>
          </div>

          <div class="exchange-card-body">
            ${ex.description ? `
              <p class="exchange-description">${ex.description}</p>
            ` : ''}

            <div class="exchange-stats">
              <div class="exchange-stat">
                <span class="exchange-stat-label">Trust Score</span>
                <div class="exchange-stat-value">
                  <div class="exchange-trust-score">
                    <span style="color: #10b981; font-size: 1.1rem;">${ex.trust_score}</span>
                    <span style="color: #6b7280;">/10</span>
                  </div>
                  <div class="trust-stars">
                    ${starsHTML}
                  </div>
                </div>
              </div>

              <div class="exchange-stat">
                <span class="exchange-stat-label">Vol. 24h (BTC)</span>
                <div class="exchange-stat-value exchange-volume">
                  <span>₿</span>
                  <span>${volumeFormatted}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="exchange-card-footer">
            <a href="${ex.url}" target="_blank" rel="noopener noreferrer" class="exchange-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              Visitar Exchange
            </a>
          </div>
        </div>
      `
    })
    .join('')

  return `
    <div class="crypto-info-container exchanges-container">
      <div class="exchanges-header">
        <div class="exchanges-header-icon">🏦</div>
        <div class="exchanges-header-content">
          <h3>Exchanges Confiables</h3>
          <p>Top ${data.length} exchanges por ranking y volumen</p>
        </div>
      </div>
      
      <div class="exchanges-grid">
        ${exchangesHTML}
      </div>

      <div class="crypto-footer" style="margin-top: 1.5rem;">
        <p>💡 <strong>Tip:</strong> Los exchanges con mayor trust score son generalmente más seguros y confiables.</p>
        <p class="help-text">🔒 Siempre verifica la legitimidad antes de operar en cualquier exchange.</p>
      </div>
    </div>
  `
}

function formatTrending(data: TrendingData): string {
  if (!data || !Array.isArray(data)) {
    console.error('❌ Error en el formato de la respuesta')
    return '<p style="margin: 0; color: #ef4444;">Error: Datos de trending inválidos</p>'
  }

  const coinsHTML = data.map((coin, i) => {
      const hasPositiveChange = coin.change_24h !== null && coin.change_24h >= 0
      const changeIcon = hasPositiveChange ? '📈' : '📉'
      const changeColor = hasPositiveChange ? '#10b981' : '#ef4444'
      
      return `
        <div class="trending-card">
          <div class="trending-rank-badge">#${i + 1}</div>
          
          <div class="trending-card-header">
            <div class="trending-coin-image-wrapper">
              <img 
                src="${coin.image ?? ''}" 
                alt="${coin.name ?? 'coin'}" 
                class="trending-coin-image" 
                onerror="this.style.display='none'"
              />
            </div>

            <div class="trending-coin-info">
              <div class="trending-coin-title">
                <span class="trending-coin-name">${coin.name ?? '—'}</span>
                <span class="trending-coin-symbol">${coin.symbol?.toUpperCase() ?? ''}</span>
              </div>
              <div class="trending-market-rank">
                <span class="rank-label">Market Cap Rank</span>
                <span class="rank-value">#${coin.rank ?? '—'}</span>
              </div>
            </div>
          </div>

          <div class="trending-card-body">
            <div class="trending-price-section">
              <div class="trending-stat">
                <span class="trending-stat-label">💵 Precio USD</span>
                <span class="trending-stat-value trending-price-usd">
                  ${coin.price !== null ? `$${parseFloat(coin.price).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 8 })}` : '—'}
                </span>
              </div>

              <div class="trending-stat">
                <span class="trending-stat-label">₿ Precio BTC</span>
                <span class="trending-stat-value trending-price-btc">
                  ${coin.price_btc !== null ? `₿${coin.price_btc.toFixed(8)}` : '—'}
                </span>
              </div>
            </div>

            <div class="trending-divider"></div>

            <div class="trending-metrics">
              ${coin.market_cap !== null ? `
                <div class="trending-metric-item">
                  <span class="metric-icon">🏦</span>
                  <div class="metric-content">
                    <span class="metric-label">Market Cap</span>
                    <span class="metric-value">${coin.market_cap}</span>
                  </div>
                </div>
              ` : ''}

              ${coin.volume_24h !== null ? `
                <div class="trending-metric-item">
                  <span class="metric-icon">📊</span>
                  <div class="metric-content">
                    <span class="metric-label">Volumen 24h</span>
                    <span class="metric-value">${coin.volume_24h}</span>
                  </div>
                </div>
              ` : ''}

              ${coin.change_24h !== null ? `
                <div class="trending-metric-item trending-change-highlight" style="border-left-color: ${changeColor};">
                  <span class="metric-icon">${changeIcon}</span>
                  <div class="metric-content">
                    <span class="metric-label">Cambio 24h</span>
                    <span class="metric-value" style="color: ${changeColor}; font-weight: 700;">
                      ${coin.change_24h >= 0 ? '+' : ''}${coin.change_24h.toFixed(2)}%
                    </span>
                  </div>
                </div>
              ` : ''}
            </div>

            ${coin.sparkline ? `
              <div class="trending-sparkline">
                <img 
                  src="${coin.sparkline}" 
                  alt="Price trend" 
                  class="sparkline-image"
                  style="filter: ${hasPositiveChange ? 'hue-rotate(0deg)' : 'hue-rotate(200deg)'};"
                />
              </div>
            ` : ''}
          </div>

          ${coin.info ? `
            <div class="trending-card-footer">
              <div class="trending-info-badge">ℹ️</div>
              <div class="trending-info-content">
                <strong class="trending-info-title">${coin.info.title ?? ''}</strong>
                <p class="trending-info-description">${coin.info.description ?? ''}</p>
              </div>
            </div>
          ` : ''}
        </div>
      `
    })
    .join('')

  return `
    <div class="crypto-info-container trending-container">
      <div class="trending-header-wrapper">
        <div class="trending-header-icon">
          <span class="fire-icon">🔥</span>
        </div>
        <div class="trending-header-content">
          <h3 class="trending-title">Cryptos en Tendencia</h3>
          <p class="trending-subtitle">
            Las ${data.length} monedas más buscadas ahora mismo
          </p>
        </div>
      </div>

      <div class="trending-grid">
        ${coinsHTML}
      </div>

      <div class="trending-footer">
        <p class="trending-footer-note">
          🔄 Actualizado en tiempo real · Datos de CoinGecko
        </p>
      </div>
    </div>
  `
}

function formatGlobal(data: GlobalData): string {
  const changeColor = data.market_cap_change_percentage_24h_usd >= 0 ? '#10b981' : '#ef4444'
  const changeIcon = data.market_cap_change_percentage_24h_usd >= 0 ? '📈' : '📉'
  const othersPercentage = (100 - data.market_cap_percentage.btc - data.market_cap_percentage.eth).toFixed(2)
  
  return `
    <div class="crypto-info-container global-container">
      <div class="crypto-header global-header">
        <div class="header-icon-large">🌍</div>
        <div>
          <h3>Mercado Crypto Global</h3>
          <p class="header-subtitle">Estado actual del mercado de criptomonedas</p>
        </div>
      </div>

      <div class="global-highlight">
        <div class="global-main-stat">
          <span class="global-main-label">Capitalización Total del Mercado</span>
          <span class="global-main-value">
            $${(data.total_market_cap.usd / 1e12).toFixed(2)}T
          </span>
          <div class="global-change" style="color: ${changeColor};">
            <span>${changeIcon}</span>
            <span>${data.market_cap_change_percentage_24h_usd >= 0 ? '+' : ''}${data.market_cap_change_percentage_24h_usd.toFixed(2)}%</span>
            <span style="font-size: 0.85rem; opacity: 0.8;">(24h)</span>
          </div>
        </div>
      </div>

      <div class="global-stats-grid">
        <div class="global-stat-card">
          <div class="stat-icon">💰</div>
          <div class="stat-content">
            <span class="stat-label">Criptomonedas Activas</span>
            <span class="stat-value">${data.active_cryptocurrencies.toLocaleString()}</span>
          </div>
        </div>

        <div class="global-stat-card">
          <div class="stat-icon">🏦</div>
          <div class="stat-content">
            <span class="stat-label">Mercados</span>
            <span class="stat-value">${data.markets.toLocaleString()}</span>
          </div>
        </div>

        <div class="global-stat-card">
          <div class="stat-icon">📊</div>
          <div class="stat-content">
            <span class="stat-label">Volumen Total — 24h (USD)</span>
            <span class="stat-value">$${(data.total_volume.usd / 1e9).toFixed(2)}B</span>
          </div>
        </div>
        
        <div class="global-stat-card">
          <div class="stat-icon">₿</div>
          <div class="stat-content">
            <span class="stat-label">Market Cap en BTC</span>
            <span class="stat-value">${(data.total_market_cap.btc / 1e6).toFixed(2)}M BTC</span>
          </div>
        </div>
      </div>

      <div class="dominance-section">
        <h4 class="section-title">👑 Dominancia del Mercado</h4>
        <div class="dominance-grid">
          <div class="dominance-card btc">
            <div class="dominance-header">
              <span class="dominance-name">Bitcoin</span>
              <span class="dominance-symbol">BTC</span>
            </div>
            <div class="dominance-bar-container">
              <div class="dominance-bar" style="width: ${data.market_cap_percentage.btc}%; background: linear-gradient(90deg, #f7931a, #ffb84d);"></div>
            </div>
            <span class="dominance-percentage">${data.market_cap_percentage.btc.toFixed(2)}%</span>
          </div>

          <div class="dominance-card eth">
            <div class="dominance-header">
              <span class="dominance-name">Ethereum</span>
              <span class="dominance-symbol">ETH</span>
            </div>
            <div class="dominance-bar-container">
              <div class="dominance-bar" style="width: ${data.market_cap_percentage.eth}%; background: linear-gradient(90deg, #627eea, #8fa5f0);"></div>
            </div>
            <span class="dominance-percentage">${data.market_cap_percentage.eth.toFixed(2)}%</span>
          </div>

          <div class="dominance-card others">
            <div class="dominance-header">
              <span class="dominance-name">Otras</span>
              <span class="dominance-symbol">ALTS</span>
            </div>
            <div class="dominance-bar-container">
              <div class="dominance-bar" style="width: ${othersPercentage}%; background: linear-gradient(90deg, #8b5cf6, #a78bfa);"></div>
            </div>
            <span class="dominance-percentage">${othersPercentage}%</span>
          </div>
        </div>
      </div>

      <div class="crypto-footer">
        <p>🕐 Actualizado: ${new Date(data.updated_at * 1000).toLocaleString('es-AR')}</p>
        <p class="help-text">💡 La dominancia de BTC indica el sentimiento general del mercado</p>
      </div>
    </div>
  `
}

export function renderSidebarContent(summary: any, contentElement: HTMLElement | null): void {
  if (!contentElement || !summary || Object.keys(summary).length === 0) return
  let html = ''


  const coinId = Object.keys(summary)[0]
  const isSimpleInfo = coinId && summary[coinId]?.usd && summary[coinId]?.usd_market_cap
  if (isSimpleInfo) {
    const data = summary[coinId]
    html = `
      <div class="space-y-6">
        <div class="coin-header">
          <div>
            <h3 class="coin-name">${data.name || coinId}</h3>
            <p class="coin-symbol">${coinId.toUpperCase()}</p>
          </div>
        </div>

        <div class="price-card">
          <p class="price-label">Precio Actual</p>
          <p class="price-value">${data.usd.toLocaleString()}</p>
          ${data.usd_24h_change ? `
            <div class="price-change ${data.usd_24h_change >= 0 ? 'positive' : 'negative'}">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="${data.usd_24h_change >= 0 ? '23 6 13.5 15.5 8.5 10.5 1 18' : '1 18 10.5 8.5 15.5 13.5 23 6'}"></polyline>
                <polyline points="${data.usd_24h_change >= 0 ? '17 6 23 6 23 12' : '17 18 23 18 23 12'}"></polyline>
              </svg>
              <span class="price-change-value">${data.usd_24h_change >= 0 ? '+' : ''}${data.usd_24h_change.toFixed(2)}%</span>
              <span>24h</span>
            </div>
          ` : ''}
        </div>

        <div class="grid-2">
          <div class="stat-card">
            <p class="stat-label">Market Cap</p>
            <p class="stat-value">${(data.usd_market_cap / 1e9).toFixed(2)}B</p>
          </div>
          <div class="stat-card">
            <p class="stat-label">Volumen 24h</p>
            <p class="stat-value">${(data.usd_24h_vol / 1e9).toFixed(2)}B</p>
          </div>
        </div>

        <div class="info-card">
          <h4 class="info-title">Cambios de Precio</h4>
          <div class="data-row">
            <span class="data-label">24 horas</span>
            <span class="data-value ${data.usd_24h_change >= 0 ? 'positive' : 'negative'}">${data.usd_24h_change >= 0 ? '+' : ''}${data.usd_24h_change.toFixed(2)}%</span>
          </div>
        </div>

        ${data.last_updated_at ? `
          <div class="info-footer">
            <p style="font-size: 0.85rem; color: #6b7280; margin: 0;">
              🕐 Última actualización: ${new Date(data.last_updated_at * 1000).toLocaleString('es-AR')}
            </p>
          </div>
        ` : ''}
      </div>
    `
  } else if (summary.current_price || summary.market_data?.current_price) {
    const data = summary.market_data ? summary : { market_data: summary }
    
    const currentPrice = isSimpleInfo 
      ? summary.current_price.usd 
      : (data.market_data?.current_price?.usd || data.current_price?.usd || 0)
    
    const priceChange24h = isSimpleInfo
      ? summary.market_data.price_change_percentage_24h
      : data.market_data?.price_change_percentage_24h
    
    const marketCap = isSimpleInfo
      ? summary.market_data.market_cap.usd
      : data.market_data?.market_cap?.usd
    
    const totalVolume = isSimpleInfo
      ? summary.market_data.total_volume.usd
      : data.market_data?.total_volume?.usd
    
    html = `
      <div class="space-y-6">
        <div class="coin-header">
          ${summary.image ? `<img src="${summary.image}" alt="${summary.name || 'Crypto'}" class="coin-image" />` : ''}
          <div>
            <h3 class="coin-name">${summary.name || 'Cryptocurrency'}</h3>
            <p class="coin-symbol">${(summary.symbol || 'N/A').toUpperCase()}</p>
          </div>
        </div>

        <div class="price-card">
          <p class="price-label">Precio Actual</p>
          <p class="price-value">$${currentPrice.toLocaleString()}</p>
          ${priceChange24h ? `
            <div class="price-change ${priceChange24h >= 0 ? 'positive' : 'negative'}">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="${priceChange24h >= 0 ? '23 6 13.5 15.5 8.5 10.5 1 18' : '1 18 10.5 8.5 15.5 13.5 23 6'}"></polyline>
                <polyline points="${priceChange24h >= 0 ? '17 6 23 6 23 12' : '17 18 23 18 23 12'}"></polyline>
              </svg>
              <span class="price-change-value">${priceChange24h >= 0 ? '+' : ''}${priceChange24h.toFixed(2)}%</span>
              <span>24h</span>
            </div>
          ` : ''}
        </div>

        ${marketCap || totalVolume ? `
          <div class="grid-2">
            ${marketCap ? `
              <div class="stat-card">
                <p class="stat-label">Market Cap</p>
                <p class="stat-value">$${(marketCap / 1e9).toFixed(2)}B</p>
              </div>
            ` : ''}
            ${totalVolume ? `
              <div class="stat-card">
                <p class="stat-label">Volumen 24h</p>
                <p class="stat-value">$${(totalVolume / 1e9).toFixed(2)}B</p>
              </div>
            ` : ''}
          </div>
        ` : ''}

        ${priceChange24h ? `
          <div class="info-card">
            <h4 class="info-title">Cambios de Precio</h4>
            <div class="data-row">
              <span class="data-label">24 horas</span>
              <span class="data-value ${priceChange24h >= 0 ? 'positive' : 'negative'}">${priceChange24h >= 0 ? '+' : ''}${priceChange24h.toFixed(2)}%</span>
            </div>
            ${data.market_data?.price_change_percentage_7d ? `
              <div class="data-row">
                <span class="data-label">7 días</span>
                <span class="data-value ${data.market_data.price_change_percentage_7d >= 0 ? 'positive' : 'negative'}">${data.market_data.price_change_percentage_7d >= 0 ? '+' : ''}${data.market_data.price_change_percentage_7d.toFixed(2)}%</span>
              </div>
            ` : ''}
            ${data.market_data?.price_change_percentage_30d ? `
              <div class="data-row">
                <span class="data-label">30 días</span>
                <span class="data-value ${data.market_data.price_change_percentage_30d >= 0 ? 'positive' : 'negative'}">${data.market_data.price_change_percentage_30d >= 0 ? '+' : ''}${data.market_data.price_change_percentage_30d.toFixed(2)}%</span>
              </div>
            ` : ''}
          </div>
        ` : ''}

        ${summary.description?.en ? `
          <div class="info-card">
            <h4 class="info-title">Descripción</h4>
            <p class="info-text">${summary.description.en}</p>
          </div>
        ` : ''}

        ${summary.links?.homepage?.[0] || summary.links?.whitepaper ? `
          <div class="info-card">
            <h4 class="info-title">Enlaces Oficiales</h4>
            <div class="link-list">
              ${summary.links.homepage?.[0] ? `
                <a href="${summary.links.homepage[0]}" target="_blank" rel="noopener noreferrer" class="link-item">🌐 Sitio Web Oficial</a>
              ` : ''}
              ${summary.links.whitepaper ? `
                <a href="${summary.links.whitepaper}" target="_blank" rel="noopener noreferrer" class="link-item">📄 Whitepaper</a>
              ` : ''}
            </div>
          </div>
        ` : ''}

        ${summary.last_updated_at ? `
          <div class="info-footer">
            <p style="font-size: 0.85rem; color: #6b7280; margin: 0;">
              🕐 Última actualización: ${new Date(summary.last_updated_at * 1000).toLocaleString('es-AR')}
            </p>
          </div>
        ` : ''}
      </div>
    `
  }

  contentElement.innerHTML = html
}

export function renderGraphContent(graphData: GraphDataPoint[], contentElement: HTMLElement | null): void {
  if (!contentElement || !graphData || graphData.length === 0) return


  const chartId = `chart-${Date.now()}`
  
  const html = `
    <div class="space-y-6">
      <div class="coin-header">
        <h3 class="coin-name">📊 Gráfico</h3>
      </div>

      <div class="chart-tabs">
        <button class="chart-tab active" data-chart="price">Precio</button>
        <button class="chart-tab" data-chart="market_cap">Market Cap</button>
        <button class="chart-tab" data-chart="volume">Volumen</button>
      </div>

      <div class="chart-container">
        <canvas id="${chartId}"></canvas>
      </div>

      <div class="chart-stats">
        <div class="stat-card">
          <p class="stat-label">Precio Actual</p>
          <p class="stat-value">$${graphData[graphData.length - 1].price.toLocaleString()}</p>
        </div>
        <div class="stat-card">
          <p class="stat-label">Variación</p>
          <p class="stat-value ${graphData[graphData.length - 1].price >= graphData[0].price ? 'positive' : 'negative'}">
            ${((graphData[graphData.length - 1].price - graphData[0].price) / graphData[0].price * 100).toFixed(2)}%
          </p>
        </div>
      </div>

      <div class="info-footer">
        <p style="font-size: 0.85rem; color: #6b7280; margin: 0;">
          🕐 Última actualización: ${new Date(graphData[graphData.length - 1].timestamp).toLocaleString('es-AR')}
        </p>
      </div>
    </div>
  `

  contentElement.innerHTML = html
  
  setTimeout(() => {
    initializeChart(chartId, graphData)
  }, 100)
}

function initializeChart(chartId: string, graphData: GraphDataPoint[]): void {
  const canvas = document.getElementById(chartId) as HTMLCanvasElement
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const labels = graphData.map(d => new Date(d.timestamp).toLocaleDateString('es-AR', { 
    month: 'short', 
    day: 'numeric',
    hour: '2-digit'
  }))
  
  const priceData = graphData.map(d => d.price)
  const marketCapData = graphData.map(d => d.market_cap)
  const volumeData = graphData.map(d => d.total_volume)

  // @ts-ignore 
  const chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [{
        label: 'Precio (USD)',
        data: priceData,
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
        fill: true,
        pointRadius: 3,
        pointHoverRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: 'top'
        },
        tooltip: {
          mode: 'index',
          intersect: false,
          callbacks: {
            label: function(context: any) {
              let label = context.dataset.label || ''
              if (label) {
                label += ': '
              }
              if (context.parsed.y !== null) {
                label += '$' + context.parsed.y.toLocaleString()
              }
              return label
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: false,
          ticks: {
            callback: function(value: any) {
              return '$' + value.toLocaleString()
            }
          }
        }
      }
    }
  })

  const tabs = document.querySelectorAll('.chart-tab')
  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      const target = e.currentTarget as HTMLElement
      const chartType = target.dataset.chart
      
      tabs.forEach(t => t.classList.remove('active'))
      target.classList.add('active')
      
      let newData: number[] = []
      let label = ''
      let color = ''
      
      switch(chartType) {
        case 'price':
          newData = priceData
          label = 'Precio (USD)'
          color = '#3b82f6'
          break
        case 'market_cap':
          newData = marketCapData
          label = 'Market Cap (USD)'
          color = '#10b981'
          break
        case 'volume':
          newData = volumeData
          label = 'Volumen (USD)'
          color = '#f59e0b'
          break
      }
      
      chart.data.datasets[0].data = newData
      chart.data.datasets[0].label = label
      chart.data.datasets[0].borderColor = color
      chart.data.datasets[0].backgroundColor = color + '20'
      chart.update()
    })
  })
}