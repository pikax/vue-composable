# @vue-composable/core

<!-- [![npm version](https://badge.fury.io/js/%40vue-composable%2Fcore.svg)](https://badge.fury.io/js/%40vue-composable%2Fcore) -->
[![bundle size](https://badgen.net/bundlephobia/minzip/@vue-composable/core@next)](https://bundlephobia.com/result?p=@vue-composable/core@next)

This package contains core functionality for [vue-composable][vue-composable]

# Vue 3

This version is `alpha` with support for the vue3 ([vue-next](https://github.com/vuejs/vue-next))

> Check webpack [vue3 example](https://github.com/pikax/vue-composable/tree/vue3/examples/vue-next-webpack-preview-master) or [CodeSandbox](https://codesandbox.io/s/vue-composable-next-6m5et)

## Installing

```bash
# install with yarn
yarn add vue@next @vue-composable/core@next

# install with npm
npm install vue@next @vue-composable/core@next
```

## Documentation

Check our [documentation](https://pikax.me/vue-composable/)

## Functionality

### Date

- [useNow][now] : Return reactive custom timer with specified refresh rate
- [useDateNow][date-now] : Returns reactive `Date.now()` with custom refresh rate
- [usePerformanceNow][performance-now] : Returns reactive `performance.now()` with custom refresh rate

### Pagination

- [usePagination][pagination] : Provides framework to implement reactive pagination
- [useArrayPagination][array-pagination] : Uses [usePagination][pagination] to paginate an array

### Format

- [format][format] - Reactive string format

## Promise

- [usePromise][promise] : Handles promise states
- [useCancellablePromise][cancellable-promise] : Uses [usePromise][promise] and prevent setting `result` if canceled
- [useRetry][retry] : Allows to retry if a promise throws an exception

## General

- [useDebounce][debounce]: debounce functionality

[vue-composable]: https://github.com/pikax/vue-composable

<!-- TODO SET CORRECT url -->

[now]: https://pikax.me/vue-composable/composable/date/now
[date-now]: https://pikax.me/vue-composable/composable/date/dateNow
[performance-now]: https://pikax.me/vue-composable/composable/date/performanceNow
[pagination]: https://pikax.me/vue-composable/composable/pagination/pagination
[array-pagination]: https://pikax.me/vue-composable/composable/pagination/arrayPagination
[promise]: https://pikax.me/vue-composable/composable/promise/promise
[retry]: https://pikax.me/vue-composable/composable/promise/retry
[cancellable-promise]: https://pikax.me/vue-composable/composable/promise/cancellablePromise
[debounce]: https://github.com/pikax/vue-composable
[format]: https://github.com/pikax/vue-composable/format/format

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b feat/new-composable`
3. Commit your changes: `git commit -am 'feat(composable): add a new composable'`
4. Push to the branch: `git push origin feat/new-composable`
5. Submit a pull request

## License

[MIT](http://opensource.org/licenses/MIT)
