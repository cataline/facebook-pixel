declare global {
  interface Window {
    fbq: any
    _fbq?: any
  }
}

export function setupFbq(): void {
  if (window.fbq) {
    return
  }

  window.fbq = function (...args: any[]): void {
    if (window.fbq.callMethod) {
      window.fbq.callMethod(...args)
    } else {
      window.fbq.queue.push(args)
    }
  }

  window.fbq.queue = []
  window.fbq.loaded = true
  window.fbq.version = '2.0'
  window.fbq.push = window.fbq

  if (!window._fbq) {
    window._fbq = window.fbq
  }

  const scriptTag = 'script'
  const url = 'https://connect.facebook.net/en_US/fbevents.js'
  const existingScript = document.getElementsByTagName(scriptTag)[0]
  const scriptElement = document.createElement(scriptTag)

  scriptElement.async = true
  scriptElement.src = url

  if (existingScript.parentNode) {
    existingScript.parentNode.insertBefore(scriptElement, existingScript)
  }
}
