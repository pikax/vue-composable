# @vue-composable/web

[![npm version](https://badge.fury.io/js/%40vue-composable%2Fweb.svg)](https://badge.fury.io/js/%40vue-composable%2Fweb)

This package contains [Web API](https://developer.mozilla.org/en-US/docs/Web/Reference/API)

# Vue 3

This version is `alpha` with support for the vue3 ([vue-next](https://github.com/vuejs/vue-next))

> Check webpack [vue3 example](https://github.com/pikax/vue-composable/tree/vue3/examples/vue-next-webpack-preview-master) or [CodeSandbox](https://codesandbox.io/s/vue-composable-next-6m5et)

## Installing

```bash
# install with yarn
yarn add vue@next @vue-composable/web@next

# install with npm
npm install vue@next @vue-composable/web@next
```

## Documentation

Check our [documentation](https://pikax.me/vue-composable/)

### Event

- [Event](https://pikax.me/vue-composable/composable/event/event) - Attach event listener to a DOM element
- [Mouse Move](https://pikax.me/vue-composable/composable/event/onMoveMove) - Attach `mousemove` listener to a DOM element
- [Resize](https://pikax.me/vue-composable/composable/event/onResize) - Attach `resize` listener to a DOM element
- [Scroll](https://pikax.me/vue-composable/composable/event/onScroll) - Attach `scroll` listener to a DOM element

### MISC

- [matchMedia](https://pikax.me/vue-composable/composable/misc/matchMedia) - Reactive `matchMedia`
- [breakpoint](https://pikax.me/vue-composable/composable/misc/breakpoint) - reactive `breakpoints` based on `window.innerWidth`

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

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b feat/new-composable`
3. Commit your changes: `git commit -am 'feat(composable): add a new composable'`
4. Push to the branch: `git push origin feat/new-composable`
5. Submit a pull request

## License

[MIT](http://opensource.org/licenses/MIT)
