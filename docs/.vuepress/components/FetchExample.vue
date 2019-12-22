<template>
  <div id="fetch">
    <h3>Using <b>reqres.in</b> API </h3>
    <p>current Id {{id}}</p>
    <p>
      <button @click="id--">prev</button>
      <button @click="id++">next</button>
    </p>
    <p v-if="loading">
        loading...
    </p>
    <div v-else>
        <p> Status: {{status}} </p>
        {{ json }}
    </div>
  </div>
</template>

<script>
import {ref, watch} from '@vue/composition-api';
import {useFetch} from '../../../packages/web';

export default {
  name: "fetch-example",
  setup(){
    const id = ref(1);
    const {json , loading, exec, status} = useFetch();

    watch(id, (id)=>{
        exec('https://reqres.in/api/user/'+id);
    })

    return {
        id,
        json,
        loading,
        status
    }
  }
}
</script>