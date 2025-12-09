import type { ExchangeData, FullInfoData, MarketInfoData, SimpleInfoData, StructuredResponse, TickersInfoData, TokenInfoData } from "../types/chatbot"
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
    } catch {
      formattedContent = `<p style="margin: 0;">${text}</p>`
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
        <h3>📌 Información de ${data.name}</h3>
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

function formatTokenInfo(data: TokenInfoData): string {
  return `
    <div class="crypto-info-container">
      <div class="crypto-header">
        <h3>🔍 Token Info</h3>
      </div>
      <div class="info-grid">
        <div class="info-item">
          <span class="info-label">ID</span>
          <span class="info-value">${data.id}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Symbol</span>
          <span class="info-value">${data.symbol.toUpperCase()}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Name</span>
          <span class="info-value">${data.name}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Precio actual</span>
          <span class="info-value">$${data.current_price_usd.toLocaleString()}</span>
        </div>
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
    .map((t, i) => `
      <div class="ticker-card">
        <div class="ticker-card-header">
          <span class="ticker-rank">#${i + 1}</span>
          <span class="ticker-pair-bold">${t.base}/${t.target}</span>
          <span class="ticker-market">${t.market}</span>
        </div>
        <div class="ticker-card-body">
          <div class="ticker-stat">
            <span class="ticker-stat-label">💵 Último:</span>
            <span class="ticker-stat-value">$${t.last.toLocaleString()}</span>
          </div>
          <div class="ticker-stat">
            <span class="ticker-stat-label">📊 Volumen:</span>
            <span class="ticker-stat-value">${t.volume.toLocaleString()}</span>
          </div>
          <div class="ticker-stat">
            <span class="ticker-stat-label">🎯 Trust:</span>
            <span class="ticker-stat-value">${t.trust_score}</span>
          </div>
        </div>
        <a href="${t.trade_url}" target="_blank" class="ticker-link">🔗 Ver exchange</a>
      </div>
    `)
    .join('')

  return `
    <div class="crypto-info-container">
      <div class="crypto-header">
        <h3>📈 Top ${data.length} Tickers por Volumen</h3>
      </div>
      <div class="tickers-grid">
        ${tickersHTML}
      </div>
    </div>
  `
}

function formatExchanges(data: ExchangeData[]): string {
  const exchangesHTML = data
    .map(ex => `
      <div class="exchange-item">
        <span class="exchange-name">• ${ex.name}</span>
        <span class="exchange-rank">Trust Rank: ${ex.trust_rank}</span>
      </div>
    `)
    .join('')

  return `
    <div class="crypto-info-container">
      <div class="crypto-header">
        <h3>🏦 Exchanges Soportados</h3>
      </div>
      <div class="exchanges-list">
        ${exchangesHTML}
      </div>
    </div>
  `
}

export function renderSidebarContent(summary: any, contentElement: HTMLElement | null): void {
  console.log({ summary })
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
  console.log({ graphData, contentElement })
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