import { setupFbq } from '@/setupFbq'
import { FacebookPixelOptions, trackEventOptions } from '@/types'
import { standardEventNames } from '@/utils'

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

  trackEvent({ name, params, id }: trackEventOptions) {
    const isStandardEvent = (standardEventNames as readonly string[]).includes(name)

    this.pixelIds.forEach((pixelId) => {
      if (isStandardEvent) {
        window.fbq('trackSingle', pixelId, name, params, { eventID: id })
      } else {
        window.fbq('trackSingleCustom', pixelId, name, params, { eventID: id })
      }
    })
  }
}

export const facebookPixel = new FacebookPixel()
