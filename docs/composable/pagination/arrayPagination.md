# ArrayPagination

Paginates array, if the array changes size, it will handle the update

## State

The `useArrayPagination` function exposes the following reactive state:

```js
import { useArrayPagination } from "vue-composable";

const {
  pageSize,
  total,
  currentPage,
  offset,
  lastPage,
  result
} = useArrayPagination();
```

| State       | Type     | Description                                   |
| ----------- | -------- | --------------------------------------------- |
| pageSize    | `Number` | Current page size, allows to set the pageSize |
| total       | `Number` | Total elements                                |
| currentPage | `Number` | Current page                                  |
| offset      | `Number` | Current page offset from the beginning        |
| lastPage    | `Number` | Last page number                              |
| result      | `Array`  | Current page items                            |

## Methods

The `useArrayPagination` function exposes the following methods:

```js
import { useArrayPagination } from "vue-composable";

const { next, prev, first, last } = useArrayPagination();
```

| Signature | Description                   |
| --------- | ----------------------------- |
| `next()`  | Increments currentPage        |
| `prev()`  | Decrements currentPage        |
| `first()` | Sets currentPage to `1`       |
| `last()`  | Sets currentPage = `lastPage` |

## Example


<array-pagination-example/>


### Code

```vue
<template>
  <div>
    <p>page {{ currentPage }} of {{ lastPage }}</p>
    <p>
      <button @click="prev">prev</button>
      <button @click="next">next</button>
    </p>
    <ul>
      <li v-for="n in result" :key="n">
        {{ n }}
      </li>
    </ul>
  </div>
</template>

<script>
import { useArrayPagination } from "vue-composable";

export default {
  name: "array-pagination-example",
  setup() {
    const array = new Array(1000).fill(0).map((_, i) => i);
    const { result, next, prev, currentPage, lastPage } = useArrayPagination(
      array,
      {
        pageSize: 3
      }
    );

    return { result, next, prev, currentPage, lastPage };
  }
};
</script>
```
