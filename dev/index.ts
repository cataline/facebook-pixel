import { facebookPixel } from '@/index'

facebookPixel.init({
  pixelIds: ['PIXEL_ID_1', 'PIXEL_ID_2'],
})

facebookPixel.trackEvent({
  name: 'Purchase',
  params: {
    value: 100,
    currency: 'USD',
  },
})
