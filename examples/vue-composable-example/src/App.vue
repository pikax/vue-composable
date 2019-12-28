<template>
  <div id="app">
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/arrayPagination">Array Pagination</router-link>
        </li>
        <li>
          <router-link to="/fetch">Fetch</router-link>
        </li>
        
        <li>
          <router-link to="/cancellablePromise">Cancellable Promise</router-link>
        </li>

        
        <li>
          <router-link to="/SWAPI">SWAPI</router-link>
        </li>

        <li>
          {{a}}
        </li>

      </ul>
      <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Fetch from './components/Fetch';

export default {
  name: "App",
  components: {
    HelloWorld,
    Fetch
  },

  setup (){
    return {
      a: 2
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
