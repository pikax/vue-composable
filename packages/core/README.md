# @vue-composable/core

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
- [useDebounce][debounce]: debounce funcionallity



[vue-composable]: https://github.com/pikax/vue-composable

<!-- TODO SET CORRECT url -->
[pagination]: https://github.com/pikax/vue-composable
[array-pagination]: https://github.com/pikax/vue-composable
[promise]: https://github.com/pikax/vue-composable
[retry]: https://github.com/pikax/vue-composable
[cancellable-promise]: https://github.com/pikax/vue-composable
[debounce]: https://github.com/pikax/vue-composable
