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
import { usePagination } from "../../../packages/core";

export default {
  name: "pagination-example",
  setup() {
    const arrayRef = ref(new Array(100).fill(1).map((_, i) => i));
    // paginate array
    const { currentPage, lastPage, next, prev, offset, pageSize } = usePagination({
      currentPage: 1,
      pageSize: 10,
      total: computed(() => arrayRef.value.length)
    });

    const result = computed(() => {
      const array = arrayRef.value;
      if (!Array.isArray(array)) return [];
      return array.slice(
        offset.value,
        offset.value + pageSize.value
      );
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
