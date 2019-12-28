<template>
  <div>
    Visible: {{ isIntersecting }}

    <p>Scroll down</p>

    <div style="height:500px"/>

    <div ref="el" style="background:lightgreen">
      Hide me
    </div>
    
    <p>Scroll up</p>
  </div>
</template>

<script>
import {ref, watch, reactive} from '@vue/composition-api';
import {useIntersectionObserver} from 'vue-composable';

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