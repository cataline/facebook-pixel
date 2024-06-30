import { setupFbq } from '@/setupFbq'
import { FacebookPixelOptions, FacebookPixelEvent } from '@/types'

class FacebookPixel {
  private pixelIds: string[] = []
  private autoPageView: boolean = true

  init({ pixelIds, autoPageView = true }: FacebookPixelOptions) {
    setupFbq()

    this.pixelIds = pixelIds
    this.autoPageView = autoPageView

    this.pixelIds.forEach((pixelId) => window.fbq('init', pixelId))

    if (this.autoPageView) {
      window.fbq('track', 'PageView')
    }
  }

  track(event: FacebookPixelEvent, params?: Record<string, any>, eventID?: string) {
    const eventOptions = eventID ? { eventID } : undefined

    this.pixelIds.forEach((pixelId) => {
      window.fbq('trackSingle', pixelId, event, params, eventOptions)
    })
  }

  trackCustom(event: string, params?: Record<string, any>, eventID?: string) {
    const eventOptions = eventID ? { eventID } : undefined

    this.pixelIds.forEach((pixelId) => {
      window.fbq('trackSingleCustom', pixelId, event, params, eventOptions)
    })
  }
}

export const facebookPixel = new FacebookPixel()
