# @vue-composable/web

<p align="center"><a href="https://pikax.me/vue-composable/" target="_blank" rel="noopener noreferrer"><img width="250" src="https://pikax.me/vue-composable/assets/logo.svg" alt="vue-composable logo"></a></p>

[![npm version](https://badge.fury.io/js/%40vue-composable%2Fweb.svg)](https://badge.fury.io/js/%40vue-composable%2Fweb)
[![bundle size](https://badgen.net/bundlephobia/minzip/@vue-composable/web)](https://bundlephobia.com/result?p=@vue-composable/web)

This package contains [Web API](https://developer.mozilla.org/en-US/docs/Web/Reference/API)

# vue-next

> For [vue-next](https://github.com/vuejs/vue-next) support please check [@next](https://www.npmjs.com/package/@vue-composable/web/v/next)

## Installing

```bash
# install with yarn
yarn add @vue/composition-api @vue-composable/web

# install with npm
npm install @vue/composition-api @vue-composable/web
```

## Documentation

Check our [documentation](https://pikax.me/vue-composable/)

### Event

- [Event](https://pikax.me/vue-composable/composable/event/event) - Attach event listener to a DOM element
- [Mouse Move](https://pikax.me/vue-composable/composable/event/onMoveMove) - Attach `mousemove` listener to a DOM element
- [Resize](https://pikax.me/vue-composable/composable/event/onResize) - Attach `resize` listener to a DOM element
- [Scroll](https://pikax.me/vue-composable/composable/event/onScroll) - Attach `scroll` listener to a DOM element

### Breakpoint

- [MatchMedia](https://pikax.me/vue-composable/composable/breakpoint/matchMedia) - reactive `MatchMedia`
- [Breakpoint](https://pikax.me/vue-composable/composable/breakpoint/breakpoint) - reactive `breakpoints` based on `window.innerWidth`
- [Chrome](https://pikax.me/vue-composable/composable/breakpoint/breakpointChrome) - reactive chrome breakpoints
- [TailwindCSS](https://pikax.me/vue-composable/composable/breakpoint/breakpointTailwindCSS) - reactive TailwindCSS breakpoints

### MISC

- [sharedRef](https://pikax.me/vue-composable/composable/misc/sharedRef) - cross-tab reactive `ref`

### Intl

- [numberFormat](https://pikax.me/vue-composable/composable/Intl/numberFormat) - Intl.NumberFormat
- [currencyFormat](https://pikax.me/vue-composable/composable/Intl/currencyFormat) - CurrencyFormat with Intl.NumberFormat

### Storage

- [WebStorage](https://pikax.me/vue-composable/composable/storage/webStorage) - Reactive access to `Storage API`, `useLocalStorage` and `useSessionStorage` use this
- [storage](https://pikax.me/vue-composable/composable/storage/storage) - uses `localStorage` or on safari private it uses `sessionStorage`
- [localStorage](https://pikax.me/vue-composable/composable/storage/localStorage) - Reactive access to a `localStorage`
- [sessionStorage](https://pikax.me/vue-composable/composable/storage/sessionStorage) - Reactive access to a `sessionStorage`

### Web

- [Fetch](https://pikax.me/vue-composable/composable/web/fetch) - reactive `fetch` wrapper
- [WebSocket](https://pikax.me/vue-composable/composable/web/webSocket) - reactive `WebSocket` wrapper
- [IntersectionObserver](https://pikax.me/vue-composable/composable/web/intersectionObserver) - reactive `IntersectionObserver`
- [NetworkInformation](https://pikax.me/vue-composable/composable/web/networkInformation) - reactive `NetworkInformation` wrapper
- [Online](<[composable/web](https://pikax.me/vue-composable/composable/web)/online>) - reactive `navigator.onLine` wrapper
- [PageVisibility](https://pikax.me/vue-composable/composable/web/pageVisibility) - reactive `Page Visibility API`
- [Language](https://pikax.me/vue-composable/composable/web/language) - reactive `NavigatorLanguage`
- [BroadcastChannel](https://pikax.me/vue-composable/composable/web/broadcastChannel) - reactive `BroadcastChannel API`
- [Geolocation API](https://pikax.me/vue-composable/composable/web/geolocation)
- [CSS variables](https://pikax.me/vue-composable/composable/web/cssVariables) - reactive `CSS variables`
- [Worker](https://pikax.me/vue-composable/composable/web/worker) - `Web Worker API`
- [WorkerFunction](https://pikax.me/vue-composable/composable/web/workerFunction) - Webworker Function, offload a function to webworker

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b feat/new-composable`
3. Commit your changes: `git commit -am 'feat(composable): add a new composable'`
4. Push to the branch: `git push origin feat/new-composable`
5. Submit a pull request

## License

[MIT](http://opensource.org/licenses/MIT)
