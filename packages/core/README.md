# @vue-composable/core

[![npm version](https://badge.fury.io/js/%40vue-composable%2Fcore.svg)](https://badge.fury.io/js/%40vue-composable%2Fcore)
[![bundle size](https://badgen.net/bundlephobia/minzip/@vue-composable/core)](https://bundlephobia.com/result?p=@vue-composable/core)

This package contains core functionality for [vue-composable][vue-composable]

# vue-next

> For [vue-next](https://github.com/vuejs/vue-next) support please check [@next](https://www.npmjs.com/package/@vue-composable/core/v/next)

## Installing

```bash
# install with yarn
yarn add @vue/composition-api @vue-composable/core

# install with npm
npm install @vue/composition-api @vue-composable/core
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

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b feat/new-composable`
3. Commit your changes: `git commit -am 'feat(composable): add a new composable'`
4. Push to the branch: `git push origin feat/new-composable`
5. Submit a pull request

## License

[MIT](http://opensource.org/licenses/MIT)
