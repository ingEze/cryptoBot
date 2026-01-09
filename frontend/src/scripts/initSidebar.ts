import type { GraphDataPoint } from "../types/data"
import { renderGraphContent, renderSidebarContent } from "./chatbot"

export function initSidebar(): void {
  const sidebar = document.getElementById('sidebar')
  const sidebarContent = document.getElementById('sidebarContent')
  const closeSidebar = document.getElementById('closeSidebar')
  const chatContainer = document.getElementById('chatContainer')

  function isMobile(): boolean {
    return window.innerWidth <= 768
  }

  function showSidebar(data: any): void {
    if (!sidebar || !sidebarContent) {
      console.error('Elementos del sidebar no encontrados!')
      return
    }

    const isGraph = Array.isArray(data)
    const mobile = isMobile()

    if (mobile && !isGraph) {
      console.log('Móvil detectado - Sidebar deshabilitado para información regular')
      return
    }

    sidebar.classList.add('active')
    if (chatContainer) {
      chatContainer.classList.add('with-sidebar')
    }

    if (isGraph) {
      renderGraphContent(data as GraphDataPoint[], sidebarContent)
    } else {
      renderSidebarContent(data, sidebarContent)
    }
  }

  function hideSidebar(): void {
    sidebar?.classList.remove('active')
    chatContainer?.classList.remove('with-sidebar')
  }

  window.addEventListener('showSidebar', ((e: CustomEvent) => {
    showSidebar(e.detail.summary)
  }) as EventListener)

  closeSidebar?.addEventListener('click', hideSidebar)

  window.addEventListener('resize', () => {
    const mobile = isMobile()
    const sidebarActive = sidebar?.classList.contains('active')

    if (mobile && sidebarActive) {
      const hasGraphContent = sidebarContent?.querySelector('.chart-container')
      if (!hasGraphContent) hideSidebar()
    }
  })
}