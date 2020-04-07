# @vue-composable/core

<p align="center"><a href="https://pikax.me/vue-composable/" target="_blank" rel="noopener noreferrer"><img width="250" src="https://pikax.me/vue-composable/assets/logo.svg" alt="vue-composable logo"></a></p>

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

### Validation

- [Validation](https://pikax.me/vue-composable/composable/validation/validation) - model based validation inspired by [vuelidate](https://vuelidate.js.org/)

### i18n

- [i18n](https://pikax.me/vue-composable/composable/i18n/i18n) - Simple i18n implementation with API inspired by [vue-i18n](https://github.com/kazupon/vue-i18n)

### Format

- [format][format] - Reactive string format
- [path](https://pikax.me/vue-composable/composable/format/path) - Retrieve object value based on string path

## Promise

- [usePromise][promise] : Handles promise states
- [promiseLazy](https://pikax.me/vue-composable/composable/promise/promiseLazy) - Sugar for [usePromise](https://pikax.me/vue-composable/composable/promise/promise) `lazy:true`
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
