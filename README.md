# Facebook Pixel

> JavaScript library for [Facebook's Pixel](https://developers.facebook.com/docs/meta-pixel/get-started/) tracking

This library enables Facebook Pixel tracking in your **client-side** application with full **TypeScript** support.

## Install

```bash
npm install @cataline/facebook-pixel
```

## Usage

Configure Facebook Pixel at the start of your application and enjoy seamless tracking.

```ts
import { facebookPixel } from '@cataline/facebook-pixel'

facebookPixel.init({
  pixelIds: ['PIXEL_ID', 'PIXEL_ID'],
  autoPageView: true, // optional, defaults to true
})
```

## Track Standard Events

Easily track standard events such as leads and purchases.

```ts
// Track a Lead event
facebookPixel.trackEvent({ name: 'Lead' })

// Track a Purchase event with additional parameters
facebookPixel.trackEvent({
  name: 'Purchase',
  params: {
    value: 100,
    currency: 'USD',
  },
})
```

For a complete list of standard events, refer to the [Facebook documentation](https://en-gb.facebook.com/business/help/402791146561655?id=1205376682832142).

## Track Custom Events

You can also track custom events tailored to your needs.

```ts
// Track a custom event
facebookPixel.trackEventCustom({
  name: 'ProductView',
  params: {
    productId: '123',
  },
})
```

Explore custom event tracking in the [Facebook documentation](https://developers.facebook.com/docs/meta-pixel/implementation/conversion-tracking/?locale=en_US#tracking-custom-events).

## Event Deduplication

Avoid duplicate events effortlessly.

```ts
// Track a Lead event with deduplication
facebookPixel.trackEvent({ name: 'Lead', id: 'unique-id' })
```

Understand event deduplication better through the [Facebook documentation](https://developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events?locale=en_US).

## License

This project is licensed under the MIT License.
