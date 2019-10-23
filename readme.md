# vue-composable

[![CircleCI](https://circleci.com/gh/pikax/vue-composable.svg?style=svg)](https://circleci.com/gh/pikax/vue-composable)
[![Coverage Status](https://coveralls.io/repos/github/pikax/vue-composable/badge.svg?branch=master)](https://coveralls.io/github/pikax/vue-composable?branch=master)

## Introduction

`vue-composable` is out-of-box ready to use [composition-api](https://github.com/vuejs/composition-api) generic components, eg: [useFetch](examples/fetch.html)


## NOTE 
Currently only works with [composition-api](https://github.com/vuejs/composition-api), when [Vue3](https://github.com/vuejs/vue-next) gets release I will update to use the new reactive system (using [@vue/reactivity](https://github.com/vuejs/vue-next/tree/master/packages/reactivity))


| composable | description | example | extra |
|---|---|---|---|
| [useArrayPagination](src/arrayPagination.ts) | provides pagination for an array | [arrayPagination.html](examples/arrayPagination.html) |  |
| [useDebounce](src/debounce.ts) | debounces function |  |  |
| [useEvent](src/event.ts) | handles the lifecycle of addEventListener/removeEventListener for a component. |  |  |
| [useOnMouseMove](src/onMouseMove.ts) | gets data from element `movemove` |  |  |
| [useOnResize](src/onResize.ts) | gets data from element `resize` |  |  |
| [useOnScroll](src/onScroll.ts) | gets data from element `scroll` |  |  |
| [usePagination](src/pagination.ts) | provides pagination controls. *NOTE: base type*  |  |  |
| [usePromise](src/promise.ts) | provides information about the state of the promise |  |  |
| [useFetch](src/fetch.ts) | handles the fetch request | [fetch.html](examples/fetch.html) |  |


## Types




##  License

[MIT](http://opensource.org/licenses/MIT)
