<template>
  <div>
    <table>
      <tbody>
        <tr>
          <td colspan="2">
            <p>
              Supported:
              <b>{{ supported }}</b>
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <label for="title">Title</label>
          </td>
          <td>
            <input name="title" v-model="data.title" />
          </td>
        </tr>
        <tr>
          <td>
            <label for="text">Text</label>
          </td>
          <td>
            <input name="text" v-model="data.text" />
          </td>
        </tr>
        <tr>
          <td>
            <label for="url">URL</label>
          </td>
          <td>
            <input name="url" v-model="data.url" />
          </td>
        </tr>
        <tr>
          <td>
            <p v-if="canShare(data)">You can share</p>
            <p v-else>Can't share</p>
          </td>
          <td>
            <button @click="share(data)">Share</button>
          </td>
        </tr>
        <tr>
          <td>Shared</td>
          <td>{{ shared }}</td>
        </tr>

        <tr>
          <td>Cancelled</td>
          <td>{{ cancelled }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { useShare } from "vue-composable";
import { defineComponent, reactive } from "@vue/composition-api";

export default defineComponent({
  name: "share-example",
  setup() {
    const data = reactive({
      url: "https://pikax.me/vue-composable",
      text: "Built with ❤️",
      title: "You need to use this, just amazing"
    });

    const { supported, share, canShare, shared, cancelled } = useShare();

    return {
      data,

      supported,
      share,
      canShare,
      shared,
      cancelled
    };
  }
});
</script>
