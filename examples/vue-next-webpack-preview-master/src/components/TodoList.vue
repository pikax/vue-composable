<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ul>
      <li v-for="todo in todos" :key="todo.id">{{ todo.title }}</li>
    </ul>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";

// type Todo = {
//   id: number;
//   userId: number;
//   title: string;
//   completed: boolean;
// };

// type EventT = {
//   todos: Todo[];
// };

export default {
  setup() {
    const event = reactive({
      todos: []
    });

    async function fetchTodos() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/"
      );
      event.todos = await response.json();
    }

    fetchTodos();

    return { ...toRefs(event) };
  }
};
</script>
