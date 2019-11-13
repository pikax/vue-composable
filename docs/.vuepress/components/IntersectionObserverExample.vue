<template>
  <div>
    {{ isIntersecting }}
    test

    <div ref="el">
      Element
    </div>
  </div>
</template>

<script>
import {ref, watch, reactive} from '@vue/composition-api';
import {useIntersectionObserver} from '../../../';

export default {
  name: "intersection-observer-example",
  setup(){
    const el = ref(null);
    const o = useIntersectionObserver(el);
    return {
      ...o,
      el
    }
  }
}
</script>