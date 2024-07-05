import { standardEventNames } from '@/utils'

export interface FacebookPixelOptions {
  pixelIds: string[]
  autoPageView?: boolean
}

export interface trackEventOptions {
  name: (typeof standardEventNames)[number] | (string & {})
  id?: string
  params?: Record<string, any>
}
