# @vue-composable/core

[![npm version](https://badge.fury.io/js/%40vue-composable%2Fcore.svg)](https://badge.fury.io/js/%40vue-composable%2Fcore)

This package contains core functionality for [vue-composable][vue-composable]

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
