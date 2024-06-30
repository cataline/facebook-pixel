# Facebook Pixel

> JavaScript library for [Facebook's Pixel](https://developers.facebook.com/docs/meta-pixel/get-started/) tracking

This library allows you to configure Facebook Pixel tracking in your **client-side** application, with full **TypeScript** support.

## Install

```bash
npm install @cataline/facebook-pixel
```

## Usage

Set up Facebook Pixel at the start of your application and use it effortlessly throughout.

```ts
import FacebookPixel from '@cataline/facebook-pixel'

FacebookPixel.init({
  pixelIds: ['PIXEL_ID', 'PIXEL_ID'],
  autoPageView: true, // optional, defaults to true
})
```

## Track Standard Events

```ts
// Track a Lead event
FacebookPixel.track('Lead')

// Track a Purchase event with additional parameters
FacebookPixel.track('Purchase', { value: 100, currency: 'USD' })
```

See all standard events in the [Facebook docs](https://en-gb.facebook.com/business/help/402791146561655?id=1205376682832142)

## Track Custom Events

```ts
// Track a custom event
FacebookPixel.trackCustom('ProductView', { productId: '123' })
```

Learn more about custom events in the [Facebook docs](https://developers.facebook.com/docs/meta-pixel/implementation/conversion-tracking/?locale=en_US#tracking-custom-events)

## Event Deduplication

```ts
// Track a Lead event with deduplication
FacebookPixel.track('Lead', {}, 'EVENT_ID')

// Track a Purchase event with parameters and deduplication
FacebookPixel.track('Purchase', { value: 12, currency: 'USD' }, 'EVENT_ID')

// Track a custom event with parameters and deduplication
FacebookPixel.trackCustom('ProductView', { productId: '123' }, 'EVENT_ID')
```

Learn more about event deduplication in the [Facebook docs](https://developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events?locale=en_US)

## License

This project is licensed under the MIT License.
