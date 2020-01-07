<template>
  <div id="SWAPI">
    <p>SWAPI example</p>
    <p>page {{currentPage}} of {{ lastPage }}</p>
    <p>
      <button @click="prev">prev</button>
      <button @click="next">next</button>
    </p>
    <div v-if="loading">
      loading...
    </div>
    <!-- TODO BETTER DISPLAY -->
    <ul v-else>
      <li v-for="(n, i) in items" :key="i + 'r'">
        <ul >
          <li v-for="(k, v) in n" :key="i+v">
            <p>
              <b>{{k}}</b>: 
              <span>{{v}}</span>
            </p>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { usePagination, useFetch } from 'vue-composable';
import { ref, watch, isRef } from 'vue';


function useSWAPI(r){
  const resource = isRef(r) ? r : ref(r);
  const ENDPOINT = `https://swapi.co/api/`;  

  const items = ref([]);
  const {json , loading, exec, status} = useFetch();

  const pagination = usePagination({
    currentPage: 1,
    pageSize: 10, // default size
  });

  watch(json, (json)=>{
    pagination.total.value = json.count;
    
    items.value = json.results;
  }, {
    lazy: true
  });

  watch([pagination.currentPage, resource], ()=>{
    exec(`${ENDPOINT}${resource.value}/?page=`+pagination.currentPage.value);
  })
  
  return {
    ...pagination,
    exec,
    items,
    loading,
    status
  }
}

export default {

  setup(){
    const swapi = useSWAPI('people');

    return swapi;
  }
}
</script>
