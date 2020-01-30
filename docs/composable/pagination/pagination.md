# Pagination

Generic pagination control, handles all the pagination logic

## State

The `usePagination` function exposes the following reactive state:

```js
import { usePagination } from "vue-composable";

const { pageSize, total, currentPage, offset, lastPage } = usePagination();
```

| State       | Type     | Description                                   |
| ----------- | -------- | --------------------------------------------- |
| pageSize    | `Number` | Current page size, allows to set the pageSize |
| total       | `Number` | Total elements                                |
| currentPage | `Number` | Current page                                  |
| offset      | `Number` | Current page offset from the beginning        |
| lastPage    | `Number` | Last page number                              |

## Methods

The `usePagination` function exposes the following methods:

```js
import { usePagination } from "vue-composable";

const { next, prev, first, last } = usePagination();
```

| Signature | Description                   |
| --------- | ----------------------------- |
| `next()`  | Increments currentPage        |
| `prev()`  | Decrements currentPage        |
| `first()` | Sets currentPage to `1`       |
| `last()`  | Sets currentPage = `lastPage` |

## Example


<pagination-example/>


### Code

Array pagination

```vue
<template>
  <div>
    <p>page {{ currentPage }} of {{ lastPage }}</p>
    <p>
      <button @click="prev">prev</button>
      <button @click="next">next</button>
    </p>
    <ul>
      <li v-for="n in result" :key="n">{{ n }}</li>
    </ul>
  </div>
</template>

<script>
import { reactive, ref, computed } from "@vue/composition-api";
import { usePagination } from "vue-composable";

export default {
  name: "pagination-example",
  setup() {
    const arrayRef = ref(new Array(100).fill(1).map((_, i) => i));
    // paginate array
    const {
      currentPage,
      lastPage,
      next,
      prev,
      offset,
      pageSize
    } = usePagination({
      currentPage: 1,
      pageSize: 10,
      total: computed(() => arrayRef.value.length)
    });

    const result = computed(() => {
      const array = arrayRef.value;
      if (!Array.isArray(array)) return [];
      return array.slice(offset.value, offset.value + pageSize.value);
    });

    return {
      currentPage,
      lastPage,
      next,
      prev,
      result
    };
  }
};
</script>
```
